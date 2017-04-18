riot.tag("sidebar", `
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                  <p>Chrome SharePoint Editor</p>
                </li>
                <li>
                  <a href="#" onclick="{ btnSave }">Save to SharePoint</a>
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
                  <a href="#" onclick="{ btnPnPJSConsole }">PnP JS Console v2.0.3</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnPageEditor }">Page editor</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnFileEditor }">File editor</a>
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

    }.bind(this);

    this.btnSave = function () {
      swap("save");
      riot.mount("save");
    }.bind(this);

    this.btnScript = function () {
      swap("scriptlinks");
      riot.mount("scriptlinks");
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
      if (pnpjsconsole) return;
      pnpjsconsole = riot.mount("pnpjsconsole");
    }.bind(this);

    this.btnPageEditor = function () {
      swap("pageeditor");
      riot.mount("pageeditor");
    }.bind(this);

    this.btnFileEditor = function () {
      swap("fileeditorcontainer");
      riot.util.tags.unmountAll(fileeditorsubs);
      fileeditorsubs = [];
      if(fileeditormain) {
        fileeditormain[0].unmount(true);
        fileeditormain = [];
      }
      fileeditormain = riot.mount("fileeditor");
    }.bind(this);

    this.btnAbout = function () {
      swap("about");
      riot.mount("about");
    }.bind(this);
  });