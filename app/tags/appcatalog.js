riot.tag("appcatalog", `
          <ul class="fe-ul" each="{ item in items }">
            <li class="fe-li">
              <div class="treenode { item.selected ? ' selected' : '' }" onclick="{ clicked }" >
                <span class="{ item.spin ? 'fe-icon fa fa-spinner fa-spin' : 'fe-icon fa fa-file-archive-o' }"></span>
                <span>{ item.FileLeafRef }</span>
              </div> 
              <virtual if="{ item.go }">
                <ul class="fe-ul" each="{ file in item.files }">
                  <li class="fe-li">
                   <span class="{ file.file.dir ? 'fe-icon fa fa-folder-o' : file.edited ? 'fe-icon fa fa-file-code-o edited' : 'fe-icon fa fa-file-code-o' }"></span>
                   <span onclick="{ getContent.bind(this, item, file) }">{ file.relativePath }</span>
                  </li>
                </ul>
             </virtual>
            </li>
          </ul>`,
  function (opts) {

    this.on("mount", function () {

      this.editorZip;
      this.editorFile;

      if (!appcatalogeditor) {
        require(['vs/editor/editor.main'], function () {
          appcatalogeditor = monaco.editor.create(document.getElementById('appcatalog-container'), {
            value: '',
            language: 'xml',
            lineNumbers: true,
            roundedSelection: true,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: "vs-dark",
            fontSize: 16,
            renderIndentGuides: true
          });

          appcatalogeditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
            require(['js/jszip.min'], function (JSZip) {
              JSZip.loadAsync(this.editorItem.zip).then(function (zip) {
                zip.file(this.editorFile.relativePath, appcatalogeditor.getValue());
                zip.generateAsync({ type: "uint8array" }).then(function (zip) {
                  this.editorItem.zip = zip;
                  this.editorFile.edited = true;
                  this.update();
                }.bind(this));
              }.bind(this));
            }.bind(this));
          }.bind(this));

          appcatalogeditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function () {
            require(['js/jszip.min'], function (JSZip) {
              JSZip.loadAsync(this.editorItem.zip).then(function (zip) {
                zip.generateAsync({
                  type: "string",
                  compressionOptions: { level: 9 },
                  compression: "DEFLATE",
                  mimeType: "application/zip"
                }).then(function (zipString) {

                  var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateApp;
                  script += " exescript(updateApp, '" + this.editorItem.FileLeafRef + "');";
                  script = script.replace("REPLACE-CONTENT", escape(zipString));
                  chrome.devtools.inspectedWindow.eval(script);
                  scheduleDimmer();
                }.bind(this));
              }.bind(this));
            }.bind(this));
          }.bind(this));

          monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true
          });

          monaco.languages.css.cssDefaults.setDiagnosticsOptions({
            lint: false,
            validate: false
          });

          window.addEventListener('resize', function () {
            appcatalogeditor.layout();
          });
        }.bind(this));
      }

      // execute script in the main browser context
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getApps;
      script += " exescript(getApps);";
      chrome.devtools.inspectedWindow.eval(script);

      // listen response from the main browser
      port.onMessage.addListener(function (message) {
        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        // check that message was for this view
        switch (message.function) {
          case "getApps":
            if (message.success) {
              this.items = message.result;
              this.update();
            }
            break;
          case "getApp":
            if (message.success) {
              this.me.files = [];
              var self = this;
              var app = new Uint8Array(message.result.data).buffer

              require(['js/jszip.min'], function (JSZip) {
                JSZip.loadAsync(app).then(function (zip) {

                  self.me.zip = app;

                  zip.forEach(function (relativePath, file) {
                    self.me.files.push({ relativePath: relativePath, file: file, edited: false });
                  });

                  self.me.files.sort(function (a, b) {
                    return a.relativePath.localeCompare(b.relativePath);
                  });

                  self.me.spin = false;
                  self.update();
                }.bind(this));
              }.bind(this));

            }
          case "updateApp":
          
              hideDimmer();
              if (message.success){
                  this.editorItem.files.forEach(function (file) {
                    file.edited = false;
                  });
                  this.update()
              } 
            break;
        }
      }.bind(this));

      this.clicked = function (e) {

        this.me = e.item.item;
        this.items.map(function (item) {
          item.selected = false;
          return item;
        });

        e.item.item.selected = true;
        e.item.item.go = !e.item.item.go;
        if (e.item.item.go) e.item.item.spin = true;

        this.update();
        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getApp;
        script += " exescript(getApp, '" + e.item.item.FileLeafRef + "');";
        chrome.devtools.inspectedWindow.eval(script);

      }.bind(this);

      this.getContent = function (item, file) {
        this.editorItem = item;
        this.editorFile = file;
        require(['js/jszip.min'], function (JSZip) {

          JSZip.loadAsync(item.zip).then(function (zip) {
            zip.file(file.relativePath).async("string").then(function success(text) {
              appcatalogeditor.setValue(text);
              appcatalogeditor.setScrollTop(0);
              appcatalogeditor.setScrollLeft(0);
            });
          });

        });
      }.bind(this);

    }.bind(this));
  });