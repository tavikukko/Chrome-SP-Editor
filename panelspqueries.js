var getCustomActions = function getCustomActions() {
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
    var clientContext = new SP.ClientContext();
    var site = clientContext.get_site();
    UserCustomActions = site.get_userCustomActions();
    clientContext.load(UserCustomActions);
    clientContext.executeQueryAsync(
      Function.createDelegate(this, getCustomActionsSucceeded),
      Function.createDelegate(this, getCustomActionsFailed)
      );
    });
  });
};

var getCustomActionsSucceeded = function getCustomActionsSucceeded(sender, args) {
    var listInfo = '';
    var actions = [];
    var listEnumerator = UserCustomActions.getEnumerator();

    while (listEnumerator.moveNext()) {
        var oList = listEnumerator.get_current();
        listInfo += 'Location: ' + oList.get_location() +  '\n' + 'Description:' + oList.get_description() +  '\n'+ 'scriptSrc:' + oList.get_scriptSrc() +  '\n';
        actions.push({location: oList.get_location(),
        description: oList.get_description(),
        scriptSrc: oList.get_scriptSrc(),
        sequence: oList.get_sequence()});
    }
    window.postMessage({ function: 'getCustomActions', success: true, result: actions, source: 'chrome-sp-editor' }, '*');
};

var getCustomActionsFailed = function getCustomActionsFailed(sender, args) {
    window.postMessage({ function: 'getCustomActions', success: false, result: args.get_message(), source: 'chrome-sp-editor' }, '*');
};

function elem(elem) {
    return document.getElementById(elem);
}

function swap(a, b, c, d) {
    elem(a).style.display = 'block';
    elem(b).style.display = 'none';
    elem(c).style.display = 'none';
    elem(d).style.display = 'none';
}
