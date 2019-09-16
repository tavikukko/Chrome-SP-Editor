export const koko = function koko() {
  var speditorpnp = 'chrome-extension://fhmkckgemcefldphdihhdfkkecalppff/bundles/pnpjs.es5.umd.bundle.js'; 
  var sj = 'chrome-extension://fhmkckgemcefldphdihhdfkkecalppff/bundles/system.js'; 
  function exescript(script) {
    var params = arguments;

    if (window._spPageContextInfo) {

      if (typeof window.SystemJS == 'undefined') {
        var s = document.createElement('script');
        s.src = sj;
        s.onload = function () {
          script.apply(this, params);
        };
        (document.head || document.documentElement).appendChild(s);
      }
      else script.apply(this, params);
    }
    else if (window.moduleLoaderPromise) {
      // polyfill for _spPageContextInfo on modern sites
      window.moduleLoaderPromise.then(function (e) {

        window._spPageContextInfo = e.context._pageContext._legacyPageContext;

        if (typeof window.SystemJS == 'undefined') {
          var s = document.createElement('script');
          s.src = sj;
          s.onload = function () {
            script.apply(this, params);
          };
          (document.head || document.documentElement).appendChild(s);
        }
        else script.apply(this, params);

      });
    }
    else { alert("Could not get _spPageContextInfo, propably because this ain't a SharePoint site..") }

  } 
  function getCustomActions() {
    console.log('here2')
    Promise.all([window.SystemJS.import(speditorpnp)]).then(function (modules) {
      var $pnp = modules[0];

      $pnp.setup({
        sp: {
          headers: {
            "Accept": "application/json; odata=verbose"
          }
        }
      });

      var promises = [];
      var webactions = [];
      var siteactions = [];

      promises.push($pnp.sp.site.userCustomActions.get());
      promises.push($pnp.sp.web.userCustomActions.get());
      Promise.all(promises).then(promise => {
        promise.forEach(function (actions) {
          actions.forEach(function (action) {
            if (action.ScriptSrc || action.ScriptBlock) {

              var scripturl = action.ScriptSrc;
              if (!scripturl) {
                if (action.ScriptBlock.indexOf("href=\"") > -1) {
                  scripturl = action.ScriptBlock.substring(action.ScriptBlock.indexOf("href=\""));
                  scripturl = scripturl.substring(scripturl.indexOf("\"") + 1);
                  scripturl = scripturl.substring(0, scripturl.indexOf("\""));
                }
                else {
                  scripturl = action.ScriptBlock.substring(action.ScriptBlock.indexOf(".src"));
                  scripturl = scripturl.substring(scripturl.indexOf("\"") + 1);
                  scripturl = scripturl.substring(0, scripturl.indexOf("\""));
                }
              }
              if (scripturl.length < 1) scripturl = "No url";

              if (action.Scope == 3)
                webactions.push({
                  location: action.Location,
                  description: action.Description,
                  scripturl: scripturl,
                  sequence: action.Sequence,
                  scope: "web",
                  id: action.Id,
                  title: action.Title
                });
              else
                siteactions.push({
                  location: action.Location,
                  description: action.Description,
                  scripturl: scripturl,
                  sequence: action.Sequence,
                  scope: "site",
                  id: action.Id,
                  title: action.Title
                });
            }
          });
        });
        var actions = [];
        actions.push(webactions);
        actions.push(siteactions);
        console.log(actions)
        window.postMessage(JSON.stringify({
          function: 'getCustomActions',
          success: true,
          result: actions,
          source: 'chrome-sp-editor'
        }), '*');
      }
      );
    });
  } 
  exescript(getCustomActions);
}
