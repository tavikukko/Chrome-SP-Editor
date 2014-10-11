var lastHash;
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (hash) {
        if (hash != lastHash){
          lastHash = hash;
          port.postMessage();
        }
    });
});
