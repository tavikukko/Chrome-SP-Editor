riot.tag("keke", `
<ul class="list-group">
  <li each="{link in links}" onclick="{browse}" data-id="{link.url}" >{link.title}</li>
</ul>`,
    function (opts) {

        this.on("mount", function () {
            this.init();
        });

        this.init = function () {
            // add here the init code
            this.tenant = "https://valointranetdev-admin";

            this.links = [
                { title: "Classic Admin Center", url:this.tenant + ".sharepoint.com/_layouts/15/online/AdminHome.aspx#/home" },
                { title: "Tern Store", url:this.tenant + ".sharepoint.com//_layouts/15/termstoremanager.aspx" },
                { title: "SearchAdministration", url:this.tenant + ".sharepoint.com/_layouts/15/searchadmin/TA_SearchAdministration.aspx" }
            ]

            this.update();
        }.bind(this);

        this.browse = function (e) {
            chrome.tabs.create({
                url: e.target.dataset.id
            });

        }.bind(this);
    });

riot.mount("keke");


