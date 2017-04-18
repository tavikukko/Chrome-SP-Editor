var port = chrome.runtime.connect();

var payload = { "type": "autosavechange", "content": false };
port.postMessage(payload);

riot.mount("sidebar"); // mount the left menu
swap('save'); // show first tab
riot.mount("save"); // mount the first tab

require.config({ paths: { 'vs': 'monaco-editor/min/vs' } });

var pnpjsconsole = null;
var fileeditorsubs = [];
var fileeditormain = null;
var fileeditoreditor;
// this is called from multiple tabs, so it will be here
function addscriptlink(scope, scriptsequence, scriptpath) {

    if (scriptpath == "") {

        var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, 'Script path cannot be empty!');";
        chrome.devtools.inspectedWindow.eval(script);

        return;
    }
    else if (scriptsequence == "") {

        var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, 'Sequence cannot be empty!');";
        chrome.devtools.inspectedWindow.eval(script);

        return;
    }

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addCustomAction;
    script += " exescript(addCustomAction, '" + scope + "', '" + scriptpath + "', '" + scriptsequence + "');";
    chrome.devtools.inspectedWindow.eval(script);
}


