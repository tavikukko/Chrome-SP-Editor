riot.tag("listproperties", `
          <div id="page-content-wrapper">
            <div>
              <h4>List properties</h4>
              <p>Selected list propertybag values</p>
            </div>
            <hr>
              <div class="row">
                <div class="col-xs-4">
                  <select onchange="{ changelist }" class="form-control" id="weblist">
                    <option each="{list in lists}" value={list.listId} >{list.listTitle}</option>
                  </select>
                </div>

                <div class="col-xs-3">
                  <input id="listpropertykey" type="text" class="form-control" placeholder="New property key">
                </div>
                <div class="col-xs-3">
                  <input id="listpropertyvalue" type="text" class="form-control" placeholder="New property value">
                </div>
                <div class="col-xs-2">
                  <div class="input-group-btn">
                      <button onclick="{ addprop }" id="addlistpropertybtn" type="button" class="btn btn-default" >Add property</button>
                  </div>
                </div>
              </div>
            <hr>
             <div id="listPropertyBag">
              <div each="{ property in properties }" class="form-group">
                <label>{ property.prop }</label>
                <div class="input-group">
                  <input keyup="{ updatevalue }" type="text" class="form-control" aria-describedby="helpBlock" value="{ property.value }">
                  <span class="input-group-btn">
                    <button onclick="{ updateprop }" class="btn btn-default update-list-property" type="button">Update</button>
                    <button onclick="{ removeprop }" class="btn btn-default remove-list-property" type="button">Remove</button>
                    <button onclick="{ indexprop }" class="{ indexed(property.prop) ? 'btn btn-success unindex-property' : 'btn btn-default index-property' }" type="button">{ indexed(property.prop) ? 'UnIndex' : 'Index' }</button>
                  </span>
                </div>
              </div>
            </div>
          </div>`,
  function (opts) {

    this.indexedpropertykeys = null;
    this.properties = [];

    this.on("mount", function () {
      this.init();
    });

    this.changelist = function () {
      var listId = $("#weblist").val();

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
      script += " exescript(getListProperties, '" + listId + "');";
      chrome.devtools.inspectedWindow.eval(script);
    }

    this.updatevalue = function (e) {
      e.item.property.value = e.target.value;
    }.bind(this);

    this.indexed = function (prop) {
      if (this.indexedpropertykeys !== undefined) {
        var bytes = [];
        for (var i = 0; i < prop.length; ++i) {
          bytes.push(prop.charCodeAt(i));
          bytes.push(0);
        }
        var b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));
        if (this.indexedpropertykeys.value.indexOf(b64encoded) > -1) return true
      }
      return false;
    }.bind(this);

    this.init = function () {

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getLists;
      script += " exescript(getLists);";
      chrome.devtools.inspectedWindow.eval(script);

      port.onMessage.addListener(function (message) {
        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'getLists':
            if (message.success) {
              this.lists = message.result.slice();
              this.update();

              var listId = message.result[0].listId;

              var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
              script += " exescript(getListProperties, '" + listId + "');";
              chrome.devtools.inspectedWindow.eval(script);
            }
            break;
          case 'getListProperties':

            this.indexedpropertykeys = message.result.filter(function (obj) {
              return obj.prop === 'vti_indexedpropertykeys';
            })[0];

            this.properties = message.result.slice();
            this.update();
            break;

          case 'addListProperties':
          case 'updateListProperties':
          case 'deleteListProperties':
          case 'addToIndexedListPropertyKeys':

            var listId = $("#weblist").val();

            var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getListProperties;
            script += " exescript(getListProperties, '" + listId + "');";
            chrome.devtools.inspectedWindow.eval(script);

            break;
        }
      }.bind(this));
    }.bind(this);

    this.addprop = function () {
      var propertykey = elem('listpropertykey').value;
      var propertyvalue = elem('listpropertyvalue').value;
      var listId = $("#weblist").val();

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addListProperties;
      script += " exescript(addListProperties, '" + propertykey + "', '" + propertyvalue + "', '" + listId + "');";
      chrome.devtools.inspectedWindow.eval(script);
    }

    this.updateprop = function (e) {

      var listId = $("#weblist").val();

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateListProperties;
      script += " exescript(updateListProperties, '" + e.item.property.prop + "', '" + e.item.property.value + "', '" + listId + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

    this.removeprop = function (e) {

      var listId = $("#weblist").val();

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedListPropertyKeys + ' ' + deleteListProperties;
      script += " exescript(deleteListProperties, '" + e.item.property.prop + "', '" + listId + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

    this.indexprop = function (e) {

      var listId = $("#weblist").val();

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedListPropertyKeys;
      script += " exescript(addToIndexedListPropertyKeys, '" + e.item.property.prop + "', '" + listId + "',  " + this.indexed(e.item.property.prop) + ");";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

  });