var alertifyConf = " alertify.logPosition('bottom right'); alertify.maxLogItems(2); ";

var alertyfyScript = " if (typeof alertify == 'undefined') { " +
  " var scriptx = document.createElement('script'); " +
  " scriptx.onload = function() { " +
  " EVAL " +
  " }; " +
  " scriptx.src = '" + chrome.extension.getURL("alertify.js") + "'; " +
  " document.body.appendChild(scriptx); " +
  " } else { " +
  " EVAL " +
  " } ";

// getCustomActions
var getCustomActions = function getCustomActions() {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    var clientContext = new SP.ClientContext();
    var web = clientContext.get_web();
    var site = clientContext.get_site();
    WebUserCustomActions = web.get_userCustomActions();
    SiteUserCustomActions = site.get_userCustomActions();
    clientContext.load(WebUserCustomActions);
    clientContext.load(SiteUserCustomActions);
    clientContext.executeQueryAsync(
      Function.createDelegate(this, getCustomActionsSucceeded),
      Function.createDelegate(this, getCustomActionsFailed)
    );
  });
};

var getCustomActionsSucceeded = function getCustomActionsSucceeded(sender, args) {
  var webactions = [];
  var weblistEnumerator = WebUserCustomActions.getEnumerator();

  while (weblistEnumerator.moveNext()) {
    var oList = weblistEnumerator.get_current();
    webactions.push({
      location: oList.get_location(),
      description: oList.get_description(),
      scriptSrc: oList.get_scriptSrc(),
      scriptBlock: oList.get_scriptBlock(),
      sequence: oList.get_sequence(),
      heading: "Current web scriptlinks",
      scope: "web",
      id: oList.get_id().toString()
    });
  }

  var siteactions = [];
  var sitelistEnumerator = SiteUserCustomActions.getEnumerator();

  while (sitelistEnumerator.moveNext()) {
    var oList = sitelistEnumerator.get_current();
    siteactions.push({
      location: oList.get_location(),
      description: oList.get_description(),
      scriptSrc: oList.get_scriptSrc(),
      scriptBlock: oList.get_scriptBlock(),
      sequence: oList.get_sequence(),
      heading: "Site collection scriptlinks",
      scope: "site",
      id: oList.get_id().toString()
    });
  }

  var actions = [];
  actions.push(webactions);
  actions.push(siteactions);

  window.postMessage(JSON.stringify({ function: 'getCustomActions', success: true, result: actions, source: 'chrome-sp-editor' }), '*');
};

var getCustomActionsFailed = function getCustomActionsFailed(sender, args) {
  window.postMessage(JSON.stringify({ function: 'getCustomActions', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};

// addCustomAction
var addCustomAction = function addCustomAction(scope, url, sequence) {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    var clientContext = new SP.ClientContext();
    var UserCustomActions;

    if (scope === 'site') UserCustomActions = clientContext.get_site().get_userCustomActions();
    else UserCustomActions = clientContext.get_web().get_userCustomActions();

    var newUserCustomAction = UserCustomActions.add();
    newUserCustomAction.set_location('ScriptLink');

    var querystrings = "";

    if (url.split("?").length > 1) {
      querystrings = '?' + url.split("?")[1];
      url = url.split("?")[0];
    }

    if (url.match(/.js$/)) {
      newUserCustomAction.set_scriptSrc(url + querystrings);
    }
    else if (url.match(/.css$/)) {
      newUserCustomAction.set_scriptBlock("document.write('<link rel=\"stylesheet\" href=\"" + url + querystrings + "\" />');");
    }
    else {
      alertify.delay(5000).error("Only JS and CSS files!!");
      return;
    }

    newUserCustomAction.set_sequence(sequence);
    newUserCustomAction.update();
    alertify.delay(5000).log("Adding scriptLink...");
    clientContext.executeQueryAsync(
      Function.createDelegate(this, addCustomActionSucceeded),
      Function.createDelegate(this, addCustomActionFailed)
    );
  });
};

var addCustomActionSucceeded = function addCustomActionSucceeded(sender, args) {
  alertify.delay(5000).success("ScriptLink added successfully!");
  window.postMessage(JSON.stringify({ function: 'addCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');
};

var addCustomActionFailed = function addCustomActionFailed(sender, args) {
  alertify.delay(10000).error(args.get_message());
  window.postMessage(JSON.stringify({ function: 'addCustomAction', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};

// removeCustomAction
var removeCustomAction = function removeCustomAction(scope, id) {
  alertify.confirm("Really want to delete this scriptLink?", function () {
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
      this.clientContext = new SP.ClientContext();
      this.UserCustomActions;
      this.id = id;
      if (scope === 'site') this.UserCustomActions = clientContext.get_site().get_userCustomActions();
      else this.UserCustomActions = clientContext.get_web().get_userCustomActions();
      clientContext.load(this.UserCustomActions)
      alertify.delay(5000).log("Removing scriptLink...");
      clientContext.executeQueryAsync(
        Function.createDelegate(this, removeCustomActionSucceeded),
        Function.createDelegate(this, removeCustomActionFailed)
      );
    });
  }, function () {
    // user clicked "cancel"
  });
};

var removeCustomActionSucceeded = function removeCustomActionSucceeded(sender, args) {
  var customActionEnumerator = this.UserCustomActions.getEnumerator();
  var deleteId;
  while (customActionEnumerator.moveNext()) {
    var oUserCustomAction = customActionEnumerator.get_current();
    if (oUserCustomAction.get_id().toString() === this.id) {
      deleteId = oUserCustomAction.get_id();
    }
  }
  var customActionToDelete = this.UserCustomActions.getById(deleteId);
  customActionToDelete.deleteObject();
  this.clientContext.load(customActionToDelete);
  this.clientContext.executeQueryAsync(
    Function.createDelegate(this, removeCustomActionSucceeded2),
    Function.createDelegate(this, removeCustomActionFailed)
  );
};

var removeCustomActionSucceeded2 = function removeCustomActionSucceeded2(sender, args) {
  alertify.delay(5000).success("ScriptLink removed successfully!");
  window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: true, result: null, source: 'chrome-sp-editor' }), '*');
};

var removeCustomActionFailed = function removeCustomActionFailed(sender, args) {
  alertify.delay(10000).error(args.get_message());
  window.postMessage(JSON.stringify({ function: 'removeCustomAction', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};

// add new file to root site Style Library
var addFile = function addFile(filename) {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    var clientContext = new SP.ClientContext();
    var site = clientContext.get_site();
    var createInfo = new SP.FileCreationInformation();
    createInfo.set_content(new SP.Base64EncodedByteArray());
    var fileContent = "/* Created from Chrome SP Editor */";
    for (var i = 0; i < fileContent.length; i++)
      createInfo.get_content().append(fileContent.charCodeAt(i));
    createInfo.set_overwrite(true);
    createInfo.set_url(filename);
    this.file = site.get_rootWeb().getFolderByServerRelativeUrl('style%20library').get_files().add(createInfo);
    clientContext.load(this.file);
    alertify.delay(5000).log("Adding '<b>" + filename + "</b>' to Style Library...");
    clientContext.executeQueryAsync(
      Function.createDelegate(this, addFileSucceeded),
      Function.createDelegate(this, addFileFailed)
    );
  });
};

var addFileSucceeded = function addFileSucceeded(sender, args) {
  alertify.delay(5000).success("File added successfully!");
  window.postMessage(JSON.stringify({ function: 'addFile', success: true, result: null, source: 'chrome-sp-editor' }), '*');
};

var addFileFailed = function addFileFailed(sender, args) {
  alertify.delay(10000).error(args.get_message());
  window.postMessage(JSON.stringify({ function: 'addFile', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};

// getWebProperties
var getWebProperties = function getWebProperties() {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    var clientContext = new SP.ClientContext();
    this.webProperties = clientContext.get_web().get_allProperties();
    clientContext.load(this.webProperties);
    clientContext.executeQueryAsync(
      Function.createDelegate(this, getWebPropertiesSucceeded),
      Function.createDelegate(this, getWebPropertiesFailed)
    );
  });
};

var getWebPropertiesSucceeded = function getWebPropertiesSucceeded(sender, args) {
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
};

var getWebPropertiesFailed = function getWebPropertiesFailed(sender, args) {
  window.postMessage(JSON.stringify({ function: 'getWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};

// addWebProperties
var addWebProperties = function addWebProperties(prop, value) {
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
};

var addWebPropertiesSucceeded = function addWebPropertiesSucceeded(sender, args) {
  var allProperties = this.webProperties;
  allProperties.set_item(this.prop, this.value);
  this.web.update();
  this.clientContext.executeQueryAsync(
    Function.createDelegate(this, addWebPropertiesSucceeded2),
    Function.createDelegate(this, addWebPropertiesFailed)
  );
};

var addWebPropertiesSucceeded2 = function addWebPropertiesSucceeded2(sender, args) {
  alertify.delay(5000).success("Property added successfully!");
  window.postMessage(JSON.stringify({ function: 'addWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
};

var addWebPropertiesFailed = function addWebPropertiesFailed(sender, args) {
  alertify.delay(10000).error(args.get_message());
  window.postMessage(JSON.stringify({ function: 'addWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};

// updateWebProperties
var updateWebProperties = function updateWebProperties(prop, value) {
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
};

var updateWebPropertiesSucceeded = function updateWebPropertiesSucceeded(sender, args) {
  var allProperties = this.webProperties;
  allProperties.set_item(this.prop, this.value);
  this.web.update();
  this.clientContext.executeQueryAsync(
    Function.createDelegate(this, updateWebPropertiesSucceeded2),
    Function.createDelegate(this, updateWebPropertiesFailed)
  );
};

var updateWebPropertiesSucceeded2 = function updateWebPropertiesSucceeded2(sender, args) {
  alertify.delay(5000).success("Property updated successfully!");
  window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
};

var updateWebPropertiesFailed = function updateWebPropertiesFailed(sender, args) {
  alertify.delay(10000).error(args.get_message());
  window.postMessage(JSON.stringify({ function: 'updateWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};

// deleteWebProperties
var deleteWebProperties = function deleteWebProperties(prop) {
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
};

var deleteWebPropertiesSucceeded = function deleteWebPropertiesSucceeded(sender, args) {
  var allProperties = this.webProperties;
  allProperties.set_item(this.prop, null);
  this.web.update();
  this.clientContext.executeQueryAsync(
    Function.createDelegate(this, deleteWebPropertiesSucceeded2),
    Function.createDelegate(this, deleteWebPropertiesFailed)
  );
};

var deleteWebPropertiesSucceeded2 = function deleteWebPropertiesSucceeded2(sender, args) {
  alertify.delay(5000).success("Property deleted successfully!");
  window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: true, result: null, source: 'chrome-sp-editor' }), '*');
};

var deleteWebPropertiesFailed = function deleteWebPropertiesFailed(sender, args) {
  alertify.delay(10000).error(args.get_message());
  window.postMessage(JSON.stringify({ function: 'deleteWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};

// addToIndexedPropertyKeys
var addToIndexedPropertyKeys = function addToIndexedPropertyKeys(prop, remove) {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    this.clientContext = new SP.ClientContext();
    this.prop = prop;
    this.remove = remove;
    this.web = this.clientContext.get_web();
    this.webProperties = this.clientContext.get_web().get_allProperties();
    this.clientContext.load(this.webProperties);
    this.clientContext.load(this.web);
    if(remove)
      alertify.delay(5000).log("Removing '<b>" + prop + "</b>' from vti_indexedpropertykeys...");
    else
      alertify.delay(5000).log("Adding '<b>" + prop + "</b>' to vti_indexedpropertykeys...");
    this.clientContext.executeQueryAsync(
      Function.createDelegate(this, addToIndexedPropertyKeysSucceeded),
      Function.createDelegate(this, addToIndexedPropertyKeysFailed)
    );
  });
};

var addToIndexedPropertyKeysSucceeded = function addToIndexedPropertyKeysSucceeded(sender, args) {
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
  else{
    newIndexValue = allProperties.get_fieldValues()["vti_indexedpropertykeys"].replace(b64encoded + "|", "");
  }
  
  allProperties.set_item("vti_indexedpropertykeys", newIndexValue);
  this.web.update();
  this.clientContext.executeQueryAsync(
    Function.createDelegate(this, addToIndexedPropertyKeysSucceeded2),
    Function.createDelegate(this, addToIndexedPropertyKeysFailed)
  );
};

var addToIndexedPropertyKeysSucceeded2 = function addToIndexedPropertyKeysSucceeded2(sender, args) {
  if(this.remove)
    alertify.delay(5000).success("Property removed from vti_indexedpropertykeys successfully!");
  else
    alertify.delay(5000).success("Property added to vti_indexedpropertykeys successfully!");
  window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: true, result: null, source: 'chrome-sp-editor' }), '*');
};

var addToIndexedPropertyKeysFailed = function addToIndexedPropertyKeysFailed(sender, args) {
  alertify.delay(10000).error(args.get_message());
  window.postMessage(JSON.stringify({ function: 'addToIndexedPropertyKeys', success: false, result: args.get_message(), source: 'chrome-sp-editor' }), '*');
};


// helper functions
function elem(elem) {
  return document.getElementById(elem);
}

function swap(a, b, c, d, e) {
  elem(a).style.display = 'block';
  elem(b).style.display = 'none';
  elem(c).style.display = 'none';
  elem(d).style.display = 'none';
  elem(e).style.display = 'none';
}