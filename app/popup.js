riot.tag("spquicklinks", `
<div class="links-content">

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li class="active">
      <a href="#links" role="tab" data-toggle="tab">Links</a>
    </li>
    <li>
      <a href="#properties" role="tab" data-toggle="tab">_spPageContextInfo</a>
    </li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">

    <div class="tab-pane fade active in" id="links">
      <div if={!info} class="list-group">
        <a href="#" each="{link in links}" class="list-group-item {link.css}" onclick="{browse}" data-id="{link.url}" data-target="{link.target}">{link.title}</a>
      </div>
    </div>

    <div class="tab-pane fade" id="properties">
      <ul if={!info} class="list-group">
        <li if="{ plo && plo.PageLayoutType }" class="list-group-item disabled normal-cursor"><b>Current Page Layout</b></li>
        <div if="{ plo && plo.PageLayoutType }" class="input-group">
          <select class="form-control" ref="pageLayout">
            <option value="Home" selected="{plo.PageLayoutType === 'Home'}">Home Page Layout</option>
            <option value="Article" selected="{plo.PageLayoutType === 'Article'}" >Article Page Layout</option>
            <option value="SingleWebPartAppPage" selected="{plo.PageLayoutType === 'SingleWebPartAppPage'}">Single WebPart App Page Layout</option>
          </select>
          <span class="input-group-btn">
            <button class="btn btn-ligth" type="button" tabindex="-1" onclick="{updateLayout}">
            <i if="{ updatingLayout }" class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></i>
            <virtual if="{ !updatingLayout }">Update</virtual>
            </button>
          </span>
        </div>
        <li if="{ plo && plo.PageLayoutType === 'Article' && plo.PromotedState === 2 }" class="list-group-item disabled normal-cursor"><b>Demote to Site Page</b></li>
        <div if="{ plo && plo.PageLayoutType === 'Article' && plo.PromotedState === 2 }" class="input-group">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button" tabindex="-1" onclick="{updatePromotedState}">
            <i if="{ updatingPromoted }" class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></i>
            <virtual if="{ !updatingPromoted }">Demote</virtual>
            </button>
          </span>
        </div>

        <li class="list-group-item disabled normal-cursor"><b>Number of properties: { this.filtered().length }</b></li>
        <input onKeyUp="{ filterprops }" id="filterprops" type="text" class="form-control" placeholder="Filter properties...">
        <virtual each="{ property in filtered() }">
          <li class="list-group-item normal-cursor"><b>{ property.key }:</b></li>
          <li class="list-group-item normal-cursor">{ property.value }</li>
        </virtual>
      </ul>
    </div>

  </div>
  <!-- info -->
  <div>
    <p if={!info} class="bottom-info">
      <b>To use full Chrome-SP-Editor powers close this popup, press F12 and select SharePoint tab..</b>
    </p>
    <div if={info} class="panel-body">
      <b>Could not load links, propably because this ain't a SharePoint site..</b>
    </div>
  </div>
</div>`,
  function (opts) {

    this.filterstr = "";
    this.props = [];
    this.ctx = {};
    this.plo = {};
    this.updating = false;
    this.updatingLayout = false;
    this.updatingPromoted = false

    this.on("mount", async function () {
      const tabInfo = await this.getCurrentTabUrl()
      this.fullUrl = tabInfo.url
      this.tabId = tabInfo.tabId
      this.init();
      // re-initialize incase of refreshing the page while popup is open.
      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (this.tabId === tabId && changeInfo.status === 'complete' && changeInfo.url === undefined) {
          chrome.tabs.executeScript(tabId, {
            file: 'app/js/getContext.js'
          });
        }
      }.bind(this));
    }.bind(this));

    this.listener = function (msg) {
      var res = JSON.parse(msg);

      if (res._spPageContextInfo) {
        this.filterstr = "";
        this.props = [];
        this.ctx = {};

        this.ctx = res;

        this.info = false;
        // check sp url
        this.currSiteUrl = this.ctx._spPageContextInfo.webAbsoluteUrl;

        this.queryStr = "?";
        if (this.fullUrl.indexOf("?") > -1) {
          this.queryStr = "&";
        }

        // init links
        this.links = [
          { title: "Current site", url: "", target: "", css: "disabled normal-cursor" },
          { title: "Site settings", url: this.currSiteUrl + "/_layouts/15/settings.aspx", target: "_blank", css: "pointer-cursor" },
          { title: "Site contents", url: this.currSiteUrl + "/_layouts/15/viewlsts.aspx", target: "_blank", css: "pointer-cursor" },
          { title: "Recycle bin", url: this.currSiteUrl + "/_layouts/15/AdminRecycleBin.aspx?view=5", target: "_blank", css: "pointer-cursor" },
          { title: "SPFx", url: "", target: "", css: "disabled normal-cursor" },
          { title: "Load debug manifest to current url", url: this.fullUrl + this.queryStr + "loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js", target: "_self", css: "pointer-cursor" },
          { title: "Remote workbench", url: this.currSiteUrl + "/_layouts/workbench.aspx", target: "_blank", css: "pointer-cursor" },
          { title: "Local workbench", url: "https://localhost:4321/temp/workbench.html", target: "_blank", css: "pointer-cursor" },
          { title: "Speedmode", url: this.fullUrl + this.queryStr + "env=WebView", target: "_blank", css: "pointer-cursor" },
        ]

        // Add pages library
        if (this.ctx._spPageContextInfo.pageListId) {
          var index = this.links.findIndex(l => l.title === "Recycle bin");
          var i = index > -1 ? index + 1 : 11
          this.pagesTitle = this.ctx._spPageContextInfo.sitePagesEnabled ? "Site Pages" : "Pages";
          this.pagesUrl = "/_layouts/15/listedit.aspx?List=%7B" + this.ctx._spPageContextInfo.pageListId.replace("{", "").replace("}", "") + "%7D";

          this.links.splice(i, 0, { title: this.pagesTitle + " - library settings", url: this.currSiteUrl + this.pagesUrl, target: "_blank", css: "pointer-cursor" });
        }

        // add admin & edit user profile links if online
        if (this.ctx._spPageContextInfo.isSPO) {
          this.tenant = this.currSiteUrl.substring(0, this.currSiteUrl.indexOf("." + this.ctx._spPageContextInfo.webDomain));
          this.admin = this.tenant.indexOf("-admin") > -1 ? this.tenant : this.tenant + "-admin";
          this.admin = this.admin.replace("-my", "");
          this.my = this.tenant.indexOf("-my") > -1 ? this.tenant : this.tenant + "-my";
          this.my = this.my.replace("-admin", "");
        }
        this.links.unshift({ title: "Login as another user", url: `${this.currSiteUrl}/_layouts/closeConnection.aspx?loginasanotheruser=true&source=${this.currSiteUrl}`, target: "_self", css: "pointer-cursor" });

        if (this.ctx._spPageContextInfo.isSPO) {
          this.links.unshift({ title: "Edit user profile", url: `${this.my}.${this.ctx._spPageContextInfo.webDomain}/_layouts/15/editprofile.aspx?UserSettingsProvider=dfb95e82-8132-404b-b693-25418fdac9b6`, target: "_blank", css: "pointer-cursor" });
        }
        this.links.unshift({ title: "Current user", url: "", target: "", css: "disabled normal-cursor" });

        if (this.ctx._spPageContextInfo.isSPO) {
          this.links.unshift({ title: "Search administration", url: `${this.admin}.${this.ctx._spPageContextInfo.webDomain}/_layouts/15/searchadmin/TA_SearchAdministration.aspx`, target: "_blank", css: "pointer-cursor" });
          this.links.unshift({ title: "Term store", url: `${this.admin}.${this.ctx._spPageContextInfo.webDomain}/_layouts/15/termstoremanager.aspx`, target: "_blank", css: "pointer-cursor" });
          this.links.unshift({ title: "User profiles", url: `${this.admin}.${this.ctx._spPageContextInfo.webDomain}/_layouts/15/tenantprofileadmin/manageuserprofileserviceapplication.aspx`, target: "_blank", css: "pointer-cursor" });
          this.links.unshift({ title: "Classic admin center", url: `${this.admin}.${this.ctx._spPageContextInfo.webDomain}/_layouts/15/online/SiteCollections.aspx`, target: "_blank", css: "pointer-cursor" });
          this.links.unshift({ title: "Admin center", url: `${this.admin}.${this.ctx._spPageContextInfo.webDomain}/_layouts/15/online/AdminHome.aspx#/home`, target: "_blank", css: "pointer-cursor" });
          this.links.unshift({ title: "Tenant", url: "", target: "", css: "disabled normal-cursor" });
        }
        this.update();

        // find app catalog
        if (this.ctx._spPageContextInfo.isSPO) {
          var that = this;
          that.getAppCatalogUrl().then(appCatalogUrl => {
            if (appCatalogUrl && appCatalogUrl.indexOf("undefined") === -1) {
              var index = that.links.findIndex(l => l.title === "Search administration");
              var i = index > -1 ? index + 1 : 6
              that.links.splice(i, 0, { title: "App Catalog", url: `${appCatalogUrl}/AppCatalog/Forms/AllItems.aspx`, target: "_blank", css: "pointer-cursor" });
              that.update();
            }
          });

          // get current page info
          if (this.ctx._spPageContextInfo.webAbsoluteUrl && this.ctx._spPageContextInfo.serverRequestPath && this.ctx._spPageContextInfo.pageListId && this.ctx._spPageContextInfo.pageItemId > -1) {
            this.getPageLayout(this.ctx._spPageContextInfo.webAbsoluteUrl, this.ctx._spPageContextInfo.serverRequestPath)
          }
        }

        Object.entries(this.ctx._spPageContextInfo).forEach(entry => {
          var key = entry[0];
          var value = JSON.stringify(entry[1]);
          this.props.push({ key: key, value: value })
        });

        this.props.sort((a, b) => a.key.localeCompare(b.key))
        this.update()
      }
      else if (res.plo) {
        this.plo = {};
        this.plo = res.plo
        this.update();
      } else if (res.update) {
        this.updatingLayout = false;
        this.getPageLayout(this.ctx._spPageContextInfo.webAbsoluteUrl, this.ctx._spPageContextInfo.serverRequestPath)
        this.update();
      } else if (res.updatePromotedState) {
        this.updatingPromoted = false;
        this.getPageLayout(this.ctx._spPageContextInfo.webAbsoluteUrl, this.ctx._spPageContextInfo.serverRequestPath)
        this.update();
      }
      else {
        this.info = true;
        this.update();
      }
    }.bind(this);

    this.init = function () {
      chrome.runtime.onConnect.addListener(function (port) {
        port.onMessage.addListener(this.listener);
      }.bind(this));

      chrome.tabs.executeScript(this.tabId, {
        file: 'app/js/getContext.js'
      });

    }.bind(this);

    this.getCurrentTabUrl = function (e) {
      return new Promise(function (resolve, reject) {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
          resolve({ url: tabs[0].url.replace(/\/\s*$/, ""), tabId: tabs[0].id });
        });
      });
    }.bind(this);

    this.getAppCatalogUrl = function () {
      var url = this.currSiteUrl;
      return new Promise(function (resolve, reject) {
        fetch(url + '/_api/SP_TenantSettings_Current', {
          headers: {
            'Accept': 'application/json;odata=nometadata',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          }
        })
          .then(response => response.json())
          .then(function (r) {
            resolve(r.CorporateCatalogUrl);
          });
      });
    }.bind(this);

    this.getPageLayout = async function (siteUrl, serverRequestPath) {
      let ploR = await fetch(siteUrl + "/_api/web/getFileByServerRelativeUrl('" + serverRequestPath + "')/listItemAllFields?$select=PageLayoutType,PromotedState", {
        headers: {
          accept: 'application/json;odata=nometadata',
          'content-type': 'application/json;odata=nometadata',
        }
      })
      this.plo = await ploR.json();
      this.update()
    }.bind(this);

    this.browse = function (e) {
      if (e.target.dataset.target == "_blank")
        chrome.tabs.create({
          url: e.target.dataset.id
        });
      else {
        chrome.tabs.update({
          url: e.target.dataset.id
        });
      }

    }.bind(this);

    this.updateLayout = function (e) {
      this.updatingLayout = true;
      this.update();
      if (this.refs && this.refs.pageLayout && this.refs.pageLayout.value) {
        chrome.tabs.executeScript(this.tabId, {
          code: "updateLayout('" + this.ctx._spPageContextInfo.webAbsoluteUrl + "', '" + this.ctx._spPageContextInfo.serverRequestPath + "', '" + this.refs.pageLayout.value + "');"
        });
      }
    }.bind(this);

    this.updatePromotedState = function (e) {
      this.updatingPromoted = true;
      this.update();
      chrome.tabs.executeScript(this.tabId, {
        code: "updatePromoted('" + this.ctx._spPageContextInfo.webAbsoluteUrl + "', '" + this.ctx._spPageContextInfo.serverRequestPath + "', 0);"
      });
    }.bind(this);

    this.filterprops = function (e) {
      this.filterstr = e.target.value.toLowerCase();
    }.bind(this);

    this.filtered = function () {
      return this.props.filter(function (t) {
        return ~t.key.toLowerCase().indexOf(this.filterstr);
      }.bind(this));
    }.bind(this);

  });

riot.mount("spquicklinks");
