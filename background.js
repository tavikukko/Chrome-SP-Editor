var lastHash;
var autoSave;
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (req) {
      if (req.type == 'save') {
	    	var hash = req.content;
		    if (hash != lastHash && autoSave ){
		      lastHash = hash;
		      port.postMessage();
		    }
  		} else if (req.type == 'autosavechange') {
        autoSave = req.content;
      }
    });
});
