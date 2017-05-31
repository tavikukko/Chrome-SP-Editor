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
                    <span onclick="{ getContent.bind(this, item, file.relativePath) }">{ file.relativePath }</span>
                  </li>
                </ul>
             </virtual>
            </li>
          </ul>`,
  function (opts) {

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

    this.on("mount", function () {

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
                    self.me.files.push({ relativePath: relativePath });
                  });

                  self.me.files.sort(function (a, b) {
                    return a.relativePath.localeCompare(b.relativePath);
                  });

                  self.me.spin = false;
                  self.update();
                }.bind(this));
              }.bind(this));

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

        require(['js/jszip.min'], function (JSZip) {

          JSZip.loadAsync(item.zip).then(function (zip) {
            zip.file(file).async("string").then(function success(text) {
              appcatalogeditor.setValue(text);
              appcatalogeditor.setScrollTop(0);
            });
          });

        });
      };

    }.bind(this));
  });