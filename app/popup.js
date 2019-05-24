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

        this.init = function () {
            this.getCurrentTabUrl().then(currUrl => {
                this.info = false;
                if (currUrl.indexOf(".sharepoint.com") === -1) {
                    this.info = true;
                    this.update();
                }
                if (this.info === false) {
                    this.fullUrl = currUrl;
                    currUrl = this.trimUrl(currUrl);

                    var tenant = currUrl.substring(0, currUrl.indexOf(".sharepoint.com"));

                    this.admin = tenant.indexOf("-admin") > -1 ? tenant : tenant + "-admin";
                    this.admin = this.admin.replace("-my", "");
                    this.my = tenant.indexOf("-my") > -1 ? tenant : tenant + "-my";
                    this.my = this.my.replace("-admin", "");

                    var that = this;
                    this.getAppCatalogUrl(currUrl).then(appCatalogUrl => {

                        that.links = [
                            { title: "Tenant", url: "", target: "", css: "disabled normal-cursor" },
                            { title: "Admin Center", url: this.admin + ".sharepoint.com/_layouts/15/online/AdminHome.aspx#/home", target: "_blank", css: "pointer-cursor" },
                            { title: "Classic Admin Center", url: this.admin + ".sharepoint.com/_layouts/15/online/SiteCollections.aspx", target: "_blank", css: "pointer-cursor" },
                            { title: "User Profiles", url: this.admin + ".sharepoint.com/_layouts/15/tenantprofileadmin/manageuserprofileserviceapplication.aspx", target: "_blank", css: "pointer-cursor" },
                            { title: "Term Store", url: this.admin + ".sharepoint.com/_layouts/15/termstoremanager.aspx", target: "_blank", css: "pointer-cursor" },
                            { title: "Search Administration", url: this.admin + ".sharepoint.com/_layouts/15/searchadmin/TA_SearchAdministration.aspx", target: "_blank", css: "pointer-cursor" },
                            { title: "App Catalog", url: appCatalogUrl, target: "_blank", css: "pointer-cursor" },
                            { title: "Current User", url: "", target: "", css: "disabled normal-cursor" },
                            { title: "Edit User Profile", url: this.my + ".sharepoint.com/_layouts/15/editprofile.aspx", target: "_blank", css: "pointer-cursor" },
                            { title: "Current Site", url: "", target: "", css: "disabled normal-cursor" },
                            { title: "Site Settings", url: currUrl + "/_layouts/15/settings.aspx", target: "_blank", css: "pointer-cursor" },

                            { title: "SPFx", url: "", target: "", css: "disabled normal-cursor" },
                            { title: "Load local SPFx", url: this.fullUrl + "?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js", target: "_self", css: "pointer-cursor" }
                        ]
                        that.update();
                        this.getPagesInfo(currUrl).then(pagesUrl => {
                            if (pagesUrl.indexOf("undefined") === -1) {
                                that.links.splice(11, 0, { title: "SitePages Settings", url: currUrl + pagesUrl, target: "_blank", css: "pointer-cursor" });
                                that.update();
                            }
                            else{
                                this.getClassicPagesInfo(currUrl).then(pagesUrl => {
                                    if (pagesUrl.indexOf("undefined") === -1) {
                                        that.links.splice(11, 0, { title: "Pages Settings", url: currUrl + pagesUrl, target: "_blank", css: "pointer-cursor" });
                                        that.update();
                                    }
                                });
                            }
                        });                       
                    });

                }
            });

        }.bind(this);

        this.getPagesInfo = function (url) {
            var apiUrl = url + "/_api/web/lists/getbytitle('Site%20Pages')?$select=Id";
            return new Promise(function (resolve, reject) {
                fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "Content-Type": "application/json;odata=nometadata",
                        "X-ClientService-ClientTag": "SPEditor",
                        "Cache-Control": "no-cache"
                    }
                }).then(response => response.json())
                    .then(function (r) {
                        resolve("/_layouts/15/listedit.aspx?List=%7B" + r.Id + "%7D");
                    })
            });
        }.bind(this);

        this.getClassicPagesInfo = function (url) {
            var classicApiUrl = url + "/_api/web/lists/getbytitle('Pages')?$select=Id";
            return new Promise(function (resolve, reject) {
                fetch(classicApiUrl, {
                            method: 'GET',
                            headers: {
                                "Accept": "application/json;odata=nometadata",
                                "Content-Type": "application/json;odata=nometadata",
                                "X-ClientService-ClientTag": "SPEditor",
                                "Cache-Control": "no-cache"
                            }
                        }).then(response => response.json())
                            .then(function (r) {
                                resolve("/_layouts/15/listedit.aspx?List=%7B" + r.Id + "%7D");
                            })
                      });
        }.bind(this);

        this.getCurrentTabUrl = function (e) {
            return new Promise(function (resolve, reject) {
                chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                    resolve(tabs[0].url);
                });
            });
        }.bind(this);

        this.getAppCatalogUrl = function (url) {
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

        this.trimUrl = function (url) {
            url = url.toLowerCase()
            if (url.indexOf("/sitepages") > -1) {
                url = url.substr(0, url.indexOf("/sitepages"));
            }
            if (url.indexOf("/lists") > -1) {
                url = url.substr(0, url.indexOf("/lists"));
            }
            if (url.indexOf("/_layouts") > -1) {
                url = url.substr(0, url.indexOf("/_layouts"));
            }
            if (url.indexOf("/style%20library") > -1) {
                url = url.substr(0, url.indexOf("/style%20library"));
            }
            if (url.indexOf("/shared%20documents") > -1) {
                url = url.substr(0, url.indexOf("/shared%20documents"));
            }
            if (url.indexOf("/siteassets") > -1) {
                url = url.substr(0, url.indexOf("/siteassets"));
            }
            if (url.indexOf("/pages") > -1) {
                url = url.substr(0, url.indexOf("/pages"));
            }
            if (url.indexOf("/formservertemplates") > -1) {
                url = url.substr(0, url.indexOf("/formservertemplates"));
            }
            if (url.indexOf("/_catalogs") > -1) {
                url = url.substr(0, url.indexOf("/_catalogs"));
            }
            return url;
        }
    });

riot.mount("spquicklinks");


