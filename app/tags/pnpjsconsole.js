riot.tag("pnpjsconsole", `
        <div id="pnpjsconsole"></div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {

      require(['vs/editor/editor.main'], function () {

        var loadDeclaration = function loadDeclaration() {
          var loadDeclaration = function (path) {
            return new Promise(function (resolve, reject) {
              var request = new XMLHttpRequest();
              request.open('GET', path, true);
              request.onload = function () {
                monaco.languages.typescript.typescriptDefaults.addExtraLib(request.responseText, path);
                resolve();
              };
              request.send();
            });
          };

          return Promise.all(filenames.map(loadDeclaration)

          );
        };

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
          noEmit: true,
          typeRoots: ["node_modules/@pnp"]
        });

/*
        monaco.languages.registerCompletionItemProvider('typescript', {
          provideCompletionItems: function (model, position) {
            return createDependencyProposals(); // from snippets.js
          }
        });
*/

        loadDeclaration().then(function () {

          playground = monaco.editor.create(document.getElementById('pnpjsconsole'), {
            model: monaco.editor.createModel(
`// hit CTRL + D to run the code, view console for results

// using @pnp/sp
import { sp } from "@pnp/sp";
sp.web.select("Title").get().then(w => {
    console.log("Web Title: " + w.Title);
});

// using @pnp/pnpjs
import pnp from "@pnp/pnpjs";
pnp.sp.web.get().then(w => {
    console.log(JSON.stringify(w, null, 4));
});

// using @pnp/common
import { Util } from "@pnp/common";
console.log(Util.getGUID());

// using @pnp/logging
import { Logger, LogLevel, ConsoleListener } from "@pnp/logging";
Logger.subscribe(new ConsoleListener());
Logger.activeLogLevel = LogLevel.Verbose;
Logger.write("This is logging a simple string", LogLevel.Info);`,
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
            showTypeScriptWarnings: false
          });

          document.getElementById('pnpjsconsole').onclick = function () {
            window.focus()
          };

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
                if (line.toLowerCase().indexOf(' = require') == -1 && line.toLowerCase().indexOf('use strict') == -1 && line.toLowerCase().indexOf('__esmodule') == -1) {
                  code.push(line);
                }
                if (line.toLowerCase().indexOf(' = require') > -1) {
                  // fix imports

                  console.log(line)
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
                  mod = line.indexOf("@pnp/sp") > -1 ? 8 : mod;
                  mod = line.indexOf("@pnp/sp-taxonomy") > -1 ? 9 : mod;

                  prepnp.push('var ' + lineRe[1] + ' = modules['+mod+'];');
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
                '\tPromise.all([SystemJS.import(mod_common),SystemJS.import(mod_config),SystemJS.import(mod_graph),SystemJS.import(mod_logging),SystemJS.import(mod_odata),SystemJS.import(mod_pnpjs),SystemJS.import(mod_addin),SystemJS.import(mod_client),SystemJS.import(mod_sp),SystemJS.import(mod_taxonomy)]).then(function (modules) {',
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
             // pnp + '\n' +
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

          this.update();

        }.bind(this));

      }.bind(this));

    }.bind(this);

  });

