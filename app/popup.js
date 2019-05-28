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
            this.pagesLibraries = ['pages', 'sivut', 'Seiten', 'paginas', 'sidor', 'pagine', 'sider', 'orriak', '页面', 'pagini', 'strony', 'pagines', 'lehed', 'sayfalar', 'trang'];

            this.getCurrentTabUrl().then(tabUrl => {
                this.currSiteUrl = tabUrl;
                this.info = false;
                if (this.currSiteUrl.indexOf(".sharepoint.com") === -1) {
                    this.info = true;
                    this.update();
                }
                if (this.info === false) {
                    // fullUrl before modifying this.currSiteUrl
                    this.fullUrl = this.currSiteUrl;

                    // this.currSiteUrl trimmed url of site
                    this.currSiteUrl = this.trimUrl();

                    var tenant = this.currSiteUrl.substring(0, this.currSiteUrl.indexOf(".sharepoint.com"));

                    this.admin = tenant.indexOf("-admin") > -1 ? tenant : tenant + "-admin";
                    this.admin = this.admin.replace("-my", "");
                    this.my = tenant.indexOf("-my") > -1 ? tenant : tenant + "-my";
                    this.my = this.my.replace("-admin", "");

                    this.queryStr = "?";
                    if (this.fullUrl.indexOf("?") > -1) {
                        this.queryStr = "&";
                    }

                    this.links = [
                        { title: "Tenant", url: "", target: "", css: "disabled normal-cursor" },
                        { title: "Admin center", url: this.admin + ".sharepoint.com/_layouts/15/online/AdminHome.aspx#/home", target: "_blank", css: "pointer-cursor" },
                        { title: "Classic admin center", url: this.admin + ".sharepoint.com/_layouts/15/online/SiteCollections.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "User profiles", url: this.admin + ".sharepoint.com/_layouts/15/tenantprofileadmin/manageuserprofileserviceapplication.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "Term store", url: this.admin + ".sharepoint.com/_layouts/15/termstoremanager.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "Search administration", url: this.admin + ".sharepoint.com/_layouts/15/searchadmin/TA_SearchAdministration.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "Current user", url: "", target: "", css: "disabled normal-cursor" },
                        { title: "Edit user profile", url: this.my + ".sharepoint.com/_layouts/15/editprofile.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "Current site", url: "", target: "", css: "disabled normal-cursor" },
                        { title: "Site settings", url: this.currSiteUrl + "/_layouts/15/settings.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "Recycle bin", url: this.currSiteUrl + "/_layouts/15/AdminRecycleBin.aspx?view=5", target: "_blank", css: "pointer-cursor" },
                        { title: "SPFx", url: "", target: "", css: "disabled normal-cursor" },
                        { title: "Load debug manifest to current url", url: this.fullUrl + this.queryStr + "loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js", target: "_self", css: "pointer-cursor" },
                        { title: "Remote workbench", url: this.currSiteUrl + "/_layouts/workbench.aspx", target: "_blank", css: "pointer-cursor" },
                        { title: "Local workbench", url: "https://localhost:4321/temp/workbench.html", target: "_blank", css: "pointer-cursor" }

                    ]
                    this.update();

                    var that = this;
                    that.getAppCatalogUrl().then(appCatalogUrl => {
                        if (appCatalogUrl.indexOf("undefined") === -1) {
                            var index = that.links.findIndex(l => l.title === "Search administration");
                            var i = index > -1 ? index + 1 : 6
                            that.links.splice(i, 0, { title: "App Catalog", url: appCatalogUrl, target: "_blank", css: "pointer-cursor" });
                            that.update();
                        }
                    });

                    that.getPagesInfo().then(pagesUrl => {
                        var index = that.links.findIndex(l => l.title === "Recycle bin");
                        var i = index > -1 ? index + 1 : 11
                        if (pagesUrl !== undefined) {
                            if (pagesUrl.indexOf("undefined") === -1) {
                                that.links.splice(i, 0, { title: "Site Pages - library settings", url: this.currSiteUrl + pagesUrl, target: "_blank", css: "pointer-cursor" });
                                that.update();
                            }
                            else {
                                that.getClassicPagesInfo().then(pagesUrl => {
                                    if (pagesUrl.indexOf("undefined") === -1) {
                                        that.links.splice(i, 0, { title: "Pages - library settings", url: this.currSiteUrl + pagesUrl, target: "_blank", css: "pointer-cursor" });
                                        that.update();
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }.bind(this);

        this.getPagesInfo = function () {
            var apiUrl = this.currSiteUrl + "/_api/web/lists/getbytitle('Site%20Pages')?$select=Id";
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

        this.getClassicPagesInfo = function () {
            var classicApiUrl = this.currSiteUrl + "/_api/web/lists?$select=Title,Id";
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
                    .then(lists => {
                        if (lists !== undefined && lists.value !== undefined) {
                            var list = lists.value.filter(i => i.Title === "Pages");
                            resolve("/_layouts/15/listedit.aspx?List=%7B" + list[0].Id + "%7D");
                        }
                    })
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

        this.trimUrl = function () {
            var url = this.currSiteUrl.toLowerCase()
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
            // check array of common pages libraries
            var anyPages = this.pagesLibraries.find(u => url.indexOf(u) > -1);
            if (anyPages !== undefined) {
                url = url.substr(0, url.indexOf(anyPages) - 1);
            }
            if (url.indexOf("/formservertemplates") > -1) {
                url = url.substr(0, url.indexOf("/formservertemplates"));
            }
            if (url.indexOf("/_catalogs") > -1) {
                url = url.substr(0, url.indexOf("/_catalogs"));
            }
            if (url.indexOf("?") > -1) {
                url = url.substr(0, url.indexOf("?"));
            }
            return url;
        }
    });

riot.mount("spquicklinks");


