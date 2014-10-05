function injectedMethod (tab, method, callback) {

  callback();
  /*  chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function(){
      chrome.tabs.sendMessage(tab.id, { method: method }, callback);
    });*/
}

function getBgColors (tab) {
  injectedMethod(tab, 'getBgColors', function (response) {
    alert('Elements in tab: ');// + response.data);
    return true;
  });
}
chrome.devtools.inspectedWindow.onResourceContentCommitted.addListener(getBgColors);
