var port = chrome.runtime.connect();

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
      if (message.success) {
        var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getCustomActions; //+ ' ' + getCustomActionsSucceeded + ' ' + getCustomActionsFailed;;
        script += " exescript(getCustomActions);";
        chrome.devtools.inspectedWindow.eval(script);
      }
      break;
    case 'addFile':
      break;
    case 'removeCustomAction':
      if (message.success) {

        var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getCustomActions; //+ ' ' + getCustomActionsSucceeded + ' ' + getCustomActionsFailed;;
        script += " exescript(getCustomActions);";
        chrome.devtools.inspectedWindow.eval(script);
      }
      break;
    case 'getCustomActions':
      if (message.success) {
        var element = elem("scriptlinks");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }

        for (j = 0; j < message.result.length; j++) {
          var items = message.result[j];
          items.sort(function (a, b) { return a.sequence - b.sequence });

          var ul = document.createElement('ul');
          var ulatt = document.createAttribute("class");
          ulatt.value = "list-group";
          ul.setAttributeNode(ulatt);

          for (i = 0; i < items.length; i++) {
            if (i == 0) {
              var li = document.createElement('li');
              var liatt = document.createAttribute("class");
              liatt.value = "list-group-item active";
              li.setAttributeNode(liatt);
              ul.appendChild(li);
              li.innerHTML = items[i].heading;
            }
            var li = document.createElement('li');
            var liatt = document.createAttribute("class");
            liatt.value = "list-group-item";
            li.setAttributeNode(liatt);
            ul.appendChild(li);
            var scripturl = items[i].scriptSrc;
            if (!scripturl) {
              if (items[i].scriptBlock.indexOf("href") > -1) {
                scripturl = items[i].scriptBlock.substring(items[i].scriptBlock.indexOf("href"));
                scripturl = scripturl.substring(scripturl.indexOf("\"") + 1);
                scripturl = scripturl.substring(0, scripturl.indexOf("\""));
              }
              else {
                scripturl = items[i].scriptBlock.substring(items[i].scriptBlock.indexOf(".src"));
                scripturl = scripturl.substring(scripturl.indexOf("\"") + 1);
                scripturl = scripturl.substring(0, scripturl.indexOf("\""));
              }
            }
            li.innerHTML = "<span class='pull-left' style='width: 10%' >" + items[i].sequence + "</span><span>" + scripturl + "</span><span data-scope='" + items[i].scope + "' data-id='" + items[i].id + "' class='glyphicon glyphicon-remove pull-right' style='cursor: hand;'></span>";
          }
          element.appendChild(ul);
        }
        var removescript = document.getElementsByClassName("glyphicon-remove");

        for (var i = 0; i < removescript.length; i++) {
          removescript[i].addEventListener('click', function (e) {

            var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + removeCustomAction; // + ' ' + removeCustomActionSucceeded + ' ' + removeCustomActionSucceeded2 + ' ' + removeCustomActionFailed;
            script += " exescript(removeCustomAction, '" + $(this).data('scope') + "', '" + $(this).data('id') + "');";
            chrome.devtools.inspectedWindow.eval(script);

          });
        }
      }
      else {
        var script = r + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, '" + message.result + "');";
        chrome.devtools.inspectedWindow.eval(script);
      }
      break;
    case 'getWebProperties':
      if (message.success) {
        var element = elem("webPropertyBag");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }

        var obj = message.result.filter(function (obj) {
          return obj.prop === 'vti_indexedpropertykeys';
        })[0];

        for (j = 0; j < message.result.length; j++) {

          var items = message.result[j];

          var divform = document.createElement('div');

          var divformDataId = document.createAttribute("data-id");
          divformDataId.value = items.prop;
          divform.setAttributeNode(divformDataId);

          var divformClass = document.createAttribute("class");
          divformClass.value = 'form-group';
          divform.setAttributeNode(divformClass);

          element.appendChild(divform);

          //label
          var label = document.createElement('label');
          label.innerHTML = items.prop;
          label.id = 'proplabel' + j;

          var labelAtt = document.createAttribute("for");
          labelAtt.value = 'propInput' + j;
          label.setAttributeNode(labelAtt);

          divform.appendChild(label);
          //div for buttons
          var div = document.createElement('div');
          var divClass = document.createAttribute("class");
          divClass.value = 'input-group';
          div.setAttributeNode(divClass);

          divform.appendChild(div);
          //input
          var input = document.createElement('input');
          var inputType = document.createAttribute("type");
          inputType.value = 'text';
          input.setAttributeNode(inputType);

          var inputId = document.createAttribute("id");
          inputId.value = 'propInput' + j;
          input.setAttributeNode(inputId);

          var inputClass = document.createAttribute("class");
          inputClass.value = 'form-control';
          input.setAttributeNode(inputClass);

          var inputAria = document.createAttribute("aria-describedby");
          inputAria.value = 'helpBlock';
          input.setAttributeNode(inputAria);

          input.value = items.value;

          div.appendChild(input);

          var span = document.createElement('span');
          var spanClass = document.createAttribute("class");
          spanClass.value = 'input-group-btn';
          span.setAttributeNode(spanClass);

          div.appendChild(span);

          //button update
          var buttonUpdate = document.createElement('button');
          buttonUpdate.innerHTML = 'Update';
          var buttonClass = document.createAttribute("class");
          buttonClass.value = 'btn btn-default update-property';
          buttonUpdate.setAttributeNode(buttonClass);

          var buttonUpdateDataId = document.createAttribute("data-id");
          buttonUpdateDataId.value = 'proplabel' + j;
          buttonUpdate.setAttributeNode(buttonUpdateDataId);

          var buttonUpdateDataValue = document.createAttribute("data-value");
          buttonUpdateDataValue.value = 'propInput' + j;
          buttonUpdate.setAttributeNode(buttonUpdateDataValue);

          var buttonType = document.createAttribute("type");
          buttonType.value = 'button';
          buttonUpdate.setAttributeNode(buttonType);

          span.appendChild(buttonUpdate);

          //button remove
          var buttonRemove = document.createElement('button');
          buttonRemove.innerHTML = 'Remove';
          var buttonClass = document.createAttribute("class");
          buttonClass.value = 'btn btn-default remove-property';
          buttonRemove.setAttributeNode(buttonClass);

          var buttonRemoveDataId = document.createAttribute("data-id");
          buttonRemoveDataId.value = 'proplabel' + j;
          buttonRemove.setAttributeNode(buttonRemoveDataId);

          var buttonType = document.createAttribute("type");
          buttonType.value = 'button';
          buttonRemove.setAttributeNode(buttonType);

          span.appendChild(buttonRemove);

          var isIndexed = false;
          //button index
          if (obj !== undefined) {
            var bytes = [];
            for (var i = 0; i < items.prop.length; ++i) {
              bytes.push(items.prop.charCodeAt(i));
              bytes.push(0);
            }
            var b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));
            if (obj.value.indexOf(b64encoded) > -1) isIndexed = true;
          }

          var buttonIndex = document.createElement('button');
          if (isIndexed)
            buttonIndex.innerHTML = 'UnIndex';
          else
            buttonIndex.innerHTML = 'Index';

          var buttonClass = document.createAttribute("class");
          if (isIndexed)
            buttonClass.value = 'btn btn-success unindex-property';
          else
            buttonClass.value = 'btn btn-default index-property';

          buttonIndex.setAttributeNode(buttonClass);

          var buttonIndexDataId = document.createAttribute("data-id");
          buttonIndexDataId.value = 'proplabel' + j;
          buttonIndex.setAttributeNode(buttonIndexDataId);

          var buttonType = document.createAttribute("type");
          buttonType.value = 'button';
          buttonIndex.setAttributeNode(buttonType);

          span.appendChild(buttonIndex);

        }

        var updateproperty = document.getElementsByClassName("update-property");

        for (var i = 0; i < updateproperty.length; i++) {
          updateproperty[i].addEventListener('click', function (e) {

            var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + updateWebProperties;// + ' ' + updateWebPropertiesSucceeded + ' ' + updateWebPropertiesSucceeded2 + ' ' + updateWebPropertiesFailed;
            script += " exescript(updateWebProperties, '" + $('#' + $(this).data('id')).html() + "', '" + $('#' + $(this).data('value')).val() + "');";
            chrome.devtools.inspectedWindow.eval(script);

          });
        }

        var removeproperty = document.getElementsByClassName("remove-property");

        for (var i = 0; i < removeproperty.length; i++) {
          removeproperty[i].addEventListener('click', function (e) {

            var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + deleteWebProperties;// + ' ' + deleteWebPropertiesSucceeded + ' ' + deleteWebPropertiesSucceeded2 + ' ' + deleteWebPropertiesFailed;
            script += " exescript(deleteWebProperties, '" + $('#' + $(this).data('id')).html() + "');";
            chrome.devtools.inspectedWindow.eval(script);

          });
        }

        var indexproperty = document.getElementsByClassName("index-property");

        for (var i = 0; i < indexproperty.length; i++) {
          indexproperty[i].addEventListener('click', function (e) {

            var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedPropertyKeys;// + ' ' + addToIndexedPropertyKeysSucceeded + ' ' + addToIndexedPropertyKeysSucceeded2 + ' ' + addToIndexedPropertyKeysFailed;
            script += " exescript(addToIndexedPropertyKeys, '" + $('#' + $(this).data('id')).html() + "', false);";
            chrome.devtools.inspectedWindow.eval(script);

          });
        }

        var unindexproperty = document.getElementsByClassName("unindex-property");

        for (var i = 0; i < unindexproperty.length; i++) {
          unindexproperty[i].addEventListener('click', function (e) {

            var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedPropertyKeys;// + ' ' + addToIndexedPropertyKeysSucceeded + ' ' + addToIndexedPropertyKeysSucceeded2 + ' ' + addToIndexedPropertyKeysFailed;
            script += " exescript(addToIndexedPropertyKeys, '" + $('#' + $(this).data('id')).html() + "', true);";
            chrome.devtools.inspectedWindow.eval(script);

          });
        }

        var $rows = $('#webPropertyBag .form-group');

        $('#filterprops').keyup(function () {
          var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
          $rows.show().filter(function () {
            var text = $(this).data('id').replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
          }).hide();
        });
      }
      else {
        var script = r + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, '" + message.result + "');";
        chrome.devtools.inspectedWindow.eval(script);
      }
      break;
    case 'addWebProperties':
      if (message.success) {
        /*  var script = getWebProperties + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
          script += ' getWebProperties();';
          chrome.devtools.inspectedWindow.eval(script);*/

        var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties; // + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
        script += " exescript(getWebProperties);";
        chrome.devtools.inspectedWindow.eval(script);

      }
      break;
    case 'updateWebProperties':
      if (message.success) {
        /*  var script = getWebProperties + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
          script += ' getWebProperties();';
          chrome.devtools.inspectedWindow.eval(script);*/

        var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties; // + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
        script += " exescript(getWebProperties);";
        chrome.devtools.inspectedWindow.eval(script);
      }
      break;
    case 'deleteWebProperties':
      if (message.success) {
        /* var script = getWebProperties + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
         script += ' getWebProperties();';
         chrome.devtools.inspectedWindow.eval(script); */
        var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties; // + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
        script += " exescript(getWebProperties);";
        chrome.devtools.inspectedWindow.eval(script);
      }
      break;
    case 'addToIndexedPropertyKeys':
      if (message.success) {
        /*   var script = getWebProperties + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
           script += ' getWebProperties();';
           chrome.devtools.inspectedWindow.eval(script);*/

        var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties; // + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
        script += " exescript(getWebProperties);";
        chrome.devtools.inspectedWindow.eval(script);
      }
      break;
    case 'getSubscriptionsx':
      if (message.success) {
        var element = elem("subscriptions");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }

        for (j = 0; j < message.result.length; j++) {

          var items = message.result[j];

          var divform = document.createElement('div');

          var divformDataId = document.createAttribute("data-id");
          divformDataId.value = items.Title;
          divform.setAttributeNode(divformDataId);

          var divformClass = document.createAttribute("class");
          divformClass.value = 'form-group';
          divform.setAttributeNode(divformClass);

          element.appendChild(divform);

          //label
          var label = document.createElement('label');
          label.innerHTML = items.Title;
          label.id = 'proplabel' + j;

          var labelAtt = document.createAttribute("for");
          labelAtt.value = 'propInput' + j;
          label.setAttributeNode(labelAtt);

          divform.appendChild(label);
          //div for buttons

          //alert(JSON.stringify(items.subscriptions));
          for (k = -1; k < items.subscriptions.length; k++) {

            var div = document.createElement('div');
            var divClass = document.createAttribute("class");
            divClass.value = 'input-group';
            div.setAttributeNode(divClass);

            divform.appendChild(div);

            var sub = items.subscriptions[0];
            //input
            var input = document.createElement('input');
            var inputType = document.createAttribute("type");
            inputType.value = 'text';
            input.setAttributeNode(inputType);

            var inputId = document.createAttribute("id");
            inputId.value = 'propInput' + j;
            input.setAttributeNode(inputId);

            var inputClass = document.createAttribute("class");
            inputClass.value = 'form-control';
            input.setAttributeNode(inputClass);

            var inputAria = document.createAttribute("aria-describedby");
            inputAria.value = 'helpBlock';
            input.setAttributeNode(inputAria);

            input.value = sub.notificationUrl;

            div.appendChild(input);

            var span = document.createElement('span');
            var spanClass = document.createAttribute("class");
            spanClass.value = 'input-group-btn';
            span.setAttributeNode(spanClass);

            div.appendChild(span);

            //button update
            var buttonUpdate = document.createElement('button');
            buttonUpdate.innerHTML = 'Update';
            var buttonClass = document.createAttribute("class");
            buttonClass.value = 'btn btn-default update-property';
            buttonUpdate.setAttributeNode(buttonClass);

            var buttonUpdateDataId = document.createAttribute("data-id");
            buttonUpdateDataId.value = 'proplabel' + j;
            buttonUpdate.setAttributeNode(buttonUpdateDataId);

            var buttonUpdateDataValue = document.createAttribute("data-value");
            buttonUpdateDataValue.value = 'propInput' + j;
            buttonUpdate.setAttributeNode(buttonUpdateDataValue);

            var buttonType = document.createAttribute("type");
            buttonType.value = 'button';
            buttonUpdate.setAttributeNode(buttonType);

            span.appendChild(buttonUpdate);
          }
          /*
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
                        
                        var isIndexed = false;
                        //button index
                        if(obj !== undefined)
                        {
                          var bytes = [];
                          for (var i = 0; i < items.prop.length; ++i) {
                            bytes.push(items.prop.charCodeAt(i));
                            bytes.push(0);
                          }
                          var b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));
                          if (obj.value.indexOf(b64encoded) > -1) isIndexed = true;
                        }
                        
                        var buttonIndex=document.createElement('button');
                        if(isIndexed)
                          buttonIndex.innerHTML = 'UnIndex';
                        else
                          buttonIndex.innerHTML = 'Index';
          
                        var buttonClass=document.createAttribute("class");
                        if(isIndexed)
                          buttonClass.value='btn btn-success unindex-property';
                        else
                          buttonClass.value='btn btn-default index-property';
          
                        buttonIndex.setAttributeNode(buttonClass);
          
                        var buttonIndexDataId=document.createAttribute("data-id");
                        buttonIndexDataId.value='proplabel'+j;
                        buttonIndex.setAttributeNode(buttonIndexDataId);
          
                        var buttonType=document.createAttribute("type");
                        buttonType.value='button';
                        buttonIndex.setAttributeNode(buttonType);
          
                        span.appendChild(buttonIndex);              
                        
                      }
          
                    var updateproperty = document.getElementsByClassName("update-property");
          
                    for(var i=0;i<updateproperty.length;i++){
                        updateproperty[i].addEventListener('click',function(e){
          
                         var script = updateWebProperties + ' ' + updateWebPropertiesSucceeded + ' ' + updateWebPropertiesSucceeded2 + ' ' + updateWebPropertiesFailed;
                         var evalScript = alertifyConf + " updateWebProperties('" + $('#'+$(this).data('id')).html() + "', '" + $('#'+$(this).data('value')).val() + "');";
          
                         chrome.devtools.inspectedWindow.eval(script + alertyfyScript.replace(/EVAL/g, evalScript));
                        });
                    }
          
                    var removeproperty = document.getElementsByClassName("remove-property");
          
                    for(var i=0;i<removeproperty.length;i++){
                        removeproperty[i].addEventListener('click',function(e){
          
                          var script = deleteWebProperties + ' ' + deleteWebPropertiesSucceeded + ' ' + deleteWebPropertiesSucceeded2 + ' ' + deleteWebPropertiesFailed;
                          var evalScript = alertifyConf + " deleteWebProperties('" + $('#'+$(this).data('id')).html() + "');";
          
                          chrome.devtools.inspectedWindow.eval(script + alertyfyScript.replace(/EVAL/g, evalScript));
                        }); */
        }

      }
      else {
        //error
      }
      break;
    default:
  }
});

var payload = { "type": "autosavechange", "content": false };
port.postMessage(payload);

elem("autosave").checked = false;
swap('save', 'script', 'files', 'webproperties', 'about', 'webhook');

//event bindings
elem("autosave").addEventListener('change', function (e) {
  var payload = { "type": "autosavechange", "content": elem("autosave").checked, "tabId": chrome.devtools.inspectedWindow.tabId };

  port.postMessage(payload);
}, false);

elem("autopublish").addEventListener('change', function (e) {
  var payload = { "type": "autopublishchange", "content": elem("autopublish").checked, "tabId": chrome.devtools.inspectedWindow.tabId };
  port.postMessage(payload);
}, false);

elem('btnSave').addEventListener('click', function (e) {
  swap('save', 'script', 'files', 'webproperties', 'about', 'webhook');
});

elem('btnScript').addEventListener('click', function (e) {
  swap('script', 'files', 'webproperties', 'about', 'save', 'webhook');

  var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getCustomActions; //+ ' ' + getCustomActionsSucceeded + ' ' + getCustomActionsFailed;;
  script += " exescript(getCustomActions);";
  chrome.devtools.inspectedWindow.eval(script);

});

elem('btnFiles').addEventListener('click', function (e) {
  swap('files', 'webproperties', 'script', 'save', 'about', 'webhook');
});

elem('btnAbout').addEventListener('click', function (e) {
  swap('about', 'save', 'script', 'files', 'webproperties', 'webhook');
});

elem('btnWebhooks').addEventListener('click', function (e) {
  swap('webhook', 'about', 'save', 'script', 'files', 'webproperties');
});

elem('btnWebProperties').addEventListener('click', function (e) {
  swap('webproperties', 'save', 'script', 'files', 'about', 'webhook');

  var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties; // + ' ' + getWebPropertiesSucceeded + ' ' + getWebPropertiesFailed;
  script += " exescript(getWebProperties);";
  chrome.devtools.inspectedWindow.eval(script);

});

elem('addscriptsite').addEventListener('click', function (e) {
  var scriptpath = elem('scriptpath').value;
  var scriptsequence = elem('scriptsequence').value;
  addscriptlink('site', scriptsequence, scriptpath);
});

elem('addscriptweb').addEventListener('click', function (e) {
  var scriptpath = elem('scriptpath').value;
  var scriptsequence = elem('scriptsequence').value;
  addscriptlink('web', scriptsequence, scriptpath);
});

elem('fileaddscriptsite').addEventListener('click', function (e) {
  var scriptpath = elem('filescriptpath').value;
  var scriptsequence = elem('filescriptsequence').value;
  addscriptlink('site', scriptsequence, scriptpath);
});

elem('fileaddscriptweb').addEventListener('click', function (e) {
  var scriptpath = elem('filescriptpath').value;
  var scriptsequence = elem('filescriptsequence').value;
  addscriptlink('web', scriptsequence, scriptpath);
});

elem('addfilebtn').addEventListener('click', function (e) {
  var filename = elem('addfile').value;
  filename = filename.replace(/[^a-z0-9/._-]/gi, '');
  if (filename == "") {
    var script = r + ' ' + alertify + ' ' + exescript + ' ' + alertError;
    script += " exescript(alertError, 'Filename cannot be empty!');";
    chrome.devtools.inspectedWindow.eval(script);
    return;
  }
  else if (filename.match(/.css$/) || filename.match(/.js$/)) {
    var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + addFile; // + ' ' + addFileSucceeded + ' ' + addFileFailed;
    script += " exescript(addFile, '" + filename + "');";
    chrome.devtools.inspectedWindow.eval(script);
  }
  else {
    var script = r + ' ' + alertify + ' ' + exescript + ' ' + alertError;
    script += " exescript(alertError, 'Filename needs to end with .js or .css!');";
    chrome.devtools.inspectedWindow.eval(script);

    return;
  }
});

$('#addfile').keyup(function () {
  var txtBoxVal = $(this).val();
  $('#trimmedfilename').text(txtBoxVal.replace(/[^a-z0-9/._-]/gi, ''));
  $('#filescriptpath').val('~sitecollection/Style library/' + txtBoxVal.replace(/[^a-z0-9/._-]/gi, ''));
});

elem('addpropertybtn').addEventListener('click', function (e) {
  var propertykey = elem('propertykey').value;
  var propertyvalue = elem('propertyvalue').value;

  var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + addWebProperties;// + ' ' + addWebPropertiesSucceeded + ' ' + addWebPropertiesSucceeded2 + ' ' + addWebPropertiesFailed;
  script += " exescript(addWebProperties, '" + propertykey + "', '" + propertyvalue + "');";
  chrome.devtools.inspectedWindow.eval(script);

});

elem('addwebhookbtn').addEventListener('click', function (e) {

  var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + getSubscriptions;
  script += " exescript(getSubscriptions, 'kukko');";
  chrome.devtools.inspectedWindow.eval(script);
});

function addscriptlink(scope, scriptsequence, scriptpath) {

  if (scriptpath == "") {

    var script = r + ' ' + alertify + ' ' + exescript + ' ' + alertError;
    script += " exescript(alertError, 'Script path cannot be empty!');";
    chrome.devtools.inspectedWindow.eval(script);

    return;
  }
  else if (scriptsequence == "") {

    var script = r + ' ' + alertify + ' ' + exescript + ' ' + alertError;
    script += " exescript(alertError, 'Sequence cannot be empty!');";
    chrome.devtools.inspectedWindow.eval(script);

    return;
  }

  var script = pnp + ' ' + r + ' ' + alertify + ' ' + exescript + ' ' + addCustomAction;// + ' ' + addCustomActionSucceeded + ' ' + addCustomActionFailed;
  script += " exescript(addCustomAction, '" + scope + "', '" + scriptpath + "', '" + scriptsequence + "');";
  chrome.devtools.inspectedWindow.eval(script);
}
