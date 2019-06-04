riot.tag("modernproperties", `
<div id="page-content-wrapper">
  <div>
    <h4>Modern properties</h4>
    <p>You need to be in the SharePoint admin site eg. https://tenant-admin.sharepoint.com</p>
  </div>
  <hr>

  <!-- Public CDN -->
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

  <!-- Private CDN -->
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

  <!-- Tenant Properties -->
  <ul class="list-group">
    <li class="list-group-item list-group-item-info">Tenant Properties</li>
    <li class="list-group-item list-group-item-info">
      <div class="row">
        <div class="col-xs-2">
          <input id="newTenantKey" type="text" class="form-control" placeholder="New key">
        </div>
        <div class="col-xs-4">
          <input id="newTenantValue" type="text" class="form-control" placeholder="New value">
        </div>
        <div class="col-xs-2">
        <input id="newTenantDesc" type="text" class="form-control" placeholder="New description">
      </div>
      <div class="col-xs-2">
        <input id="newTenantComment" type="text" class="form-control" placeholder="New comment">
      </div>
        <div class="col-xs-2">
          <div class="input-group-btn">
            <button onclick="{ addprop }" id="addTenantProperty" type="button" class="btn btn-default" >Add property</button>
          </div>
        </div>
      </div>
    </li>
    <virtual each="{ tenantProperty, index in tenantProperties }">
    <li class="list-group-item">
      <h5 class="list-group-item-heading"><b>{ index }</h5 >
      <div class="row">
        <div class="col-xs-6">
          <input onKeyUp="{ updatevalue }" id="tenantPropertyValue" type="text" class="form-control" value="{ tenantProperty.Value }">
        </div>
        <div class="col-xs-2">
        <input onKeyUp="{ updatedesc }" id="tenantPropertyKey" type="text" class="form-control" value="{ tenantProperty.Description }">
      </div>
      <div class="col-xs-2">
        <input onKeyUp="{ updatecomm }" id="tenantPropertyValue" type="text" class="form-control" value="{ tenantProperty.Comment }">
      </div>
        <div class="col-xs-2">
        <span class="input-group-btn">
            <button onclick="{ updateProperty }" class="btn btn-default" type="button">Update</button>
            <button onclick="{ removeProperty }" class="btn btn-default" type="button">Remove</button>
          </span>
        </div>
      </div>
    </li>
    </virtual>
  </ul>

  <!-- Modern Sites -->
  <ul class="list-group">
   <li class="list-group-item list-group-item-info">Enable or disable running scripts of modern team / communication sites ( GROUP#0 / SITEPAGEPUBLISHING#0 )</li>
   <li class="list-group-item list-group-item-info">
    <div class="row">
      <div class="col-xs-6">
        <input keyup="{ filterprops }" id="modernfilterprops" type="text" class="form-control" placeholder="Search by title, url and template">
      </div>
      <div class="col-xs-6">
        <select onchange="{ filterhubprops }" class="form-control" id="hublist">
          <option value="">Filter By Hubsite...</option>
          <option each="{ hub in hubSites }" value="{ hub.SiteUrl }" >{ hub.SiteUrl }</option>
        </select>
      </div>
    </div>
   </li>
   <virtual each="{ web in filtered() }">
    <li class="list-group-item { web.IsHubSite ? 'list-group-item-success' : web.IsConnectedToHub ? 'list-group-item-warning' : '' }">
    <h5 class="list-group-item-heading"><b>{ web.Title }</b> - { web.Template } { web.IsConnectedToHub ? ' - Connected To HubSite: ' + web.IsConnectedToHub : web.IsHubSite ? ' - HubSite ' : '' }</h5 >
      <span >{ web.Url }</span>
      <span class="scriptlinks-remove pull-right" style="margin-top: -15px;" ><span>Allow Scripts:</span>
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
    this.filterhubstr = "";
    this.webs = [];
    this.publicCDNEnable = false;
    this.publicCDNOrigins = [];
    this.tenantObjectId = "";
    this.privateCDNEnable = false;
    this.privateCDNOrigins = [];
    this.tenantProperties = [];

    this.on("mount", function () {
      this.init();
    });

    this.filterprops = function (e) {
      this.filterstr = e.target.value.toLowerCase();
    }.bind(this);

    this.filterhubprops = function (e) {
      this.filterhubstr = $("#hublist").val().toLowerCase();
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
                if (message.result.tenantProperties)
                  this.tenantProperties = JSON.parse(message.result.tenantProperties);
                this.siteid = message.result.appCatalogSiteId;
                this.webid = message.result.appCatalogWebId;
                this.appCatalogUrl = message.result.appCatalogUrl;
                this.hubSites = message.result.hubsites;
                this.departmentIds = message.result.departmentIds;

                this.webs.forEach(web => {
                  if (this.isHubSite(web.Url)) {
                    web.IsHubSite = true;
                    web.IsConnectedToHub = "";
                  } else {
                    var hub = this.departmentIds.find(o => {
                      return o.Url == web.Url ? o.DepartmentId : null;
                    });
                    if (hub)
                      web.IsConnectedToHub = this.getHubsiteUrlById(hub.DepartmentId).SiteUrl;
                    else web.IsConnectedToHub = "";
                  }
                });

                this.update();
              }
              break;
            case 'updateTenantProperty':
            case 'removeTenantProperty':
              hideDimmer();
              if (message.success) {
                this.tenantProperties = JSON.parse(message.result.tenantProperties);
                var key = elem('newTenantKey').value = "";
                var value = elem('newTenantValue').value = "";
                var desc = elem('newTenantDesc').value = "";
                var comment = elem('newTenantComment').value = "";

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
        return (~t.IsConnectedToHub.toLowerCase().indexOf(this.filterhubstr)) && (~t.Url.toLowerCase().indexOf(this.filterstr) || ~t.Title.toLowerCase().indexOf(this.filterstr) || ~t.Template.toLowerCase().indexOf(this.filterstr));
      }.bind(this));
    }.bind(this);

    this.isHubSite = function (e) {
      return this.hubSites.find(o => o.SiteUrl == e);
    }.bind(this);

    this.getHubsiteUrlById = function (e) {

      return this.hubSites.find(o => o.ID.indexOf(e.slice(1, -1)) > -1 ? o.SiteUrl : '');
    }.bind(this);

    this.isConnectedToHubSite = function (e) {
      return this.departmentIds.find(o => o.Url == e);
    }.bind(this);

    this.getHubUrl = function (e) {
      return this.webs.find(o => o.Id == e);
    }.bind(this);

    this.addNewOrigin = function (e) {
      var type = e.target.id === 'buttonPublicOrigin' ? 'Public' : 'Private';
      var value = type === 'Public' ? document.getElementById('inputPublicOrigin').value : document.getElementById('inputPrivateOrigin').value;
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addOrigin;
      script += " exescript(addOrigin, '" + type + "', '" + value + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

    this.removeOrigin = function (e) {
      var type = e.target.classList.contains('public') ? 'Public' : 'Private';
      var value = e.target.id;
      if (!confirm('Are you sure want to delete "' + value + '" origin?'))
        return;
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + removeOrigin;
      script += " exescript(removeOrigin, '" + type + "', '" + value + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

    this.updatevalue = function (e) {
      e.item.tenantProperty.Value = e.target.value;
    }.bind(this);

    this.updatedesc = function (e) {
      e.item.tenantProperty.Description = e.target.value;
    }.bind(this);

    this.updatecomm = function (e) {
      e.item.tenantProperty.Comment = e.target.value;
    }.bind(this);

    this.updateProperty = function (e) {
      if (!confirm('Are you sure want to update "' + e.item.index + '" tenant property?'))
        return;

      var script = sj + ' ' + alertify + ' ' + exescript + ' ' + updateTenantProperty;
      script += " exescript(updateTenantProperty, '" + e.item.index + "', '" + e.item.tenantProperty.Value + "', '" + e.item.tenantProperty.Description + "', '" + e.item.tenantProperty.Comment + "', '" + this.appCatalogUrl + "', '" + this.siteid + "', '" + this.webid + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

    this.removeProperty = function (e) {
      if (!confirm('Are you sure want to remove "' + e.item.index + '" tenant property?'))
        return;

      var script = sj + ' ' + alertify + ' ' + exescript + ' ' + removeTenantProperty;
      script += " exescript(removeTenantProperty, '" + e.item.index + "', '" + this.appCatalogUrl + "', '" + this.siteid + "', '" + this.webid + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();
    }.bind(this);

    this.addprop = function (e) {
      var key = elem('newTenantKey').value;
      var value = elem('newTenantValue').value;
      var desc = elem('newTenantDesc').value;
      var comment = elem('newTenantComment').value;

      var script = sj + ' ' + alertify + ' ' + exescript + ' ' + updateTenantProperty;
      script += " exescript(updateTenantProperty, '" + key + "', '" + value + "', '" + desc + "', '" + comment + "', '" + this.appCatalogUrl + "', '" + this.siteid + "', '" + this.webid + "');";
      chrome.devtools.inspectedWindow.eval(script);
      scheduleDimmer();

    }.bind(this);

  });
