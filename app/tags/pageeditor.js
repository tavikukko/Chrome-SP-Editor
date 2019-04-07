riot.tag("pageeditor", `
          <div id="pageeditor">
            <div id="webpart-zones-list">
                <div class="zone"
                     each="{ zone in zones }"
                     ondragstart="{ startDraggingWebpart }"
                     ondragover="{ dragOverWebpart }"
                     ondragend="{ reorderWebparts }"
                     data-zone-id="{ zone.id }">
                   <h3>{ zone.id || "WEBPART ZONE" }</h3>
                   <div class="add-new-webpart" data-zone-id="{ zone.id }" onclick="{ addNewWebpart }">Add new</div>
                   <div each="{ wp in zone.webparts }"
                        class="webpart { selectedWp && wp.id == selectedWp.id ? 'selected' : '' }"
                        data-id="{ wp.id }"
                        onclick="{ selectWebpart }"
                        draggable="true">{ wp.title || "Webpart" }
                   </div>
                </div>
            </div>
            <div id="webpart-xml-container"></div>
            <span if="{ showError }" id="webpart-save-error">{ showError }</span>
            <span if="{ showSuccess }" id="webpart-save-success">Webpart saved.</span>
            <a if="{ showSave }" href="" id="webpart-save-button" class="btn btn-default" onclick="{ saveChanges }">Save changes</a>
            <a href="" id="webpart-delete-button" class="btn btn-danger" onclick="{ deleteWebpart }">Delete webpart</a>
          </div>`,
  function (opts) {

    var webpartXmlEditor;
    var errorTimeout;

    this.on("mount", function () {
      this.showError = null;
      this.showSuccess = false;
      this.selectedWp = null;
      this.showSave = true;
      this.init();
     /* chrome.devtools.network.onNavigated.addListener(() => {
        setTimeout(() => {
          this.init();
        }, 2500); // need to wait a bit until page is loaded
      });*/
    });

    this.init = () => {

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getZonesAndWebparts;
      script += " exescript(getZonesAndWebparts);";
      chrome.devtools.inspectedWindow.eval(script);

      var pageeditorlistener = function (message) {

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
          case 'changeWebpartPosition':
            this.webpartPositionChanged(message);
            break;
          default:
        }

        this.update();
      }.bind(this);

      for (i = 0; i < pageeditorlisteners.length; i++) {
        port.onMessage.removeListener(pageeditorlisteners[i]);
      }

      pageeditorlisteners = [];
      pageeditorlisteners.push(pageeditorlistener)
      port.onMessage.addListener(pageeditorlistener);

      if (!webpartXmlEditor) {
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
        this.webpartsById = {};
        message.result.forEach(z => z.webparts.forEach(wp => this.webpartsById[wp.id] = { zone: z, webpart: wp }));
        this.zones = message.result;
      }
    };

    this.displayZonesAndWebparts2 = message => {
      if (message.success) {
        for (var wp of message.result) {
          if (this.webpartsById[wp.id]) {
            var { zone, webpart } = this.webpartsById[wp.id];
            zone.id = wp.zoneId;
            webpart.title = wp.title;
            webpart.zoneIndex = wp.zoneIndex;
          }
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
        webpartXmlEditor.setScrollTop(0);
        webpartXmlEditor.setScrollLeft(0);
      }
      else {
        scheduleDimmer();
        webpartXmlEditor.setValue("");
        webpartXmlEditor.setScrollTop(0);
        webpartXmlEditor.setScrollLeft(0);
        var script = exescript + ' ' + sj + ' ' + loadWebpart;
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
        webpartXmlEditor.setScrollTop(0);
        webpartXmlEditor.setScrollLeft(0);

        // saving XsltListViewWebpart naively resets the view it is bound to
        // so for now disabling possibility to save changes
        if (webpart.xml.indexOf('type name="Microsoft.SharePoint.WebPartPages.XsltListViewWebPart, Microsoft.SharePoint') > -1) {
          this.showSave = false;
          webpartXmlEditor.updateOptions({ readOnly: true });
        } else {
          this.showSave = true;
          webpartXmlEditor.updateOptions({ readOnly: false });
        }
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

      var script = exescript + ' ' + sj + ' ' + saveWebpart;
      script += " exescript(saveWebpart, '" + webpart.id + "', '" + encodeURIComponent(wpContents).replace(/'/g, "%27") + "', '" + (zone.id || '') + "');";
      chrome.devtools.inspectedWindow.eval(script);

    };

    this.webpartSaved = message => {
      hideDimmer();

      if (message.success) {
        let wpRecord = this.webpartsById[this.selectedWp.id];
        delete this.webpartsById[this.selectedWp.id];
        this.selectedWp.id = message.result;
        this.selectedWp.xml = webpartXmlEditor.getValue();
        this.webpartsById[this.selectedWp.id] = wpRecord;
        this.showSuccess = true;
        setTimeout(function () { this.showSuccess = false; this.update(); }.bind(this), 4000);
      } else {
        this.showError = message.result;
        errorTimeout = setTimeout(function () { this.showError = null; this.update(); }.bind(this), 10000);
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

      var script = exescript + ' ' + sj + ' ' + deleteWebpart;
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
        webpartXmlEditor.setScrollTop(0);
        webpartXmlEditor.setScrollLeft(0);
      } else {
        this.showError = message.result;
        errorTimeout = setTimeout(function () { this.showError = null; this.update(); }.bind(this), 10000);
      }
    };

    this.startDraggingWebpart = e => {
      this.draggedElement = e.target;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("Text", e.target.dataset.id);
      this.draggedElement.classList.add('drag-handler');
      setTimeout(() => {
        this.draggedElement.classList.add('dragging');
        this.draggedElement.classList.remove('drag-handler');
      });
    };

    this.dragOverWebpart = e => {
      if (!this.draggedElement)
        return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      var target = e.target;
      if (target && target !== this.draggedElement && (target.dataset.id || target.dataset.zoneId) && target.className.indexOf("webpart") > -1) {
        var rect = target.getBoundingClientRect();
        var next = target.dataset.zoneId || (e.clientY - rect.top)/(rect.bottom - rect.top) > .5;
        target.parentNode.insertBefore(this.draggedElement, next && target.nextSibling || target);
      }
    };

    this.reorderWebparts = e => {
      if (!this.draggedElement)
        return;
      var wpId = this.draggedElement.dataset.id;
      var { zone, webpart } = this.webpartsById[wpId];
      zone.webparts.splice(zone.webparts.indexOf(webpart), 1);

      var newZoneId = this.draggedElement.parentNode.dataset.zoneId;
      var newZone = this.zones.filter(z => z.id == newZoneId)[0];
      var elementIndex = Array.prototype.indexOf.call(this.draggedElement.parentNode.children, this.draggedElement) - 2;
      newZone.webparts.splice(elementIndex, 0, webpart);

      if (zone != newZone)
          this.draggedElement.parentNode.removeChild(this.draggedElement);

      this.webpartsById[wpId] = { zone: newZone, webpart: webpart };

      scheduleDimmer();

      var script = exescript + ' ' + sj + ' ' + changeWebpartPosition;
      script += " exescript(changeWebpartPosition, " + JSON.stringify(newZone.webparts.map(wp => wp.id)) + ", '" + newZoneId + "');";
      chrome.devtools.inspectedWindow.eval(script);
    };

    this.webpartPositionChanged = message => {
      hideDimmer();

      var wpId = this.draggedElement.dataset.id;
      this.draggedElement.classList.remove('dragging');
      this.draggedElement = null;

      if (!message.success) {
        this.showError = message.result;
        errorTimeout = setTimeout(function () { this.showError = null; this.update(); }.bind(this), 10000);
      }
    };

  });
