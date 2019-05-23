riot.tag("spquicklinks", `
<ul if={!info} class="list-group">
  <li each="{link in links}" class="list-group-item {link.css}" style="cursor: pointer;" onclick="{browse}" data-id="{link.url}" data-target="{link.target}" >{link.title}</li>
</ul>
<p if={!info}  style="font-size: 10px; padding-left:10px;"> 
  Full Chrome-SP-Editor press f12 and select SharePoint tab..
</p>
<div if={info} class="panel-body"> 
  Could not load links, propably because this ain't a SharePoint site..
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
                    var tenant = currUrl.substring(0,currUrl.indexOf(".sharepoint.com"));

                    this.admin = tenant+"-admin";
                    this.my = tenant+"-my";
                    var that = this;

                    this.getAppCatalogUrl(currUrl).then(appCatalogUrl => {
                        that.links = [
                            { title: "Tenant Links", url: "", target: "", css: "disabled" },
                            { title: "Admin Center", url: this.admin + ".sharepoint.com/_layouts/15/online/AdminHome.aspx#/home", target: "_blank" },
                            { title: "Classic Admin Center", url: this.admin + ".sharepoint.com/_layouts/15/online/SiteCollections.aspx", target: "_blank" },
                            { title: "User Profiles", url: this.admin + ".sharepoint.com/_layouts/15/tenantprofileadmin/manageuserprofileserviceapplication.aspx", target: "_blank" },
                            { title: "Current User Profile", url: this.my + ".sharepoint.com/_layouts/15/editprofile.aspx", target: "_blank" },
                            { title: "Tenant Term Store", url: this.admin + ".sharepoint.com/_layouts/15/termstoremanager.aspx", target: "_blank" },
                            { title: "Tenant Search Administration", url: this.admin + ".sharepoint.com/_layouts/15/searchadmin/TA_SearchAdministration.aspx", target: "_blank" },
                            { title: "Tenant App Catalog", url: appCatalogUrl, target: "_blank" },
                            { title: "Load local SPFx", url: currUrl + "?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js", target: "_self" }
                        ]
                        that.update();
                    });
                }
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
    });

riot.mount("spquicklinks");


