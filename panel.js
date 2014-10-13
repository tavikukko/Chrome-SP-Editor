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
swap('save','script','files','about');

function swap(a, b, c, d) {
    elem(a).style.display = 'block';
    elem(b).style.display = 'none';
    elem(c).style.display = 'none';
    elem(d).style.display = 'none';
}

elem('btnSave').addEventListener('click',function(e){
    swap('save','script','files','about');
});

elem('btnScript').addEventListener('click',function(e){
    swap('script','files','about','save');
});

elem('btnFiles').addEventListener('click',function(e){
    swap('files','script','save','about');
});

elem('btnAbout').addEventListener('click',function(e){
    swap('about','save','script', 'files');
});
