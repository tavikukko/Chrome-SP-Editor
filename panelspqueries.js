var pnp = "var speditorpnp = '" + chrome.extension.getURL('pnp.js') + "';";
var sj = "var sj = '" + chrome.extension.getURL('system.js') + "';";
var alertify = "var alertify = '" + chrome.extension.getURL('alertify.js') + "';";

// getCustomActions
var getCustomActions = function getCustomActions() {
  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      headers: {
        "Accept": "application/json; odata=verbose"
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
              if (action.ScriptBlock.indexOf("href") > -1) {
                scripturl = action.ScriptBlock.substring(action.ScriptBlock.indexOf("href"));
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
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    });

    if (url.split("?").length > 1) {
      querystrings = '?' + url.split("?")[1];
      url = url.split("?")[0];
    }

    if (url.match(/.js$/)) {
      payload.ScriptSrc = url + querystrings;
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
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
    else
      $pnp.sp.web.userCustomActions.add(payload)
        .then(function (result) {
          alertify.delay(5000).success("ScriptLink added successfully!");
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }).catch(function (error) {
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: false, result: error, source: 'chrome-sp-editor' }), '*');

        });
      }
      else {
        $pnp.sp.web.userCustomActions.getById(id).delete().then(function (result) {
          alertify.delay(5000).success("ScriptLink removed successfully!");
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');

        }).catch(function (error) {
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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
      alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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
      headers: {
        "Accept": "application/json; odata=verbose"
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

        var spHostUrl = _spPageContextInfo.siteAbsoluteUrl;

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
                alertify.delay(5000).success("Property added successfully!");
                window.postMessage(JSON.stringify({ function: 'addWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
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
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
        window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
    }).catch(function (error) {
      alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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

          var spHostUrl = _spPageContextInfo.siteAbsoluteUrl;

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
                  alertify.delay(5000).success("Property updated successfully!");
                  window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
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
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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

          var spHostUrl = _spPageContextInfo.siteAbsoluteUrl;

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
                  alertify.delay(5000).success("Property deleted successfully!");
                  if (prop != "vti_indexedpropertykeys")
                    addToIndexedPropertyKeys.apply(this, ['', prop, true]);
                  window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
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
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
          window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
      }).catch(function (error) {
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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

          var spHostUrl = _spPageContextInfo.siteAbsoluteUrl;

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
                  window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: true, result: null, source: 'chrome-sp-editor' }), '*');
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
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
          window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
      }).catch(function (error) {
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
        window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
    }).catch(function (error) {
      alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.lists.filter('Hidden eq false').get().then(function (lists) {

      var weblists = [];

      lists.forEach(function (list) {
        weblists.push({ listTitle: list.Title, listId: list.Id });
      });

      window.postMessage(JSON.stringify({ function: 'getLists', success: true, result: weblists, source: 'chrome-sp-editor' }), '*');
    }).catch(function (error) {
      alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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

      var spHostUrl = _spPageContextInfo.siteAbsoluteUrl;

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
      alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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

        var spHostUrl = _spPageContextInfo.siteAbsoluteUrl;

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
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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

        var spHostUrl = _spPageContextInfo.siteAbsoluteUrl;

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
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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

          var spHostUrl = _spPageContextInfo.siteAbsoluteUrl;

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
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
          window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
        });
      }).catch(function (error) {
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
        window.postMessage(JSON.stringify({ function: 'addToIndexedListPropertyKeys', success: false, result: error, source: 'chrome-sp-editor' }), '*');
      });
  });
};

var exescript = function exescript(script) {
  var params = arguments;
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
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    });

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.lists.filter('Hidden eq false').expand('Subscriptions').get().then(function (lists) {

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
      alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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
        alertify.delay(10000).error(error.data.responseBody.error.message.value);
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
      headers: {
        "Accept": "application/json; odata=verbose"
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
          alertify.delay(10000).error(error.data.responseBody.error.message.value);
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

  var webpartsFromDOM = selectAll(document, '.ms-webpart-zone')
    .map(zone => selectAll(zone, '.ms-webpartzone-cell')
      .filter(cell => {
        return cell.querySelector('[webpartid]') !== null
      })
      .map(cell => ({
        id: cell.querySelector('[webpartid]').attributes['webpartid'].value,
        title: (cell.querySelector('.ms-webpart-titleText > nobr > span:first-child') || {}).innerHTML,
      })));

  window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts', success: true, result: webpartsFromDOM, source: 'chrome-sp-editor' }), '*');

  Promise.all([SystemJS.import(speditorpnp), SystemJS.import(alertify)]).then(function (modules) {
    var $pnp = modules[0];
    var alertify = modules[1];

    $pnp.setup({
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    });

    $pnp.sp.web.getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath)
      .getLimitedWebPartManager($pnp.WebPartsPersonalizationScope.Shared)
      .webparts.expand("webpart")
      .select("Id, ZoneId, Title").get().then(webparts => {
        var webpartsFromWPM = [];
        webparts.forEach(function (webpart) {
          webpartsFromWPM.push({ id: webpart.Id, zoneId: webpart.ZoneId, title: webpart.WebPart.Title });
        });
        window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts2', success: true, result: webpartsFromWPM, source: 'chrome-sp-editor' }), '*');
      }).catch(function (error) {
        window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts2', success: false, result: error.data.responseBody.error.message.value, source: 'chrome-sp-editor' }), '*');
      });

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
            var zones = executor.get_responseData().replace(/[\r\n]/g, '').match(/<[A-Za-z0-9]+:WebPartZone(?:\s(?:%>|[^>])*)?\sID=['"][A-Za-z0-9_\-]+['"]/gi).map(s => s.match(/\sID=['"]([A-Za-z0-9_\-]+)['"]/i)[1]);
            window.postMessage(JSON.stringify({ function: 'getZonesAndWebparts3', success: true, result: zones, source: 'chrome-sp-editor' }), '*');
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
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    });

    $pnp.sp.web.getFileByServerRelativeUrl(_spPageContextInfo.serverRequestPath)
      .getLimitedWebPartManager($pnp.WebPartsPersonalizationScope.Shared)
      .webparts.getById(wpId).delete().then(g => {
        var wpCellInDOM = document.querySelector(`[webpartid='${wpId}']`).parentNode.parentNode;
        wpCellInDOM.parentNode.removeChild(wpCellInDOM);
        window.postMessage(JSON.stringify({ function: 'deleteWebpart', success: true, result: null, source: 'chrome-sp-editor' }), '*');
      }).catch(function (error) {
        var message = error.data.responseBody.error.message.value;
        window.postMessage(JSON.stringify({ function: 'deleteWebpart', success: false, result: message, source: 'chrome-sp-editor' }), '*');
      });
  });
};


// helper functions
function elem(elem) {
  return document.getElementById(elem);
}

function selectWebpart(wpId) {
  var wps = document.querySelectorAll('.webpart');
  for (var i = 0; i < wps.length; i++) {
    if (wps[i].attributes['data-id'].value == wpId)
      wps[i].className = 'webpart selected';
    else
      wps[i].className = 'webpart';
  }
  webpartXmlEditor.setValue(wpId ? webpartXmlCache[wpId] : '');
}

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

var allElements = ['save', 'scriptlinks', 'files', 'webproperties', 'listproperties', 'webhooks', 'pnpjsconsole', 'about', 'pageeditor'];
function swap(visibleElement) {
  for (var i = 0; i < allElements.length; i++)
    elem(allElements[i]).style.display = 'none';
  elem(visibleElement).style.display = 'block';
}