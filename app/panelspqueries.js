var pnp = "var speditorpnp = '" + chrome.extension.getURL('app/js/pnpjs.es5.umd.bundle.js') + "';";
var sj = "var sj = '" + chrome.extension.getURL('app/js/system.js') + "';";
var alertify = "var alertify = '" + chrome.extension.getURL('app/js/alertify.js') + "';";

var mod_common = "var mod_common = '" + chrome.extension.getURL('app/js/common.es5.umd.bundle.js') + "';";
var mod_config = "var mod_config = '" + chrome.extension.getURL('app/js/config-store.es5.umd.bundle.js') + "';";
var mod_graph = "var mod_graph = '" + chrome.extension.getURL('app/js/graph.es5.umd.bundle.js') + "';";
var mod_logging = "var mod_logging = '" + chrome.extension.getURL('app/js/logging.es5.umd.bundle.js') + "';";
var mod_nodejs = "var mod_nodejs = '" + chrome.extension.getURL('app/js/nodejs.es5.umd.js') + "';";
var mod_odata = "var mod_odata = '" + chrome.extension.getURL('app/js/odata.es5.umd.bundle.js') + "';";
var mod_pnpjs = "var mod_pnpjs = '" + chrome.extension.getURL('app/js/pnpjs.es5.umd.bundle.js') + "';";
var mod_addin = "var mod_addin = '" + chrome.extension.getURL('app/js/sp-addinhelpers.es5.umd.bundle.js') + "';";
var mod_client = "var mod_client = '" + chrome.extension.getURL('app/js/sp-clientsvc.es5.umd.bundle.js') + "';";
var mod_taxonomy = "var mod_taxonomy = '" + chrome.extension.getURL('app/js/sp-taxonomy.es5.umd.bundle.js') + "';";
var mod_sp = "var mod_sp = '" + chrome.extension.getURL('app/js/sp.es5.umd.bundle.js') + "';";

// getCustomActions
var getCustomActions = function getCustomActions() {
  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

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
      window.postMessage(JSON.stringify({
        function: 'getCustomActions',
        success: true,
        result: actions,
        source: 'chrome-sp-editor'
      }), '*');
    }
    );
  });
};

/**
 * updateSchemaForWeb
 *
 * This function is used on "Search" tab to force a reindexing of a web
 */
var updateSchemaForWeb = function updateSchemaForWeb() {

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then((modules) => {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.select('AllProperties').expand('AllProperties').get().then((result) => {

      var allProps = [];
      for (aProp in result.AllProperties) {
        allProps.push({ prop: aProp.replace(/_x005f_/g, '_').replace(/OData_/g, ''), value: result.AllProperties[aProp] });
      }
      var prop = 'vti_searchversion';
      var value = 0;

      var searchversion = allProps.filter((el) => {
        return el.prop === "vti_searchversion";
      });

      if (searchversion.length > 0) {
        value = parseInt(searchversion[0].value);
        value = value + 1;
      }

      alertify.logPosition('bottom right');
      alertify.maxLogItems(2);

      alertify.confirm("Really want to reindex current web?\n<i>" + _spPageContextInfo.webAbsoluteUrl + "</i>", () => {

        alertify.delay(5000).log("Updating " + prop + " webproperty with value " + value);

        var webid = "";
        var siteid = "";
        $pnp.sp.site.get().then((data) => {
          siteid = data.Id;
          $pnp.sp.web.get().then((data) => {
            webid = data.Id;

            var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
            var payload = `
              <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
                <Actions>
                  <Method Name="SetFieldValue" Id="9" ObjectPathId="4">
                    <Parameters>
                      <Parameter Type="String">${prop}</Parameter>
                      <Parameter Type="String">${value}</Parameter>
                    </Parameters>
                  </Method>
                  <Method Name="Update" Id="10" ObjectPathId="2" />
                </Actions>
                <ObjectPaths>
                  <Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteid}:web:${webid}" />
                  <Property Id="4" ParentId="2" Name="AllProperties" />
                </ObjectPaths>
              </Request>`;

            var client = new $pnp.SPHttpClient();
            client.post(endpoint, {
              headers: {
                'Accept': '*/*',
                'Content-Type': 'text/xml;charset="UTF-8"',
                'X-Requested-With': 'XMLHttpRequest',

              },
              body: payload
            })
              .then((r) => { return r.json(); })
              .then((r) => {
                if (r[0].ErrorInfo) {
                  alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
                  window.postMessage(JSON.stringify({ function: 'updateSchemaForWeb', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
                } else {
                  alertify.delay(5000).success("Property updated successfully!");
                  window.postMessage(JSON.stringify({ function: 'updateSchemaForWeb', success: true, result: null, source: 'chrome-sp-editor' }), '*');
                }
              });

          }).catch((error) => {
            if (error.data.responseBody.hasOwnProperty('error'))
              alertify.delay(10000).error(error.data.responseBody.error.message.value);
            else
              alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
            window.postMessage(JSON.stringify({ function: 'updateSchemaForWeb', success: false, result: error, source: 'chrome-sp-editor' }), '*');
          });
        }).catch((error) => {
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
          window.postMessage(JSON.stringify({ function: 'updateSchemaForWeb', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });

      }, () => {
        // user clicked "cancel"
      });

    }).catch((error) => {
      window.postMessage(JSON.stringify({ function: 'updateSchemaForWeb', success: false, result: error, source: 'chrome-sp-editor' }), '*');
    });
  });
};

var addCustomAction = function addCustomAction() {

  var scope = arguments[1];
  var url = arguments[2];
  var sequence = arguments[3];

  var payload = {};
  payload.Location = 'ScriptLink';
  payload.Sequence = sequence;

  var querystrings = "";

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    if (url.split("?").length > 1) {
      querystrings = '?' + url.split("?")[1];
      url = url.split("?")[0];
    }

    // if url starts with ~ and ends .js we can inject with ScriptSrc (o365 / onprem)
    // if we are in o365, we can inject anything that ends with .js with ScriptSrc
    if ((url.indexOf("~") > -1 && url.match(/.js$/)) || (window.location.href.indexOf(".sharepoint.com") > 0 && url.match(/.js$/))) {
      payload.ScriptSrc = url + querystrings;
    }
    // if we are in onprem, files from CDN need to be injected using ScriptBlock
    else if (url.match(/.js$/) && window.location.href.indexOf(".sharepoint.com") == -1) {

      var headID = "";
      var newScript = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++)
        headID += possible.charAt(Math.floor(Math.random() * possible.length));
      for (var i = 0; i < 5; i++)
        newScript += possible.charAt(Math.floor(Math.random() * possible.length));

      var jsScriptBlock = "var " + headID + " = document.getElementsByTagName(\"head\")[0]; ";
      jsScriptBlock += "var " + newScript + " = document.createElement(\"script\");";
      jsScriptBlock += " " + newScript + ".type = \"text/javascript\";";
      jsScriptBlock += " " + newScript + ".src = \"" + url + querystrings + "\";";
      jsScriptBlock += " " + headID + ".appendChild(" + newScript + ");";
      payload.ScriptBlock = jsScriptBlock;
    }
    else if (url.match(/.css$/)) {
      payload.ScriptBlock = "if (window.location.href.toLowerCase().indexOf('_layouts/15/termstoremanager.aspx') === -1) { document.write('<link rel=\"stylesheet\" href=\"" + url + querystrings + "\" />');}";
    }
    else {
      alertify.delay(5000).error("Only JS and CSS files!!");
      return;
    }

    alertify.delay(5000).log("Adding scriptLink...");
    if (scope === 'site')
      $pnp.sp.site.userCustomActions.add(payload)
        .then(function (result) {
          alertify.delay(5000).success("ScriptLink added successfully!");
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
    else
      $pnp.sp.web.userCustomActions.add(payload)
        .then(function (result) {
          alertify.delay(5000).success("ScriptLink added successfully!");
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
  });
};

// removeCustomAction
var removeCustomAction = function removeCustomAction() {
  var scope = arguments[1];
  var id = arguments[2]

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to delete this scriptLink?", function () {
      alertify.delay(5000).log("Removing scriptLink...");

      if (scope === 'site') {
        $pnp.sp.site.userCustomActions.getById(id).delete().then(function (result) {
          alertify.delay(5000).success("ScriptLink removed successfully!");
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');

        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: false, result: error, source: 'chrome-sp-editor' }), '*');

        });
      }
      else {
        $pnp.sp.web.userCustomActions.getById(id).delete().then(function (result) {
          alertify.delay(5000).success("ScriptLink removed successfully!");
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');

        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: false, result: error, source: 'chrome-sp-editor' }), '*');

        });
      }
    }, function () {
      // user clicked "cancel"
    });
  });
};

// add new file to root site Style Library
var addFile = function addFile() {
  var filename = arguments[1];
  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.delay(5000).log("Adding '<b>" + filename + "</b>' to Style Library...");
    var contentStr = '/* Created from Chrome SP Editor */';
    var contentBytes = new Uint8Array(contentStr.length);
    for (var i = 0; i < contentStr.length; i++)
      contentBytes[i] = contentStr.charCodeAt(i);

    $pnp.sp.site.rootWeb.getFolderByServerRelativeUrl("Style Library").files.add(filename, contentBytes).then(function (result) {
      alertify.delay(5000).success("File added successfully!");
      window.postMessage(JSON.stringify({ function: 'addFile', success: true, result: null, source: 'chrome-sp-editor' }), '*');
    }).catch(function (error) {
      if (error.data.responseBody.hasOwnProperty('error'))
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
      else
        alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);

      window.postMessage(JSON.stringify({ function: 'addFile', success: false, result: error, source: 'chrome-sp-editor' }), '*');
    });
  });
};

// getWebProperties
var getWebProperties = function getWebProperties() {
  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.select('AllProperties').expand('AllProperties').get().then(function (result) {

      var compare = function compare(a, b) {
        if (a.prop.toLowerCase() < b.prop.toLowerCase())
          return -1;
        if (a.prop.toLowerCase() > b.prop.toLowerCase())
          return 1;
        return 0;
      }

      var arr = [];
      for (x in result.AllProperties) {

        var re = /_x.*?_/g;
        var found = x.match(re);
        var y = x;

        if (found != null)
          for (g in found) {
            var unesc = found[g].replace("_x", "%u").replace("_", "");
            x = x.replace(found[g], unescape(unesc));
          }

        arr.push({ prop: x.replace(/OData_/g, ''), value: result.AllProperties[y] });
      }

      arr.sort(compare);

      var propertyBag = arr.filter(function (el) {
        return el.prop !== "odata.editLink" && el.prop !== "odata.id" && el.prop !== "odata.type" && el.prop !== "__metadata";
      });

      window.postMessage(JSON.stringify({ function: 'getWebProperties', success: true, result: propertyBag, source: 'chrome-sp-editor' }), '*');

    }).catch(function (error) {
      window.postMessage(JSON.stringify({ function: 'getWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
    });
  });
};

// addWebProperties
var addWebProperties = function addWebProperties() {

  var prop = arguments[1];
  var value = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then((modules) => {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.delay(5000).log("Adding " + prop + " webproperty...");

    var webid = "";
    var siteid = "";
    $pnp.sp.site.get().then((data) => {
      siteid = data.Id;
      $pnp.sp.web.get().then((data) => {
        webid = data.Id;

        var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
        var payload = `
          <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
            <Actions>
              <Method Name="SetFieldValue" Id="9" ObjectPathId="4">
                <Parameters>
                  <Parameter Type="String">${prop}</Parameter>
                  <Parameter Type="String">${value}</Parameter>
                </Parameters>
              </Method>
              <Method Name="Update" Id="10" ObjectPathId="2" />
            </Actions>
            <ObjectPaths>
              <Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteid}:web:${webid}" />
              <Property Id="4" ParentId="2" Name="AllProperties" />
            </ObjectPaths>
          </Request>`;

        var client = new $pnp.SPHttpClient();
        client.post(endpoint, {
          headers: {
            'Accept': '*/*',
            'Content-Type': 'text/xml;charset="UTF-8"',
            'X-Requested-With': 'XMLHttpRequest',

          },
          body: payload
        })
          .then((r) => { return r.json(); })
          .then((r) => {
            if (r[0].ErrorInfo) {
              alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
              window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
            } else {
              alertify.delay(5000).success("Property added successfully!");
              window.postMessage(JSON.stringify({ function: 'addWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
            }
          });

      }).catch((error) => {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
    }).catch((error) => {
      if (error.data.responseBody.hasOwnProperty('error'))
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
      else
        alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
      window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
    });

  });
};

// updateWebProperties
var updateWebProperties = function updateWebProperties() {

  var prop = arguments[1];
  var value = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then((modules) => {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to update <b>" + prop + "</b> property?", () => {

      alertify.delay(5000).log("Updating " + prop + " webproperty...");

      var webid = "";
      var siteid = "";
      $pnp.sp.site.get().then(function (data) {
        siteid = data.Id;
        $pnp.sp.web.get().then(function (data) {
          webid = data.Id;

          var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
          var payload = `
            <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
              <Actions>
                <Method Name="SetFieldValue" Id="9" ObjectPathId="4">
                  <Parameters>
                    <Parameter Type="String">${prop}</Parameter>
                    <Parameter Type="String">${value}</Parameter>
                  </Parameters>
                </Method>
                <Method Name="Update" Id="10" ObjectPathId="2" />
              </Actions>
              <ObjectPaths>
                <Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteid}:web:${webid}" />
                <Property Id="4" ParentId="2" Name="AllProperties" />
              </ObjectPaths>
            </Request>`;

          var client = new $pnp.SPHttpClient();
          client.post(endpoint, {
            headers: {
              'Accept': '*/*',
              'Content-Type': 'text/xml;charset="UTF-8"',
              'X-Requested-With': 'XMLHttpRequest',

            },
            body: payload
          })
            .then((r) => { return r.json(); })
            .then((r) => {
              if (r[0].ErrorInfo) {
                alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
                window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
              } else {
                alertify.delay(5000).success("Property updated successfully!");
                window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
              }
            });

        }).catch((error) => {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
      }).catch((error) => {
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
        window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });

    }, function () {
      // user clicked "cancel"
    });

  });

};

// deleteWebProperties
var deleteWebProperties = function deleteWebProperties() {
  var prop = arguments[1];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then((modules) => {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to delete <b>" + prop + "</b> property?", () => {

      var webid = "";
      var siteid = "";

      alertify.delay(5000).log("Removing " + prop + " from webproperties...");

      $pnp.sp.site.get().then((data) => {
        siteid = data.Id;
        $pnp.sp.web.get().then((data) => {
          webid = data.Id;

          var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
          var payload = `
            <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
              <Actions>
                <Method Name="SetFieldValue" Id="9" ObjectPathId="4">
                  <Parameters>
                    <Parameter Type="String">${prop}</Parameter>
                    <Parameter Type="Null" />
                  </Parameters>
                </Method>
                <Method Name="Update" Id="10" ObjectPathId="2" />
              </Actions>
              <ObjectPaths>
                <Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteid}:web:${webid}" />
                <Property Id="4" ParentId="2" Name="AllProperties" />
              </ObjectPaths>
            </Request>`;

          var client = new $pnp.SPHttpClient();
          client.post(endpoint, {
            headers: {
              'Accept': '*/*',
              'Content-Type': 'text/xml;charset="UTF-8"',
              'X-Requested-With': 'XMLHttpRequest',

            },
            body: payload
          })
            .then((r) => { return r.json(); })
            .then((r) => {
              if (r[0].ErrorInfo) {
                alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
                window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
              } else {
                alertify.delay(5000).success("Property deleted successfully!");
                if (prop != "vti_indexedpropertykeys") {
                  addToIndexedPropertyKeys.apply(this, ['', prop, true]);
                }
                window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
              }
            });

        }).catch((error) => {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
      }).catch((error) => {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
    }, () => {
      // user clicked "cancel"
    });
  });
};

// addToIndexedPropertyKeys
var addToIndexedPropertyKeys = function addToIndexedPropertyKeys() {
  var prop = arguments[1];
  var remove = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then((modules) => {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.select('AllProperties').expand('AllProperties').get().then((result) => {

      var arr = [];
      for (x in result.AllProperties)
        arr.push({ prop: x.replace(/_x005f_/g, '_').replace(/OData_/g, ''), value: result.AllProperties[x] });

      var propertyBag = arr.filter(function (el) {
        return el.prop === "vti_indexedpropertykeys";
      });

      if (propertyBag.length < 1 && remove) return;

      var bytes = [];
      for (var i = 0; i < prop.length; ++i) {
        bytes.push(prop.charCodeAt(i));
        bytes.push(0);
      }
      var b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));

      var newIndexValue = "";

      if (!remove) {
        if (propertyBag.length > 0) {
          if (propertyBag[0].value.indexOf(b64encoded) == -1) {
            newIndexValue = propertyBag[0].value + b64encoded + "|";
          }
          else {
            alertify.delay(10000).error('Property key ' + prop + ' already indexed!');
            return;
          }
        }
        else {
          newIndexValue = b64encoded + "|";
        }
      }
      else {
        if (propertyBag[0].value.indexOf(b64encoded + "|") == -1) return;
        newIndexValue = propertyBag[0].value.replace(b64encoded + "|", "");
      }

      if (remove)
        alertify.delay(5000).log("Removing '<b>" + prop + "</b>' from vti_indexedpropertykeys...");
      else
        alertify.delay(5000).log("Adding '<b>" + prop + "</b>' to vti_indexedpropertykeys...");

      var webid = "";
      var siteid = "";
      $pnp.sp.site.get().then((data) => {
        siteid = data.Id;
        $pnp.sp.web.get().then((data) => {
          webid = data.Id;

          var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
          var payload = `
            <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
              <Actions>
                <Method Name="SetFieldValue" Id="9" ObjectPathId="4">
                  <Parameters>
                    <Parameter Type="String">vti_indexedpropertykeys</Parameter>
                    <Parameter Type="String">${newIndexValue}</Parameter>
                  </Parameters>
                </Method>
                <Method Name="Update" Id="10" ObjectPathId="2" />
              </Actions>
              <ObjectPaths>
                <Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteid}:web:${webid}" />
                <Property Id="4" ParentId="2" Name="AllProperties" />
              </ObjectPaths>
            </Request>`;

          var client = new $pnp.SPHttpClient();
          client.post(endpoint, {
            headers: {
              'Accept': '*/*',
              'Content-Type': 'text/xml;charset="UTF-8"',
              'X-Requested-With': 'XMLHttpRequest',

            },
            body: payload
          })
            .then((r) => { return r.json(); })
            .then((r) => {
              if (r[0].ErrorInfo) {
                alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
                window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
              } else {
                if (remove) {
                  alertify.delay(5000).success("Property removed from vti_indexedpropertykeys successfully!");
                }
                else {
                  alertify.delay(5000).success("Property added to vti_indexedpropertykeys successfully!");
                }
                window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: true, result: null, source: 'chrome-sp-editor' }), '*');
              }
            });

        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value); window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
      }).catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
    }).catch(function (error) {
      if (error.data.responseBody.hasOwnProperty('error'))
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
      else
        alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
      window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
    });
  });
};

// getListProperties
var getListProperties = function getListProperties() {

  var listId = arguments[1];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.lists.getById(listId).expand('RootFolder/Properties')
      .select('RootFolder/Properties').get().then(function (result) {

        var compare = function compare(a, b) {
          if (a.prop.toLowerCase() < b.prop.toLowerCase())
            return -1;
          if (a.prop.toLowerCase() > b.prop.toLowerCase())
            return 1;
          return 0;
        }

        var arr = [];
        for (x in result.RootFolder.Properties) {

          var re = /_x.*?_/g;
          var found = x.match(re);
          var y = x;

          if (found != null)
            for (g in found) {
              var unesc = found[g].replace("_x", "%u").replace("_", "");
              x = x.replace(found[g], unescape(unesc));
            }

          arr.push({ prop: x.replace(/OData_/g, ''), value: result.RootFolder.Properties[y] });
        }

        arr.sort(compare);

        var propertyBag = arr.filter(function (el) {
          return el.prop !== "odata.editLink" && el.prop !== "odata.id" && el.prop !== "odata.type" && el.prop !== "__metadata";
        });

        window.postMessage(JSON.stringify({ function: 'getListProperties', success: true, result: propertyBag, source: 'chrome-sp-editor' }), '*');

      }).catch(function (error) {
        window.postMessage(JSON.stringify({ function: 'getListProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
  });
};

var getLists = function getLists() {

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.lists.get().then(function (lists) {

      var weblists = [];

      lists.forEach(function (list) {
        weblists.push({ listTitle: list.Title, listId: list.Id });
      });

      window.postMessage(JSON.stringify({ function: 'getLists', success: true, result: weblists, source: 'chrome-sp-editor' }), '*');
    }).catch(function (error) {
      if (error.data.responseBody.hasOwnProperty('error'))
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
      else
        alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
    });
  });
};

// addListProperties
var addListProperties = function addListProperties() {

  var prop = arguments[1];
  var value = arguments[2];
  var listId = arguments[3];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then((modules) => {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.delay(5000).log("Adding " + prop + " listproperty...");

    var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
    var payload = `
      <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
        <Actions>
          <ObjectPath Id="1" ObjectPathId="0" />
          <ObjectPath Id="3" ObjectPathId="2" />
          <ObjectPath Id="5" ObjectPathId="4" />
          <ObjectPath Id="7" ObjectPathId="6" />
          <ObjectPath Id="9" ObjectPathId="8" />
          <ObjectPath Id="11" ObjectPathId="10" />
          <Method Name="SetFieldValue" Id="12" ObjectPathId="10">
            <Parameters>
              <Parameter Type="String">${prop}</Parameter>
              <Parameter Type="String">${value}</Parameter>
            </Parameters>
          </Method>
          <Method Name="Update" Id="13" ObjectPathId="8" />
        </Actions>
        <ObjectPaths>
          <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
          <Property Id="2" ParentId="0" Name="Web" />
          <Property Id="4" ParentId="2" Name="Lists" />
          <Method Id="6" ParentId="4" Name="GetById">
            <Parameters>
              <Parameter Type="String">${listId}</Parameter>
            </Parameters>
          </Method>
          <Property Id="8" ParentId="6" Name="RootFolder" />
          <Property Id="10" ParentId="8" Name="Properties" />
        </ObjectPaths>
      </Request>`;

    var client = new $pnp.SPHttpClient();
    client.post(endpoint, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'text/xml;charset="UTF-8"',
        'X-Requested-With': 'XMLHttpRequest',

      },
      body: payload
    })
      .then((r) => { return r.json(); })
      .then((r) => {
        if (r[0].ErrorInfo) {
          alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
          window.postMessage(JSON.stringify({ function: 'addListProperties', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
        } else {
          alertify.delay(5000).success("List property added successfully!");
          window.postMessage(JSON.stringify({ function: 'addListProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }
      });
  });
};

// updateListProperties
var updateListProperties = function updateListProperties() {

  var prop = arguments[1];
  var value = arguments[2];
  var listId = arguments[3];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then((modules) => {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to update <b>" + prop + "</b> property?", () => {

      alertify.delay(5000).log("Updating " + prop + " listproperty...");

      var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
      var payload = `
      <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
        <Actions>
          <ObjectPath Id="1" ObjectPathId="0" />
          <ObjectPath Id="3" ObjectPathId="2" />
          <ObjectPath Id="5" ObjectPathId="4" />
          <ObjectPath Id="7" ObjectPathId="6" />
          <ObjectPath Id="9" ObjectPathId="8" />
          <ObjectPath Id="11" ObjectPathId="10" />
          <Method Name="SetFieldValue" Id="12" ObjectPathId="10">
            <Parameters>
              <Parameter Type="String">${prop}</Parameter>
              <Parameter Type="String">${value}</Parameter>
            </Parameters>
          </Method>
          <Method Name="Update" Id="13" ObjectPathId="8" />
        </Actions>
        <ObjectPaths>
          <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
          <Property Id="2" ParentId="0" Name="Web" />
          <Property Id="4" ParentId="2" Name="Lists" />
          <Method Id="6" ParentId="4" Name="GetById">
            <Parameters>
              <Parameter Type="String">${listId}</Parameter>
            </Parameters>
          </Method>
          <Property Id="8" ParentId="6" Name="RootFolder" />
          <Property Id="10" ParentId="8" Name="Properties" />
        </ObjectPaths>
      </Request>`;

      var client = new $pnp.SPHttpClient();
      client.post(endpoint, {
        headers: {
          'Accept': '*/*',
          'Content-Type': 'text/xml;charset="UTF-8"',
          'X-Requested-With': 'XMLHttpRequest',

        },
        body: payload
      })
        .then((r) => { return r.json(); })
        .then((r) => {
          if (r[0].ErrorInfo) {
            alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
            window.postMessage(JSON.stringify({ function: 'updateListProperties', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
          } else {
            alertify.delay(5000).success("List property updated successfully!");
            window.postMessage(JSON.stringify({ function: 'updateListProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
          }
        });
    }, function () {
      // user clicked "cancel"
    });
  });
};

// deleteListProperties
var deleteListProperties = function deleteListProperties() {

  var prop = arguments[1];
  var listId = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then((modules) => {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to remove <b>" + prop + "</b> property?", () => {

      alertify.delay(5000).log("Removing " + prop + " listproperty...");

      var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
      var payload = `
      <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
        <Actions>
          <ObjectPath Id="1" ObjectPathId="0" />
          <ObjectPath Id="3" ObjectPathId="2" />
          <ObjectPath Id="5" ObjectPathId="4" />
          <ObjectPath Id="7" ObjectPathId="6" />
          <ObjectPath Id="9" ObjectPathId="8" />
          <ObjectPath Id="11" ObjectPathId="10" />
          <Method Name="SetFieldValue" Id="12" ObjectPathId="10">
            <Parameters>
              <Parameter Type="String">${prop}</Parameter>
              <Parameter Type="Null" />
            </Parameters>
          </Method>
          <Method Name="Update" Id="13" ObjectPathId="8" />
        </Actions>
        <ObjectPaths>
          <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
          <Property Id="2" ParentId="0" Name="Web" />
          <Property Id="4" ParentId="2" Name="Lists" />
          <Method Id="6" ParentId="4" Name="GetById">
            <Parameters>
              <Parameter Type="String">${listId}</Parameter>
            </Parameters>
          </Method>
          <Property Id="8" ParentId="6" Name="RootFolder" />
          <Property Id="10" ParentId="8" Name="Properties" />
        </ObjectPaths>
      </Request>`;

      var client = new $pnp.SPHttpClient();
      client.post(endpoint, {
        headers: {
          'Accept': '*/*',
          'Content-Type': 'text/xml;charset="UTF-8"',
          'X-Requested-With': 'XMLHttpRequest',

        },
        body: payload
      })
        .then((r) => { return r.json(); })
        .then((r) => {
          if (r[0].ErrorInfo) {
            alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
            window.postMessage(JSON.stringify({ function: 'deleteListProperties', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
          } else {
            alertify.delay(5000).success("List property removed successfully!");
            if (prop != "vti_indexedpropertykeys") {
              addToIndexedListPropertyKeys.apply(this, ['', prop, listId, true]);
            }
            window.postMessage(JSON.stringify({ function: 'deleteListProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
          }
        });
    }, () => {
      // user clicked "cancel"
    });
  });
};

// addToIndexedListPropertyKeys
var addToIndexedListPropertyKeys = function addToIndexedListPropertyKeys() {
  var prop = arguments[1];
  var listId = arguments[2];
  var remove = arguments[3];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.lists.getById(listId).expand('RootFolder/Properties')
      .select('RootFolder/Properties').get().then(function (result) {

        var arr = [];
        for (x in result.RootFolder.Properties)
          arr.push({ prop: x.replace(/_x005f_/g, '_').replace(/OData_/g, ''), value: result.RootFolder.Properties[x] });

        var propertyBag = arr.filter(function (el) {
          return el.prop === "vti_indexedpropertykeys";
        });

        if (propertyBag.length < 1 && remove) return;

        var bytes = [];
        for (var i = 0; i < prop.length; ++i) {
          bytes.push(prop.charCodeAt(i));
          bytes.push(0);
        }
        var b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));

        var newIndexValue = "";

        if (!remove) {
          if (propertyBag.length > 0) {
            if (propertyBag[0].value.indexOf(b64encoded) == -1) {
              newIndexValue = propertyBag[0].value + b64encoded + "|";
            }
            else {
              alertify.delay(10000).error('Property key ' + prop + ' already indexed!');
              return;
            }
          }
          else {
            newIndexValue = b64encoded + "|";
          }
        }
        else {
          if (propertyBag[0].value.indexOf(b64encoded) == -1) return;
          newIndexValue = propertyBag[0].value.replace(b64encoded + "|", "");
        }

        if (remove)
          alertify.delay(5000).log("Removing '<b>" + prop + "</b>' from vti_indexedpropertykeys...");
        else
          alertify.delay(5000).log("Adding '<b>" + prop + "</b>' to vti_indexedpropertykeys...");


        var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
        var payload = `
      <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
        <Actions>
          <ObjectPath Id="1" ObjectPathId="0" />
          <ObjectPath Id="3" ObjectPathId="2" />
          <ObjectPath Id="5" ObjectPathId="4" />
          <ObjectPath Id="7" ObjectPathId="6" />
          <ObjectPath Id="9" ObjectPathId="8" />
          <ObjectPath Id="11" ObjectPathId="10" />
          <Method Name="SetFieldValue" Id="12" ObjectPathId="10">
            <Parameters>
              <Parameter Type="String">vti_indexedpropertykeys</Parameter>
              <Parameter Type="String">${newIndexValue}</Parameter>
            </Parameters>
          </Method>
          <Method Name="Update" Id="13" ObjectPathId="8" />
        </Actions>
        <ObjectPaths>
          <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
          <Property Id="2" ParentId="0" Name="Web" />
          <Property Id="4" ParentId="2" Name="Lists" />
          <Method Id="6" ParentId="4" Name="GetById">
            <Parameters>
              <Parameter Type="String">${listId}</Parameter>
            </Parameters>
          </Method>
          <Property Id="8" ParentId="6" Name="RootFolder" />
          <Property Id="10" ParentId="8" Name="Properties" />
        </ObjectPaths>
      </Request>`;

        var client = new $pnp.SPHttpClient();
        client.post(endpoint, {
          headers: {
            'Accept': '*/*',
            'Content-Type': 'text/xml;charset="UTF-8"',
            'X-Requested-With': 'XMLHttpRequest',

          },
          body: payload
        })
          .then((r) => { return r.json(); })
          .then((r) => {
            if (r[0].ErrorInfo) {
              alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
              window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
            } else {
              if (remove) {
                alertify.delay(5000).success("Property removed from vti_indexedpropertykeys successfully!");
              }
              else {
                alertify.delay(5000).success("Property added to vti_indexedpropertykeys successfully!"); window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: true, result: null, source: 'chrome-sp-editor' }), '*');
              }
              window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: true, result: null, source: 'chrome-sp-editor' }), '*');
            }
          });

      }).catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
  });
};

var exescript = function exescript(script) {
  var params = arguments;

  if (window._spPageContextInfo) {

    if (typeof SystemJS == 'undefined') {
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

      if (typeof SystemJS == 'undefined') {
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

};

var alertError = function alertError() {

  var errorMsg = arguments[1];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.delay(10000).error(errorMsg);

  });
};

var getSubscriptions = function getSubscriptions() {

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.lists.expand('Subscriptions').get().then(function (lists) {

      var webHookSubscriptions = [];
      var weblists = [];
      lists.forEach(function (list) {
        weblists.push({ listTitle: list.Title, listId: list.Id });
        if (list.Subscriptions.results.length > 0) {
          list.Subscriptions.results.forEach(function (subscription) {
            webHookSubscriptions.push({
              listTitle: list.Title,
              listId: list.Id,
              subExpirationDateTime: subscription.expirationDateTime,
              subId: subscription.id,
              subNotificationUrl: subscription.notificationUrl,
              subClientState: subscription.clientState
            });
          });
        }
      });

      window.postMessage(JSON.stringify({ function: 'getSubscriptions', success: true, result: webHookSubscriptions, lists: weblists, source: 'chrome-sp-editor' }), '*');
    }).catch(function (error) {
      if (error.data.responseBody.hasOwnProperty('error'))
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
      else
        alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
    });
  });
};

var addSubscriptions = function addSubscriptions() {

  var listId = arguments[1];
  var hookurl = arguments[2];
  var clientstate = arguments[3];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var today = new Date();
    var expirationDate = new Date(today.setDate(today.getDate() + 90)).toISOString(); // expire in 3 months

    alertify.delay(5000).log("Adding webhook...");

    $pnp.sp.web.lists.getById(listId).subscriptions.add(hookurl, expirationDate, clientstate).then(function (result) {
      alertify.delay(5000).success("Webhook added successfully!");
      window.postMessage(JSON.stringify({ function: 'addSubscriptions', success: true, result: null, source: 'chrome-sp-editor' }), '*');
    })
      .catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
      });
  });
};

var removeSubscription = function removeSubscription() {

  var listId = arguments[1];
  var subId = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to delete webhook with id <b>" + subId + "</b> ?", function () {

      alertify.delay(5000).log("Removing webhook...");

      $pnp.sp.web.lists.getById(listId).subscriptions.getById(subId).delete().then(function (result) {
        alertify.delay(5000).success("Webhook removed successfully!");
        window.postMessage(JSON.stringify({ function: 'removeSubscription', success: true, result: null, source: 'chrome-sp-editor' }), '*');
      })
        .catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        });
    }, function () {
      // user clicked "cancel"
    });
  });
};

var updateSubscription = function updateSubscription() {

  var listId = arguments[1];
  var subId = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to update webhook with id <b>" + subId + "</b> exp date to 6 months from now?", function () {

      alertify.delay(5000).log("Updating webhook expiration date 6 months from now ...");

      var today = new Date();
      var expirationDate = new Date(today.setDate(today.getDate() + 180)).toISOString();

      $pnp.sp.web.lists.getById(listId).subscriptions.getById(subId).update(expirationDate)
        .then(function (result) {
          alertify.delay(5000).success("Webhook expiration date updated successfully!");
          window.postMessage(JSON.stringify({ function: 'updateSubscription', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        })
        .catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        });
    }, function () {
      // user clicked "cancel"
    });
  });
};

var getZonesAndWebparts = function getZonesAndWebparts() {
  var selectAll = function (parent, selector) {
    return Array.prototype.slice.call(parent.querySelectorAll(selector));
  };

  var webpartsFromDOM = selectAll(document, 'div.ms-webpart-zone')
    .map(zone => ({
      webparts: selectAll(zone, '.ms-webpartzone-cell')
        .filter(cell => {
          var wpid = cell.querySelector('[webpartid]');
          return wpid !== null && wpid.value !== "00000000-0000-0000-0000-000000000000"
        })
        .map(cell => ({
          id: cell.querySelector('[webpartid]').attributes['webpartid'].value,
          title: (cell.querySelector('.ms-webpart-titleText > nobr > span:first-child') || {}).innerHTML,
        }))
    }));

  window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts', success: true, result: webpartsFromDOM, source: 'chrome-sp-editor' }), '*');

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    if (_spPageContextInfo.serverRequestPath.toLowerCase().indexOf("_layouts/") == -1)
      $pnp.sp.web.getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath)
        .getLimitedWebPartManager($pnp.WebPartsPersonalizationScope.Shared)
        .webparts.expand("webpart")
        .select("Id, ZoneId, Title, ZoneIndex").get().then(webparts => {
          var webpartsFromWPM = [];
          webparts.forEach(function (webpart) {
            webpartsFromWPM.push({ id: webpart.Id, zoneId: webpart.ZoneId, title: webpart.WebPart.Title, zoneIndex: webpart.WebPart.ZoneIndex });
          });
          window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts2', success: true, result: webpartsFromWPM, source: 'chrome-sp-editor' }), '*');
        }).catch(function (error) {
          var err = "";
          if (error.data.responseBody.hasOwnProperty('error'))
            err = error.data.responseBody.error.message.value;
          else
            err = error.data.responseBody['odata.error'].message.value;
          window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts2', success: false, result: err, source: 'chrome-sp-editor' }), '*');
        });
    else {
      window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts2', success: false, result: null, source: 'chrome-sp-editor' }), '*');
      return;
    }

    var getFileContent = function (serverRelativeUrl) {
      var absolutePart = location.protocol + '//' + location.host;
      var serverRelativeUrl = serverRelativeUrl.replace(absolutePart, '');
      var r = new Sys.Net.WebRequest();
      r.set_url(absolutePart + _spPageContextInfo.siteServerRelativeUrl + "/_api/web/GetFileByServerRelativeUrl('" + serverRelativeUrl + "')/$value");
      r.set_httpVerb("GET");
      r.add_completed((executor, args) => {
        if (executor.get_responseAvailable()) {
          if (executor.get_statusCode() != "200")
            window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts3', success: false, result: "" + executor.get_statusCode(), source: 'chrome-sp-editor' }), '*');
          else {
            var match = executor.get_responseData().replace(/[\r\n]/g, '').match(/<[A-Za-z0-9]+:WebPartZone(?:\s(?:%>|[^>])*)?\sID=['"][A-Za-z0-9_\-]+['"]/gi);
            if (match) {
              var zones = match.map(s => s.match(/\sID=['"]([A-Za-z0-9_\-]+)['"]/i)[1]);
              window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts3', success: true, result: zones, source: 'chrome-sp-editor' }), '*');
            }
          }
        }
        else {
          if (executor.get_timedOut() || executor.get_aborted())
            window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts3', success: false, result: "Request failed", source: 'chrome-sp-editor' }), '*');
        }
      });
      r.invoke();
    }

    $pnp.sp.web.getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath)
      .listItemAllFields.select("PublishingPageLayout").get().then(g => {
        getFileContent(g.PublishingPageLayout.Url);
      }).catch(function (error) {
        getFileContent(_spPageContextInfo.serverRequestPath);
      });
  });
};

var loadWebpart = function loadWebpart() {
  var wpId = arguments[1];
  var pageurl = location.protocol + '//' + location.host + _spPageContextInfo.serverRequestPath;

  var req = new XMLHttpRequest();
  req.addEventListener("load", function () {
    window.postMessage(JSON.stringify({
      function: 'loadWebpart',
      success: true,
      result: { id: wpId, xml: this.responseText },
      source: 'chrome-sp-editor'
    }), '*');
  });
  req.open("GET", _spPageContextInfo.siteAbsoluteUrl +
    "/_vti_bin/exportwp.aspx?pageurl=" +
    pageurl +
    "&guidstring=" +
    wpId);
  req.send();

};

// replaces webpart with wpId or adds a new webpart if wpId is null
// returns id of the newly created webpart
var saveWebpart = function saveWebpart() {
  var wpId = arguments[1];
  var xml = decodeURIComponent(arguments[2]);
  var zoneId = arguments[3];
  var zoneIndex = 0;

  var pageurl = location.protocol + '//' + location.host + _spPageContextInfo.serverRequestPath;

  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', () => {
    var context = SP.ClientContext.get_current();
    var page = context.get_web().getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath);
    var wpm = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
    if (wpId != "new") {
      var oldWpDef = wpm.get_webParts().getById(new SP.Guid(wpId));
      var oldWp = oldWpDef.get_webPart();
      context.load(oldWpDef, 'ZoneId');
      context.load(oldWp, 'ZoneIndex');
    }

    context.executeQueryAsync(function () {
      var importedDef = wpm.importWebPart(xml);
      var newWp = importedDef.get_webPart();
      if (wpId != "new") {
        zoneId = oldWpDef.get_zoneId();
        zoneIndex = oldWp.get_zoneIndex();
      }
      var newWpDef = wpm.addWebPart(newWp, zoneId, zoneIndex);
      if (wpId != "new")
        oldWpDef.deleteWebPart();
      context.load(newWpDef);

      context.executeQueryAsync(function () {
        window.postMessage(JSON.stringify({ function: 'saveWebpart', success: true, result: newWpDef.get_id().toString(), source: 'chrome-sp-editor' }), '*');
      }, function (sender, args) {
        window.postMessage(JSON.stringify({ function: 'saveWebpart', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
      });
    },
      function (sender, args) {
        window.postMessage(JSON.stringify({ function: 'saveWebpart', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
      });
  });
};

var deleteWebpart = function deleteWebpart() {
  var wpId = arguments[1];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    $pnp.sp.web.getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath)
      .getLimitedWebPartManager($pnp.WebPartsPersonalizationScope.Shared)
      .webparts.getById(wpId).delete().then(g => {
        var wpCellInDOM = document.querySelector(`[webpartid='${wpId}']`).parentNode.parentNode;
        wpCellInDOM.parentNode.removeChild(wpCellInDOM);
        window.postMessage(JSON.stringify({ function: 'deleteWebpart', success: true, result: null, source: 'chrome-sp-editor' }), '*');
      }).catch(function (error) {
        var err = "";
        if (error.data.responseBody.hasOwnProperty('error'))
          err = error.data.responseBody.error.message.value;
        else
          err = error.data.responseBody['odata.error'].message.value;
        window.postMessage(JSON.stringify({ function: 'deleteWebpart', success: false, result: err, source: 'chrome-sp-editor' }), '*');
      });
  });
};

var changeWebpartPosition = function changeWebpartPosition() {

  var wpIds = arguments[1];
  var zoneId = arguments[2];

  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', () => {
    var context = SP.ClientContext.get_current();
    var page = context.get_web().getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath);
    var wpm = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
    var zoneIndex = 10;
    for (var wpId of wpIds) {
      var wpDef = wpm.get_webParts().getById(new SP.Guid(wpId));
      wpDef.moveWebPartTo(zoneId, zoneIndex);
      wpDef.saveWebPartChanges();
      zoneIndex += 10;
    }
    context.executeQueryAsync(function () {
      window.postMessage(JSON.stringify({ function: 'changeWebpartPosition', success: true, result: null, source: 'chrome-sp-editor' }), '*');
    }, function (sender, args) {
      window.postMessage(JSON.stringify({ function: 'changeWebpartPosition', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
    });
  });

};

var getFolders = function getFolders() {

  var requestor = arguments[1];
  var webId = arguments[2];
  var isWeb = (arguments[3] != 'undefined') ? 1 : 0;

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    if (requestor == "init") {
      $pnp.sp.web.expand("Webs, Folders, RootFolder/Files")
        .select("Id, Webs/Id, Webs/Title, Webs/ServerRelativeUrl, Folders/Name, Folders/ServerRelativeUrl, RootFolder/Files/ServerRelativeUrl, RootFolder/Files/Name, RootFolder/Files/CustomizedPageStatus").get().then(r => {
          var joined = [];
          r.Folders.results.forEach(function (folder) {
            joined.push({ webId: r.Id, label: folder.Name, ServerRelativeUrl: folder.ServerRelativeUrl, folder: true, expanded: false });
          });
          r.RootFolder.Files.results.forEach(function (file) {
            joined.push({ webId: r.Id, label: file.Name, ServerRelativeUrl: file.ServerRelativeUrl, CustomizedPageStatus: file.CustomizedPageStatus });
          });
          r.Webs.results.forEach(function (web) {
            joined.push({ webId: web.Id, label: web.Title, ServerRelativeUrl: web.ServerRelativeUrl, web: true, expanded: false });
          });
          window.postMessage(JSON.stringify({ function: requestor, success: true, result: joined, source: 'chrome-sp-editor' }), '*');
        })
        .catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        });
    }
    else if (isWeb) {
      $pnp.sp.site.openWebById(webId).then(w => {

        w.web.expand("Webs, Folders, RootFolder/Files")
          .select("Webs/Id, Webs/Title, Webs/ServerRelativeUrl, Folders/Name, Folders/ServerRelativeUrl, RootFolder/Files/Name, RootFolder/Files/ServerRelativeUrl, RootFolder/Files/CustomizedPageStatus").get().then(r => {

            var joined = [];
            r.Folders.results.forEach(function (folder) {
              joined.push({ webId: w.data.Id, label: folder.Name, ServerRelativeUrl: folder.ServerRelativeUrl, folder: true, expanded: false });
            });
            r.RootFolder.Files.results.forEach(function (file) {
              joined.push({ webId: w.data.Id, label: file.Name, ServerRelativeUrl: file.ServerRelativeUrl, CustomizedPageStatus: file.CustomizedPageStatus });
            });
            r.Webs.results.forEach(function (web) {
              joined.push({ webId: web.Id, label: web.Title, ServerRelativeUrl: web.ServerRelativeUrl, web: true, expanded: false });
            });
            window.postMessage(JSON.stringify({ function: requestor, success: true, result: joined, source: 'chrome-sp-editor' }), '*');
          })
          .catch(function (error) {
            if (error.data.responseBody.hasOwnProperty('error'))
              alertify.delay(10000).error(error.data.responseBody.error.message.value);
            else
              alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          });
      });

    }
    else {

      $pnp.sp.site.openWebById(webId).then(w => {

        w.web.getFolderByServerRelativeUrl(requestor).expand("Folders, Files").get().then(r => {
          var joined = [];
          r.Folders.results.forEach(function (folder) {
            joined.push({ webId: w.data.Id, label: folder.Name, ServerRelativeUrl: folder.ServerRelativeUrl, folder: true, expanded: false });
          });
          r.Files.results.forEach(function (file) {
            joined.push({ webId: w.data.Id, label: file.Name, ServerRelativeUrl: file.ServerRelativeUrl, CustomizedPageStatus: file.CustomizedPageStatus });
          });
          window.postMessage(JSON.stringify({ function: requestor, success: true, result: joined, source: 'chrome-sp-editor' }), '*');
        })
          .catch(function (error) {
            if (error.data.responseBody.hasOwnProperty('error'))
              alertify.delay(10000).error(error.data.responseBody.error.message.value);
            else
              alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          });
      });
    }
  });
};

var getFileContent = function getFileContent() {

  var fileUrl = arguments[1];
  var webId = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    if (webId != 'undefined')
      $pnp.sp.site.openWebById(webId).then(w => {
        w.web.getFileByServerRelativeUrl(fileUrl).getText().then(r => {
          window.postMessage(JSON.stringify({ function: "getFileContent", success: true, result: { content: r, type: fileUrl.substr(fileUrl.lastIndexOf('.') + 1) }, source: 'chrome-sp-editor' }), '*');
        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        });
      });
    else
      $pnp.sp.web.getFileByServerRelativeUrl(fileUrl).getText().then(r => {
        window.postMessage(JSON.stringify({ function: "getFileContent", success: true, result: { content: r, type: fileUrl.substr(fileUrl.lastIndexOf('.') + 1) }, source: 'chrome-sp-editor' }), '*');
      }).catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
      });

  });
};

var updateEditorFile = function updateEditorFile() {

  var fileUrl = arguments[1];
  var fileContent = decodeURIComponent(arguments[2]);
  var fileCheckinType = (arguments[3] == 'true') ? 1 : 0;
  var webId = arguments[4];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    // todo: add checkin type
    // todo: figure out why files in Forms folder doent want to checkin, update ok
    $pnp.sp.site.openWebById(webId).then(w => {

      w.web.getFileByServerRelativeUrl(fileUrl).get().then(r => {
        if (r.CustomizedPageStatus > 0) {
          w.web.getFileByServerRelativeUrl(fileUrl).setContent(fileContent).then(f => {
            window.postMessage(JSON.stringify({ function: "updateEditorFile", success: true, result: null, source: 'chrome-sp-editor' }), '*');
          }).catch(function (error) {
            if (error.data.responseBody.hasOwnProperty('error'))
              alert(error.data.responseBody.error.message.value);
            else
              alert(error.data.responseBody['odata.error'].message.value);
            window.postMessage(JSON.stringify({ function: "updateEditorFile", success: false, result: null, source: 'chrome-sp-editor' }), '*');
          });
        }
        else if (r.CheckOutType == 2) {
          w.web.getFileByServerRelativeUrl(fileUrl).checkout().then(f => {
            w.web.getFileByServerRelativeUrl(fileUrl).setContent(fileContent).then(f => {
              w.web.getFileByServerRelativeUrl(fileUrl).checkin("Updated from SP Editor", fileCheckinType).then(f => {
                window.postMessage(JSON.stringify({ function: "updateEditorFile", success: true, result: null, source: 'chrome-sp-editor' }), '*');
              }).catch(function (error) {
                if (error.data.responseBody.hasOwnProperty('error'))
                  alert(error.data.responseBody.error.message.value);
                else
                  alert(error.data.responseBody['odata.error'].message.value);
                window.postMessage(JSON.stringify({ function: "updateEditorFile", success: false, result: null, source: 'chrome-sp-editor' }), '*');
              });
            }).catch(function (error) {
              if (error.data.responseBody.hasOwnProperty('error'))
                alert(error.data.responseBody.error.message.value);
              else
                alert(error.data.responseBody['odata.error'].message.value);
              window.postMessage(JSON.stringify({ function: "updateEditorFile", success: false, result: null, source: 'chrome-sp-editor' }), '*');
            });
          }).catch(function (error) {
            if (error.data.responseBody.hasOwnProperty('error'))
              alert(error.data.responseBody.error.message.value);
            else
              alert(error.data.responseBody['odata.error'].message.value);
            window.postMessage(JSON.stringify({ function: "updateEditorFile", success: false, result: null, source: 'chrome-sp-editor' }), '*');
          });
        } else {
          w.web.getFileByServerRelativeUrl(fileUrl).setContent(fileContent).then(f => {
            w.web.getFileByServerRelativeUrl(fileUrl).checkin("Updated from SP Editor", fileCheckinType).then(f => {
              window.postMessage(JSON.stringify({ function: "updateEditorFile", success: true, result: null, source: 'chrome-sp-editor' }), '*');
            }).catch(function (error) {
              if (error.data.responseBody.hasOwnProperty('error'))
                alert(error.data.responseBody.error.message.value);
              else
                alert(error.data.responseBody['odata.error'].message.value);
              window.postMessage(JSON.stringify({ function: "updateEditorFile", success: false, result: null, source: 'chrome-sp-editor' }), '*');
            });
          }).catch(function (error) {
            if (error.data.responseBody.hasOwnProperty('error'))
              alert(error.data.responseBody.error.message.value);
            else
              alert(error.data.responseBody['odata.error'].message.value);
            window.postMessage(JSON.stringify({ function: "updateEditorFile", success: false, result: null, source: 'chrome-sp-editor' }), '*');
          });
        }
      }).catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alert(error.data.responseBody.error.message.value);
        else
          alert(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: "updateEditorFile", success: false, result: null, source: 'chrome-sp-editor' }), '*');
      });
    });
  });
};

var getApps = function getApps() {

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.getList(_spPageContextInfo.webServerRelativeUrl + "/appCatalog").items.select("Title,FileLeafRef").get().then(function (apps) {
      window.postMessage(JSON.stringify({ function: 'getApps', success: true, result: apps, source: 'chrome-sp-editor' }), '*');
    }).catch(function (error) {
      var err;
      if (error.data.responseBody.hasOwnProperty('error'))
        err = error.data.responseBody.error;
      else
        err = error.data.responseBody['odata.error'];

      if (err.code == "-2147024894, System.IO.FileNotFoundException")
        alertify.delay(10000).error("No appCatalog list found, please go to AppCatalog site and try again!");
      else
        alertify.delay(10000).error(err.message.value);

      window.postMessage(JSON.stringify({ function: "getApps", success: false, result: null, source: 'chrome-sp-editor' }), '*');
    });
  });
};

var getApp = function getApp() {

  var fileName = arguments[1];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.getFileByServerRelativeUrl(_spPageContextInfo.webServerRelativeUrl + "/appCatalog/" + fileName).getBuffer().then(function (app) {

      var array = [];
      var uint8Array = new Uint8Array(app);
      for (var i = 0; i < uint8Array.byteLength; i++)
        array[i] = uint8Array[i];

      var data = {
        data: array
      };

      window.postMessage(JSON.stringify({ function: 'getApp', success: true, result: data, source: 'chrome-sp-editor' }), '*');

    }).catch(function (error) {
      if (error.data.responseBody.hasOwnProperty('error'))
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
      else
        alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);

      window.postMessage(JSON.stringify({ function: "getApp", success: false, result: null, source: 'chrome-sp-editor' }), '*');
    });

  });
};

var updateApp = function updateApp() {

  var fileName = arguments[1];
  var fileContent = unescape("REPLACE-CONTENT");

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var contentBytes = new Uint8Array(fileContent.length);
    for (var i = 0; i < fileContent.length; i++)
      contentBytes[i] = fileContent.charCodeAt(i);

    $pnp.sp.web.getFolderByServerRelativeUrl(_spPageContextInfo.webServerRelativeUrl + "/appCatalog").files.add(fileName, contentBytes, true).then(function (app) {
      window.postMessage(JSON.stringify({ function: 'updateApp', success: true, result: null, source: 'chrome-sp-editor' }), '*');
    }).catch(function (error) {
      if (error.data.responseBody.error.code == "-2147024894, System.IO.FileNotFoundException")
        alertify.delay(10000).error("No appCatalog list found, please go to AppCatalog site and try again!");
      else
        alertify.delay(10000).error(error.data.responseBody.error.message.value);

      window.postMessage(JSON.stringify({ function: "updateApp", success: false, result: null, source: 'chrome-sp-editor' }), '*');
    });

  });
};

// getSiteCollections
var getSiteCollections = function getSiteCollections() {

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    var guid = function () {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var uuid = guid();
    var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
    var payload = `
        <Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009">
          <Actions>
            <ObjectPath Id="264" ObjectPathId="263" />
            <ObjectPath Id="266" ObjectPathId="265" />
            <Query Id="267" ObjectPathId="265">
              <Query SelectAllProperties="false">
                <Properties />
              </Query>
              <ChildItemQuery SelectAllProperties="false">
                <Properties>
                  <Property Name="DenyAddAndCustomizePages" ScalarProperty="true" />
                  <Property Name="Template" ScalarProperty="true" />
                  <Property Name="Title" ScalarProperty="true" />
                  <Property Name="Url" ScalarProperty="true" />
                </Properties>
              </ChildItemQuery>
            </Query>
            <ObjectPath Id="283" ObjectPathId="282" />
            <ObjectPath Id="285" ObjectPathId="284" />
            <Query Id="286" ObjectPathId="284">
              <Query SelectAllProperties="false">
                <Properties />
              </Query>
              <ChildItemQuery SelectAllProperties="false">
                <Properties>
                  <Property Name="DenyAddAndCustomizePages" ScalarProperty="true" />
                  <Property Name="Template" ScalarProperty="true" />
                  <Property Name="Title" ScalarProperty="true" />
                  <Property Name="Url" ScalarProperty="true" />
                </Properties>
              </ChildItemQuery>
            </Query>
            <ObjectPath Id="36" ObjectPathId="35" />
            <Query Id="37" ObjectPathId="35">
              <Query SelectAllProperties="true">
                <Properties />
              </Query>
            </Query>
            <Method Name="GetTenantCdnPolicies" Id="33" ObjectPathId="29">
              <Parameters>
                <Parameter Type="Enum">0</Parameter>
              </Parameters>
            </Method>
            <Method Name="GetTenantCdnOrigins" Id="34" ObjectPathId="29">
              <Parameters>
                <Parameter Type="Enum">0</Parameter>
              </Parameters>
            </Method>
            <Method Name="GetTenantCdnEnabled" Id="48" ObjectPathId="44">
              <Parameters>
                <Parameter Type="Enum">0</Parameter>
              </Parameters>
            </Method>
            <Method Name="GetTenantCdnEnabled" Id="63" ObjectPathId="59">
              <Parameters>
                <Parameter Type="Enum">1</Parameter>
              </Parameters>
            </Method>
            <Method Name="GetTenantCdnOrigins" Id="68" ObjectPathId="64">
              <Parameters>
                <Parameter Type="Enum">1</Parameter>
              </Parameters>
            </Method>
            <ObjectPath Id="2" ObjectPathId="1" />
            <ObjectPath Id="4" ObjectPathId="3" />
            <Query Id="5" ObjectPathId="3">
              <Query SelectAllProperties="true">
                <Properties />
              </Query>
              <ChildItemQuery SelectAllProperties="true">
                <Properties />
              </ChildItemQuery>
            </Query>
          </Actions>
          <ObjectPaths>
            <Constructor Id="263" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
            <Method Id="265" ParentId="263" Name="GetSitePropertiesFromSharePointByFilter">
              <Parameters>
                <Parameter Type="String"> Template -eq "GROUP#0" </Parameter>
                <Parameter Type="Null" />
                <Parameter Type="Boolean">false</Parameter>
              </Parameters>
            </Method>
            <Constructor Id="282" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
            <Method Id="284" ParentId="282" Name="GetSitePropertiesFromSharePointByFilter">
              <Parameters>
                <Parameter Type="String"> Template -eq "SITEPAGEPUBLISHING#0" </Parameter>
                <Parameter Type="Null" />
                <Parameter Type="Boolean">false</Parameter>
              </Parameters>
            </Method>
            <Constructor Id="29" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
            <Constructor Id="35" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
            <Identity Id="44" Name="${uuid}|908bed80-a04a-4433-b4a0-883d9847d110:${_spPageContextInfo.siteSubscriptionId}&#xA;Tenant" />
            <Identity Id="59" Name="${uuid}|908bed80-a04a-4433-b4a0-883d9847d110:${_spPageContextInfo.siteSubscriptionId}&#xA;Tenant" />
            <Identity Id="64" Name="${uuid}|908bed80-a04a-4433-b4a0-883d9847d110:${_spPageContextInfo.siteSubscriptionId}&#xA;Tenant" />
            <Constructor Id="1" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
            <Method Id="3" ParentId="1" Name="GetHubSitesProperties" />
          </ObjectPaths>
        </Request>
        `;

    var client = new $pnp.SPHttpClient();
    client.post(endpoint, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'text/xml;charset="UTF-8"',
        'X-Requested-With': 'XMLHttpRequest',

      },
      body: payload
    })
      .then((r) => { return r.json(); })
      .then((r) => {
        if (r[0].ErrorInfo) {
          alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
          window.postMessage(JSON.stringify({ function: 'getSiteCollections', success: false, result: null, source: 'chrome-sp-editor' }), '*');
        } else {
        }

        var q = $pnp.SearchQueryBuilder("contentclass:STS_Site AND SiteTemplate:APPCATALOG", { RowLimit: 1, SelectProperties: ["siteid", "webid", "url"] });

        $pnp.sp.search(q).then(re => {

          var payload2 = `
            <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
              <Actions>
                <Query Id="21" ObjectPathId="6">
                  <Query SelectAllProperties="true">
                    <Properties>
                      <Property Name="storageentitiesindex" ScalarProperty="true" />
                    </Properties>
                  </Query>
                </Query>
              </Actions>
              <ObjectPaths>
                <Identity Id="4" Name="4a9d3c9e-80ed-4000-cbc2-346a233995bb|740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${re.PrimarySearchResults[0].siteid}:web:${re.PrimarySearchResults[0].webid}" />
                <Property Id="6" ParentId="4" Name="AllProperties" />
              </ObjectPaths>
            </Request>
          `
          var client = new $pnp.SPHttpClient();
          client.post(endpoint, {
            headers: {
              'Accept': '*/*',
              'Content-Type': 'text/xml;charset="UTF-8"',
              'X-Requested-With': 'XMLHttpRequest',

            },
            body: payload2
          })
            .then((res) => { return res.json(); })
            .then((res) => {
              if (res[0].ErrorInfo) {
                alertify.delay(10000).error(res[0].ErrorInfo.ErrorMessage);
                window.postMessage(JSON.stringify({ function: 'getSiteCollections', success: false, result: null, source: 'chrome-sp-editor' }), '*');
              } else {
              }

              var tenantProps = "";

              if (res.length > 1) tenantProps = res[2].storageentitiesindex;
              var hubsites = r[32]._Child_Items_;

              if (hubsites.length > 0) {
                var hubsiteQuery = "";

                hubsites.forEach(function (hubsite) {
                  if (hubsiteQuery.length > 0) hubsiteQuery += " OR "
                  var id = hubsite.SiteId.substring(6, hubsite.SiteId.length - 2)
                  hubsiteQuery += "DepartmentId:{" + id + "}";
                });

                var q2 = $pnp.SearchQueryBuilder("contentclass:STS_Site AND ( " + hubsiteQuery + " )", { TrimDuplicates: false, SelectProperties: ["DepartmentId", "Url"] });

                $pnp.sp.search(q2).then(re2 => {
                  var deps = [];
                  re2.PrimarySearchResults.forEach(hub => {
                    deps.push({ Url: hub.Url, DepartmentId: hub.DepartmentId })
                  })

                  var datas = {
                    webs: r[6]._Child_Items_.concat(r[12]._Child_Items_),
                    publicCDN: r[22],
                    publicCDNOrigins: r[20],
                    tenantObjectId: r[16]._ObjectIdentity_,
                    privateCDN: r[24],
                    privateCDNOrigins: r[26],
                    appCatalogSiteId: re.PrimarySearchResults[0].siteid,
                    appCatalogWebId: re.PrimarySearchResults[0].webid,
                    appCatalogUrl: re.PrimarySearchResults[0].url,
                    tenantProperties: tenantProps,
                    hubsites: hubsites,
                    departmentIds: deps
                  };

                  window.postMessage(JSON.stringify({ function: 'getSiteCollections', success: true, result: datas, source: 'chrome-sp-editor' }), '*');
                });

              } else {
                var datas = {
                  webs: r[6]._Child_Items_.concat(r[12]._Child_Items_),
                  publicCDN: r[22],
                  publicCDNOrigins: r[20],
                  tenantObjectId: r[16]._ObjectIdentity_,
                  privateCDN: r[24],
                  privateCDNOrigins: r[26],
                  appCatalogSiteId: re.PrimarySearchResults[0].siteid,
                  appCatalogWebId: re.PrimarySearchResults[0].webid,
                  appCatalogUrl: re.PrimarySearchResults[0].url,
                  tenantProperties: tenantProps,
                  hubsites: hubsites,
                  departmentIds: []
                };
                window.postMessage(JSON.stringify({ function: 'getSiteCollections', success: true, result: datas, source: 'chrome-sp-editor' }), '*');
              }
            })
        });
      });
  });

};

// updateSiteCollection
var updateSiteCollection = function updateSiteCollection() {
  var web = arguments[1];
  var value = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
    var payload = `
      <Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009">
        <Actions>
          <SetProperty Id="7" ObjectPathId="3" Name="DenyAddAndCustomizePages">
            <Parameter Type="Enum">${value}</Parameter>
          </SetProperty>
          <ObjectPath Id="9" ObjectPathId="8" />
          <ObjectIdentityQuery Id="10" ObjectPathId="3" />
          <Query Id="11" ObjectPathId="8">
            <Query SelectAllProperties="true">
              <Properties>
                <Property Name="IsComplete" ScalarProperty="true" />
                <Property Name="PollingInterval" ScalarProperty="true" />
              </Properties>
            </Query>
          </Query>
        </Actions>
        <ObjectPaths>
          <Identity Id="3" Name="${web}" />
          <Method Id="8" ParentId="3" Name="Update" />
        </ObjectPaths>
      </Request>
    `;

    var client = new $pnp.SPHttpClient();
    client.post(endpoint, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'text/xml;charset="UTF-8"',
        'X-Requested-With': 'XMLHttpRequest',

      },
      body: payload
    })
      .then((r) => { return r.json(); })
      .then((r) => {
        if (r[0].ErrorInfo) {
          alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
          window.postMessage(JSON.stringify({ function: 'updateSiteCollection', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
        } else {
          window.postMessage(JSON.stringify({ function: 'updateSiteCollection', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }
      });

  });
};

// enableDisableCDN
var enableDisableCDN = function enableDisableCDN() {
  var cdnType = arguments[1];
  var enable = (arguments[2] == 'true') ? 1 : 0;

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
    var payload;
    var typeVal = cdnType == "Public" ? 0 : 1;
    var enableVal = enable ? true : false;;

    if (enable) {
      payload = `
          <Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009">
            <Actions>
              <ObjectPath Id="54" ObjectPathId="53" />
              <Method Name="SetTenantCdnEnabled" Id="55" ObjectPathId="53">
                <Parameters>
                  <Parameter Type="Enum">${typeVal}</Parameter>
                  <Parameter Type="Boolean">${enableVal}</Parameter>
                </Parameters>
              </Method>
              <Method Name="CreateTenantCdnDefaultOrigins" Id="56" ObjectPathId="53">
                <Parameters>
                  <Parameter Type="Enum">0</Parameter>
                </Parameters>
              </Method>
            </Actions>
            <ObjectPaths>
              <Constructor Id="53" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
            </ObjectPaths>
          </Request>
        `;
    }
    else {
      payload = `
          <Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009">
            <Actions>
              <Method Name="SetTenantCdnEnabled" Id="143" ObjectPathId="140">
              <Parameters>
              <Parameter Type="Enum">${typeVal}</Parameter>
              <Parameter Type="Boolean">${enableVal}</Parameter>
              </Parameters>
              </Method>
            </Actions>
            <ObjectPaths>
              <Constructor Id="140" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
            </ObjectPaths>
          </Request>
        `;
    }

    var client = new $pnp.SPHttpClient();
    client.post(endpoint, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'text/xml;charset="UTF-8"',
        'X-Requested-With': 'XMLHttpRequest',

      },
      body: payload
    })
      .then((r) => { return r.json(); })
      .then((r) => {
        if (r[0].ErrorInfo) {
          alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
          window.postMessage(JSON.stringify({ function: 'enableDisableCDN', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
        } else {
          window.postMessage(JSON.stringify({ function: 'enableDisableCDN', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }
      });

  });
};

//addOrigin
var addOrigin = function addOrigin() {
  var private = arguments[1] === 'Private' ? 1 : 0;
  var origin = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
    var payload = `
      <Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009">
        <Actions>
          <ObjectPath Id="54" ObjectPathId="53" />
          <Method Name="AddTenantCdnOrigin" Id="55" ObjectPathId="53">
            <Parameters>
              <Parameter Type="Enum">${private}</Parameter>
              <Parameter Type="String">${origin}</Parameter>
            </Parameters>
          </Method>
        </Actions>
        <ObjectPaths>
          <Constructor Id="53" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
        </ObjectPaths>
      </Request>
    `;

    var client = new $pnp.SPHttpClient();
    client.post(endpoint, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'text/xml;charset="UTF-8"',
        'X-Requested-With': 'XMLHttpRequest',

      },
      body: payload
    })
      .then((r) => { return r.json(); })
      .then((r) => {
        if (r[0].ErrorInfo) {
          alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
          window.postMessage(JSON.stringify({ function: 'addOrigin', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
        } else {
          window.postMessage(JSON.stringify({ function: 'addOrigin', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }
      });
  });
};

// remove origin
var removeOrigin = function removeOrigin() {
  var private = arguments[1] === 'Private' ? 1 : 0;
  var origin = arguments[2];
  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    origin = origin.replace(" (configuration pending)", "");

    var endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery';
    var payload = `
      <Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009">
        <Actions>
          <ObjectPath Id="54" ObjectPathId="53" />
          <Method Name="RemoveTenantCdnOrigin" Id="55" ObjectPathId="53">
            <Parameters><Parameter Type="Enum">${private}</Parameter>
              <Parameter Type="String">${origin}</Parameter>
            </Parameters>
          </Method>
        </Actions>
        <ObjectPaths>
          <Constructor Id="53" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" />
        </ObjectPaths>
      </Request>
    `;

    var client = new $pnp.SPHttpClient();
    client.post(endpoint, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'text/xml;charset="UTF-8"',
        'X-Requested-With': 'XMLHttpRequest',

      },
      body: payload
    })
      .then((r) => { return r.json(); })
      .then((r) => {
        if (r[0].ErrorInfo) {
          alertify.delay(10000).error(r[0].ErrorInfo.ErrorMessage);
          window.postMessage(JSON.stringify({ function: 'removeOrigin', success: false, result: r[0].ErrorInfo.ErrorMessage, source: 'chrome-sp-editor' }), '*');
        } else {
          window.postMessage(JSON.stringify({ function: 'removeOrigin', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }
      });

  });
};

// updateTenantProperty
var updateTenantProperty = function updateTenantProperty() {
  var key = arguments[1];
  var value = arguments[2];
  var desc = arguments[3];
  var comm = arguments[4];
  var appCatalogUrl = arguments[5];
  var siteid = arguments[6];
  var webid = arguments[7];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(spHostUrl + "/_vti_bin/client.svc/ProcessQuery", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Content-Type': 'application/xml',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SharePoint Online PowerShell (16.0.7206.0)" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><ObjectPath Id="4" ObjectPathId="3" /><ObjectPath Id="6" ObjectPathId="5" /><ObjectPath Id="8" ObjectPathId="7" /><Method Name="SetStorageEntity" Id="9" ObjectPathId="7"><Parameters><Parameter Type="String">' + key + '</Parameter><Parameter Type="String">' + value + '</Parameter><Parameter Type="String">' + desc + '</Parameter><Parameter Type="String">' + comm + '</Parameter></Parameters></Method></Actions><ObjectPaths><Constructor Id="3" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /><Method Id="5" ParentId="3" Name="GetSiteByUrl"><Parameters><Parameter Type="String">' + appCatalogUrl + '</Parameter></Parameters></Method><Property Id="7" ParentId="5" Name="RootWeb" /></ObjectPaths></Request>'
        }).then(response => {
          if (!response.ok) { throw response }
          return response.json();
        }).catch(err => {
          err.json().then(errorMessage => {
            alertify.delay(10000).error(errorMessage[0].ErrorInfo.ErrorMessage);
            window.postMessage(JSON.stringify({ function: 'updateTenantProperty', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          })
        }).then(response => {

          fetch(spHostUrl + "/_vti_bin/client.svc/ProcessQuery", {
            method: 'post',
            credentials: 'include',
            headers: {
              'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
              'Content-Type': 'application/xml',
              'X-ClientService-ClientTag': 'SPEditor'
            },
            body: '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library"><Actions><Query Id="21" ObjectPathId="6"><Query SelectAllProperties="true"><Properties><Property Name="storageentitiesindex" ScalarProperty="true" /></Properties></Query></Query></Actions><ObjectPaths><Identity Id="4" Name="4a9d3c9e-80ed-4000-cbc2-346a233995bb|740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:' + siteid + ':web:' + webid + '" /><Property Id="6" ParentId="4" Name="AllProperties" /></ObjectPaths></Request>'
          }).then(response2 => {
            if (!response2.ok) { throw response2 }
            return response2.json();
          }).catch(err => {
            err.json().then(errorMessage => {
              alertify.delay(10000).error(errorMessage[0].ErrorInfo.ErrorMessage);
              window.postMessage(JSON.stringify({ function: 'updateTenantProperty', success: false, result: null, source: 'chrome-sp-editor' }), '*');
            })
          })
            .then(response2 => {
              var datas = {
                tenantProperties: response2[2].storageentitiesindex
              };
              window.postMessage(JSON.stringify({ function: 'updateTenantProperty', success: true, result: datas, source: 'chrome-sp-editor' }), '*');
            })
        })
      })
  });
};

// removeTenantProperty
var removeTenantProperty = function removeTenantProperty() {
  var key = arguments[1];
  var appCatalogUrl = arguments[2];
  var siteid = arguments[3];
  var webid = arguments[4];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(spHostUrl + "/_vti_bin/client.svc/ProcessQuery", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Content-Type': 'application/xml',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SharePoint Online PowerShell (16.0.7206.0)" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><ObjectPath Id="11" ObjectPathId="10" /><ObjectPath Id="13" ObjectPathId="12" /><ObjectPath Id="15" ObjectPathId="14" /><Method Name="RemoveStorageEntity" Id="16" ObjectPathId="14"><Parameters><Parameter Type="String">' + key + '</Parameter></Parameters></Method></Actions><ObjectPaths><Constructor Id="10" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /><Method Id="12" ParentId="10" Name="GetSiteByUrl"><Parameters><Parameter Type="String">' + appCatalogUrl + '</Parameter></Parameters></Method><Property Id="14" ParentId="12" Name="RootWeb" /></ObjectPaths></Request>'
        }).then(response => {
          if (!response.ok) { throw response }
          return response.json();
        }).catch(err => {
          err.json().then(errorMessage => {
            // error
            alertify.delay(10000).error(errorMessage[0].ErrorInfo.ErrorMessage);
            window.postMessage(JSON.stringify({ function: 'removeTenantProperty', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          })
        }).then(response => {

          fetch(spHostUrl + "/_vti_bin/client.svc/ProcessQuery", {
            method: 'post',
            credentials: 'include',
            headers: {
              'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
              'Content-Type': 'application/xml',
              'X-ClientService-ClientTag': 'SPEditor'
            },
            body: '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="Javascript Library"><Actions><Query Id="21" ObjectPathId="6"><Query SelectAllProperties="true"><Properties><Property Name="storageentitiesindex" ScalarProperty="true" /></Properties></Query></Query></Actions><ObjectPaths><Identity Id="4" Name="4a9d3c9e-80ed-4000-cbc2-346a233995bb|740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:' + siteid + ':web:' + webid + '" /><Property Id="6" ParentId="4" Name="AllProperties" /></ObjectPaths></Request>'
          }).then(response2 => {
            if (!response2.ok) { throw response2 }
            return response2.json();
          }).catch(err => {
            err.json().then(errorMessage => {
              alertify.delay(10000).error(errorMessage[0].ErrorInfo.ErrorMessage);
              window.postMessage(JSON.stringify({ function: 'removeTenantProperty', success: false, result: null, source: 'chrome-sp-editor' }), '*');
            })
          })
            .then(response2 => {
              var datas = {
                tenantProperties: response2[2].storageentitiesindex
              };
              window.postMessage(JSON.stringify({ function: 'removeTenantProperty', success: true, result: datas, source: 'chrome-sp-editor' }), '*');
            })
        })
      })
  });
};

// getDesigns
var getDesigns = function getDesigns() {

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesigns", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          },
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'getDesigns', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'getDesigns', success: true, result: response.d.GetSiteDesigns, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

// getDesign
var getDesign = function getDesign() {

  var designId = arguments[1];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignMetadata", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: JSON.stringify({ 'id': designId }),
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'getDesign', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'getDesign', success: true, result: response.d.GetSiteDesignMetadata, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

// createDesign
var createDesign = function createDesign() {

  var info = arguments[1];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteDesign", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: info,
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'createDesign', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'createDesign', success: true, result: response.d.CreateSiteDesign, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

// updateDesign
var updateDesign = function updateDesign() {

  var info = arguments[1];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.UpdateSiteDesign", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: info,
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'updateDesign', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'updateDesign', success: true, result: response.d.UpdateSiteDesign, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

var deleteDesign = function deleteDesign() {

  var designId = arguments[1];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteDesign", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: JSON.stringify({ 'id': designId }),
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'deleteDesign', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'deleteDesign', success: true, result: response.d.DeleteSiteDesign, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

// getScripts
var getScripts = function getScripts() {

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScripts", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          },
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'getScript', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'getScripts', success: true, result: response.d.GetSiteScripts, source: 'chrome-sp-editor' }), '*');
        })
      })
  });
};

// getScript
var getScript = function getScript() {

  var scriptId = arguments[1];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScriptMetadata", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: JSON.stringify({ 'id': scriptId }),
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'getScript', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'getScript', success: true, result: response.d.GetSiteScriptMetadata, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

// addScript
var addScript = function addScript() {

  var title = arguments[1];
  var content = decodeURIComponent(arguments[2]);

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {

        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteScript(Title=@title)?@title='" + title + "'", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'text/xml',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: content,
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'addScript', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'addScript', success: true, result: response.d.CreateSiteScript, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

// updateScript
var updateScript = function updateScript() {

  var id = arguments[1];
  var title = arguments[2];
  var desc = arguments[3];
  var version = arguments[4];
  var content = decodeURIComponent(arguments[5]);

  var updateInfo = {
    updateInfo: {
      Id: id,
      Title: title,
      Description: desc,
      Version: version,
      Content: content
    }
  };

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {

        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.UpdateSiteScript", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json;charset=utf-8',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: JSON.stringify(updateInfo),
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'updateScript', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'updateScript', success: true, result: response.d.UpdateSiteScript, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

// deleteScript
var deleteScript = function deleteScript() {

  var scriptId = arguments[1];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];
    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    fetch(spHostUrl + "/_api/contextinfo", {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json; odata=verbose',
        'Content-Type': 'application/json',
        'X-ClientService-ClientTag': 'SPEditor'
      }
    }).then(res => res.json())
      .then(res => {
        fetch(_spPageContextInfo.siteAbsoluteUrl + "/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteScript", {
          method: 'post',
          credentials: 'include',
          headers: {
            'X-RequestDigest': res.d.GetContextWebInformation.FormDigestValue,
            'Accept': 'application/json; odata=verbose',
            'Content-Type': 'application/json',
            'X-ClientService-ClientTag': 'SPEditor'
          },
          body: JSON.stringify({ 'id': scriptId }),
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.error) {
            alertify.delay(10000).error(response.error.message.value);
            window.postMessage(JSON.stringify({ function: 'deleteScript', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
          window.postMessage(JSON.stringify({ function: 'deleteScript', success: true, result: response.d.DeleteSiteScript, source: 'chrome-sp-editor' }), '*');

        })
      })
  });
};

var runSearch = function runSearch() {
  var content = arguments[1];
  var opts = JSON.parse(decodeURIComponent(content));

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose",

        }
      }
    });

    $pnp.sp.search(opts).then(function (r) {
      //console.log(r)
      var result = {
        ElapsedTime: r.ElapsedTime,
        PrimarySearchResults: r.PrimarySearchResults,
        RawSearchResults: r.RawSearchResults,
        RowCount: r.RowCount,
        TotalRows: r.TotalRows,
        TotalRowsIncludingDuplicates: r.TotalRowsIncludingDuplicates
      }
      window.postMessage(JSON.stringify({ function: 'runSearch', success: true, result: result, source: 'chrome-sp-editor' }), '*');
    }).catch(function (error) {
      if (error.data.responseBody.hasOwnProperty('error'))
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
      else
        alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);

      window.postMessage(JSON.stringify({ function: "runSearch", success: false, result: error, source: 'chrome-sp-editor' }), '*');
    });
  });
};

// helper functions
function elem(elem) {
  return document.getElementById(elem);
}

var dimmerTimeout;
function scheduleDimmer() {
  // if operation completed in less than 500 ms, dimmer is not necessary and only adds blinking
  // so we will show dimmer only after 500ms after operation has started
  if (dimmerTimeout)
    clearTimeout(dimmerTimeout);
  dimmerTimeout = setTimeout(function () {
    elem('dimmer').style.display = '';
    dimmerTimeout = 0;
  }, 500);
}

function hideDimmer() {
  if (dimmerTimeout)
    clearTimeout(dimmerTimeout);
  else
    elem('dimmer').style.display = 'none';
}

var allElements = ['save', 'scrlinks', 'files', 'webproperties', 'listproperties', 'webhooks', 'pnpjsconsole', 'about', 'pageeditor', 'fileeditorcontainer', 'appcatalogcontainer', 'graphman', 'modernproperties', 'sitedesigns', 'sitescriptscontainer', 'search'];

function swap(visibleElement) {
  for (var i = 0; i < allElements.length; i++) {
    if (document.getElementsByTagName(allElements[i]))
      document.getElementsByTagName(allElements[i])[0].style.display = 'none';
  }
  document.getElementsByTagName(visibleElement)[0].style.display = 'block';
}
