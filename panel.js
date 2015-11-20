var port = chrome.runtime.connect();
var injectAlertify = "if (typeof alertify == 'undefined') { " +
"var loadAlertify = document.createElement('script'); " +
      "loadAlertify.src = '" + chrome.extension.getURL("alertify.js") + "'; " +
      "document.body.appendChild(loadAlertify); } ";
chrome.devtools.inspectedWindow.eval(injectAlertify);

// Listen to messages from the background page
port.onMessage.addListener(function (message) {

  if (typeof message !== 'object' || message === null ||
    message === undefined || message.source === undefined) {
    return;
  }

  switch (message.function) {
      case 'updateFile':
          break;
      case 'addCustomAction':
        if(message.success){
          var script = getCustomActions + ' ' + getCustomActionsSucceeded + ' ' + getCustomActionsFailed;
          script += ' getCustomActions();';
          chrome.devtools.inspectedWindow.eval(script);
        }
        break;
      case 'addFile':
          break;
        case 'removeCustomAction':
          if(message.success){
            var script = getCustomActions + ' ' + getCustomActionsSucceeded + ' ' + getCustomActionsFailed;
            script += ' getCustomActions();';
            chrome.devtools.inspectedWindow.eval(script);
          }
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
                    li.innerHTML=items[i].heading;
                  }
                  var li=document.createElement('li');
                  var liatt=document.createAttribute("class");
                  liatt.value="list-group-item";
                  li.setAttributeNode(liatt);
                  ul.appendChild(li);
                  var scripturl = items[i].scriptSrc;
                  if(!scripturl) {
                    if(items[i].scriptBlock.indexOf("href") > -1)
                    {
                      scripturl = items[i].scriptBlock.substring(items[i].scriptBlock.indexOf("href"));
                      scripturl = scripturl.substring(scripturl.indexOf("\"")+1);
                      scripturl = scripturl.substring(0, scripturl.indexOf("\""));
                    }
                    else
                    {
                      scripturl = items[i].scriptBlock.substring(items[i].scriptBlock.indexOf(".src"));
                      scripturl = scripturl.substring(scripturl.indexOf("\"")+1);
                      scripturl = scripturl.substring(0, scripturl.indexOf("\""));
                    }
                  }
                  li.innerHTML = "<span class='pull-left' style='width: 10%' >"+items[i].sequence+"</span><span>"+scripturl+"</span><span data-scope='"+items[i].scope+"' data-id='"+items[i].id+"' class='glyphicon glyphicon-remove pull-right' style='cursor: hand;'></span>";
              }
              element.appendChild(ul);
          }
          var removescript = document.getElementsByClassName("glyphicon-remove");

          for(var i=0;i<removescript.length;i++){
              removescript[i].addEventListener('click',function(e){
              var script = removeCustomAction + ' ' + removeCustomActionSucceeded + ' ' + removeCustomActionSucceeded2 + ' ' + removeCustomActionFailed;
              script += ' removeCustomAction(REPLACE-SCOPE, REPLACE-ID);';
              script = script.replace('REPLACE-SCOPE', "'" + $(this).data('scope') + "'");
              script = script.replace('REPLACE-ID', "'" + $(this).data('id') + "'");
              chrome.devtools.inspectedWindow.eval(script);

              });
          }
        }
        else
          chrome.devtools.inspectedWindow.eval(alertifyConf + " alertify.delay(10000).error('"+message.result+"')");
        break;
      case 'getWebProperties':
        if(message.success){
            var element = elem("webPropertyBag");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }

            for (j = 0; j < message.result.length; j++) {

              var items = message.result[j];

              var divform=document.createElement('div');

              var divformDataId=document.createAttribute("data-id");
              divformDataId.value=items.prop;
              divform.setAttributeNode(divformDataId);

              var divformClass=document.createAttribute("class");
              divformClass.value = 'form-group';
              divform.setAttributeNode(divformClass);

              element.appendChild(divform);

              //label
              var label=document.createElement('label');
              label.innerHTML = items.prop;
              label.id = 'proplabel'+j;

              var labelAtt=document.createAttribute("for");
              labelAtt.value='propInput'+j;
              label.setAttributeNode(labelAtt);

              divform.appendChild(label);
              //div for buttons
              var div=document.createElement('div');
              var divClass=document.createAttribute("class");
              divClass.value = 'input-group';
              div.setAttributeNode(divClass);

              divform.appendChild(div);
              //input
              var input=document.createElement('input');
              var inputType=document.createAttribute("type");
              inputType.value='text';
              input.setAttributeNode(inputType);

              var inputId=document.createAttribute("id");
              inputId.value='propInput'+j;
              input.setAttributeNode(inputId);

              var inputClass=document.createAttribute("class");
              inputClass.value='form-control';
              input.setAttributeNode(inputClass);

              var inputAria=document.createAttribute("aria-describedby");
              inputAria.value='helpBlock';
              input.setAttributeNode(inputAria);

              input.value = items.value;

              div.appendChild(input);

              var span=document.createElement('span');
              var spanClass=document.createAttribute("class");
              spanClass.value='input-group-btn';
              span.setAttributeNode(spanClass);

              div.appendChild(span);

              //button update
              var buttonUpdate=document.createElement('button');
              buttonUpdate.innerHTML = 'Update';
              var buttonClass=document.createAttribute("class");
              buttonClass.value='btn btn-default update-property';
              buttonUpdate.setAttributeNode(buttonClass);

              var buttonUpdateDataId=document.createAttribute("data-id");
              buttonUpdateDataId.value='proplabel'+j;
              buttonUpdate.setAttributeNode(buttonUpdateDataId);

              var buttonUpdateDataValue=document.createAttribute("data-value");
              buttonUpdateDataValue.value='propInput'+j;
              buttonUpdate.setAttributeNode(buttonUpdateDataValue);

              var buttonType=document.createAttribute("type");
              buttonType.value='button';
              buttonUpdate.setAttributeNode(buttonType);

              span.appendChild(buttonUpdate);

              //button remove
              var buttonRemove=document.createElement('button');
              buttonRemove.innerHTML = 'Remove';
              var buttonClass=document.createAttribute("class");
              buttonClass.value='btn btn-default remove-property';
              buttonRemove.setAttributeNode(buttonClass);

              var buttonRemoveDataId=document.createAttribute("data-id");
              buttonRemoveDataId.value='proplabel'+j;
              buttonRemove.setAttributeNode(buttonRemoveDataId);

              var buttonType=document.createAttribute("type");
              buttonType.value='button';
              buttonRemove.setAttributeNode(buttonType);

              span.appendChild(buttonRemove);
            }

          var updateproperty = document.getElementsByClassName("update-property");

          for(var i=0;i<updateproperty.length;i++){
              updateproperty[i].addEventListener('click',function(e){
               var script = alertifyConf + ' ' + updateWebProperties + ' ' + updateWebPropertiesSucceeded + ' ' + updateWebPropertiesSucceeded2 + ' ' + updateWebPropertiesFailed;
               script += ' updateWebProperties(REPLACE-PROP, REPLACE-VALUE);';
               script = script.replace('REPLACE-PROP', "'" + $('#'+$(this).data('id')).html() + "'");
               script = script.replace('REPLACE-VALUE', "'" + $('#'+$(this).data('value')).val() + "'");
               chrome.devtools.inspectedWindow.eval(script);
              });
          }

          var removeproperty = document.getElementsByClassName("remove-property");

          for(var i=0;i<removeproperty.length;i++){
              removeproperty[i].addEventListener('click',function(e){
                var script = alertifyConf + ' ' + deleteWebProperties + ' ' + deleteWebPropertiesSucceeded + ' ' + deleteWebPropertiesSucceeded2 + ' ' + deleteWebPropertiesFailed;
                script += ' deleteWebProperties(REPLACE-PROP);';
                script = script.replace('REPLACE-PROP', "'" + $('#'+$(this).data('id')).html() + "'");
                chrome.devtools.inspectedWindow.eval(script);
              });
          }

          var $rows = $('#webPropertyBag .form-group');

          $('#filterprops').keyup(function() {
              var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
              $rows.show().filter(function() {
                  var text = $(this).data('id').replace(/\s+/g, ' ').toLowerCase();
                  return !~text.indexOf(val);
              }).hide();
          });
        }
        else
          chrome.devtools.inspectedWindow.eval(alertifyConf + " alertify.delay(10000).error('"+message.result+"')");
        break;
      case 'addWebProperties':
        if(message.success){
          var script = getWebProperties + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
          script += ' getWebProperties();';
          chrome.devtools.inspectedWindow.eval(script);
        }
        break;
      case 'updateWebProperties':
        if(message.success){
          var script = getWebProperties + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
          script += ' getWebProperties();';
          chrome.devtools.inspectedWindow.eval(script);
        }
        break;
      case 'deleteWebProperties':
        if(message.success){
          var script = getWebProperties + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
          script += ' getWebProperties();';
          chrome.devtools.inspectedWindow.eval(script);
        }
        break;
      default:
  }
});

var payload = { "type":"autosavechange", "content":false };
port.postMessage(payload);

elem("autosave").checked = false;
swap('save','script','files','webproperties','about');

//event bindings
elem("autosave").addEventListener('change', function(e) {
  var payload = { "type":"autosavechange", "content":elem("autosave").checked };
  port.postMessage(payload);
}, false);

/*
elem("autocheckout").addEventListener('change', function(e) {
  var payload = { "type":"autocheckoutchange", "content":elem("autocheckout").checked };
  port.postMessage(payload);
}, false);
*/

elem("autopublish").addEventListener('change', function(e) {
  var payload = { "type":"autopublishchange", "content":elem("autopublish").checked };
  port.postMessage(payload);
}, false);


elem('btnSave').addEventListener('click',function(e){
    swap('save','script','files','webproperties','about');
});

elem('btnScript').addEventListener('click',function(e){
    swap('script','files','webproperties','about','save');
    var script = getCustomActions + ' ' + getCustomActionsSucceeded + ' ' + getCustomActionsFailed;
    script += ' getCustomActions();';
    chrome.devtools.inspectedWindow.eval(script);
});

elem('btnFiles').addEventListener('click',function(e){
    swap('files','webproperties','script','save','about');
});

elem('btnAbout').addEventListener('click',function(e){
    swap('about','save','script', 'files','webproperties');
});

elem('btnWebProperties').addEventListener('click',function(e){
    swap('webproperties','save','script', 'files','about');
    var script = getWebProperties + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
    script += ' getWebProperties();';
    chrome.devtools.inspectedWindow.eval(script);
});

elem('addscriptsite').addEventListener('click',function(e){
  addscriptlink('site');
});

elem('addscriptweb').addEventListener('click',function(e){
  addscriptlink('web');
});

elem('addfilebtn').addEventListener('click',function(e){
  var filename = elem('addfile').value;
  filename = filename.replace(/[^a-z0-9/._-]/gi,'');
  if (filename == "")
    {
      chrome.devtools.inspectedWindow.eval(alertifyConf + " alertify.delay(10000).error('Filename cannot be empty!')");
      return;
    }
  else if (filename.match(/.css$/) || filename.match(/.js$/))
    {
    var script = alertifyConf + ' ' + addFile + ' ' + addFileSucceeded + ' ' + addFileFailed;
    script += ' addFile(REPLACE-FILENAME);';
    script = script.replace('REPLACE-FILENAME', "'" + filename + "'");
    chrome.devtools.inspectedWindow.eval(script);
  }
  else
    {
      chrome.devtools.inspectedWindow.eval(alertifyConf + " alertify.delay(10000).error('Filename needs to end with .js or .css!')");
      return;
    }
});

$('#addfile').keyup(function(){
     var txtBoxVal =$(this).val();
    $('#trimmedfilename').text(txtBoxVal.replace(/[^a-z0-9/._-]/gi,''));
});

elem('addpropertybtn').addEventListener('click',function(e){
  var propertykey = elem('propertykey').value;
  var propertyvalue = elem('propertyvalue').value;

  var script = alertifyConf + ' ' + addWebProperties + ' ' + addWebPropertiesSucceeded + ' ' + addWebPropertiesSucceeded2 + ' ' + addWebPropertiesFailed;
  script += ' addWebProperties(REPLACE-PROP, REPLACE-VALUE);';
  script = script.replace('REPLACE-PROP', "'" + propertykey + "'");
  script = script.replace('REPLACE-VALUE', "'" + propertyvalue + "'");
  chrome.devtools.inspectedWindow.eval(script);
});

function addscriptlink (scope)
{
  var scriptpath = elem('scriptpath').value;
  var scriptsequence = elem('scriptsequence').value;

  if(scriptpath == "")
    {
      chrome.devtools.inspectedWindow.eval(alertifyConf + " alertify.delay(10000).error('Script path cannot be empty!')");
      return;
    }
  else if (scriptsequence == "")
    {
      chrome.devtools.inspectedWindow.eval(alertifyConf + " alertify.delay(10000).error('Sequence cannot be empty!')");
      return;
    }

  var script = alertifyConf + ' ' + addCustomAction + ' ' + addCustomActionSucceeded + ' ' + addCustomActionFailed;
  script += ' addCustomAction(REPLACE-SCOPE, REPLACE-URL, REPLACE-SEQUENCE);';
  script = script.replace('REPLACE-SCOPE', "'" + scope + "'");
  script = script.replace('REPLACE-URL', "'" + scriptpath + "'");
  script = script.replace('REPLACE-SEQUENCE', scriptsequence);
  chrome.devtools.inspectedWindow.eval(script);
}
