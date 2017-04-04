riot.tag("sidebar",
  `<div id="sidebar-wrapper">
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
      //riot.util.tags.unmountAll(this.tagit);
      //this.tagit.unmount(true);
      riot.mount("save");
      swap("save");
    }.bind(this);

    this.btnScript = function () {
      riot.mount("scriptlinks");
      swap("script");
    }.bind(this);

    this.btnFiles = function () {

    }.bind(this);

    this.btnWebProperties = function () {

    }.bind(this);

    this.btnListProperties = function () {

    }.bind(this);

    this.btnWebhooks = function () {

    }.bind(this);

    this.btnPnPJSConsole = function () {

    }.bind(this);

    this.btnPageEditor = function () {

    }.bind(this);

    this.btnAbout = function () {

    }.bind(this);
  });