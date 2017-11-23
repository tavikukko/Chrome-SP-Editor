riot.tag("modernproperties", `
<div id="page-content-wrapper">
  <div>
    <h4>Modern properties</h4>
    <p><b>Enable</b> or <b>disable</b> running <b>scripts</b> of modern team / communication sites ( <b>GROUP#0</b> / <b>SITEPAGEPUBLISHING#0</b> )</p>
    <p>You need to be in the SharePoint admin site eg. https://tenant-admin.sharepoint.com</p>
  </div>
  <hr>
  <ul class="list-group" style="margin-bottom: 4px;" each="{ web in webs }">
  <span><b>{ web.Title }</b> - { web.Template }</span>
    <li class="list-group-item">
      <span>{ web.Url }</span>
      <span  class="scriptlinks-remove pull-right" style="margin-top: -7px;" data-id="e294bfd5-8baf-4074-8c30-ea46f2e2c9e6">
        <label class="switch">
          <input type="checkbox" checked="{ web.DenyAddAndCustomizePages != 2 }" onclick="{ toggleScripts }">
          <span class="slider round"></span>
        </label>
      </span>
  </ul>
</div`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getSiteCollections;
      script += " exescript(getSiteCollections);";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();

      port.onMessage.addListener(function (message) {

        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'getSiteCollections':
            hideDimmer();
            if (message.success) {
              var compare = function compare(a, b) {
                if (a.Title.toLowerCase() < b.Title.toLowerCase())
                  return -1;
                if (a.Title.toLowerCase() > b.Title.toLowerCase())
                  return 1;
                return 0;
              }

              this.webs = message.result.filter(function (el) {
                return el.Template == "SITEPAGEPUBLISHING#0" || el.Template == "GROUP#0";
              }).sort(compare);

              this.update();
            }
            break;
            case 'updateSiteCollection':
              hideDimmer();
            break;
        }
      }.bind(this));
    }.bind(this);

    this.toggleScripts = function (e) {
      var value = e.target.checked ? '1' : '2';
      var web = e.item.web._ObjectIdentity_.replace(/\n/g, "&#xA;");

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateSiteCollection;
      script += " exescript(updateSiteCollection, '" + web + "', '" + value + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

  });
