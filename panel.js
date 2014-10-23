var port = chrome.runtime.connect();

// Listen to messages from the background page
port.onMessage.addListener(function (message) {

  if (typeof message !== 'object' || message === null ||
    message === undefined || message.source === undefined) {
    return;
  }

  switch (message.function) {
      case 'updateFile':
        if(message.success)
          alert('File updated successfully!');
        else
          alert(message.result);
          break;
      case 'getCustomActions':
        if(message.success){
          var items = message.result;
          var ul = document.createElement('ul');
          var ulatt=document.createAttribute("class");
          ulatt.value="list-group";
          ul.setAttributeNode(ulatt);

          for (i = 0; i < items.length; i++) {
                var li=document.createElement('li');
                var liatt=document.createAttribute("class");
                liatt.value="list-group-item";
                li.setAttributeNode(liatt);
                ul.appendChild(li);
                li.innerHTML=items[i].scriptSrc;
          }

          var element = elem("scriptlinks");
          element.appendChild(ul);
        }
        else
          alert(message.result);
          break;
      default:

  }
});

var payload = { "type":"autosavechange", "content":false };
port.postMessage(payload);

elem("autosave").checked = false;
swap('save','script','files','about');

//event bindings
elem("autosave").addEventListener('change', function(e) {
  var payload = { "type":"autosavechange", "content":elem("autosave").checked };
  port.postMessage(payload);
}, false);

elem('btnSave').addEventListener('click',function(e){
    swap('save','script','files','about');
});

elem('btnScript').addEventListener('click',function(e){
    swap('script','files','about','save');
    var script = getCustomActions + ' ' + getCustomActionsSucceeded + ' ' + getCustomActionsFailed;
    script += ' getCustomActions();';
    chrome.devtools.inspectedWindow.eval(script);
});

elem('btnFiles').addEventListener('click',function(e){
    swap('files','script','save','about');
});

elem('btnAbout').addEventListener('click',function(e){
    swap('about','save','script', 'files');
});
