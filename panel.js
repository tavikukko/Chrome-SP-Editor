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
      case 'addCustomAction':
        if(message.success)
          alert('scriptlink added successfully!');
        else
          alert(message.result);
          break;
      case 'getCustomActions':
        if(message.success){
            var element = elem("scriptlinks");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }

            for (j = 0; j < message.result.length; j++) {
              var items = message.result[j];
              items.sort(function(a,b){return a.sequence - b.sequence});

              var ul = document.createElement('ul');
              var ulatt = document.createAttribute("class");
              ulatt.value="list-group";
              ul.setAttributeNode(ulatt);

              for (i = 0; i < items.length; i++) {
                if(i==0){
                    var li=document.createElement('li');
                    var liatt=document.createAttribute("class");
                    liatt.value="list-group-item active";
                    li.setAttributeNode(liatt);
                    ul.appendChild(li);
                    li.innerHTML=items[i].scope;
                  }
                  var li=document.createElement('li');
                  var liatt=document.createAttribute("class");
                  liatt.value="list-group-item";
                  li.setAttributeNode(liatt);
                  ul.appendChild(li);
                  li.innerHTML = "<span class='pull-left' style='width: 10%' >"+items[i].sequence+"</span><span>"+items[i].scriptSrc+"</span><span class='glyphicon glyphicon-remove pull-right' style='cursor: hand;'></span>";
              }
              element.appendChild(ul);
          }
          var removescript = document.getElementsByClassName("glyphicon-remove");

          for(var i=0;i<removescript.length;i++){
              removescript[i].addEventListener('click',function(e){
                  alert("remove me");
              });
          }
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

elem('addscriptsite').addEventListener('click',function(e){
  addscriptlink('site');
});

elem('addscriptweb').addEventListener('click',function(e){
  addscriptlink('web');
});

function addscriptlink (scope)
{
  var scriptpath = elem('scriptpath').value;
  var scriptsequence = elem('scriptsequence').value;

  if(scriptpath == "")
    {
      alert('Script path cannot be empty');
      return;
    }
  else if (scriptsequence == "")
    {
      alert('Sequence cannot be empty');
      return;
    }

  var script = addCustomAction + ' ' + addCustomActionSucceeded + ' ' + addCustomActionFailed;
  script += ' addCustomAction(REPLACE-SCOPE, REPLACE-URL, REPLACE-SEQUENCE);';
  script = script.replace('REPLACE-SCOPE', "'" + scope + "'");
  script = script.replace('REPLACE-URL', "'" + scriptpath + "'");
  script = script.replace('REPLACE-SEQUENCE', scriptsequence);
  chrome.devtools.inspectedWindow.eval(script);
}
