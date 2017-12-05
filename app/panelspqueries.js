var pnp = "var speditorpnp = '" + chrome.extension.getURL('app/js/pnp.js') + "';";
var sj = "var sj = '" + chrome.extension.getURL('app/js/system.js') + "';";
var alertify = "var alertify = '" + chrome.extension.getURL('app/js/alertify.js') + "';";

// getCustomActions
var getCustomActions = function getCustomActions() {
  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

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
            if (scripturl.length < 1) scripturl = "CustomAction scriptSrc is empty";

            if (action.Scope == 3)
              webactions.push({
                location: action.Location,
                description: action.Description,
                scripturl: scripturl,
                sequence: action.Sequence,
                scope: "web",
                id: action.Id
              });
            else
              siteactions.push({
                location: action.Location,
                description: action.Description,
                scripturl: scripturl,
                sequence: action.Sequence,
                scope: "site",
                id: action.Id
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
          "Accept": "application/json; odata=verbose"
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
      payload.ScriptBlock = "document.write('<link rel=\"stylesheet\" href=\"" + url + querystrings + "\" />');";
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.delay(5000).log("Adding " + prop + " webproperty...");

    var webid = "";
    var siteid = "";
    $pnp.sp.site.get().then(function (data) {
      siteid = data.Id;
      $pnp.sp.web.get().then(function (data) {
        webid = data.Id;
        var guid = function () {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', spHostUrl + '/_api/contextinfo');
        xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
        xhr.onload = function () {
          if (xhr.status === 200) {
            var uuid = guid();
            var data = JSON.parse(xhr.responseText);

            var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
            var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

            var xhr2 = new XMLHttpRequest();
            xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
            xhr2.setRequestHeader('Content-Type', 'application/xml');
            xhr2.setRequestHeader('SPRequestGuid', uuid);
            xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
            xhr2.onload = function () {
              if (xhr2.status === 200) {
                var error = JSON.parse(xhr2.responseText)[0];
                if (error.ErrorInfo) {
                  alertify.delay(10000).error(error.ErrorInfo.ErrorMessage);
                  window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
                }
                else {
                  alertify.delay(5000).success("Property added successfully!");
                  window.postMessage(JSON.stringify({ function: 'addWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
                }
              }
              else {
                alertify.delay(10000).error(xhr2.responseText);
                window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
              }
            }
              ;
            var payload = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="' + SchemaVersion + '" LibraryVersion="' + LibraryVersion + '" ApplicationName="Javascript Library"><Actions><Method Name="SetFieldValue" Id="9" ObjectPathId="4"><Parameters><Parameter Type="String">' + prop + '</Parameter><Parameter Type="String">' + value + '</Parameter></Parameters></Method><Method Name="Update" Id="10" ObjectPathId="2" /></Actions><ObjectPaths><Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:' + siteid + ':web:' + webid + '" /><Property Id="4" ParentId="2" Name="AllProperties" /></ObjectPaths></Request>';
            xhr2.send(payload);
          }
        }
          ;
        xhr.send();

      }).catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
    }).catch(function (error) {
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

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to update <b>" + prop + "</b> property?", function () {

      alertify.delay(5000).log("Updating " + prop + " webproperty...");

      var webid = "";
      var siteid = "";
      $pnp.sp.site.get().then(function (data) {
        siteid = data.Id;
        $pnp.sp.web.get().then(function (data) {
          webid = data.Id;
          var guid = function () {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }

          var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

          var xhr = new XMLHttpRequest();
          xhr.open('POST', spHostUrl + '/_api/contextinfo');
          xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
          xhr.onload = function () {
            if (xhr.status === 200) {
              var uuid = guid();
              var data = JSON.parse(xhr.responseText);

              var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
              var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

              var xhr2 = new XMLHttpRequest();
              xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
              xhr2.setRequestHeader('Content-Type', 'application/xml');
              xhr2.setRequestHeader('SPRequestGuid', uuid);
              xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
              xhr2.onload = function () {
                if (xhr2.status === 200) {
                  var error = JSON.parse(xhr2.responseText)[0];
                  if (error.ErrorInfo) {
                    alertify.delay(10000).error(error.ErrorInfo.ErrorMessage);
                    window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
                  } else {
                    alertify.delay(5000).success("Property updated successfully!");
                    window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
                  }
                }
                else {
                  alertify.delay(10000).error(xhr2.responseText);
                  window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
                }
              }
                ;
              var payload = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="' + SchemaVersion + '" LibraryVersion="' + LibraryVersion + '" ApplicationName="Javascript Library"><Actions><Method Name="SetFieldValue" Id="9" ObjectPathId="4"><Parameters><Parameter Type="String">' + prop + '</Parameter><Parameter Type="String">' + value + '</Parameter></Parameters></Method><Method Name="Update" Id="10" ObjectPathId="2" /></Actions><ObjectPaths><Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:' + siteid + ':web:' + webid + '" /><Property Id="4" ParentId="2" Name="AllProperties" /></ObjectPaths></Request>';
              xhr2.send(payload);
            }
          }
            ;
          xhr.send();

        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
      }).catch(function (error) {
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

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to delete <b>" + prop + "</b> property?", function () {

      var webid = "";
      var siteid = "";

      alertify.delay(5000).log("Removing " + prop + " from webproperties...");

      $pnp.sp.site.get().then(function (data) {
        siteid = data.Id;
        $pnp.sp.web.get().then(function (data) {
          webid = data.Id;
          var guid = function () {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }

          var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

          var xhr = new XMLHttpRequest();
          xhr.open('POST', spHostUrl + '/_api/contextinfo');
          xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
          xhr.onload = function () {
            if (xhr.status === 200) {
              var uuid = guid();
              var data = JSON.parse(xhr.responseText);

              var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
              var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

              var xhr2 = new XMLHttpRequest();
              xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
              xhr2.setRequestHeader('Content-Type', 'application/xml');
              xhr2.setRequestHeader('SPRequestGuid', uuid);
              xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
              xhr2.onload = function () {
                if (xhr2.status === 200) {
                  var error = JSON.parse(xhr2.responseText)[0];
                  if (error.ErrorInfo) {
                    alertify.delay(10000).error(error.ErrorInfo.ErrorMessage);
                    window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
                  } else {
                    alertify.delay(5000).success("Property deleted successfully!");
                    if (prop != "vti_indexedpropertykeys")
                      addToIndexedPropertyKeys.apply(this, ['', prop, true]);
                    window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
                  }
                }
                else {
                  alertify.delay(10000).error(xhr2.responseText);
                  window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
                }
              }
                ;
              var payload = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="' + SchemaVersion + '" LibraryVersion="' + LibraryVersion + '" ApplicationName="Javascript Library"><Actions><Method Name="SetFieldValue" Id="9" ObjectPathId="4"><Parameters><Parameter Type="String">' + prop + '</Parameter><Parameter Type="Null" /></Parameters></Method><Method Name="Update" Id="10" ObjectPathId="2" /></Actions><ObjectPaths><Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:' + siteid + ':web:' + webid + '" /><Property Id="4" ParentId="2" Name="AllProperties" /></ObjectPaths></Request>';
              xhr2.send(payload);
            }
          }
            ;
          xhr.send();

        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
      }).catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
    }, function () {
      // user clicked "cancel"
    });
  });
};

// addToIndexedPropertyKeys
var addToIndexedPropertyKeys = function addToIndexedPropertyKeys() {
  var prop = arguments[1];
  var remove = arguments[2];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.select('AllProperties').expand('AllProperties').get().then(function (result) {

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
        if (propertyBag[0].value.indexOf(b64encoded) == -1) return;
        newIndexValue = propertyBag[0].value.replace(b64encoded + "|", "");
      }

      if (remove)
        alertify.delay(5000).log("Removing '<b>" + prop + "</b>' from vti_indexedpropertykeys...");
      else
        alertify.delay(5000).log("Adding '<b>" + prop + "</b>' to vti_indexedpropertykeys...");

      var webid = "";
      var siteid = "";
      $pnp.sp.site.get().then(function (data) {
        siteid = data.Id;
        $pnp.sp.web.get().then(function (data) {
          webid = data.Id;
          var guid = function () {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }

          var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

          var xhr = new XMLHttpRequest();
          xhr.open('POST', spHostUrl + '/_api/contextinfo');
          xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
          xhr.onload = function () {
            if (xhr.status === 200) {
              var uuid = guid();
              var data = JSON.parse(xhr.responseText);

              var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
              var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

              var xhr2 = new XMLHttpRequest();
              xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
              xhr2.setRequestHeader('Content-Type', 'application/xml');
              xhr2.setRequestHeader('SPRequestGuid', uuid);
              xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
              xhr2.onload = function () {
                if (xhr2.status === 200) {
                  var error = JSON.parse(xhr2.responseText)[0];
                  if (error.ErrorInfo) {
                    alertify.delay(10000).error(error.ErrorInfo.ErrorMessage);
                    window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
                  } else {
                    if (remove)
                      alertify.delay(5000).success("Property removed from vti_indexedpropertykeys successfully!");
                    else
                      alertify.delay(5000).success("Property added to vti_indexedpropertykeys successfully!");
                    window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: true, result: null, source: 'chrome-sp-editor' }), '*');
                  }
                }
                else {
                  alertify.delay(10000).error(xhr2.responseText);
                  window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
                }
              }
                ;
              var payload = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="' + SchemaVersion + '" LibraryVersion="' + LibraryVersion + '" ApplicationName="Javascript Library"><Actions><Method Name="SetFieldValue" Id="9" ObjectPathId="4"><Parameters><Parameter Type="String">vti_indexedpropertykeys</Parameter><Parameter Type="String">' + newIndexValue + '</Parameter></Parameters></Method><Method Name="Update" Id="10" ObjectPathId="2" /></Actions><ObjectPaths><Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:' + siteid + ':web:' + webid + '" /><Property Id="4" ParentId="2" Name="AllProperties" /></ObjectPaths></Request>';
              xhr2.send(payload);
            }
          }
            ;
          xhr.send();

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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.delay(5000).log("Adding " + prop + " listproperty...");

    $pnp.sp.web.get().then(function (data) {
      var guid = function () {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }

      var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', spHostUrl + '/_api/contextinfo');
      xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
      xhr.onload = function () {
        if (xhr.status === 200) {
          var uuid = guid();
          var data = JSON.parse(xhr.responseText);

          var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
          var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

          var xhr2 = new XMLHttpRequest();
          xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
          xhr2.setRequestHeader('Content-Type', 'application/xml');
          xhr2.setRequestHeader('SPRequestGuid', uuid);
          xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
          xhr2.onload = function () {
            if (xhr2.status === 200) {
              alertify.delay(5000).success("List property added successfully!");
              window.postMessage(JSON.stringify({ function: 'addListProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
            }
            else {
              alertify.delay(10000).error(xhr2.responseText);
              window.postMessage(JSON.stringify({ function: 'addListProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
            }
          }
            ;
          var payload = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="' + SchemaVersion + '" LibraryVersion="' + LibraryVersion + '" ApplicationName="Javascript Library"><Actions><ObjectPath Id="1" ObjectPathId="0" /><ObjectPath Id="3" ObjectPathId="2" /><ObjectPath Id="5" ObjectPathId="4" /><ObjectPath Id="7" ObjectPathId="6" /><ObjectPath Id="9" ObjectPathId="8" /><ObjectPath Id="11" ObjectPathId="10" /><Method Name="SetFieldValue" Id="12" ObjectPathId="10"><Parameters><Parameter Type="String">' + prop + '</Parameter><Parameter Type="String">' + value + '</Parameter></Parameters></Method><Method Name="Update" Id="13" ObjectPathId="8" /></Actions><ObjectPaths><StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" /><Property Id="2" ParentId="0" Name="Web" /><Property Id="4" ParentId="2" Name="Lists" /><Method Id="6" ParentId="4" Name="GetById"><Parameters><Parameter Type="String">' + listId + '</Parameter></Parameters></Method><Property Id="8" ParentId="6" Name="RootFolder" /><Property Id="10" ParentId="8" Name="Properties" /></ObjectPaths></Request>';
          xhr2.send(payload);
        }
      }
        ;
      xhr.send();

    }).catch(function (error) {
      if (error.data.responseBody.hasOwnProperty('error'))
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
      else
        alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
      window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
    });
  });
};

// updateListProperties
var updateListProperties = function updateListProperties() {

  var prop = arguments[1];
  var value = arguments[2];
  var listId = arguments[3];

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to update <b>" + prop + "</b> property?", function () {

      alertify.delay(5000).log("Updating " + prop + " listproperty...");

      $pnp.sp.web.get().then(function (data) {
        var guid = function () {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', spHostUrl + '/_api/contextinfo');
        xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
        xhr.onload = function () {
          if (xhr.status === 200) {
            var uuid = guid();
            var data = JSON.parse(xhr.responseText);

            var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
            var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

            var xhr2 = new XMLHttpRequest();
            xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
            xhr2.setRequestHeader('Content-Type', 'application/xml');
            xhr2.setRequestHeader('SPRequestGuid', uuid);
            xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
            xhr2.onload = function () {
              if (xhr2.status === 200) {
                alertify.delay(5000).success("List property updated successfully!");
                window.postMessage(JSON.stringify({ function: 'updateListProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
              }
              else {
                alertify.delay(10000).error(xhr2.responseText);
                window.postMessage(JSON.stringify({ function: 'updateListProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
              }
            }
              ;
            var payload = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="' + SchemaVersion + '" LibraryVersion="' + LibraryVersion + '" ApplicationName="Javascript Library"><Actions><ObjectPath Id="1" ObjectPathId="0" /><ObjectPath Id="3" ObjectPathId="2" /><ObjectPath Id="5" ObjectPathId="4" /><ObjectPath Id="7" ObjectPathId="6" /><ObjectPath Id="9" ObjectPathId="8" /><ObjectPath Id="11" ObjectPathId="10" /><Method Name="SetFieldValue" Id="12" ObjectPathId="10"><Parameters><Parameter Type="String">' + prop + '</Parameter><Parameter Type="String">' + value + '</Parameter></Parameters></Method><Method Name="Update" Id="13" ObjectPathId="8" /></Actions><ObjectPaths><StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" /><Property Id="2" ParentId="0" Name="Web" /><Property Id="4" ParentId="2" Name="Lists" /><Method Id="6" ParentId="4" Name="GetById"><Parameters><Parameter Type="String">' + listId + '</Parameter></Parameters></Method><Property Id="8" ParentId="6" Name="RootFolder" /><Property Id="10" ParentId="8" Name="Properties" /></ObjectPaths></Request>';
            xhr2.send(payload);
          }
        }
          ;
        xhr.send();

      }).catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
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

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.confirm("Really want to remove <b>" + prop + "</b> property?", function () {

      alertify.delay(5000).log("Removing " + prop + " listproperty...");

      $pnp.sp.web.get().then(function (data) {
        var guid = function () {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', spHostUrl + '/_api/contextinfo');
        xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
        xhr.onload = function () {
          if (xhr.status === 200) {
            var uuid = guid();
            var data = JSON.parse(xhr.responseText);

            var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
            var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

            var xhr2 = new XMLHttpRequest();
            xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
            xhr2.setRequestHeader('Content-Type', 'application/xml');
            xhr2.setRequestHeader('SPRequestGuid', uuid);
            xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
            xhr2.onload = function () {
              if (xhr2.status === 200) {
                alertify.delay(5000).success("List property removed successfully!");
                if (prop != "vti_indexedpropertykeys")
                  addToIndexedListPropertyKeys.apply(this, ['', prop, listId, true]);
                window.postMessage(JSON.stringify({ function: 'deleteListProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
              }
              else {
                alertify.delay(10000).error(xhr2.responseText);
                window.postMessage(JSON.stringify({ function: 'deleteListProperties', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
              }
            }
              ;
            var payload = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="' + SchemaVersion + '" LibraryVersion="' + LibraryVersion + '" ApplicationName="Javascript Library"><Actions><ObjectPath Id="1" ObjectPathId="0" /><ObjectPath Id="3" ObjectPathId="2" /><ObjectPath Id="5" ObjectPathId="4" /><ObjectPath Id="7" ObjectPathId="6" /><ObjectPath Id="9" ObjectPathId="8" /><ObjectPath Id="11" ObjectPathId="10" /><Method Name="SetFieldValue" Id="12" ObjectPathId="10"><Parameters><Parameter Type="String">' + prop + '</Parameter><Parameter Type="Null" /></Parameters></Method><Method Name="Update" Id="13" ObjectPathId="8" /></Actions><ObjectPaths><StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" /><Property Id="2" ParentId="0" Name="Web" /><Property Id="4" ParentId="2" Name="Lists" /><Method Id="6" ParentId="4" Name="GetById"><Parameters><Parameter Type="String">' + listId + '</Parameter></Parameters></Method><Property Id="8" ParentId="6" Name="RootFolder" /><Property Id="10" ParentId="8" Name="Properties" /></ObjectPaths></Request>';
            xhr2.send(payload);
          }
        }
          ;
        xhr.send();

      }).catch(function (error) {
        if (error.data.responseBody.hasOwnProperty('error'))
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
        else
          alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
        window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
    }, function () {
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
          "Accept": "application/json; odata=verbose"
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

        $pnp.sp.web.get().then(function (data) {
          var guid = function () {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          }

          var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

          var xhr = new XMLHttpRequest();
          xhr.open('POST', spHostUrl + '/_api/contextinfo');
          xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
          xhr.onload = function () {
            if (xhr.status === 200) {
              var uuid = guid();
              var data = JSON.parse(xhr.responseText);

              var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
              var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

              var xhr2 = new XMLHttpRequest();
              xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
              xhr2.setRequestHeader('Content-Type', 'application/xml');
              xhr2.setRequestHeader('SPRequestGuid', uuid);
              xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
              xhr2.onload = function () {
                if (xhr2.status === 200) {
                  if (remove)
                    alertify.delay(5000).success("Property removed from vti_indexedpropertykeys successfully!");
                  else
                    alertify.delay(5000).success("Property added to vti_indexedpropertykeys successfully!");
                  window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: true, result: null, source: 'chrome-sp-editor' }), '*');
                }
                else {
                  alertify.delay(10000).error(xhr2.responseText);
                  window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: false, result: xhr2.responseText, source: 'chrome-sp-editor' }), '*');
                }
              }
                ;
              var payload = '<Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="' + SchemaVersion + '" LibraryVersion="' + LibraryVersion + '" ApplicationName="Javascript Library"><Actions><ObjectPath Id="1" ObjectPathId="0" /><ObjectPath Id="3" ObjectPathId="2" /><ObjectPath Id="5" ObjectPathId="4" /><ObjectPath Id="7" ObjectPathId="6" /><ObjectPath Id="9" ObjectPathId="8" /><ObjectPath Id="11" ObjectPathId="10" /><Method Name="SetFieldValue" Id="12" ObjectPathId="10"><Parameters><Parameter Type="String">vti_indexedpropertykeys</Parameter><Parameter Type="String">' + newIndexValue + '</Parameter></Parameters></Method><Method Name="Update" Id="13" ObjectPathId="8" /></Actions><ObjectPaths><StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" /><Property Id="2" ParentId="0" Name="Web" /><Property Id="4" ParentId="2" Name="Lists" /><Method Id="6" ParentId="4" Name="GetById"><Parameters><Parameter Type="String">' + listId + '</Parameter></Parameters></Method><Property Id="8" ParentId="6" Name="RootFolder" /><Property Id="10" ParentId="8" Name="Properties" /></ObjectPaths></Request>';
              xhr2.send(payload);
            }
          }
            ;
          xhr.send();

        }).catch(function (error) {
          if (error.data.responseBody.hasOwnProperty('error'))
            alertify.delay(10000).error(error.data.responseBody.error.message.value);
          else
            alertify.delay(10000).error(error.data.responseBody['odata.error'].message.value);
          window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
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

      window._spPageContextInfo = e._shell._pageContext._legacyPageContext;

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
  else { alert("Could not get _spPageContextInfo, propably because this ain't SHarePoint site..")}

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
          "Accept": "application/json; odata=verbose"
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
              subNotificationUrl: subscription.notificationUrl
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

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var today = new Date();
    var expirationDate = new Date(today.setDate(today.getDate() + 90)).toISOString(); // expire in 3 months

    alertify.delay(5000).log("Adding webhook...");

    $pnp.sp.web.lists.getById(listId).subscriptions.add(hookurl, expirationDate).then(function (result) {
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    if(webId != 'undefined')
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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
          "Accept": "application/json; odata=verbose"
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

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];

    var guid = function () {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', spHostUrl + '/_api/contextinfo');
    xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
    xhr.onload = function () {
      if (xhr.status === 200) {
        var uuid = guid();
        var data = JSON.parse(xhr.responseText);

        var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
        var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
        xhr2.setRequestHeader('Content-Type', 'application/xml');
        xhr2.setRequestHeader('SPRequestGuid', uuid);
        xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
        xhr2.onload = function () {
          if (xhr2.status === 200) {
            var error = JSON.parse(xhr2.responseText)[0];
            if (error.ErrorInfo) {
              alertify.delay(10000).error(error.ErrorInfo.ErrorMessage);
              window.postMessage(JSON.stringify({ function: 'getSiteCollections', success: false, result: null, source: 'chrome-sp-editor' }), '*');
            }
            else {
              // console.log(JSON.parse(xhr2.responseText));
              var datas = {
                webs: JSON.parse(xhr2.responseText)[6]._Child_Items_.concat(JSON.parse(xhr2.responseText)[12]._Child_Items_),
                publicCDN: JSON.parse(xhr2.responseText)[22],
                publicCDNOrigins: JSON.parse(xhr2.responseText)[20],
                tenantObjectId: JSON.parse(xhr2.responseText)[16]._ObjectIdentity_,
                privateCDN: JSON.parse(xhr2.responseText)[24],
                privateCDNOrigins: JSON.parse(xhr2.responseText)[26],
              };
              // console.log(datas);
              window.postMessage(JSON.stringify({ function: 'getSiteCollections', success: true, result: datas, source: 'chrome-sp-editor' }), '*');
            }
          }
          else {
            alertify.delay(10000).error(xhr2.responseText);
            window.postMessage(JSON.stringify({ function: 'getSiteCollections', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
        };
        var payload = '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SharePoint Online PowerShell (16.0.6420.0)" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><ObjectPath Id="264" ObjectPathId="263" /><ObjectPath Id="266" ObjectPathId="265" /><Query Id="267" ObjectPathId="265"><Query SelectAllProperties="true"><Properties><Property Name="NextStartIndexFromSharePoint" ScalarProperty="true" /></Properties></Query><ChildItemQuery SelectAllProperties="true"><Properties /></ChildItemQuery></Query><ObjectPath Id="283" ObjectPathId="282" /><ObjectPath Id="285" ObjectPathId="284" /><Query Id="286" ObjectPathId="284"><Query SelectAllProperties="true"><Properties><Property Name="NextStartIndexFromSharePoint" ScalarProperty="true" /></Properties></Query><ChildItemQuery SelectAllProperties="true"><Properties /></ChildItemQuery></Query><ObjectPath Id="36" ObjectPathId="35" /><Query Id="37" ObjectPathId="35"><Query SelectAllProperties="true"><Properties /></Query></Query><Method Name="GetTenantCdnPolicies" Id="33" ObjectPathId="29"><Parameters><Parameter Type="Enum">0</Parameter></Parameters></Method><Method Name="GetTenantCdnOrigins" Id="34" ObjectPathId="29"><Parameters><Parameter Type="Enum">0</Parameter></Parameters></Method><Method Name="GetTenantCdnEnabled" Id="48" ObjectPathId="44"><Parameters><Parameter Type="Enum">0</Parameter></Parameters></Method><Method Name="GetTenantCdnEnabled" Id="63" ObjectPathId="59"><Parameters><Parameter Type="Enum">1</Parameter></Parameters></Method><Method Name="GetTenantCdnOrigins" Id="68" ObjectPathId="64"><Parameters><Parameter Type="Enum">1</Parameter></Parameters></Method></Actions><ObjectPaths><Constructor Id="263" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /><Method Id="265" ParentId="263" Name="GetSitePropertiesFromSharePointByFilter"><Parameters><Parameter Type="String"> Template -eq "GROUP#0" </Parameter><Parameter Type="Null" /><Parameter Type="Boolean">false</Parameter></Parameters></Method><Constructor Id="282" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /><Method Id="284" ParentId="282" Name="GetSitePropertiesFromSharePointByFilter"><Parameters><Parameter Type="String"> Template -eq "SITEPAGEPUBLISHING#0" </Parameter><Parameter Type="Null" /><Parameter Type="Boolean">false</Parameter></Parameters></Method><Constructor Id="29" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /><Constructor Id="35" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /><Identity Id="44" Name="' + uuid + '|908bed80-a04a-4433-b4a0-883d9847d110:' + _spPageContextInfo.siteSubscriptionId + '&#xA;Tenant" /><Identity Id="59" Name="' + uuid + '|908bed80-a04a-4433-b4a0-883d9847d110:' + _spPageContextInfo.siteSubscriptionId + '&#xA;Tenant" /><Identity Id="64" Name="' + uuid + '|908bed80-a04a-4433-b4a0-883d9847d110:' + _spPageContextInfo.siteSubscriptionId + '&#xA;Tenant" /></ObjectPaths></Request>';

        xhr2.send(payload);
      }
    };
    xhr.send();
  });
};

// updateSiteCollection
var updateSiteCollection = function updateSiteCollection() {
  var web = arguments[1];
  var value = arguments[2];

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];


    var guid = function () {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', spHostUrl + '/_api/contextinfo');
    xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
    xhr.onload = function () {
      if (xhr.status === 200) {
        var uuid = guid();
        var data = JSON.parse(xhr.responseText);

        var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
        var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
        xhr2.setRequestHeader('Content-Type', 'application/xml');
        xhr2.setRequestHeader('SPRequestGuid', uuid);
        xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
        xhr2.onload = function () {
          if (xhr2.status === 200) {
            var error = JSON.parse(xhr2.responseText)[0];

            if (error.ErrorInfo) {
              alertify.delay(10000).error(error.ErrorInfo.ErrorMessage);
              window.postMessage(JSON.stringify({ function: 'updateSiteCollection', success: false, result: null, source: 'chrome-sp-editor' }), '*');
            }
            else {
              window.postMessage(JSON.stringify({ function: 'updateSiteCollection', success: true, result: null, source: 'chrome-sp-editor' }), '*');
            }
          }
          else {
            alertify.delay(10000).error(xhr2.responseText);
            window.postMessage(JSON.stringify({ function: 'updateSiteCollection', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
        };
        var payload = '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName=".NET Library" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><SetProperty Id="7" ObjectPathId="3" Name="DenyAddAndCustomizePages"><Parameter Type="Enum">' + value + '</Parameter></SetProperty><ObjectPath Id="9" ObjectPathId="8" /><ObjectIdentityQuery Id="10" ObjectPathId="3" /><Query Id="11" ObjectPathId="8"><Query SelectAllProperties="true"><Properties><Property Name="IsComplete" ScalarProperty="true" /><Property Name="PollingInterval" ScalarProperty="true" /></Properties></Query></Query></Actions><ObjectPaths><Identity Id="3" Name="' + web + '" /><Method Id="8" ParentId="3" Name="Update" /></ObjectPaths></Request>';

        xhr2.send(payload);
      }
    };
    xhr.send();
  });
};

// enableDisableCDN
var enableDisableCDN = function enableDisableCDN() {
  var cdnType = arguments[1];
  var enable = (arguments[2] == 'true') ? 1 : 0;

  Promise.all([SystemJS.import(alertify)]).then(function (modules) {
    var alertify = modules[0];

    var guid = function () {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    var spHostUrl = _spPageContextInfo.webAbsoluteUrl;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', spHostUrl + '/_api/contextinfo');
    xhr.setRequestHeader('Accept', 'application/json; odata=verbose');
    xhr.onload = function () {
      if (xhr.status === 200) {
        var uuid = guid();
        var data = JSON.parse(xhr.responseText);

        var LibraryVersion = data.d.GetContextWebInformation.LibraryVersion;
        var SchemaVersion = data.d.GetContextWebInformation.SupportedSchemaVersions.results.slice(-1).pop();

        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', spHostUrl + '/_vti_bin/client.svc/ProcessQuery');
        xhr2.setRequestHeader('Content-Type', 'application/xml');
        xhr2.setRequestHeader('SPRequestGuid', uuid);
        xhr2.setRequestHeader('X-RequestDigest', data.d.GetContextWebInformation.FormDigestValue);
        xhr2.onload = function () {
          if (xhr2.status === 200) {
            var error = JSON.parse(xhr2.responseText)[0];

            if (error.ErrorInfo) {
              alertify.delay(10000).error(error.ErrorInfo.ErrorMessage);
              window.postMessage(JSON.stringify({ function: 'enableDisableCDN', success: false, result: null, source: 'chrome-sp-editor' }), '*');
            }
            else {
              window.postMessage(JSON.stringify({ function: 'enableDisableCDN', success: true, result: null, source: 'chrome-sp-editor' }), '*');
            }
          }
          else {
            alertify.delay(10000).error(xhr2.responseText);
            window.postMessage(JSON.stringify({ function: 'enableDisableCDN', success: false, result: null, source: 'chrome-sp-editor' }), '*');
          }
        };
        var payload = "";

        if (cdnType == "Public") {
          if (enable) {
            payload = '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SharePoint Online PowerShell (16.0.6420.0)" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><ObjectPath Id="54" ObjectPathId="53" /><Method Name="SetTenantCdnEnabled" Id="55" ObjectPathId="53"><Parameters><Parameter Type="Enum">0</Parameter><Parameter Type="Boolean">true</Parameter></Parameters></Method><Method Name="CreateTenantCdnDefaultOrigins" Id="56" ObjectPathId="53"><Parameters><Parameter Type="Enum">0</Parameter></Parameters></Method></Actions><ObjectPaths><Constructor Id="53" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /></ObjectPaths></Request>';
          }
          else {
            payload = '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SharePoint Online PowerShell (16.0.6420.0)" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><Method Name="SetTenantCdnEnabled" Id="143" ObjectPathId="140"><Parameters><Parameter Type="Enum">0</Parameter><Parameter Type="Boolean">false</Parameter></Parameters></Method></Actions><ObjectPaths><Constructor Id="140" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /></ObjectPaths></Request>';
          }
        }
        else {
          if (enable) {
            payload = '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SharePoint Online PowerShell (16.0.6420.0)" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><ObjectPath Id="16" ObjectPathId="15" /><Method Name="SetTenantCdnEnabled" Id="17" ObjectPathId="15"><Parameters><Parameter Type="Enum">1</Parameter><Parameter Type="Boolean">true</Parameter></Parameters></Method><Method Name="CreateTenantCdnDefaultOrigins" Id="18" ObjectPathId="15"><Parameters><Parameter Type="Enum">1</Parameter></Parameters></Method></Actions><ObjectPaths><Constructor Id="15" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /></ObjectPaths></Request>';
          }
          else {
            payload = '<Request AddExpandoFieldTypeSuffix="true" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SharePoint Online PowerShell (16.0.6420.0)" xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009"><Actions><Method Name="SetTenantCdnEnabled" Id="28" ObjectPathId="25"><Parameters><Parameter Type="Enum">1</Parameter><Parameter Type="Boolean">false</Parameter></Parameters></Method></Actions><ObjectPaths><Constructor Id="25" TypeId="{268004ae-ef6b-4e9b-8425-127220d84719}" /></ObjectPaths></Request>'
          }
        }
        xhr2.send(payload);
      }
    };
    xhr.send();
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

var allElements = ['save', 'scrlinks', 'files', 'webproperties', 'listproperties', 'webhooks', 'pnpjsconsole', 'about', 'pageeditor', 'fileeditorcontainer', 'appcatalogcontainer', 'graphman', 'modernproperties'];

function swap(visibleElement) {
  for (var i = 0; i < allElements.length; i++) {
    if (document.getElementsByTagName(allElements[i]))
      document.getElementsByTagName(allElements[i])[0].style.display = 'none';
  }
  document.getElementsByTagName(visibleElement)[0].style.display = 'block';
}
