riot.tag("graphsdkconsole", `
      <div id="graphsdkconsole"></div>
      <div id="consoleresults"></div>
`,
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
          typeRoots: ["node_modules/@microsoft"]
        });

        monaco.languages.registerCompletionItemProvider('typescript', {
         /* provideCompletionItems: function (model, position) {
            return {
              suggestions: createDependencyProposals() // from snippets.js
            }
          }*/
        });

        loadDeclaration().then(function () {

          playground2 = monaco.editor.create(document.getElementById('graphsdkconsole'), {
            model: monaco.editor.createModel(
              `/*
  Hit 'ctrl + d' or 'cmd + d' to run the code
*/
import {
  UserAgentApplication,
  Configuration,
  AuthenticationParameters,
} from 'msal'

import {
  MSALAuthenticationProviderOptions,
  ImplicitMSALAuthenticationProvider,
  Client,
  ClientOptions,
} from '@microsoft/microsoft-graph-client'

// wrapping the code inside self-excecuting async function
// enables you to use await expression
(async () => {
  /*
    - If you wish to use your own app (V2) remember to add
        "chrome-extension://ecblfcmjnbbgaojblcpmjoamegpbodhd/app/panel.html"
      as redirectUrl
  */
  const msalConfig: Configuration = {
    auth: {
      clientId: "20d34c96-396e-4bf0-a008-472ef10a5099", // SP Editor azure ad multitenant app
    },
    cache: {
      cacheLocation: 'sessionStorage',
    }
  };

  // scopes needed in your graph query
  const graphScopes = [
    "user.read",
  ];

  const msalApplication = new UserAgentApplication(msalConfig);
  const msalOptions = new MSALAuthenticationProviderOptions(graphScopes);
  const authProvider = new ImplicitMSALAuthenticationProvider(msalApplication, msalOptions);

  const authParams: AuthenticationParameters = {
    scopes: graphScopes,
    prompt: 'select_account',
  };
  /* uncomment to switch account
  await msalApplication.loginPopup(authParams);
  */

  const options: ClientOptions = {
    authProvider,
  };

  const client = Client.initWithMiddleware(options);

  let userDetails = await client.api("/me")
    .select('displayName')
    .get();

  console.log(userDetails)

})().catch(console.log)
`,
              "typescript",
              new monaco.Uri("main2.ts")
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

          playgroundresults = monaco.editor.create(document.getElementById('consoleresults'), {
            model: monaco.editor.createModel(
              `/*
  console.log() will output here
*/
`,
              "text",
              new monaco.Uri("results.ts")
            ),
            language: 'json',
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
            "bracketPairColorization.enabled": true,
          });

          // adds auto-complete for @microsoft & adal module imports
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


          document.getElementById('graphsdkconsole').onclick = function () {
            window.focus()
          };

          document.getElementById('consoleresults').onclick = function () {
            window.focus()
          };

          playground2.onDidChangeModelContent(function (e) {

            this.currentLibs = []

            var codeWithOutComments = playground2.getModel().getValue().replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

            var modifyedLibs = this.getImportModules(codeWithOutComments)
            var modifyedExtraLibs = this.createExtraLibs(modifyedLibs)

            monaco.languages.typescript.typescriptDefaults.setExtraLibs(modifyedExtraLibs);

          }.bind(this));

          var playgroundBinding2 = playground2.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function () {
              try {
                let model = playground2.getModel().getValue();

                var js = ts.transpileModule(playground2.getModel().getValue(), { compilerOptions: { module: ts.ModuleKind.None } });
                var prepnp = 'graph';
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
                    mod = line.indexOf("msal") > -1 ? 0 : mod;
                    mod = line.indexOf("@microsoft/microsoft-graph-client") > -1 ? 1 : mod;
                    mod = mod === -1 && line.indexOf("@pnp/sp") > -1 ? 8 : mod;

                    prepnp.push('var ' + lineRe[1] + ' = modules[' + mod + '];');
                  }
                });

                code.pop(); // remove the last empty line

                var exescript = [
                  'var exescript = function (script) {',
                  '\t var params = arguments;',
                  '\t\t if (typeof SystemJS == "undefined") {',
                  '\t\t\t var s = document.createElement("script");',
                  '\t\t\t s.src = sj;',
                  '\t\t\t s.onload = function () {',
                  '\t\t\t\t script.apply(this, params);',
                  '\t\t\t };',
                  '\t\t\t (document.head || document.documentElement).appendChild(s);',
                  '\t\t }',
                  '\t\t else script.apply(this, params);',
                  '}',
                ].join('\n');

                var execme = [
                  'var execme = function execme() {',
                  '\tPromise.all([SystemJS.import(mod_msal),SystemJS.import(mod_graph_sdk)]).then(function (modules) {',
                  '\t\t' + prepnp.join('\n'),
                  '\t\t// Your code starts here',
                  '\t\t// #####################',
                  '' + code.map(function (e) { return '\t\t\t' + e }).join('\n'),
                  '\t\t// #####################',
                  '\t\t// Your code ends here',
                  '\t});',
                  '};'].join('\n').replace(/console.log/g, 'console.logNew');

                var script = mod_msal + '\n' +
                  mod_graph_sdk + '\n' +
                  sj + '\n\n' +
                  exescript + '\n\n' +
                  execme + '\n\n';

                script += "exescript(execme);";

                console.logNew = console.log;
                console.logNew = function (value) {
                  playgroundresults.setValue(JSON.stringify(value, null, 4));
                  monaco.editor.setModelLanguage(playgroundresults.getModel(), "json");
                };
                eval(script)
              }
              catch (e) {
                console.log(e);
              }
          });

          window.addEventListener('resize', function () {
            playground2.layout();
            playgroundresults.layout();
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
            var imports = content.match(/(import|from).*(@microsoft|msal).*/g)
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
                  exportTexts.push(lib1)
                } else if (lib.startsWith('../../')) {
                  var lib2 = path.substring(0, splitIndex[splitIndex.length - 3] + 1) + lib.substring(6)
                  exportTexts.push(lib2)
                } else if (lib.startsWith('../')) {
                  var lib3 = path.substring(0, splitIndex[splitIndex.length - 2] + 1) + lib.substring(3)
                  exportTexts.push(lib3)
                } else {
                  exportTexts.push(lib)
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
          var codeWithOutComments = playground2.getModel().getValue().replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

          var initModules = this.getImportModules(codeWithOutComments)
          var initExraLibs = this.createExtraLibs(initModules)

          monaco.languages.typescript.typescriptDefaults.setExtraLibs(initExraLibs);

          this.update();

        }.bind(this));

      }.bind(this));

    }.bind(this);

  });
