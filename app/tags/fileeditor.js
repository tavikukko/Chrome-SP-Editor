riot.tag("fileeditor", `
          <ul class="fe-ul" each="{ item in items }">
            <li class="fe-li">
              <div class="treenode { item.selected ? ' selected' : '' }" onclick="{ clicked }" >
                <span class="{ item.spin ? 'fe-icon fa fa-spinner fa-spin' : ( item.folder || item.web ) ? (item.expanded && item.folder) ? 'fe-icon fa fa-folder-open-o' : item.folder ? 'fe-icon fa fa-folder-o' : item.expanded ? 'fe-icon fa fa-sitemap fa-rotate-45' : 'fe-icon fa fa-sitemap' : item.CustomizedPageStatus == 1 ? 'fe-icon fa fa-file-text-o ghosted' : item.CustomizedPageStatus == 2 ? 'fe-icon fa fa-file-text-o unghosted' : 'fe-icon fa fa-file-text-o' }"></span>
                <span>{ item.label }</span>
              </div>
              <virtual if="{ item.go }">
                <fileeditor source="{ item.ServerRelativeUrl }" webId="{ item.webId }" isWeb="{ item.web }" handler="{ parent.handler }"></fileeditor>
              </virtual>
            </li>
          </ul>`,
  function (opts) {

    if (!fileeditoreditor) {
      require(['vs/editor/editor.main'], function () {
        fileeditoreditor = monaco.editor.create(document.getElementById('file-editor-container'), {
          value: '',
          //language: 'xml',
          lineNumbers: true,
          roundedSelection: true,
          scrollBeyondLastLine: false,
          readOnly: false,
          theme: "vs-light",
          fontSize: 12,
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

        /* this needs more testing */

        fileeditoreditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
          if (bgautosave) {
            port.onMessage.addListener(this.fileeditorlistener);

            var fileContent = encodeURIComponent(fileeditoreditor.getValue()).replace(/'/g, "%27");
            var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateEditorFile;
            script += " exescript(updateEditorFile, '" + selectedFile + "', '" + fileContent + "', '" + bgautopublish + "','" + selectedWebId + "');";
            chrome.devtools.inspectedWindow.eval(script);
            scheduleDimmer();
          }
          else alert("Please check 'Update changes to SharePoint' to save the changes")
        }.bind(this));

        fileeditoreditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function () {

          var url = 'data:text/plain;base64,' + btoa(fileeditoreditor.getValue());
          var filename = selectedFile.split('/').pop();
          chrome.downloads.download({
              url: url,
              filename: filename,
          });

        }.bind(this));

        window.addEventListener('resize', function () {
          fileeditoreditor.layout();

        });
      }.bind(this));
    }

    this.on("mount", function () {
      var self = this;

      if (opts.source)
        fileeditorsubs.push(this); // store the child elements
      else opts.source = "init";

      this.clicked = function (e) {
        e.item.item.expanded = !e.item.item.expanded;
        if (e.item.item.folder || e.item.item.web) {
          e.item.item.go = !e.item.item.go;
          e.item.item.spin = e.item.item.expanded;
        } else {
          selectedFile = e.item.item.ServerRelativeUrl;
          selectedWebId = e.item.item.webId;
          port.onMessage.addListener(this.fileeditorlistener);
          var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getFileContent;
          script += " exescript(getFileContent, '" + e.item.item.ServerRelativeUrl + "','" + opts.webid + "');";
          chrome.devtools.inspectedWindow.eval(script);
          fileeditoreditor.setValue("");
          fileeditoreditor.setScrollTop(0);
          fileeditoreditor.setScrollLeft(0);

          scheduleDimmer();
        }
        self.handler(e.item.item)
      }.bind(this);

      this.handler = opts.handler || function (node) {
        if (!self.node) self.node = {}
        self.node.selected = false;
        node.selected = true;
        self.node = node;
        self.update();
      }

      // execute script in the main browser context
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getFolders;
      script += " exescript(getFolders, '" + opts.source + "','" + opts.webid + "','" + opts.isweb + "');";
      chrome.devtools.inspectedWindow.eval(script);

      // listen response from the main browser

      this.fileeditorlistener = function (message) {
        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }
        // check that message was for this view
        switch (message.function) {
          case this.opts.source:
            if (message.success) {
              this.items = message.result;
              if (this.parent) {
                this.parent.items.find(x => x.ServerRelativeUrl === this.opts.source).spin = false;
                this.parent.update();
              }
              this.items.sort(function (a, b) {
                return ((b.web || false) - (a.web || false) || (b.folder || false) - (a.folder || false) || a.label.localeCompare(b.label));
              });
              this.update();
              port.onMessage.removeListener(fileeditorlisteners[this.opts.source]);
            }
            break;

          case "getFileContent":
            if (message.success) {
              switch (message.result.type.toLowerCase()) {
                case "js":
                  language = "javascript";
                  break;
                case "themedcss":
                case "preview":
                case "css":
                  language = "css";
                  break;
                case "html":
                case "master":
                case "aspx":
                  language = "html";
                case "xoml":
                case "rules":
                case "spfont":
                case "spcolor":
                case "xsl":
                case "xml":
                case "xaml":
                case "svg":
                case "webpart":
                case "dwp":
                  language = "xml";
                  break;
                case "json":
                  language = "json";
                  break;
                default: language = "plainText";
                  break;
              }
              monaco.editor.setModelLanguage(fileeditoreditor.getModel(), language);
              fileeditoreditor.setValue(message.result.content);
              fileeditoreditor.setScrollTop(0);
              fileeditoreditor.setScrollLeft(0);
              hideDimmer();
              port.onMessage.removeListener(fileeditorlisteners[this.opts.source]);
            }
            break;
          case "updateEditorFile":
            hideDimmer();
            port.onMessage.removeListener(fileeditorlisteners[this.opts.source]);
            break;
        }

      }.bind(this);

      fileeditorlisteners[this.opts.source] = this.fileeditorlistener;
      port.onMessage.addListener(this.fileeditorlistener);

    }.bind(this));
  });
