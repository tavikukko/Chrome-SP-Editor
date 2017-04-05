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
                  <a href="#" onclick="{ btnPnPJSConsole }">PnP JS Console</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnPageEditor }">Page editor</a>
                </li>
                <li>
                  <a href="#" onclick="{ btnAbout }">About</a>
                </li>
            </ul>
        </div>`,
  function (opts) {
    this.tagit = null;

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {

    }.bind(this);

    this.btnSave = function () {
      swap("save");
    }.bind(this);

    this.btnScript = function () {
      swap("scriptlinks");
    }.bind(this);

    this.btnFiles = function () {
      swap("files");
    }.bind(this);

    this.btnWebProperties = function () {
      swap("webproperties");
    }.bind(this);

    this.btnListProperties = function () {
      swap("listproperties");
    }.bind(this);

    this.btnWebhooks = function () {
      swap("webhooks");
    }.bind(this);

    this.btnPnPJSConsole = function () {
      swap("pnpjsconsole");
    }.bind(this);

    this.btnPageEditor = function () {
      swap("pageeditor");
    }.bind(this);

    this.btnAbout = function () {
      swap("about");
    }.bind(this);
  });