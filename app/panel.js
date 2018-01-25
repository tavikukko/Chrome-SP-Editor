var userAgentApplication = new Msal.UserAgentApplication('20d34c96-396e-4bf0-a008-472ef10a5099', null, function (errorDes, token, error, tokenType) {
  // this callback is called after loginRedirect OR acquireTokenRedirect. It's not used with loginPopup,  acquireTokenPopup.
  if (error)
      console.log(error + ": " + errorDes);
  else
      console.log("Token type = " + tokenType);
});

var port = chrome.runtime.connect();

port.postMessage( { type: "init", tabId: chrome.devtools.inspectedWindow.tabId } );

port.postMessage({ type: "autosavechange", content: false, tabId: chrome.devtools.inspectedWindow.tabId });

port.postMessage( { type: "autopublishchange", content: false, tabId: chrome.devtools.inspectedWindow.tabId });


riot.mount("sidebar"); // mount the left menu
swap('save'); // show first tab
var savetab = riot.mount("save"); // mount the first tab

require.config({ paths: { 'vs': 'monaco-editor/min/vs', 'js': 'js' } });

var graphman = null;
var graphmantoken = "";
var pnpjsconsole = null;
var fileeditorsubs = [];
var fileeditormain = null;
var fileeditoreditor;
var appcatalogeditor;
var sitescriptseditor;
var selectedFile = null;
var selectedWebId = null;
var pageeditorlisteners = [];
var sitescriptslisteners = [];
var fileeditorlisteners = {};
var bgautosave = false;
var bgautopublish = false;
var modernpropertiesinitialized = false;
var modernpropertiesmain;
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


