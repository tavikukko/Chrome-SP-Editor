var lastHash;
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (req) {
	    if (req.type == 'save') {
	    	var hash = req.content;
		    if (hash != lastHash && localStorage.autosave == 'true'){
		      lastHash = hash;
		      port.postMessage();
		    }
		}
    });
});
