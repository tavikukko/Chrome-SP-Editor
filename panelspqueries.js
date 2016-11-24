var pnp = "var pnp = '" + chrome.extension.getURL('pnp.js') + "';";
var r = "var r = '" + chrome.extension.getURL('r.js') + "';";
var alertify = "var alertify = '" + chrome.extension.getURL('alertify.js') + "';";

// getCustomActions
var getCustomActions = function getCustomActions() {
  requirejs([pnp, alertify], function ($pnp, alertify) {

    var promises = [];
    var webactions = [];
    var siteactions = [];
    promises.push($pnp.sp.site.userCustomActions.get());
    promises.push($pnp.sp.web.userCustomActions.get());
    Promise.all(promises).then(promise => {
      promise.forEach(function (actions) {
        actions.forEach(function (action) {
          if (action.Scope == 3)
            webactions.push({
              location: action.Location,
              description: action.Description,
              scriptSrc: action.ScriptSrc,
              scriptBlock: action.ScriptBlock,
              sequence: action.Sequence,
              heading: "Current web scriptlinks",
              scope: "web",
              id: action.Id
            });
          else
            siteactions.push({
              location: action.Location,
              description: action.Description,
              scriptSrc: action.ScriptSrc,
              scriptBlock: action.ScriptBlock,
              sequence: action.Sequence,
              heading: "Site collection scriptlinks",
              scope: "site",
              id: action.Id
            });
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

  requirejs([pnp, alertify], function ($pnp, alertify) {
    alertify.delay(5000).log("Adding scriptLink...");
    if (scope === 'site')
      $pnp.sp.site.userCustomActions.add(payload)
        .then(function (result) {
          alertify.delay(5000).success("ScriptLink added successfully!");
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }).catch(function (data) {
          alertify.delay(10000).error(data);
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
        });
    else
      $pnp.sp.web.userCustomActions.add(payload)
        .then(function (result) {
          alertify.delay(5000).success("ScriptLink added successfully!");
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');
        }).catch(function (data) {
          alertify.delay(10000).error(data);
          window.postMessage(JSON.stringify({ function: 'addCustomAction', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
        });
  });
};

// removeCustomAction
var removeCustomAction = function removeCustomAction() {
  var scope = arguments[1];
  var id = arguments[2]

  requirejs([pnp, alertify], function ($pnp, alertify) {
    alertify.confirm("Really want to delete this scriptLink?", function () {
      if (scope === 'site') {
        $pnp.sp.site.userCustomActions.getById(id).delete().then(function (result) {
          alertify.delay(5000).success("ScriptLink removed successfully!");
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');

        }).catch(function (data) {
          alertify.delay(10000).error(data);
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');

        });
      }
      else {
        $pnp.sp.web.userCustomActions.getById(id).delete().then(function (result) {
          alertify.delay(5000).success("ScriptLink removed successfully!");
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');

        }).catch(function (data) {
          alertify.delay(10000).error(data);
          window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');

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
  requirejs([pnp, alertify], function ($pnp, alertify) {
    alertify.delay(5000).log("Adding '<b>" + filename + "</b>' to Style Library...");
    var contentStr = '/* Created from Chrome SP Editor */';
    var contentBytes = new Uint8Array(contentStr.length);
    for (var i = 0; i < contentStr.length; i++)
      contentBytes[i] = contentStr.charCodeAt(i);

    $pnp.sp.site.rootWeb.getFolderByServerRelativeUrl("Style Library").files.add(filename, contentBytes).then(function (result) {
      alertify.delay(5000).success("File added successfully!");
      window.postMessage(JSON.stringify({ function: 'addFile', success: true, result: null, source: 'chrome-sp-editor' }), '*');
    }).catch(function (data) {
      alertify.delay(10000).error(data);
      window.postMessage(JSON.stringify({ function: 'addFile', success: false, result: data, source: 'chrome-sp-editor' }), '*');
    });
  });
};

// getWebProperties
var getWebProperties = function getWebProperties() {
  requirejs([alertify], function (alertify) {
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
      var clientContext = new SP.ClientContext();
      this.webProperties = clientContext.get_web().get_allProperties();
      clientContext.load(this.webProperties);
      clientContext.executeQueryAsync(
        Function.createDelegate(this, getWebPropertiesSucceeded),
        Function.createDelegate(this, getWebPropertiesFailed)
      );
    });
  });
};

var getWebPropertiesSucceeded = function getWebPropertiesSucceeded(sender, args) {
  requirejs([alertify], function (alertify) {
    var compare = function compare(a, b) {
      if (a.prop.toLowerCase() < b.prop.toLowerCase())
        return -1;
      if (a.prop.toLowerCase() > b.prop.toLowerCase())
        return 1;
      return 0;
    }

    var allProperties = this.webProperties.get_fieldValues();
    var arr = [];
    for (property in allProperties)
      arr.push({ prop: property, value: allProperties[property] });

    arr.sort(compare);
    var propertyBag = arr.slice();
    window.postMessage(JSON.stringify({ function: 'getWebProperties', success: true, result: propertyBag, source: 'chrome-sp-editor' }), '*');
  });
};

var getWebPropertiesFailed = function getWebPropertiesFailed(sender, args) {
  requirejs([alertify], function (alertify) {
    window.postMessage(JSON.stringify({ function: 'getWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
  });
};

// addWebProperties
var addWebProperties = function addWebProperties() {

  var prop = arguments[1];
  var value = arguments[2];

  requirejs([alertify], function (alertify) {
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
      this.clientContext = new SP.ClientContext();
      this.prop = prop;
      this.value = value;
      this.web = this.clientContext.get_web();
      this.webProperties = this.clientContext.get_web().get_allProperties();
      this.clientContext.load(this.webProperties);
      this.clientContext.load(this.web);
      alertify.delay(5000).log("Adding '<b>" + prop + "</b>' to propertybag...");
      this.clientContext.executeQueryAsync(
        Function.createDelegate(this, addWebPropertiesSucceeded),
        Function.createDelegate(this, addWebPropertiesFailed)
      );
    });
  });
};

var addWebPropertiesSucceeded = function addWebPropertiesSucceeded(sender, args) {
  requirejs([alertify], function (alertify) {
    var allProperties = this.webProperties;
    allProperties.set_item(this.prop, this.value);
    this.web.update();
    this.clientContext.executeQueryAsync(
      Function.createDelegate(this, addWebPropertiesSucceeded2),
      Function.createDelegate(this, addWebPropertiesFailed)
    );
  });
};

var addWebPropertiesSucceeded2 = function addWebPropertiesSucceeded2(sender, args) {
  requirejs([alertify], function (alertify) {
    alertify.delay(5000).success("Property added successfully!");
    window.postMessage(JSON.stringify({ function: 'addWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
  });
};

var addWebPropertiesFailed = function addWebPropertiesFailed(sender, args) {
  requirejs([alertify], function (alertify) {
    alertify.delay(10000).error(args.get_message());
    window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
  });
};

// updateWebProperties
var updateWebProperties = function updateWebProperties() {

  var prop = arguments[1];
  var value = arguments[2];

  requirejs([alertify], function (alertify) {
    alertify.confirm("Are you sure you want to update '" + prop + "' property?", function () {
      SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
        this.clientContext = new SP.ClientContext();
        this.prop = prop;
        this.value = value;
        this.web = this.clientContext.get_web();
        this.webProperties = this.clientContext.get_web().get_allProperties();
        this.clientContext.load(this.webProperties);
        this.clientContext.load(this.web);
        alertify.delay(5000).log("Updating '<b>" + prop + "</b>' to propertybag...");
        this.clientContext.executeQueryAsync(
          Function.createDelegate(this, updateWebPropertiesSucceeded),
          Function.createDelegate(this, updateWebPropertiesFailed)
        );
      });
    }, function () {
      // user clicked "cancel"
    });
  });
};

var updateWebPropertiesSucceeded = function updateWebPropertiesSucceeded(sender, args) {
  requirejs([alertify], function (alertify) {
    var allProperties = this.webProperties;
    allProperties.set_item(this.prop, this.value);
    this.web.update();
    this.clientContext.executeQueryAsync(
      Function.createDelegate(this, updateWebPropertiesSucceeded2),
      Function.createDelegate(this, updateWebPropertiesFailed)
    );
  });
};

var updateWebPropertiesSucceeded2 = function updateWebPropertiesSucceeded2(sender, args) {
  requirejs([alertify], function (alertify) {
    alertify.delay(5000).success("Property updated successfully!");
    window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
  });
};

var updateWebPropertiesFailed = function updateWebPropertiesFailed(sender, args) {
  requirejs([alertify], function (alertify) {
    alertify.delay(10000).error(args.get_message());
    window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
  });
};

// deleteWebProperties
var deleteWebProperties = function deleteWebProperties() {
  var prop = arguments[1];

  requirejs([alertify], function (alertify) {
    alertify.confirm("Are you sure you want to delete '" + prop + "' property?", function () {
      SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
        this.clientContext = new SP.ClientContext();
        this.prop = prop;
        this.web = clientContext.get_web();
        this.webProperties = clientContext.get_web().get_allProperties();
        clientContext.load(this.webProperties);
        clientContext.load(this.web);
        alertify.delay(5000).log("Deleting '<b>" + prop + "</b>' from propertybag...");
        clientContext.executeQueryAsync(
          Function.createDelegate(this, deleteWebPropertiesSucceeded),
          Function.createDelegate(this, deleteWebPropertiesFailed)
        );
      });
    }, function () {
      // user clicked "cancel"
    });
  });
};

var deleteWebPropertiesSucceeded = function deleteWebPropertiesSucceeded(sender, args) {
  requirejs([alertify], function (alertify) {
    var allProperties = this.webProperties;
    allProperties.set_item(this.prop, null);
    this.web.update();
    this.clientContext.executeQueryAsync(
      Function.createDelegate(this, deleteWebPropertiesSucceeded2),
      Function.createDelegate(this, deleteWebPropertiesFailed)
    );
  });
};

var deleteWebPropertiesSucceeded2 = function deleteWebPropertiesSucceeded2(sender, args) {
  requirejs([alertify], function (alertify) {
    alertify.delay(5000).success("Property deleted successfully!");
    window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
  });
};

var deleteWebPropertiesFailed = function deleteWebPropertiesFailed(sender, args) {
  requirejs([alertify], function (alertify) {
    alertify.delay(10000).error(args.get_message());
    window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
  });
};

// addToIndexedPropertyKeys
var addToIndexedPropertyKeys = function addToIndexedPropertyKeys() {
  var prop = arguments[1];
  var remove = arguments[2];

  requirejs([alertify], function (alertify) {
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
      this.clientContext = new SP.ClientContext();
      this.prop = prop;
      this.remove = remove;
      this.web = this.clientContext.get_web();
      this.webProperties = this.clientContext.get_web().get_allProperties();
      this.clientContext.load(this.webProperties);
      this.clientContext.load(this.web);
      if (remove)
        alertify.delay(5000).log("Removing '<b>" + prop + "</b>' from vti_indexedpropertykeys...");
      else
        alertify.delay(5000).log("Adding '<b>" + prop + "</b>' to vti_indexedpropertykeys...");
      this.clientContext.executeQueryAsync(
        Function.createDelegate(this, addToIndexedPropertyKeysSucceeded),
        Function.createDelegate(this, addToIndexedPropertyKeysFailed)
      );
    });
  });
};

var addToIndexedPropertyKeysSucceeded = function addToIndexedPropertyKeysSucceeded(sender, args) {
  requirejs([alertify], function (alertify) {
    var allProperties = this.webProperties;

    var bytes = [];
    for (var i = 0; i < this.prop.length; ++i) {
      bytes.push(this.prop.charCodeAt(i));
      bytes.push(0);
    }
    var b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));

    var newIndexValue = "";

    if (!this.remove) {
      if (allProperties.get_fieldValues()["vti_indexedpropertykeys"]) {
        if (allProperties.get_fieldValues()["vti_indexedpropertykeys"].indexOf(b64encoded) == -1) {
          newIndexValue = allProperties.get_fieldValues()["vti_indexedpropertykeys"] + b64encoded + "|";
        }
        else {
          alertify.delay(10000).error('Property key ' + this.prop + ' already indexed!');
          return;
        }
      }
      else {
        newIndexValue = b64encoded + "|";
      }
    }
    else {
      newIndexValue = allProperties.get_fieldValues()["vti_indexedpropertykeys"].replace(b64encoded + "|", "");
    }

    allProperties.set_item("vti_indexedpropertykeys", newIndexValue);
    this.web.update();
    this.clientContext.executeQueryAsync(
      Function.createDelegate(this, addToIndexedPropertyKeysSucceeded2),
      Function.createDelegate(this, addToIndexedPropertyKeysFailed)
    );
  });
};

var addToIndexedPropertyKeysSucceeded2 = function addToIndexedPropertyKeysSucceeded2(sender, args) {
  requirejs([alertify], function (alertify) {
    if (this.remove)
      alertify.delay(5000).success("Property removed from vti_indexedpropertykeys successfully!");
    else
      alertify.delay(5000).success("Property added to vti_indexedpropertykeys successfully!");
    window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: true, result: null, source: 'chrome-sp-editor' }), '*');
  });
};

var addToIndexedPropertyKeysFailed = function addToIndexedPropertyKeysFailed(sender, args) {
  requirejs([alertify], function (alertify) {
    alertify.delay(10000).error(args.get_message());
    window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
  });
};

var exescript = function exescript(script) {
  var params = arguments;
  if (typeof requirejs == 'undefined') {
    var s = document.createElement('script');
    s.src = r;
    s.onload = function () {
      script.apply(this, params);
    };
    (document.head || document.documentElement).appendChild(s);
  }
  else script.apply(this, params);
}

var alertError = function alertError() {

  var errorMsg = arguments[1];

  requirejs([alertify], function (alertify) {

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    alertify.delay(10000).error(errorMsg);

  });
};


var getSubscriptions = function getSubscriptions() {

  //alert(arguments[1]);
  //console.log(arguments);

  requirejs([pnp, alertify], function ($pnp, alertify) {

    alertify.logPosition('bottom right');
    alertify.maxLogItems(2);

    $pnp.sp.web.lists.filter('Hidden eq false').get().then(function (lists) {

      var promises = [];
      var listWithSubcription = [];

      lists.forEach(function (list) {
        promises.push($pnp.sp.web.lists.getById(list.Id).subscriptions.get());
      });

      Promise.all(promises).then(promise => {
        promise.forEach(function (subscriptions) {
          subscriptions.forEach(function (subscription) {
            var list = listWithSubcription.find(x => x.Id === subscription.resource);
            if (!list) {
              list = lists.find(x => x.Id === subscription.resource);
              listWithSubcription.push(list);
              list = listWithSubcription.find(x => x.Id === list.Id);
            }

            if (!list.subscriptions) list.subscriptions = [];
            list.subscriptions.push(subscription)
            alertify.delay(5000).success(subscription.id);
          });
        });
        //console.log(listWithSubcription);
        window.postMessage(JSON.stringify({ function: 'getSubscriptions', success: true, result: listWithSubcription, source: 'chrome-sp-editor' }), '*');
      });

    }).catch(function (err) {
      alertify.delay(10000).error(err);
    });
  });
};

// helper functions
function elem(elem) {
  return document.getElementById(elem);
}

function swap(a, b, c, d, e, f) {
  elem(a).style.display = 'block';
  elem(b).style.display = 'none';
  elem(c).style.display = 'none';
  elem(d).style.display = 'none';
  elem(e).style.display = 'none';
  elem(f).style.display = 'none';
}