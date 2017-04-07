var port = chrome.runtime.connect();

// Listen to messages from the background page
// this listener will be removed when all code inside riot tags
port.onMessage.addListener(function (message) {

    if (typeof message !== 'object' || message === null ||
        message === undefined || message.source === undefined) {
        return;
    }

    switch (message.function) {
 
        case 'getZonesAndWebparts':
            if (message.success) {
                var zones = message.result;
                var html = '';
                for (var zone of zones) {
                    html += '<div class="zone">';
                    html += '<h3>WEBPART ZONE</h3>';
                    html += `<div class="add-new-webpart">Add new</div>`;
                    for (var wp of zone) {
                        if (!wp.title)
                            wp.title = "Webpart";

                        html += `<div class="webpart" data-id="${wp.id}">${wp.title}</div>`;
                    }
                    html += '</div>';
                }
                document.getElementById("webpart-zones-list").innerHTML = html;

                if (!webpartXmlEditor) {
                 /*   require.config({ paths: { 'vs': 'monaco-editor/min/vs' } });
                    require(['vs/editor/editor.main'], function () {
                        webpartXmlEditor = monaco.editor.create(document.getElementById('webpart-xml-container'), {
                            value: '',
                            language: 'xml',
                            lineNumbers: true,
                            roundedSelection: true,
                            scrollBeyondLastLine: false,
                            readOnly: false,
                            theme: "vs-dark",
                            fontSize: 16,
                            renderIndentGuides: true
                        });

                        window.addEventListener('resize', function () {
                            webpartXmlEditor.layout();
                        });
                    });*/
                }
            }
            break;
        case 'getZonesAndWebparts2':
            if (message.success) {
                for (var wp of message.result) {
                    var wpElement = document.querySelector(`[data-id="${wp.id}"]`);
                    if (wp.title != "")
                    wpElement.innerHTML = wp.title;
                    wpElement.parentNode.setAttribute("data-zone-id", wp.zoneId);
                    wpElement.parentNode.querySelector("h3").innerHTML = wp.zoneId;
                }
            }
            break;
        case 'getZonesAndWebparts3':
            if (message.success) {
                var zoneElements = Array.prototype.slice.call(document.querySelectorAll('.zone'));
                var parentNode = document.getElementById('webpart-zones-list');
                var zones = message.result;
                for (var i = 0; i < zones.length; i++) {
                    var zoneElement = document.querySelector(`[data-zone-id="${zones[i]}"]`);
                    if (zoneElement == null)
                    {
                        // add empty zone
                        var newZoneElement = document.createElement('div');
                        newZoneElement.className = 'zone';
                        newZoneElement.setAttribute('data-zone-id', zones[i]);
                        newZoneElement.innerHTML = `<h3>${zones[i]}</h3><div class="add-new-webpart">Add new</div>`;
                        parentNode.insertBefore(newZoneElement, zoneElements[i]);
                    }
                }
            }
            break;
        case 'loadWebpart':
            hideDimmer();
            if (message.success) {
                var wpId = message.result.id;
                webpartXmlCache[wpId] = message.result.xml;
                selectWebpart(wpId);
            }
            break;
        case 'saveWebpart':
            hideDimmer();

            if (message.success) {
                var selectedWp = document.querySelector('.webpart.selected');
                selectedWp.setAttribute("data-id", message.result);
                webpartXmlCache[message.result] = webpartXmlEditor.getValue();
                elem("webpart-save-success").style.display = "";
                setTimeout(function () { elem("webpart-save-success").style.display = "none"; }, 4000);
            } else {
                elem("webpart-save-error").innerHTML = message.result;
                elem("webpart-save-error").style.display = "";
                errorTimeout = setTimeout(function () { elem("webpart-save-error").style.display = "none"; }, 10000);
            }
            break;
        case 'deleteWebpart':
            hideDimmer();

            if (message.success) {
                var selectedWp = document.querySelector('.webpart.selected');
                selectedWp.parentNode.removeChild(selectedWp);
                webpartXmlEditor.setValue('');
            } else {
                elem("webpart-save-error").innerHTML = message.result;
                elem("webpart-save-error").style.display = "";
                errorTimeout = setTimeout(function() { elem("webpart-save-error").style.display = "none"; }, 10000);
            }
            break;
        default:
    }
});

var payload = { "type": "autosavechange", "content": false };
port.postMessage(payload);

riot.mount("sidebar"); // mount the left menu
swap('save'); // show first tab
riot.mount("save"); // mount the first tab

var webpartXmlCache = {};
var webpartXmlEditor;
var pnpjsconsole = null;

/*
elem('btnPageEditor').addEventListener('click', function (e) {
    swap('pageeditor');

    if (webpartXmlEditor)
        return;

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getZonesAndWebparts;
    script += " exescript(getZonesAndWebparts);";
    chrome.devtools.inspectedWindow.eval(script);

});
*/














var dimmerTimeout;
var errorTimeout;

/*
elem('webpart-zones-list').addEventListener('click', function (e) {

    var selectedWp = document.querySelector('.webpart.selected');
    if (selectedWp) {
        var selectedWpId = selectedWp.attributes["data-id"].value;
        if (webpartXmlCache[selectedWpId] != webpartXmlEditor.getValue()) {
            if (!confirm("Drop changes to current webpart?"))
                return;
            if (selectedWpId == "new")
                selectedWp.parentNode.removeChild(selectedWp);
        }
    }

    if (e.target.className == 'add-new-webpart')
    {
        // add webpart
        selectWebpart('');
        var newWpNode = document.createElement("div");
        newWpNode.className="webpart selected";
        newWpNode.setAttribute("data-id", "new");
        newWpNode.innerHTML = "new webpart";
        e.target.parentNode.insertBefore(newWpNode, e.target.nextSibling);
        webpartXmlEditor.setValue('');
        return;
    }

    var idAttr = e.target.attributes["data-id"];
    if (!idAttr || idAttr.value == "new")
        return;

    if (webpartXmlCache[idAttr.value]) {
        selectWebpart(idAttr.value);
        return;
    }

    scheduleDimmer();

    var script = exescript + ' ' + loadWebpart;
    script += " exescript(loadWebpart, '" + idAttr.value + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('webpart-save-button').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var selectedWp = document.querySelector('.webpart.selected');
    if (!webpartXmlEditor || !webpartXmlEditor.getValue() || !selectedWp)
        return;

    var idAttr = selectedWp.attributes["data-id"];
    if (!idAttr)
        return;

    var zoneAttr = selectedWp.parentNode.attributes["data-zone-id"];
    if (idAttr.value == "new" && !zoneAttr)
        return;

    elem("webpart-save-error").style.display = "none";

    var wpContents = webpartXmlEditor.getValue();

    scheduleDimmer();

    var script = exescript + ' ' + saveWebpart;
    script += " exescript(saveWebpart, '" + idAttr.value + "', '" + encodeURIComponent(wpContents).replace(/'/g, "%27") + "', '" + (zoneAttr ? zoneAttr.value : "") + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('webpart-delete-button').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var selectedWp = document.querySelector('.webpart.selected');
    if (!webpartXmlEditor || !webpartXmlEditor.getValue() || !selectedWp)
        return;

    var idAttr = selectedWp.attributes["data-id"];
    if (!idAttr)
        return;

    if (!confirm('Are you sure want to delete this webpart?'))
        return;

    elem("webpart-save-error").style.display = "none";
    
    scheduleDimmer();

    var script = exescript + ' ' + deleteWebpart;
    script += " exescript(deleteWebpart, '" + idAttr.value + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

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


