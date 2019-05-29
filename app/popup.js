riot.tag("spquicklinks", `
<div class="content">
    <ul if={!info} class="list-group">
       <li each="{link in links}" class="list-group-item {link.css}" onclick="{browse}" data-id="{link.url}" data-target="{link.target}" >{link.title}</li>
    </ul>
    <p if={!info} class="bottom-info">
      To use full Chrome-SP-Editor powers close this popup, press F12 and select SharePoint tab..
    </p>
    <div if={info} class="panel-body">
      Could not load links, propably because this ain't a SharePoint site..
    </div>
</div>`,
    function (opts) {
        this.on("mount", function () {
            this.init();
        });

        this.listener = function (msg) {
            this.ctx = JSON.parse(msg);
            this.getCurrentTabUrl().then(tabUrl => {
                this.fullUrl = tabUrl;
                this.info = false;
                // check sp url
                if (this.ctx && this.ctx._spPageContextInfo) {
                    this.currSiteUrl = this.ctx._spPageContextInfo.webAbsoluteUrl;

                    this.queryStr = "?";
                    if (this.fullUrl.indexOf("?") > -1) {
                        this.queryStr = "&";
                    }

                    // init links
                    this.links = [
                        { title: "Current site", url: "", target: "", css: "disabled normal-cursor" },
                        { title: "Site settings", url: this.currSiteUrl + "/_layouts/15/settings.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "Recycle bin", url: this.currSiteUrl + "/_layouts/15/AdminRecycleBin.aspx?view=5", target: "_blank", css: "pointer-cursor" },
                        { title: "SPFx", url: "", target: "", css: "disabled normal-cursor" },
                        { title: "Load debug manifest to current url", url: this.fullUrl + this.queryStr + "loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js", target: "_self", css: "pointer-cursor" },
                        { title: "Remote workbench", url: this.currSiteUrl + "/_layouts/workbench.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "Local workbench", url: "https://localhost:4321/temp/workbench.html", target: "_blank", css: "pointer-cursor" }
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
                        this.tenant = this.currSiteUrl.substring(0, this.currSiteUrl.indexOf(".sharepoint.com"));
                        this.admin = this.tenant.indexOf("-admin") > -1 ? this.tenant : this.tenant + "-admin";
                        this.admin = this.admin.replace("-my", "");
                        this.my = this.tenant.indexOf("-my") > -1 ? this.tenant : this.tenant + "-my";
                        this.my = this.my.replace("-admin", "");

                        this.links.unshift({ title: "Edit user profile", url: this.my + ".sharepoint.com/_layouts/15/editprofile.aspx", target: "_blank", css: "pointer-cursor" });
                        this.links.unshift({ title: "Current user", url: "", target: "", css: "disabled normal-cursor" });          
                        this.links.unshift({ title: "Search administration", url: this.admin + ".sharepoint.com/_layouts/15/searchadmin/TA_SearchAdministration.aspx", target: "_blank", css: "pointer-cursor" });
                        this.links.unshift({ title: "Term store", url: this.admin + ".sharepoint.com/_layouts/15/termstoremanager.aspx", target: "_blank", css: "pointer-cursor" });
                        this.links.unshift({ title: "User profiles", url: this.admin + ".sharepoint.com/_layouts/15/tenantprofileadmin/manageuserprofileserviceapplication.aspx", target: "_blank", css: "pointer-cursor" });
                        this.links.unshift({ title: "Classic admin center", url: this.admin + ".sharepoint.com/_layouts/15/online/SiteCollections.aspx", target: "_blank", css: "pointer-cursor" });
                        this.links.unshift({ title: "Admin center", url: this.admin + ".sharepoint.com/_layouts/15/online/AdminHome.aspx#/home", target: "_blank", css: "pointer-cursor" });
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
                                that.links.splice(i, 0, { title: "App Catalog", url: appCatalogUrl, target: "_blank", css: "pointer-cursor" });
                                that.update();
                            }
                        });
                    }
                }
                else {
                    this.info = true;
                    this.update();
                }
            });
        }.bind(this);

        this.init = function () {
            chrome.runtime.onConnect.addListener(function (port) {
                port.onMessage.addListener(this.listener);
            }.bind(this));

            chrome.tabs.executeScript({
                file: 'app/js/getContext.js'
            });

        }.bind(this);

        this.getCurrentTabUrl = function (e) {
            return new Promise(function (resolve, reject) {
                chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                    resolve(tabs[0].url.replace(/\/\s*$/, ""));
                });
            });
        }.bind(this);

        this.getAppCatalogUrl = function () {
            var url = this.currSiteUrl;
            return new Promise(function (resolve, reject) {
                fetch(url + '/_api/SP_TenantSettings_Current', {
                    method: 'get',
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
    });

riot.mount("spquicklinks");


