riot.tag("pnpjsconsole", `
        <div id="pnpjsconsole"></div>`,
  function (opts) {
    this.files = [];
    this.declarations = []
    this.allLibs = []
    this.on("mount", function () {
      this.init();
    });

    this.init = function () {

      require(['vs/editor/editor.main', 'vs/language/typescript/tsWorker'], function () {

        var loadDeclaration = function loadDeclaration() {
          var loadDeclaration = function (path) {
            return new Promise(function (resolve, reject) {
              var request = new XMLHttpRequest();
              request.open('GET', path, true);
              request.onload = function () {
                if (path.endsWith('/index.d.ts')) {
                  var newPath = path.replace('/index.d.ts', '.d.ts')
                  var newContent = `export * from "./${newPath.substring(newPath.lastIndexOf('/') + 1).replace('.d.ts', '')}/index";`
                  this.files.push(newPath)
                  this.declarations.push({ path: newPath, content: newContent })
                }
                this.files.push(path)
                this.declarations.push({ path: path, content: request.responseText })
                resolve();
              }.bind(this);
              request.send();
            }.bind(this));
          }.bind(this);

          return Promise.all(filenames.map(loadDeclaration)

          );
        }.bind(this);

        // validation settings
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: false,
          noSyntaxValidation: false
        });

        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
          target: monaco.languages.typescript.ScriptTarget.ES6,
          allowNonTsExtensions: true,
          moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
          module: monaco.languages.typescript.ModuleKind.CommonJS,
          // noEmit: true,
          typeRoots: ["node_modules/@pnp"]
        });

        monaco.languages.registerCompletionItemProvider('typescript', {
          provideCompletionItems: function (model, position) {
            return {
              suggestions: createDependencyProposals() // from snippets.js
            }
          }
        });

        loadDeclaration().then(function () {

          playground = monaco.editor.create(document.getElementById('pnpjsconsole'), {
            model: monaco.editor.createModel(
              `/*
  Hit 'ctrl + d' or 'cmd + d' to run the code, view console for results
*/
import { sp } from "@pnp/sp/presets/all";

(async () => {

  const web = await sp.web.select("Title")()
  console.log("Web Title: ", web.Title);

})().catch(console.log)

/*
  Before using @pnp/graph, you need to grant needed API permissions
  to 'SharePoint Online Client Extensibility Web Application Principal' AAD Application
  from https://aad.portal.azure.com
*/
import { graph } from "@pnp/graph"
import "@pnp/graph/users"

// wrapping the code inside self-excecuting async function
// enables you to use await expression
(async () => {

  // To be able to load context, the inspected page needs to be a modern page
  const { context } = await (window as any).moduleLoaderPromise
  graph.setup({
      spfxContext: context
  })
  const me = await graph.me();
  console.log(me)

})().catch(console.log)

/*
  SP Editor also supports sp-taxonomy & sp-clientsvc packages
*/
import { taxonomy } from "@pnp/sp-taxonomy"

(async () => {

  const ts = await taxonomy.termStores.get()
  console.log(ts);

})().catch(console.log)

`,
              "typescript",
              new monaco.Uri("main.ts")
            ),
            language: 'typescript',
            lineNumbers: true,
            roundedSelection: true,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: "vs-dark",
            fontSize: 16,
            //glyphMargin: true,
            renderIndentGuides: true,
            suggestOnTriggerCharacters: true,
            showTypeScriptWarnings: false,
            colorDecorators: true,
          });

          // adds auto-complete for @pnp module imports
          monaco.languages.registerCompletionItemProvider('typescript', {
            triggerCharacters: ["@", '/'],
            provideCompletionItems: (model, position) => {
              const textUntilPosition = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
              })

              var importText = textUntilPosition.substring(textUntilPosition.indexOf('@'))
              var moduleDepth = importText.split("/")
              var suggestions = []
              this.files.forEach(file => {
                if (file.indexOf(importText) > -1) {
                  var depthIndex = file.split("/", moduleDepth.length).join("/").length;
                  var importedModule = file.substring(0, depthIndex).replace('.d.ts', '')
                  if (!suggestions.find(o => o.label === importedModule)) {
                    suggestions.push({
                      label: importedModule,
                      insertText: importedModule.replace(importText, ''),
                      kind: monaco.languages.CompletionItemKind.Module,
                    })
                  }
                }
              })
              return {
                suggestions: suggestions
              };
            },
          });


          document.getElementById('pnpjsconsole').onclick = function () {
            window.focus()
          };

          playground.onDidChangeModelContent(function (e) {

            this.currentLibs = []

            var codeWithOutComments = playground.getModel().getValue().replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

            var modifyedLibs = this.getImportModules(codeWithOutComments)
            var modifyedExtraLibs = this.createExtraLibs(modifyedLibs)

            monaco.languages.typescript.typescriptDefaults.setExtraLibs(modifyedExtraLibs);

          }.bind(this));

          var playgroundBinding = playground.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function () {
            try {
              let model = playground.getModel().getValue();

              var js = ts.transpileModule(playground.getModel().getValue(), { compilerOptions: { module: ts.ModuleKind.None } });
              var prepnp = 'pnp';
              console.log(js)
              var lines = js.outputText.split('\n');
              var code = [];
              var prepnp = [];

              lines.forEach(function (line) {
                // remove imports
                if (line.toLowerCase().indexOf('require(') == -1 && line.toLowerCase().indexOf('use strict') == -1 && line.toLowerCase().indexOf('__esmodule') == -1) {
                  code.push(line);
                }
                if (line.toLowerCase().indexOf(' = require') > -1) {
                  // fix imports

                  var lineRe = line.match("var (.*) = require");
                  var mod = -1;
                  mod = line.indexOf("@pnp/common") > -1 ? 0 : mod;
                  mod = line.indexOf("@pnp/config-store") > -1 ? 1 : mod;
                  mod = line.indexOf("@pnp/graph") > -1 ? 2 : mod;
                  mod = line.indexOf("@pnp/logging") > -1 ? 3 : mod;
                  mod = line.indexOf("@pnp/odata") > -1 ? 4 : mod;
                  mod = line.indexOf("@pnp/pnpjs") > -1 ? 5 : mod;
                  mod = line.indexOf("@pnp/sp-addinhelpers") > -1 ? 6 : mod;
                  mod = line.indexOf("@pnp/sp-clientsvc") > -1 ? 7 : mod;
                  mod = line.indexOf("@pnp/sp-taxonomy") > -1 ? 9 : mod;
                  mod = line.indexOf("@pnp/adaljsclient") > -1 ? 10 : mod;
                  mod = mod === -1 && line.indexOf("@pnp/sp") > -1 ? 8 : mod;

                  prepnp.push('var ' + lineRe[1] + ' = modules[' + mod + '];');
                }
              });

              code.pop(); // remove the last empty line

              var exescript = [
                'var exescript = function (script) {',
                '\t var params = arguments;',
                '\t if ( window._spPageContextInfo ) {',

                '\t\t if (typeof SystemJS == "undefined") {',
                '\t\t\t var s = document.createElement("script");',
                '\t\t\t s.src = sj;',
                '\t\t\t s.onload = function () {',
                '\t\t\t\t script.apply(this, params);',
                '\t\t\t };',
                '\t\t\t (document.head || document.documentElement).appendChild(s);',
                '\t\t }',
                '\t\t else script.apply(this, params);',
                '\t }',
                '\t else if ( window.moduleLoaderPromise ) {',
                '\t\t window.moduleLoaderPromise.then(function (e) {',
                '\t\t\t window._spPageContextInfo = e.context._pageContext._legacyPageContext;',
                '\t\t\t if (typeof SystemJS == "undefined") {',
                '\t\t\t\t var s = document.createElement("script");',
                '\t\t\t\t s.src = sj;',
                '\t\t\t\t s.onload = function () {',
                '\t\t\t\t\t  script.apply(this, params);',
                '\t\t\t\t };',
                '\t\t\t\t (document.head || document.documentElement).appendChild(s);',
                '\t\t\t }',
                '\t\t\t else script.apply(this, params);',
                '\t\t\ });',
                '\t }',
                '}',
              ].join('\n');

              var execme = [
                'var execme = function execme() {',
                '\tPromise.all([SystemJS.import(mod_common),SystemJS.import(mod_config),SystemJS.import(mod_graph),SystemJS.import(mod_logging),SystemJS.import(mod_odata),SystemJS.import(mod_pnpjs),SystemJS.import(mod_addin),SystemJS.import(mod_client),SystemJS.import(mod_sp),SystemJS.import(mod_taxonomy),SystemJS.import(mod_adaljs)]).then(function (modules) {',
                '\t\t' + prepnp.join('\n'),
                '\t\t// Your code starts here',
                '\t\t// #####################',
                '' + code.map(function (e) { return '\t\t\t' + e }).join('\n'),
                '\t\t// #####################',
                '\t\t// Your code ends here',
                '\t});',
                '};'].join('\n').replace(/GraphManToken/g, graphmantoken);

              var script = mod_common + '\n' +
                mod_config + '\n' +
                mod_graph + '\n' +
                mod_logging + '\n' +
                mod_odata + '\n' +
                mod_pnpjs + '\n' +
                mod_addin + '\n' +
                mod_client + '\n' +
                mod_sp + '\n' +
                mod_taxonomy + '\n' +
                mod_adaljs + '\n' +
                sj + '\n\n' +
                exescript + '\n\n' +
                execme + '\n\n';

              script += "exescript(execme);";
              console.log(script);
              chrome.devtools.inspectedWindow.eval(script);
            }
            catch (e) {
              console.log(e);
            }
          });

          window.addEventListener('resize', function () {
            playground.layout();
          }.bind(this));

          this.locations = function (substring, string) {
            var a = [], i = -1;
            while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i);
            return a;
          }

          this.resolveFiles = (files) => {
            var resolvedMods = [];
            if (files && files.length > 0) {
              files.forEach(file => {
                var modl = this.declarations.find(mod =>
                  mod.path === file || mod.path === `${file}.d.ts` || mod.path === `${file}/index.d.ts`
                );
                if (modl) {
                  resolvedMods.push(modl);
                }
              });
            }
            return resolvedMods;
          }

          // find all import lines from code
          this.getImportModules = function (content) {
            var importTexts = []
            var imports = content.match(/(import|from).*(@pnp|microsoft).*/g)
            if (imports) {
              imports.forEach(iText => {
                importTexts.push(iText.match(/(["'])(.*?[^\\])\1/g)[0].replace(/\"/g, '').replace(/\'/g, ''))
              })
            }
            return this.resolveFiles([...new Set(importTexts)]);
          }.bind(this);

          this.getExportRows = function (content, path) {
            var libs = content.match(/(\"(\.|@)|'(\.|@)).*\/.*(\"|')/g)
            if (libs) {
              var exportTexts = []
              libs.forEach(eText => {
                var lib = eText.match(/(["'])(.*?[^\\])\1/g)[0].replace(/\"/g, '').replace(/\'/g, '')
                var splitIndex = this.locations('/', path)
                if (lib.startsWith('./')) {
                  var lib1 = path.substring(0, splitIndex[splitIndex.length - 1] + 1) + lib.substring(2)
                  exportTexts.push(lib1.replace('.js', ''))
                } else if (lib.startsWith('../../')) {
                  var lib2 = path.substring(0, splitIndex[splitIndex.length - 3] + 1) + lib.substring(6)
                  exportTexts.push(lib2.replace('.js', ''))
                } else if (lib.startsWith('../')) {
                  var lib3 = path.substring(0, splitIndex[splitIndex.length - 2] + 1) + lib.substring(3)
                  exportTexts.push(lib3.replace('.js', ''))
                } else {
                  exportTexts.push(lib.replace('.js', ''))
                }
              })
              return this.resolveFiles(exportTexts);
            }
            else {
              return []
            }
          }.bind(this);

          this.currentLibs = []

          this.parseLibs = function (filelist) {
            filelist.forEach(function (file) {
              var libs = this.getExportRows(file.content, file.path)
              if (libs && libs.length > 0) {
                var newLibs = libs.filter(d => !this.currentLibs.find(g => d.path === g.path))
                newLibs.forEach(lib => this.currentLibs.push(lib))
                this.parseLibs(newLibs)
              }
            }.bind(this));
            var initLibs = filelist.filter(file => !this.currentLibs.find(lib => file.path === lib.path))
            if (initLibs && initLibs.length > 0) {
              initLibs.forEach(lib => this.currentLibs.push(lib))
            }
          }.bind(this);

          this.createExtraLibs = function (filelist) {
            this.parseLibs(filelist, [])
            var extraLibs = this.currentLibs.map(lib => {
              return { content: lib.content, filePath: lib.path }
            })
            return extraLibs
          }.bind(this)
          var codeWithOutComments = playground.getModel().getValue().replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

          var initModules = this.getImportModules(codeWithOutComments)
          var initExraLibs = this.createExtraLibs(initModules)

          monaco.languages.typescript.typescriptDefaults.setExtraLibs(initExraLibs);

          this.update();

        }.bind(this));

      }.bind(this));

    }.bind(this);

  });
