riot.tag("sidebar", `
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                  <p>Chrome SharePoint Editor</p>
                <li style="line-height: 14px;">
                  <p><input onclick="{ autosave }" type="checkbox" />&nbsp;&nbsp;&nbsp;Save changes</p>
                  <p><input onclick="{ autopublish }" type="checkbox" />&nbsp;&nbsp;&nbsp;Publish major</p>
                </li>
                </li>
                <li>
                  <a href="#" onclick="{ btnSave }">Instructions</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnScript }">Scriptlinks</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnFiles }">Files</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnWebProperties }">Web properties</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnListProperties }">List properties</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnWebhooks }">Webhooks</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnPnPJSConsole }">PnPjs Console v2.0.3</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnSearch }">Search</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnGraphMan }">Graph Man</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnPageEditor }">Page editor</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnFileEditor }">File editor</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnModernProperties }">Modern properties</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnSiteDesigns }">Site Designs</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnSiteScripts }">Site Scripts</a>
                </li>
                <li>
                <a href="#" onclick="{ btnAppCatalog }">AppCatalog</a>
              </li>
                <li>
                  <a href="#" onclick="{ btnAbout }">About</a>
                </li>
            </ul>
        </div>`,
  function (opts) {
    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
      bgautosave = false;
      bgautopublish = false;
    }.bind(this);


    this.autosave = function (e) {
      bgautosave = e.target.checked;
      var payload = { "type": "autosavechange", "content": e.target.checked, "tabId": chrome.devtools.inspectedWindow.tabId };
      port.postMessage(payload);

    }.bind(this);

    this.autopublish = function (e) {
      bgautopublish = e.target.checked;
      var payload = { "type": "autopublishchange", "content": e.target.checked, "tabId": chrome.devtools.inspectedWindow.tabId };
      port.postMessage(payload);

    }.bind(this);

    this.btnSave = function () {
      swap("save");
      if (savetab) return;
      savetab = riot.mount("save");
    }.bind(this);

    this.btnScript = function () {
      swap("scrlinks");
      riot.mount("scrlinks");
    }.bind(this);

    this.btnFiles = function () {
      swap("files");
      riot.mount("files");
    }.bind(this);

    this.btnWebProperties = function () {
      swap("webproperties");
      riot.mount("webproperties");
    }.bind(this);

    this.btnListProperties = function () {
      swap("listproperties");
      riot.mount("listproperties");
    }.bind(this);

    this.btnWebhooks = function () {
      swap("webhooks");
      riot.mount("webhooks");
    }.bind(this);

    this.btnPnPJSConsole = function () {
      swap("pnpjsconsole");
      if (pnpjsconsole) { playground.layout(); return; }
      pnpjsconsole = riot.mount("pnpjsconsole");
    }.bind(this);

    this.btnSearch = function () {
      swap("search");
      riot.mount("search");
    }.bind(this);

    this.btnGraphMan = function () {
      swap("graphman");
      if (graphman) return;
      graphman = riot.mount("graphman");
    }.bind(this);

    this.btnPageEditor = function () {
      swap("pageeditor");
      riot.mount("pageeditor");
    }.bind(this);

    this.btnFileEditor = function () {
      swap("fileeditorcontainer");
      riot.util.tags.unmountAll(fileeditorsubs);
      fileeditorsubs = [];
      if (fileeditormain) {
        fileeditormain[0].unmount(true);
        fileeditormain = [];
      }
      if (fileeditoreditor) fileeditoreditor.layout();
      fileeditormain = riot.mount("fileeditor");
    }.bind(this);

    this.btnAppCatalog = function () {
      swap("appcatalogcontainer");
      riot.mount("appcatalog");
    }.bind(this);

    this.btnModernProperties = function () {
      swap("modernproperties");
      if (!modernpropertiesmain)
        modernpropertiesmain = riot.mount("modernproperties");
      else modernpropertiesmain[0].remount();
    }.bind(this);

    this.btnSiteDesigns = function () {
      swap("sitedesigns");
      riot.mount("sitedesigns");
    }.bind(this);

    this.btnSiteScripts = function () {
      swap("sitescriptscontainer");
      riot.mount("sitescripts");
    }.bind(this);

    this.btnAbout = function () {
      swap("about");
      riot.mount("about");
    }.bind(this);
  });
