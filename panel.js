function elem(elem) {
    return document.getElementById(elem);
}

elem("autosave").addEventListener('change', function(e) {
  var payload = { "type":"autosavechange", "content":elem("autosave").checked };
  port.postMessage(payload);
}, false);

var port = chrome.extension.connect();
var payload = { "type":"autosavechange", "content":false };
port.postMessage(payload);
elem("autosave").checked = false;
