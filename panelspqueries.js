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
    if(url.match(/.js$/))
      newUserCustomAction.set_scriptSrc(url);
    else{

      url = url.toLowerCase();
      if(url.indexOf("~sitecollection") > -1)
        url = url.replace("~sitecollection", _spPageContextInfo.siteAbsoluteUrl);
      else if(url.indexOf("~site") > -1)
        url = url.replace("~site", _spPageContextInfo.webAbsoluteUrl);

      newUserCustomAction.set_scriptBlock("document.write('<link rel=\"stylesheet\" href=\"" + url + "\" />');");
    }
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

// helper functions
function elem(elem) {
    return document.getElementById(elem);
}

function swap(a, b, c, d) {
    elem(a).style.display = 'block';
    elem(b).style.display = 'none';
    elem(c).style.display = 'none';
    elem(d).style.display = 'none';
}
