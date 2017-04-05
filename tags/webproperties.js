riot.tag("webproperties", `
        <div id="webproperties" style="display: none;">
          <div id="page-content-wrapper">
            <div>
              <h4>Web properties</h4>
              <p>Current web propertybag values</p>
            </div>
            <hr>
              <div class="row">
                <div class="col-xs-2">
                  <input id="propertykey" type="text" class="form-control" placeholder="New property key">
                </div>
                <div class="col-xs-7">
                  <input id="propertyvalue" type="text" class="form-control" placeholder="New property value">
                </div>
                <div class="col-xs-3">
                  <div class="input-group-btn">
                      <button onclick="{ addprop }" id="addpropertybtn" type="button" class="btn btn-default" >Add property</button>
                  </div>
                </div>
              </div>
            <hr>
              <div class="row">
                <div class="col-xs-3">
                  <input keyup="{ filterprops }" id="filterprops" type="text" class="form-control" placeholder="Filter properties">
                </div>
              </div>
            <hr>
             <div id="webPropertyBag">
              <div class="form-group" each="{ property, i in filtered()  }>
              <div class="row">
                <label>{ property.prop }</label>
                <div class="input-group">
                  <input keyup="{ updatevalue }" type="text" class="form-control" aria-describedby="helpBlock" value="{ property.value }">
                  <span class="input-group-btn">
                    <button onclick="{ updateprop }" class="btn btn-default update-property" type="button">Update</button>
                    <button onclick="{ removeprop }" class="btn btn-default remove-property" type="button">Remove</button>
                    <button onclick="{ indexprop }" class="{ indexed(property.prop) ? 'btn btn-success unindex-property' : 'btn btn-default index-property' }" type="button">{ indexed(property.prop) ? 'UnIndex' : 'Index' }</button>
                  </span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>`,
  function (opts) {

    this.obj = null;
    this.properties = [];
    this.filterstr = "";

    this.on("mount", function () {
      this.init();
    });

    this.updatevalue = function (e) {
      e.item.property.value = e.target.value;
    }.bind(this);

    this.filterprops = function (e) {
      this.filterstr = e.target.value.toLowerCase();
    }.bind(this);

    this.init = function () {

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties;
      script += " exescript(getWebProperties);";
      chrome.devtools.inspectedWindow.eval(script);

      port.onMessage.addListener(function (message) {
        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'getWebProperties':
            if (message.success) {

              this.obj = message.result.filter(function (obj) {
                return obj.prop === 'vti_indexedpropertykeys';
              })[0];

              this.properties = message.result.slice();
              this.update();
            }
            else {
              var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
              script += " exescript(alertError, '" + message.result + "');";
              chrome.devtools.inspectedWindow.eval(script);
            }
            break;
          case 'updateWebProperties':
          case 'deleteWebProperties':
          case 'addWebProperties':
          case 'addToIndexedPropertyKeys':

            var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getWebProperties;
            script += " exescript(getWebProperties);";
            chrome.devtools.inspectedWindow.eval(script);

            break;
        }
      }.bind(this));

    }.bind(this);

    this.indexed = function (prop) {

      if (this.obj !== undefined) {
        var bytes = [];
        for (var i = 0; i < prop.length; ++i) {
          bytes.push(prop.charCodeAt(i));
          bytes.push(0);
        }
        var b64encoded = window.btoa(String.fromCharCode.apply(null, bytes));
        if (this.obj.value.indexOf(b64encoded) > -1) return true
      }
      return false;

    }.bind(this);

    this.addprop = function (e) {

      var propertykey = elem('propertykey').value;
      var propertyvalue = elem('propertyvalue').value;

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addWebProperties;
      script += " exescript(addWebProperties, '" + propertykey + "', '" + propertyvalue + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

    this.updateprop = function (e) {
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateWebProperties;
      script += " exescript(updateWebProperties, '" + e.item.property.prop + "', '" + e.item.property.value + "');";
      chrome.devtools.inspectedWindow.eval(script);
    }.bind(this);

    this.removeprop = function (e) {
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedPropertyKeys + ' ' + deleteWebProperties;
      script += " exescript(deleteWebProperties, '" + e.item.property.prop + "');";
      chrome.devtools.inspectedWindow.eval(script);
    }.bind(this);

    this.indexprop = function (e) {
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addToIndexedPropertyKeys;
      script += " exescript(addToIndexedPropertyKeys, '" + e.item.property.prop + "', " + this.indexed(e.item.property.prop) + ");";
      chrome.devtools.inspectedWindow.eval(script);
    }.bind(this);

    this.filtered = function () {
      return this.properties.filter(function (t) {
        return ~t.prop.toLowerCase().indexOf(this.filterstr);
      }.bind(this));
    }.bind(this);

  });