
/*
var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('pnp.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
*/
window.addEventListener('message', function(event) {

  if (event.source !== window) {
    return;
  }

  var message = JSON.parse(event.data);

  if (typeof message !== 'object' || message === null ||
    message === undefined || message.source === undefined) {
    return;
  }

  chrome.runtime.sendMessage(message);
});
