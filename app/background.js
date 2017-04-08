var lastHash;
var connPort;
var activeSaveTabs = [];
var activePublishTabs = [];

chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (req) {
      if (req.type == 'save') {
	    	var hash = req.content;
		    if (hash != lastHash && activeSaveTabs.indexOf(req.tabId) > -1){
          lastHash = hash;
          var publish = activePublishTabs.indexOf(req.tabId) > -1;
          port.postMessage({ "autoPublish":publish });
		    }
  		} else if (req.type == 'autosavechange') {
        if(!req.content)
        for(var i = activeSaveTabs.length - 1; i >= 0; i--) {
            if(activeSaveTabs[i] === req.tabId) {
               activeSaveTabs.splice(i, 1);
            }
        }
        else {
          activeSaveTabs.push(req.tabId);
        }
        connPort = port;
      } else if (req.type == 'autopublishchange') {
        if(!req.content)
        for(var i = activePublishTabs.length - 1; i >= 0; i--) {
            if(activePublishTabs[i] === req.tabId) {
               activePublishTabs.splice(i, 1);
            }
        }
        else {
          activePublishTabs.push(req.tabId);
        }
      }
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (sender.tab) {
      connPort.postMessage(request);
    }
    return true;
});
