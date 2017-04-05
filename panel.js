var port = chrome.runtime.connect();

// Listen to messages from the background page
port.onMessage.addListener(function (message) {

    if (typeof message !== 'object' || message === null ||
        message === undefined || message.source === undefined) {
        return;
    }

    switch (message.function) {
      /*   case 'updateFile':
            break;
        case 'addFile':
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

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateWebProperties;
                        script += " exescript(updateWebProperties, '" + $('#' + $(this).data('id')).html() + "', '" + $('#' + $(this).data('value')).val() + "');";
                        chrome.devtools.inspectedWindow.eval(script);

                    });
                }

                var removeproperty = document.getElementsByClassName("remove-property");

                for (var i = 0; i < removeproperty.length; i++) {
                    removeproperty[i].addEventListener('click', function (e) {

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedPropertyKeys + ' ' + deleteWebProperties;
                        script += " exescript(deleteWebProperties, '" + $('#' + $(this).data('id')).html() + "');";
                        chrome.devtools.inspectedWindow.eval(script);

                    });
                }

                var indexproperty = document.getElementsByClassName("index-property");

                for (var i = 0; i < indexproperty.length; i++) {
                    indexproperty[i].addEventListener('click', function (e) {

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedPropertyKeys;
                        script += " exescript(addToIndexedPropertyKeys, '" + $('#' + $(this).data('id')).html() + "', false);";
                        chrome.devtools.inspectedWindow.eval(script);

                    });
                }

                var unindexproperty = document.getElementsByClassName("unindex-property");

                for (var i = 0; i < unindexproperty.length; i++) {
                    unindexproperty[i].addEventListener('click', function (e) {

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedPropertyKeys;
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
                var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
                script += " exescript(alertError, '" + message.result + "');";
                chrome.devtools.inspectedWindow.eval(script);
            }
            break;*/
  /*      case 'addWebProperties':
            if (message.success) {

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties;
                script += " exescript(getWebProperties);";
                chrome.devtools.inspectedWindow.eval(script);

            }
            break;
        case 'updateWebProperties':
            if (message.success) {

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties;
                script += " exescript(getWebProperties);";
                chrome.devtools.inspectedWindow.eval(script);
            }
            break;
        case 'deleteWebProperties':
            if (message.success) {

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties;
                script += " exescript(getWebProperties);";
                chrome.devtools.inspectedWindow.eval(script);
            }
            break;
        case 'addToIndexedPropertyKeys':
            if (message.success) {

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties;
                script += " exescript(getWebProperties);";
                chrome.devtools.inspectedWindow.eval(script);
            }
            break;
*/
 /*       case 'getListProperties':
            if (message.success) {

                var element = elem("listPropertyBag");
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }

                var listobj = message.result.filter(function (listobj) {
                    return listobj.prop === 'vti_indexedpropertykeys';
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
                    label.id = 'listproplabel' + j;

                    var labelAtt = document.createAttribute("for");
                    labelAtt.value = 'listpropInput' + j;
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
                    inputId.value = 'listpropInput' + j;
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
                    buttonClass.value = 'btn btn-default update-list-property';
                    buttonUpdate.setAttributeNode(buttonClass);

                    var buttonUpdateDataId = document.createAttribute("data-id");
                    buttonUpdateDataId.value = 'listproplabel' + j;
                    buttonUpdate.setAttributeNode(buttonUpdateDataId);

                    var buttonUpdateDataValue = document.createAttribute("data-value");
                    buttonUpdateDataValue.value = 'listpropInput' + j;
                    buttonUpdate.setAttributeNode(buttonUpdateDataValue);

                    var buttonType = document.createAttribute("type");
                    buttonType.value = 'button';
                    buttonUpdate.setAttributeNode(buttonType);

                    span.appendChild(buttonUpdate);

                    //button remove
                    var buttonRemove = document.createElement('button');
                    buttonRemove.innerHTML = 'Remove';
                    var buttonClass = document.createAttribute("class");
                    buttonClass.value = 'btn btn-default remove-list-property';
                    buttonRemove.setAttributeNode(buttonClass);

                    var buttonRemoveDataId = document.createAttribute("data-id");
                    buttonRemoveDataId.value = 'listproplabel' + j;
                    buttonRemove.setAttributeNode(buttonRemoveDataId);

                    var buttonType = document.createAttribute("type");
                    buttonType.value = 'button';
                    buttonRemove.setAttributeNode(buttonType);

                    span.appendChild(buttonRemove);

                    var isIndexed = false;
                    //button index
                    if (listobj !== undefined) {
                        var bytes = [];
                        for (var i = 0; i < items.prop.length; ++i) {
                            bytes.push(items.prop.charCodeAt(i));
                            bytes.push(0);
                        }
                        var b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));
                        if (listobj.value.indexOf(b64encoded) > -1) isIndexed = true;
                    }

                    var buttonIndex = document.createElement('button');
                    if (isIndexed)
                        buttonIndex.innerHTML = 'UnIndex';
                    else
                        buttonIndex.innerHTML = 'Index';

                    var buttonClass = document.createAttribute("class");
                    if (isIndexed)
                        buttonClass.value = 'btn btn-success unindex-list-property';
                    else
                        buttonClass.value = 'btn btn-default index-list-property';

                    buttonIndex.setAttributeNode(buttonClass);

                    var buttonIndexDataId = document.createAttribute("data-id");
                    buttonIndexDataId.value = 'listproplabel' + j;
                    buttonIndex.setAttributeNode(buttonIndexDataId);

                    var buttonType = document.createAttribute("type");
                    buttonType.value = 'button';
                    buttonIndex.setAttributeNode(buttonType);

                    span.appendChild(buttonIndex);

                }

                var updateproperty = document.getElementsByClassName("update-list-property");

                for (var i = 0; i < updateproperty.length; i++) {
                    updateproperty[i].addEventListener('click', function (e) {

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateListProperties;
                        script += " exescript(updateListProperties, '" + $('#' + $(this).data('id')).html() + "', '" + $('#' + $(this).data('value')).val() + "', '" + $("#weblist").val() + "');";
                        chrome.devtools.inspectedWindow.eval(script);

                    });
                }

                var removeproperty = document.getElementsByClassName("remove-list-property");

                for (var i = 0; i < removeproperty.length; i++) {
                    removeproperty[i].addEventListener('click', function (e) {

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedListPropertyKeys + ' ' + deleteListProperties;
                        script += " exescript(deleteListProperties, '" + $('#' + $(this).data('id')).html() + "', '" + $("#weblist").val() + "');";
                        chrome.devtools.inspectedWindow.eval(script);

                    });
                }

                var indexproperty = document.getElementsByClassName("index-list-property");

                for (var i = 0; i < indexproperty.length; i++) {
                    indexproperty[i].addEventListener('click', function (e) {

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedListPropertyKeys;
                        script += " exescript(addToIndexedListPropertyKeys, '" + $('#' + $(this).data('id')).html() + "', '" + $("#weblist").val() + "', false);";
                        chrome.devtools.inspectedWindow.eval(script);

                    });
                }

                var unindexproperty = document.getElementsByClassName("unindex-list-property");

                for (var i = 0; i < unindexproperty.length; i++) {
                    unindexproperty[i].addEventListener('click', function (e) {

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedListPropertyKeys;
                        script += " exescript(addToIndexedListPropertyKeys, '" + $('#' + $(this).data('id')).html() + "', '" + $("#weblist").val() + "', true);";
                        chrome.devtools.inspectedWindow.eval(script);

                    });
                }
            }
            else {
                var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
                script += " exescript(alertError, '" + message.result + "');";
                chrome.devtools.inspectedWindow.eval(script);
            }
            break;
*/
   /*     case 'getLists':
            if (message.success) {

                $('#weblist').find('option').remove().end();

                $.each(message.result, function (key, value) {
                    $('#weblist')
                        .append($("<option></option>")
                            .attr("value", value.listId)
                            .text(value.listTitle));
                });

                var listId = message.result[0].listId;

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
                script += " exescript(getListProperties, '" + listId + "');";
                chrome.devtools.inspectedWindow.eval(script);

            }
            else {
                //error
            }
            break;
*/
        case 'addListProperties':
            if (message.success) {

                var listId = $("#weblist").val();

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
                script += " exescript(getListProperties, '" + listId + "');";
                chrome.devtools.inspectedWindow.eval(script);

            }
            break;

        case 'updateListProperties':
            if (message.success) {

                var listId = $("#weblist").val();

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
                script += " exescript(getListProperties, '" + listId + "');";
                chrome.devtools.inspectedWindow.eval(script);

            }
            break;

        case 'deleteListProperties':
            if (message.success) {

                var listId = $("#weblist").val();

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
                script += " exescript(getListProperties, '" + listId + "');";
                chrome.devtools.inspectedWindow.eval(script);

            }
            break;

        case 'addToIndexedListPropertyKeys':
            if (message.success) {

                var listId = $("#weblist").val();

                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
                script += " exescript(getListProperties, '" + listId + "');";
                chrome.devtools.inspectedWindow.eval(script);

            }
            break;

        case 'addSubscriptions':
            if (message.success) {
                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getSubscriptions;
                script += " exescript(getSubscriptions);";
                chrome.devtools.inspectedWindow.eval(script);
            }
            break;

        case 'removeSubscription':
            if (message.success) {
                var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getSubscriptions;
                script += " exescript(getSubscriptions);";
                chrome.devtools.inspectedWindow.eval(script);
            }
            break;

        case 'getSubscriptions':
            if (message.success) {
                var element = elem("subscriptions");
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
                $('#webhooklist').find('option').remove().end();

                $.each(message.lists, function (key, value) {
                    $('#webhooklist')
                        .append($("<option></option>")
                            .attr("value", value.listId)
                            .text(value.listTitle));
                });

                var items = message.result;

                var ul = document.createElement('ul');
                var ulatt = document.createAttribute("class");
                ulatt.value = "list-group";
                ul.setAttributeNode(ulatt);

                for (i = 0; i < items.length; i++) {
                    var li = document.createElement('li');
                    var liatt = document.createAttribute("class");
                    liatt.value = "list-group-item active";
                    li.setAttributeNode(liatt);
                    ul.appendChild(li);
                    li.innerHTML = "<span style='display: inline-block;width: 33.33%;text-align: left;'>" + items[i].listTitle + "</span><span style='display: inline-block;width: 33.33%;text-align: center;'>" + items[i].subExpirationDateTime + "</span><span style='display: inline-block;width: 33.33%;text-align: right;'>" + items[i].subId + "</span>";

                    var li = document.createElement('li');
                    var liatt = document.createAttribute("class");
                    liatt.value = "list-group-item";
                    li.setAttributeNode(liatt);
                    ul.appendChild(li);

                    li.innerHTML = "<span>" + items[i].subNotificationUrl + "</span><span data-scope='" + items[i].listId + "' data-id='" + items[i].subId + "' class='sub-remove glyphicon glyphicon-remove pull-right' style='cursor: hand;'></span>";
                }
                element.appendChild(ul);

                var removesub = document.getElementsByClassName("sub-remove");

                for (var i = 0; i < removesub.length; i++) {
                    removesub[i].addEventListener('click', function (e) {

                        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + removeSubscription;
                        script += " exescript(removeSubscription, '" + $(this).data('scope') + "', '" + $(this).data('id') + "');";
                        chrome.devtools.inspectedWindow.eval(script);

                    });
                }

            }
            else {
                //error
            }
            break;

        case 'getZonesAndWebparts':
            if (message.success) {
                var zones = message.result;
                var html = '';
                for (var zone of zones) {
                    html += '<div class="zone">';
                    html += '<h3>WEBPART ZONE</h3>';
                    html += `<div class="add-new-webpart">Add new</div>`;
                    for (var wp of zone) {
                        if (!wp.title)
                            wp.title = "Webpart";

                        html += `<div class="webpart" data-id="${wp.id}">${wp.title}</div>`;
                    }
                    html += '</div>';
                }
                document.getElementById("webpart-zones-list").innerHTML = html;

                if (!webpartXmlEditor) {
                    require.config({ paths: { 'vs': 'monaco-editor/min/vs' } });
                    require(['vs/editor/editor.main'], function () {
                        webpartXmlEditor = monaco.editor.create(document.getElementById('webpart-xml-container'), {
                            value: '',
                            language: 'xml',
                            lineNumbers: true,
                            roundedSelection: true,
                            scrollBeyondLastLine: false,
                            readOnly: false,
                            theme: "vs-dark",
                            fontSize: 16,
                            renderIndentGuides: true
                        });

                        window.addEventListener('resize', function () {
                            webpartXmlEditor.layout();
                        });
                    });
                }
            }
            break;
        case 'getZonesAndWebparts2':
            if (message.success) {
                for (var wp of message.result) {
                    var wpElement = document.querySelector(`[data-id="${wp.id}"]`);
                    if (wp.title != "")
                    wpElement.innerHTML = wp.title;
                    wpElement.parentNode.setAttribute("data-zone-id", wp.zoneId);
                    wpElement.parentNode.querySelector("h3").innerHTML = wp.zoneId;
                }
            }
            break;
        case 'getZonesAndWebparts3':
            if (message.success) {
                var zoneElements = Array.prototype.slice.call(document.querySelectorAll('.zone'));
                var parentNode = document.getElementById('webpart-zones-list');
                var zones = message.result;
                for (var i = 0; i < zones.length; i++) {
                    var zoneElement = document.querySelector(`[data-zone-id="${zones[i]}"]`);
                    if (zoneElement == null)
                    {
                        // add empty zone
                        var newZoneElement = document.createElement('div');
                        newZoneElement.className = 'zone';
                        newZoneElement.setAttribute('data-zone-id', zones[i]);
                        newZoneElement.innerHTML = `<h3>${zones[i]}</h3><div class="add-new-webpart">Add new</div>`;
                        parentNode.insertBefore(newZoneElement, zoneElements[i]);
                    }
                }
            }
            break;
        case 'loadWebpart':
            hideDimmer();
            if (message.success) {
                var wpId = message.result.id;
                webpartXmlCache[wpId] = message.result.xml;
                selectWebpart(wpId);
            }
            break;
        case 'saveWebpart':
            hideDimmer();

            if (message.success) {
                var selectedWp = document.querySelector('.webpart.selected');
                selectedWp.setAttribute("data-id", message.result);
                webpartXmlCache[message.result] = webpartXmlEditor.getValue();
                elem("webpart-save-success").style.display = "";
                setTimeout(function () { elem("webpart-save-success").style.display = "none"; }, 4000);
            } else {
                elem("webpart-save-error").innerHTML = message.result;
                elem("webpart-save-error").style.display = "";
                errorTimeout = setTimeout(function () { elem("webpart-save-error").style.display = "none"; }, 10000);
            }
            break;
        case 'deleteWebpart':
            hideDimmer();

            if (message.success) {
                var selectedWp = document.querySelector('.webpart.selected');
                selectedWp.parentNode.removeChild(selectedWp);
                webpartXmlEditor.setValue('');
            } else {
                elem("webpart-save-error").innerHTML = message.result;
                elem("webpart-save-error").style.display = "";
                errorTimeout = setTimeout(function() { elem("webpart-save-error").style.display = "none"; }, 10000);
            }
            break;
        default:
    }
});

var payload = { "type": "autosavechange", "content": false };
port.postMessage(payload);

//elem("autosave").checked = false;
//swap('save');
riot.mount("*");
//event bindings

/*
elem("autosave").addEventListener('change', function (e) {
    var payload = { "type": "autosavechange", "content": elem("autosave").checked, "tabId": chrome.devtools.inspectedWindow.tabId };

    port.postMessage(payload);
}, false);

elem("autopublish").addEventListener('change', function (e) {
    var payload = { "type": "autopublishchange", "content": elem("autopublish").checked, "tabId": chrome.devtools.inspectedWindow.tabId };
    port.postMessage(payload);
}, false);
*/

/*
elem('btnSave').addEventListener('click', function (e) {
    swap('save');
});*/

/*
elem('btnScript').addEventListener('click', function (e) {
    swap('script');

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getCustomActions;
    script += " exescript(getCustomActions);";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('btnFiles').addEventListener('click', function (e) {
    swap('files');
});
*/

/*
elem('btnAbout').addEventListener('click', function (e) {
    swap('about');
});

*/

/*
elem('btnWebhooks').addEventListener('click', function (e) {
    swap('webhook');
    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getSubscriptions;
    script += " exescript(getSubscriptions);";
    chrome.devtools.inspectedWindow.eval(script);
});

*/

/*
elem('btnWebProperties').addEventListener('click', function (e) {
    swap('webproperties');

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties;
    script += " exescript(getWebProperties);";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('btnListProperties').addEventListener('click', function (e) {
    swap('listproperties');
    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getLists;
    script += " exescript(getLists);";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('btnPnPJSConsole').addEventListener('click', function (e) {
    swap('monaco');


    require.config({ paths: { 'vs': 'monaco-editor/min/vs' } });
    require(['vs/editor/editor.main'], function () {

        var loadDeclaration = function loadDeclaration() {
            var loadDeclaration = function (path) {
                return new Promise(function (resolve, reject) {
                    var request = new XMLHttpRequest();
                    request.open('GET', path, true);
                    request.onload = function () {
                        monaco.languages.typescript.typescriptDefaults.addExtraLib(request.responseText, path);
                        resolve();
                    };
                    request.send();
                });
            };

            return Promise.all([
                loadDeclaration('typings/pnp.d.ts'),
            ]);
        };

        // validation settings
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false
        });

        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES6,
            allowNonTsExtensions: true
        });

        
        monaco.languages.registerCompletionItemProvider('typescript', {
           // provideCompletionItems: function (model, position) {
           //     return createDependencyProposals(); // from snippets.js
           // }
        });
        

        loadDeclaration().then(function () {

            var playground = monaco.editor.create(document.getElementById('container'), {
                value: [
                    'import pnp from "pnp";',
                    '',
                    'pnp.sp.web.lists.select("Title").get().then(result => {',
                    '\t// gets all list titles from current web and writes them to console',
                    '\t// hit \'ctrl + d\' to test it :)',
                    '\tconsole.log(result);',
                    '});',
                ].join('\n'),
                language: 'typescript',
                lineNumbers: true,
                roundedSelection: true,
                scrollBeyondLastLine: false,
                readOnly: false,
                theme: "vs-dark",
                fontSize: 16,
                //glyphMargin: true,
                renderIndentGuides: true,
                suggestOnTriggerCharacters: true,
                showTypeScriptWarnings: false
            });

            var playgroundBinding = playground.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function () {
                try {
                    var js = ts.transpileModule(playground.getValue(), { compilerOptions: { module: 1  } });
                    var prepnp = 'pnp';

                    var lines = js.outputText.split('\n');
                    var code = [];
                    var prepnp = [];
                    lines.forEach(function (line) {
                        // remove imports
                        if (line.toLowerCase().indexOf(' = require') == -1 && line.toLowerCase().indexOf('use strict') == -1) {
                            code.push(line);
                        }
                        if (line.toLowerCase().indexOf(' = require') > -1) {
                            // fix imports
                            var lineRe = line.match("var (.*) = require");
                            prepnp.push('var ' + lineRe[1] + ' = modules[0];');
                        }
                    });

                    code.pop(); // remove the last empty line

                    var exescript = [
                        'var exescript = function(script) {',
                        '\t var params = arguments;',
                        '\t if (typeof SystemJS == "undefined") {',
                        '\t\t var s = document.createElement("script");',
                        '\t\t s.src = sj;',
                        '\t\t s.onload = function () {',
                        '\t\t\t script.apply(this, params);',
                        '\t\t };',
                        '\t\t (document.head || document.documentElement).appendChild(s);',
                        '\t }',
                        '\t else script.apply(this, params);',
                        '}',
                    ].join('\n');

                    var execme = [
                        'var execme = function execme() {',
                        '\tPromise.all([SystemJS.import(speditorpnp)]).then(function (modules) {',
                        '\t\t' + prepnp.join('\n'),
                        '\t\t// Your code starts here',
                        '\t\t// #####################',
                        '' + code.map(function (e) { return '\t\t\t' + e }).join('\n'),
                        '\t\t// #####################',
                        '\t\t// Your code ends here',
                        '\t});',
                        '};'].join('\n');

                    var script = pnp + '\n' + sj + '\n\n' + exescript + '\n\n' + execme + '\n\n';

                    script += "exescript(execme);";
                    chrome.devtools.inspectedWindow.eval(script);
                }
                catch (e) {
                    console.log(e);
                }
            });

        });

    });


});
*/
var webpartXmlCache = {};
var webpartXmlEditor;

/*
elem('btnPageEditor').addEventListener('click', function (e) {
    swap('pageeditor');

    if (webpartXmlEditor)
        return;

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getZonesAndWebparts;
    script += " exescript(getZonesAndWebparts);";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('addscriptsite').addEventListener('click', function (e) {
    var scriptpath = elem('scriptpath').value;
    var scriptsequence = elem('scriptsequence').value;
    addscriptlink('site', scriptsequence, scriptpath);
});

*/

/*
elem('addscriptweb').addEventListener('click', function (e) {
    var scriptpath = elem('scriptpath').value;
    var scriptsequence = elem('scriptsequence').value;
    addscriptlink('web', scriptsequence, scriptpath);
});

*/

/*
elem('fileaddscriptsite').addEventListener('click', function (e) {
    var scriptpath = elem('filescriptpath').value;
    var scriptsequence = elem('filescriptsequence').value;
    addscriptlink('site', scriptsequence, scriptpath);
});
*/

/*
elem('fileaddscriptweb').addEventListener('click', function (e) {
    var scriptpath = elem('filescriptpath').value;
    var scriptsequence = elem('filescriptsequence').value;
    addscriptlink('web', scriptsequence, scriptpath);
});
*/

/*
elem('addfilebtn').addEventListener('click', function (e) {
    var filename = elem('addfile').value;
    filename = filename.replace(/[^a-z0-9/._-]/gi, '');
    if (filename == "") {
        var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, 'Filename cannot be empty!');";
        chrome.devtools.inspectedWindow.eval(script);
        return;
    }
    else if (filename.match(/.css$/) || filename.match(/.js$/)) {
        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addFile;
        script += " exescript(addFile, '" + filename + "');";
        chrome.devtools.inspectedWindow.eval(script);
    }
    else {
        var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, 'Filename needs to end with .js or .css!');";
        chrome.devtools.inspectedWindow.eval(script);

        return;
    }
});
*/

/*
$('#addfile').keyup(function () {
    var txtBoxVal = $(this).val();
    $('#trimmedfilename').text(txtBoxVal.replace(/[^a-z0-9/._-]/gi, ''));
    $('#filescriptpath').val('~sitecollection/Style library/' + txtBoxVal.replace(/[^a-z0-9/._-]/gi, ''));
});
*/

/*
elem('addpropertybtn').addEventListener('click', function (e) {
    var propertykey = elem('propertykey').value;
    var propertyvalue = elem('propertyvalue').value;

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addWebProperties;
    script += " exescript(addWebProperties, '" + propertykey + "', '" + propertyvalue + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('addlistpropertybtn').addEventListener('click', function (e) {
    var propertykey = elem('listpropertykey').value;
    var propertyvalue = elem('listpropertyvalue').value;
    var listId = $("#weblist").val();

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addListProperties;
    script += " exescript(addListProperties, '" + propertykey + "', '" + propertyvalue + "', '" + listId + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('addwebhookbtn').addEventListener('click', function (e) {

    var webhooklist = $("#webhooklist").val();
    var webhookurl = elem('webhookurl').value;

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addSubscriptions;
    script += " exescript(addSubscriptions, '" + webhooklist + "', '" + webhookurl + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('weblist').addEventListener('change', function (e) {

    var listId = $("#weblist").val();

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
    script += " exescript(getListProperties, '" + listId + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

var dimmerTimeout;
var errorTimeout;

/*
elem('webpart-zones-list').addEventListener('click', function (e) {

    var selectedWp = document.querySelector('.webpart.selected');
    if (selectedWp) {
        var selectedWpId = selectedWp.attributes["data-id"].value;
        if (webpartXmlCache[selectedWpId] != webpartXmlEditor.getValue()) {
            if (!confirm("Drop changes to current webpart?"))
                return;
            if (selectedWpId == "new")
                selectedWp.parentNode.removeChild(selectedWp);
        }
    }

    if (e.target.className == 'add-new-webpart')
    {
        // add webpart
        selectWebpart('');
        var newWpNode = document.createElement("div");
        newWpNode.className="webpart selected";
        newWpNode.setAttribute("data-id", "new");
        newWpNode.innerHTML = "new webpart";
        e.target.parentNode.insertBefore(newWpNode, e.target.nextSibling);
        webpartXmlEditor.setValue('');
        return;
    }

    var idAttr = e.target.attributes["data-id"];
    if (!idAttr || idAttr.value == "new")
        return;

    if (webpartXmlCache[idAttr.value]) {
        selectWebpart(idAttr.value);
        return;
    }

    scheduleDimmer();

    var script = exescript + ' ' + loadWebpart;
    script += " exescript(loadWebpart, '" + idAttr.value + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('webpart-save-button').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var selectedWp = document.querySelector('.webpart.selected');
    if (!webpartXmlEditor || !webpartXmlEditor.getValue() || !selectedWp)
        return;

    var idAttr = selectedWp.attributes["data-id"];
    if (!idAttr)
        return;

    var zoneAttr = selectedWp.parentNode.attributes["data-zone-id"];
    if (idAttr.value == "new" && !zoneAttr)
        return;

    elem("webpart-save-error").style.display = "none";

    var wpContents = webpartXmlEditor.getValue();

    scheduleDimmer();

    var script = exescript + ' ' + saveWebpart;
    script += " exescript(saveWebpart, '" + idAttr.value + "', '" + encodeURIComponent(wpContents).replace(/'/g, "%27") + "', '" + (zoneAttr ? zoneAttr.value : "") + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

/*
elem('webpart-delete-button').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var selectedWp = document.querySelector('.webpart.selected');
    if (!webpartXmlEditor || !webpartXmlEditor.getValue() || !selectedWp)
        return;

    var idAttr = selectedWp.attributes["data-id"];
    if (!idAttr)
        return;

    if (!confirm('Are you sure want to delete this webpart?'))
        return;

    elem("webpart-save-error").style.display = "none";
    
    scheduleDimmer();

    var script = exescript + ' ' + deleteWebpart;
    script += " exescript(deleteWebpart, '" + idAttr.value + "');";
    chrome.devtools.inspectedWindow.eval(script);

});
*/

function addscriptlink(scope, scriptsequence, scriptpath) {

    if (scriptpath == "") {

        var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, 'Script path cannot be empty!');";
        chrome.devtools.inspectedWindow.eval(script);

        return;
    }
    else if (scriptsequence == "") {

        var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
        script += " exescript(alertError, 'Sequence cannot be empty!');";
        chrome.devtools.inspectedWindow.eval(script);

        return;
    }

    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addCustomAction;
    script += " exescript(addCustomAction, '" + scope + "', '" + scriptpath + "', '" + scriptsequence + "');";
    chrome.devtools.inspectedWindow.eval(script);
}
