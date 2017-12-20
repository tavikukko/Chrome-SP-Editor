riot.tag("modernproperties", `
<div id="page-content-wrapper">
  <div>
    <h4>Modern properties</h4>
    <p>You need to be in the SharePoint admin site eg. https://tenant-admin.sharepoint.com</p>
  </div>
  <hr>
  <ul class="list-group">
    <li class="list-group-item list-group-item-info">
      <span>O365 Public CDN</span>
      <span class="scriptlinks-remove pull-right" style="margin-top: -7px;" data-id="e294bfd5-8baf-4074-8c30-ea46f2e2c9e6">
        <label class="switch">
          <input type="checkbox" checked="{ publicCDNEnable }" onclick="{ togglePublicCDN }" >
          <span class="mslider round"></span>
        </label>
      </span>
    </li>
    <virtual if="{ publicCDNEnable }">
    <li class="list-group-item" each="{ origin in publicCDNOrigins }">
      <span>{ origin }</span>
      <a><i class="remove glyphicon glyphicon-remove pull-right public" style="cursor: pointer; color: black;" onclick="{removeOrigin}" id="{origin}" ></i></a>
    </li>
    <li class="list-group-item list-group-item-info">
        <div class="row">
            <div class="col-lg-6">
                <div class="input-group" style="z-index: 0;">
                    <input id="inputPublicOrigin" type="text" class="form-control" placeholder="Add new public origin">
                    <span class="input-group-btn">
                        <button id="buttonPublicOrigin" type="button" class="btn btn-default" onclick="{ addNewOrigin }">Add</button>
                    </span>
                </div>
            </div>
        </div>
    </li>
    </virtual>
  </ul>
  <ul class="list-group">
  <li class="list-group-item list-group-item-info">
    <span>O365 Private CDN</span>
    <span class="scriptlinks-remove pull-right" style="margin-top: -7px;" data-id="e294bfd5-8baf-4074-8c30-ea46f2e2c9e6">
      <label class="switch">
        <input type="checkbox" checked="{ privateCDNEnable }" onclick="{ togglePrivateCDN }" >
        <span class="mslider round"></span>
      </label>
    </span>
  </li>
  <virtual if="{ privateCDNEnable }">
  <li class="list-group-item" each="{ origin in privateCDNOrigins }">
    <span>{ origin }</span>
    <a><i class="remove glyphicon glyphicon-remove pull-right private" style="cursor: pointer; color: black;" onclick="{removeOrigin}" id="{origin}" ></i></a>
    </li>
  <li class="list-group-item list-group-item-info">
    <div class="row">
        <div class="col-lg-6">
            <div class="input-group" style="z-index: 0;">
                <input id="inputPrivateOrigin" type="text" class="form-control" placeholder="Add new private origin">
                <span class="input-group-btn">
                    <button id="buttonPrivateOrigin" type="button" class="btn btn-default" onclick="{ addNewOrigin }">Add</button>
                </span>
            </div>
        </div>
    </div>
  </li>
  </virtual>
</ul>
  <ul class="list-group">
   <li class="list-group-item list-group-item-info">Enable or disable running scripts of modern team / communication sites ( GROUP#0 / SITEPAGEPUBLISHING#0 )</li>
   <li class="list-group-item list-group-item-info">
    <input keyup="{ filterprops }" id="modernfilterprops" style="width: 30%;" type="text" class="form-control" placeholder="Search by title, url and template">
   </li>
   <virtual each="{ web in filtered() }">
    <li class="list-group-item">
    <h5 class="list-group-item-heading"><b>{ web.Title }</b> - { web.Template }</h5 >
      <span >{ web.Url }</span>
      <span class="scriptlinks-remove pull-right" style="margin-top: -7px;" data-id="e294bfd5-8baf-4074-8c30-ea46f2e2c9e6">
        <label class="switch">
          <input type="checkbox" checked="{ web.DenyAddAndCustomizePages != 2 }" onclick="{ toggleScripts }">
          <span class="mslider round"></span>
        </label>
      </span>
    </li>
    </virtual>
  </ul>
</div`,
  function (opts) {

    this.filterstr = "";
    this.webs = [];
    this.publicCDNEnable = false;
    this.publicCDNOrigins = [];
    this.tenantObjectId = "";
    this.privateCDNEnable = false;
    this.privateCDNOrigins = [];

    this.on("mount", function () {
      this.init();
    });

    this.filterprops = function (e) {
      this.filterstr = e.target.value.toLowerCase();
    }.bind(this);

    this.remount = function () {
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getSiteCollections;
      script += " exescript(getSiteCollections);";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

    this.init = function () {
      debugger;
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getSiteCollections;
      script += " exescript(getSiteCollections);";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
      if (!modernpropertiesinitialized) {
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

                this.webs = message.result.webs.filter(function (el) {
                  return el.Template == "SITEPAGEPUBLISHING#0" || el.Template == "GROUP#0";
                }).sort(compare);

                this.publicCDNEnable = message.result.publicCDN;
                this.publicCDNOrigins = message.result.publicCDNOrigins;
                this.tenantObjectId = message.result.tenantObjectId;
                this.privateCDNEnable = message.result.privateCDN;
                this.privateCDNOrigins = message.result.privateCDNOrigins;

                this.update();
              }
              break;
            case 'updateSiteCollection':
            case 'enableDisableCDN':
            case 'addOrigin':
            case 'removeOrigin':
              this.remount();
              break;

          }
        }.bind(this));
        modernpropertiesinitialized = true;
      }

    }.bind(this);

    this.toggleScripts = function (e) {
      var value = e.target.checked ? '1' : '2';
      var web = e.item.web._ObjectIdentity_.replace(/\n/g, "&#xA;");

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateSiteCollection;
      script += " exescript(updateSiteCollection, '" + web + "', '" + value + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

    this.togglePublicCDN = function (e) {
      var value = e.target.checked;

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + enableDisableCDN;
      script += " exescript(enableDisableCDN, 'Public', '" + value + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();

    }.bind(this);

    this.togglePrivateCDN = function (e) {
      var value = e.target.checked;

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + enableDisableCDN;
      script += " exescript(enableDisableCDN, 'Private', '" + value + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();

    }.bind(this);

    this.filtered = function () {
      return this.webs.filter(function (t) {
        return ~t.Url.toLowerCase().indexOf(this.filterstr) || ~t.Title.toLowerCase().indexOf(this.filterstr) || ~t.Template.toLowerCase().indexOf(this.filterstr);
      }.bind(this));
    }.bind(this);

    this.addNewOrigin = function (e) {
      var type = e.target.id === 'buttonPublicOrigin' ? 'Public' : 'Private';
      var value = type === 'Public' ? document.getElementById('inputPublicOrigin').value : document.getElementById('inputPrivateOrigin').value;
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addOrigin;
      script += " exescript(addOrigin, '"+ type+"', '" + value + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

    this.removeOrigin = function (e) {
      var type =  e.target.classList.contains('public') ? 'Public' : 'Private';
      var value = e.target.id;
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + removeOrigin;
      script += " exescript(removeOrigin, '"+ type+"', '" + value + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

  });
