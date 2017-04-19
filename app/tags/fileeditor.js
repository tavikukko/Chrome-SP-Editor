riot.tag("fileeditor", `
          <ul class="fe-ul" each="{ item in items }">
            <li class="fe-li">
              <div class="treenode { item.selected ? ' selected' : '' }" onclick="{ clicked }" >
                <span class="{ item.spin ? 'fe-icon fa fa-spinner fa-spin' : item.folder ? item.expanded ? 'fe-icon fa fa-folder-open-o' : 'fe-icon fa fa-folder-o' : 'fe-icon fa fa-file-text-o' }"></span>
                <span>{ item.label }</span>
              </div> 
             <!-- <i class="{ item.spin ? 'fa fa-spinner fa-spin' : '' }"></i> -->
              <virtual if="{ item.go }">
                <fileeditor source="{ item.ServerRelativeUrl }" handler="{ parent.handler }"></fileeditor>
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
          theme: "vs-dark",
          fontSize: 16,
          renderIndentGuides: true
        });
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: true,
          noSyntaxValidation: true
        });
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: true,
          noSyntaxValidation: true
        });
        monaco.languages.css.cssDefaults.setDiagnosticsOptions({
          lint: false,
          validate: false
        });

        var fileeditoreditorBinding = fileeditoreditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {

          var fileContent = encodeURIComponent(fileeditoreditor.getValue()).replace(/'/g, "%27")
          var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateEditorFile;
          script += " exescript(updateEditorFile, '" + selectedFile + "', '" + fileContent + "');";
          chrome.devtools.inspectedWindow.eval(script);
          scheduleDimmer();
        });

        window.addEventListener('resize', function () {
          fileeditoreditor.layout();

        });
      });
    }

    this.on("mount", function () {
      var self = this;

      if (opts.source)
        fileeditorsubs.push(this); // store the child elements
      else opts.source = "init";

      this.clicked = function (e) {
        e.item.item.expanded = !e.item.item.expanded;
        if (e.item.item.folder) {
          e.item.item.go = !e.item.item.go;
          e.item.item.spin = e.item.item.expanded;
        } else {
          selectedFile = e.item.item.ServerRelativeUrl;
          var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getFileContent;
          script += " exescript(getFileContent, '" + e.item.item.ServerRelativeUrl + "');";
          chrome.devtools.inspectedWindow.eval(script);
          fileeditoreditor.setValue("");
          fileeditoreditor.setScrollTop(0);
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

      // execute cript in the main browser context
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getFolders;
      script += " exescript(getFolders, '" + opts.source + "');";
      chrome.devtools.inspectedWindow.eval(script);

      // listen response from the main browser
      port.onMessage.addListener(function (message) {
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
                return ((b.folder || false) - (a.folder || false) || a.label.localeCompare(b.label));
              });
              this.update();
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
              hideDimmer();
            }
            break;
            case "updateEditorFile":
            if (message.success) {
              hideDimmer();
            }
            break;
        }

      }.bind(this));
    }.bind(this));
  });