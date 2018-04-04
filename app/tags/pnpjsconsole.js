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

          return Promise.all([
            loadDeclaration('typings/pnp.d.ts'),
          ]);
        };

        // validation settings
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: false,
          noSyntaxValidation: false
        });

        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
          target: monaco.languages.typescript.ScriptTarget.ES6,
          allowNonTsExtensions: true
        });


        monaco.languages.registerCompletionItemProvider('typescript', {
           provideCompletionItems: function (model, position) {
               return createDependencyProposals(); // from snippets.js
           }
        });


        loadDeclaration().then(function () {

          playground = monaco.editor.create(document.getElementById('pnpjsconsole'), {
            value: [
              'import pnp from "pnp";',
              '',
              'pnp.sp.web.lists.select("Title").get().then(result => {',
              '\t// gets all list titles from current web and writes them to console',
              '\t// hit \'ctrl + d\' to test it :)',
              '\tconsole.log(result);',
              '});',
            ].join('\n'),
            language: 'typescript',
            lineNumbers: true,
            roundedSelection: true,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: "vs-dark",
            fontSize: 12,
            //glyphMargin: true,
            renderIndentGuides: true,
            suggestOnTriggerCharacters: true,
            showTypeScriptWarnings: false
          });

          document.getElementById('pnpjsconsole').onclick = function(){
            window.focus()
          };

          var playgroundBinding = playground.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function () {
            try {
              var js = ts.transpileModule(playground.getValue(), { compilerOptions: { module: ts.ModuleKind.None } });
              var prepnp = 'pnp';

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
                  var lineRe = line.match("var (.*) = require");
                  prepnp.push('var ' + lineRe[1] + ' = modules[0];');
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
                '\tPromise.all([SystemJS.import(speditorpnp)]).then(function (modules) {',
                '\t\t' + prepnp.join('\n'),
                '\t\t// Your code starts here',
                '\t\t// #####################',
                '' + code.map(function (e) { return '\t\t\t' + e }).join('\n'),
                '\t\t// #####################',
                '\t\t// Your code ends here',
                '\t});',
                '};'].join('\n').replace(/GraphManToken/g, graphmantoken);

              var script = pnp + '\n' + sj + '\n\n' + exescript + '\n\n' + execme + '\n\n';

              script += "exescript(execme);";
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
