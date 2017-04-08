riot.tag("save", `
          <div id="page-content-wrapper">
            <h4>Save to SharePoint</h4>
            <p><label><input onclick="{ autosave }" type="checkbox" /> Update changes to SharePoint</label></p>
            <p><label><input onclick="{ autopublish }" type="checkbox" /> Publish a Major version on save</label></p>
          </div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
      // init code here
    }.bind(this);

    this.autosave = function (e) {

      var payload = { "type": "autosavechange", "content": e.target.checked, "tabId": chrome.devtools.inspectedWindow.tabId };
      port.postMessage(payload);

    }.bind(this);

    this.autopublish = function (e) {

      var payload = { "type": "autopublishchange", "content": e.target.checked, "tabId": chrome.devtools.inspectedWindow.tabId };
      port.postMessage(payload);

    }.bind(this);

  });