var lastHash;
var autoSave;
var connPort;
var autoCheckout;
var autoPublish;

chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (req) {
      if (req.type == 'save') {
	    	var hash = req.content;
		    if (hash != lastHash && autoSave ){
		      lastHash = hash;
          port.postMessage({ "autoCheckout":autoCheckout, "autoPublish":autoPublish });
		    }
  		} else if (req.type == 'autosavechange') {
        connPort = port; //save panel port for future messages
        autoSave = req.content;
      } else if (req.type == 'autocheckoutchange') {
        autoCheckout = req.content;
        alert('koko');
      } else if (req.type == 'autopublishchange') {
        autoPublish = req.content;
      }
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (sender.tab) {
      connPort.postMessage(request);
    }
    return true;
});
