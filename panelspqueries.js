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

    var listEnumerator = UserCustomActions.getEnumerator();

    while (listEnumerator.moveNext()) {
        var oList = listEnumerator.get_current();
        listInfo += 'Location: ' + oList.get_location() +  '\n' + 'Description:' + oList.get_description() +  '\n'+ 'scriptSrc:' + oList.get_scriptSrc() +  '\n';
    }
    alert(listInfo);
};

var getCustomActionsFailed = function getCustomActionsFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
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
