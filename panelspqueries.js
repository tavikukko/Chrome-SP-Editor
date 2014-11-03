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
        sequence: oList.get_sequence(),
        scope: "Current web scriptlinks"});
    }

    var siteactions = [];
    var sitelistEnumerator = SiteUserCustomActions.getEnumerator();

    while (sitelistEnumerator.moveNext()) {
        var oList = sitelistEnumerator.get_current();
        siteactions.push({location: oList.get_location(),
        description: oList.get_description(),
        scriptSrc: oList.get_scriptSrc(),
        sequence: oList.get_sequence(),
        scope: "Site collection scriptlinks"});
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
    newUserCustomAction.set_scriptSrc(url);
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
