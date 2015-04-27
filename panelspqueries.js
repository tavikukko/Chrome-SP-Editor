// getCustomActions
var getCustomActions = function getCustomActions() {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
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
  });
};

var getCustomActionsSucceeded = function getCustomActionsSucceeded(sender, args) {
    var webactions = [];
    var weblistEnumerator = WebUserCustomActions.getEnumerator();

    while (weblistEnumerator.moveNext()) {
        var oList = weblistEnumerator.get_current();
        webactions.push({location: oList.get_location(),
        description: oList.get_description(),
        scriptSrc: oList.get_scriptSrc(),
        scriptBlock: oList.get_scriptBlock(),
        sequence: oList.get_sequence(),
        heading: "Current web scriptlinks",
        scope: "web",
        id: oList.get_id().toString()});
    }

    var siteactions = [];
    var sitelistEnumerator = SiteUserCustomActions.getEnumerator();

    while (sitelistEnumerator.moveNext()) {
        var oList = sitelistEnumerator.get_current();
        siteactions.push({location: oList.get_location(),
        description: oList.get_description(),
        scriptSrc: oList.get_scriptSrc(),
        scriptBlock: oList.get_scriptBlock(),
        sequence: oList.get_sequence(),
        heading: "Site collection scriptlinks",
        scope: "site",
        id: oList.get_id().toString()});
    }

    var actions = [];
    actions.push(webactions);
    actions.push(siteactions);

    window.postMessage({ function: 'getCustomActions', success: true, result: actions, source: 'chrome-sp-editor' }, '*');
};

var getCustomActionsFailed = function getCustomActionsFailed(sender, args) {
    window.postMessage({ function: 'getCustomActions', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
};

// addCustomAction
var addCustomAction = function addCustomAction(scope, url, sequence) {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
    var clientContext = new SP.ClientContext();
    var UserCustomActions;

    if(scope === 'site') UserCustomActions = clientContext.get_site().get_userCustomActions();
    else UserCustomActions = clientContext.get_web().get_userCustomActions();

    var newUserCustomAction = UserCustomActions.add();
    newUserCustomAction.set_location('ScriptLink');

    var querystrings = "";

    if(url.split("?").length > 1)
    {
      querystrings = '?' + url.split("?")[1];
      url = url.split("?")[0];
    }

    if(url.indexOf("~") > -1 && url.match(/.js$/))
      {
        newUserCustomAction.set_scriptSrc(url+querystrings);
      }

    else if(url.match(/.js$/))
      {
        //generate unique variable names
        var headID = "";
        var newScript = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for( var i=0; i < 5; i++ )
            headID += possible.charAt(Math.floor(Math.random() * possible.length));
        for( var i=0; i < 5; i++ )
            newScript += possible.charAt(Math.floor(Math.random() * possible.length));

        var jsScriptBlock = "var " + headID + " = document.getElementsByTagName(\"head\")[0]; ";
        jsScriptBlock += "var " + newScript + " = document.createElement(\"script\");";
        jsScriptBlock += " " + newScript + ".type = \"text/javascript\";";
        jsScriptBlock += " " + newScript + ".src = \""+url+querystrings+"\";" ;
        jsScriptBlock += " " + headID + ".appendChild(" + newScript + ");";
        newUserCustomAction.set_scriptBlock(jsScriptBlock);
      }
    else if(url.match(/.css$/)){
      newUserCustomAction.set_scriptBlock("document.write('<link rel=\"stylesheet\" href=\"" + url+querystrings + "\" />');");
    }
    else return;
    newUserCustomAction.set_sequence(sequence);
    newUserCustomAction.update();

    clientContext.executeQueryAsync(
      Function.createDelegate(this, addCustomActionSucceeded),
      Function.createDelegate(this, addCustomActionFailed)
      );
    });
  });
};

var addCustomActionSucceeded = function addCustomActionSucceeded(sender, args) {
    window.postMessage({ function: 'addCustomAction', success: true, result: null, source: 'chrome-sp-editor' }, '*');
};

var addCustomActionFailed = function addCustomActionFailed(sender, args) {
    window.postMessage({ function: 'addCustomAction', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
};

// removeCustomAction
var removeCustomAction = function removeCustomAction(scope, id) {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
    this.clientContext = new SP.ClientContext();
    this.UserCustomActions;
    this.id = id;
    if(scope === 'site') this.UserCustomActions = clientContext.get_site().get_userCustomActions();
    else this.UserCustomActions = clientContext.get_web().get_userCustomActions();
    clientContext.load(this.UserCustomActions)
    clientContext.executeQueryAsync(
      Function.createDelegate(this, removeCustomActionSucceeded),
      Function.createDelegate(this, removeCustomActionFailed)
      );
    });
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
    window.postMessage({ function: 'removeCustomAction', success: true, result: null, source: 'chrome-sp-editor' }, '*');
};

var removeCustomActionFailed = function removeCustomActionFailed(sender, args) {
    window.postMessage({ function: 'removeCustomAction', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
};

// add new file to style%20library
var addFile = function addFile(filename) {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
    var clientContext = new SP.ClientContext();
    var site = clientContext.get_site();

    var createInfo = new SP.FileCreationInformation();
    createInfo.set_content(new SP.Base64EncodedByteArray());
    createInfo.set_overwrite(true);
    createInfo.set_url(filename);
    this.file = site.get_rootWeb().getFolderByServerRelativeUrl('style%20library').get_files().add(createInfo);
    clientContext.load(this.file);
    clientContext.executeQueryAsync(
      Function.createDelegate(this, addFileSucceeded),
      Function.createDelegate(this, addFileFailed)
      );
    });
  });
};

var addFileSucceeded = function addFileSucceeded(sender, args) {
    window.postMessage({ function: 'addFile', success: true, result: null, source: 'chrome-sp-editor' }, '*');
};

var addFileFailed = function addFileFailed(sender, args) {
    window.postMessage({ function: 'addFile', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
};

// getWebProperties
var getWebProperties = function getWebProperties() {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
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
    var compare = function compare(a,b) {
      if (a.prop.toLowerCase() < b.prop.toLowerCase())
         return -1;
      if (a.prop.toLowerCase() > b.prop.toLowerCase())
        return 1;
      return 0;
      }
    
    var allProperties = this.webProperties.get_fieldValues();
    var arr = [];
    for (property in allProperties) 
        arr.push({prop: property, value: allProperties[property]});   
    
    arr.sort(compare);
    var propertyBag = arr.slice();
    window.postMessage({ function: 'getWebProperties', success: true, result: propertyBag, source: 'chrome-sp-editor' }, '*');
};

var getWebPropertiesFailed = function getWebPropertiesFailed(sender, args) {
    window.postMessage({ function: 'getWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
};

// updateWebProperties
var updateWebProperties = function updateWebProperties(prop, value) {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
    this.clientContext = new SP.ClientContext();
    this.prop = prop;
    this.value = value;
    this.web = clientContext.get_web();
    this.webProperties = clientContext.get_web().get_allProperties();
    clientContext.load(this.webProperties);
    clientContext.load(this.web);
    clientContext.executeQueryAsync(
      Function.createDelegate(this, updateWebPropertiesSucceeded),
      Function.createDelegate(this, updateWebPropertiesFailed)
      );
    });
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
    window.postMessage({ function: 'updateWebProperties', success: true, result: null, source: 'chrome-sp-editor' }, '*');
};

var updateWebPropertiesFailed = function updateWebPropertiesFailed(sender, args) {
    window.postMessage({ function: 'updateWebProperties', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
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
