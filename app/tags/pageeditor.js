riot.tag("pageeditor", `
          <div id="pageeditor">
            <div id="webpart-zones-list">
                <div class="zone" each="{ zone in zones }">
                  <h3>{ zone.id || "WEBPART ZONE" }</h3>
                  <div class="add-new-webpart" data-zone-id="{ zone.id }" onclick="{ addNewWebpart }">Add new</div>
                  <div each="{ wp in zone.webparts }"
                        class="webpart { wp.id == selectedWp.id ? 'selected' : '' }"
                        data-id="{ wp.id }"
                        onclick="{ selectWebpart }">{ wp.title || "Webpart" }</div>
                </div>
            </div>
            <div id="webpart-xml-container"></div>
            <span if="{ showError }" id="webpart-save-error">{ showError }</span>
            <span if="{ showSuccess }" id="webpart-save-success">Webpart saved.</span>
            <a href="" id="webpart-save-button" class="btn btn-default" onclick="{ saveChanges }">Save changes</a>
            <a href="" id="webpart-delete-button" class="btn btn-danger" onclick="{ deleteWebpart }">Delete webpart</a>
          </div>`,
  function (opts) {

    var webpartXmlEditor;
    var errorTimeout;

    this.on("mount", function () {
      this.showError = null;
      this.showSuccess = false;
      this.init();
    });

    this.init = () => {

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getZonesAndWebparts;
      script += " exescript(getZonesAndWebparts);";
      chrome.devtools.inspectedWindow.eval(script);

      port.onMessage.addListener(message => {

        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {

          case 'getZonesAndWebparts':
            this.displayZonesAndWebparts1(message);
            break;
          case 'getZonesAndWebparts2':
            this.displayZonesAndWebparts2(message);
            break;
          case 'getZonesAndWebparts3':
            this.displayZonesAndWebparts3(message);
            break;
          case 'loadWebpart':
            this.webpartLoaded(message);
            break;
          case 'saveWebpart':
            this.webpartSaved(message);
            break;
          case 'deleteWebpart':
            this.webpartDeleted(message);
            break;
          default:
        }

        this.update();
      });

      if (!webpartXmlEditor) {
        require.config({ paths: { 'vs': 'monaco-editor/min/vs' } });
        require(['vs/editor/editor.main'], function () {
          webpartXmlEditor = monaco.editor.create(document.getElementById('webpart-xml-container'), {
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

          window.addEventListener('resize', function () {
            webpartXmlEditor.layout();
          });
        });
      }

    };

    // progressive loading of zones and webparts
    this.displayZonesAndWebparts1 = message => {
      if (message.success) {
        this.zones = message.result;
        this.webpartsById = {};
        message.result.forEach(z => z.webparts.forEach(wp => this.webpartsById[wp.id] = { zone: z, webpart: wp }));
      }
    };
    this.displayZonesAndWebparts2 = message => {
      if (message.success) {
        for (var wp of message.result) {
          var { zone, webpart } = this.webpartsById[wp.id];
          zone.id = wp.zoneId;
          webpart.title = wp.title;
        }
      }
    };
    this.displayZonesAndWebparts3 = message => {
      if (message.success) {
        var retrievedZoneIds = message.result;
        for (var i = 0; i < retrievedZoneIds.length; i++) {
          var zone = this.zones.filter(z => z.id == retrievedZoneIds[i])[0];
          if (zone == null) {
            this.zones.splice(i, 0, { id: retrievedZoneIds[i], webparts: [] });
          }
        }
      }
    };

    this.selectWebpart = e => {
      if (this.selectedWp) {
        if (this.selectedWp.xml != webpartXmlEditor.getValue()) {
          if (!confirm("Drop changes to current webpart?"))
            return;

          // if it was a new webpart - remove it altogether
          if (this.selectedWp.id == "new") {
            let { zone, webpart } = this.webpartsById[this.selectedWp.id];
            zone.webparts.splice(zone.webparts.indexOf(webpart), 1);
          }
        }
      }

      let { zone, webpart } = this.webpartsById[e.target ? e.target.dataset.id : e];
      if (webpart.xml != null) {
        this.selectedWp = webpart;
        webpartXmlEditor.setValue(webpart.xml);
      }
      else {
        scheduleDimmer();
        var script = exescript + ' ' + loadWebpart;
        script += " exescript(loadWebpart, '" + webpart.id + "');";
        chrome.devtools.inspectedWindow.eval(script);
      }
    };

    this.webpartLoaded = message => {
      hideDimmer();
      if (message.success) {
        let { zone, webpart } = this.webpartsById[message.result.id];
        webpart.xml = message.result.xml;
        this.selectedWp = webpart;
        webpartXmlEditor.setValue(webpart.xml);
      }
    };

    this.addNewWebpart = e => {
      let newWp = { id: "new", title: "(new webpart)", xml: '' };
      let zone = this.zones.filter(z => z.id == e.target.dataset.zoneId)[0];
      zone.webparts.unshift(newWp);
      this.webpartsById["new"] = { zone: zone, webpart: newWp };
      this.selectWebpart(newWp.id);
    };

    this.saveChanges = e => {
      e.preventDefault();
      e.stopPropagation();

      if (!webpartXmlEditor || !webpartXmlEditor.getValue() || !this.selectedWp)
        return;

      let { zone, webpart } = this.webpartsById[this.selectedWp.id];
      if (!zone.id && webpart.id == "new")
        return;

      this.showError = null;

      var wpContents = webpartXmlEditor.getValue();

      scheduleDimmer();

      var script = exescript + ' ' + saveWebpart;
      script += " exescript(saveWebpart, '" + webpart.id + "', '" + encodeURIComponent(wpContents).replace(/'/g, "%27") + "', '" + (zone.id || '') + "');";
      chrome.devtools.inspectedWindow.eval(script);

    };

    this.webpartSaved = message => {
      hideDimmer();

      if (message.success) {
        this.selectedWp.id = message.result;
        this.selectedWp.xml = webpartXmlEditor.getValue();
        this.showSuccess = true;
        setTimeout(() => { this.showSuccess = false; this.update(); }, 4000);
      } else {
        this.showError = message.result;
        errorTimeout = setTimeout(() => { this.showError = null; this.update(); }, 10000);
      }
    };

    this.deleteWebpart = e => {
      e.preventDefault();
      e.stopPropagation();

      if (!webpartXmlEditor || !webpartXmlEditor.getValue() || !this.selectedWp)
        return;

      if (!confirm('Are you sure want to delete this webpart?'))
        return;

      this.showError = null;

      scheduleDimmer();

      var script = exescript + ' ' + deleteWebpart;
      script += " exescript(deleteWebpart, '" + this.selectedWp.id + "');";
      chrome.devtools.inspectedWindow.eval(script);

    };


    this.webpartDeleted = message => {
      hideDimmer();

      if (message.success) {
        let { zone, webpart } = this.webpartsById[this.selectedWp.id];
        zone.webparts.splice(zone.webparts.indexOf(webpart), 1);
        this.selectedWp = null;
        webpartXmlEditor.setValue('');
      } else {
        this.showError = message.result;
        errorTimeout = setTimeout(function () { this.showError = null; }, 10000);
      }
    };

  });
