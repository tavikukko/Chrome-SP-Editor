riot.tag("listproperties", `
        <div id="listproperties" style="display: none;">
          <div id="page-content-wrapper">
            <div>
              <h4>List properties</h4>
              <p>Selected list propertybag values</p>
            </div>
            <hr>
              <div class="row">
                <div class="col-xs-4">
                  <select class="form-control" id="weblist">
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
                      <button id="addlistpropertybtn" type="button" class="btn btn-default" >Add property</button>
                  </div>
                </div>
              </div>
            <hr>
             <div id="listPropertyBag">
              <div data-id="vti_candeleteversion" class="form-group">
                <label id="listproplabel0" for="listpropInput0">vti_candeleteversion</label>
                <div class="input-group">
                  <input type="text" id="listpropInput0" class="form-control" aria-describedby="helpBlock">
                  <span class="input-group-btn">
                    <button class="btn btn-default update-list-property" data-id="listproplabel0" data-value="listpropInput0" type="button">Update</button>
                    <button class="btn btn-default remove-list-property" data-id="listproplabel0" type="button">Remove</button>
                    <button class="btn btn-default index-list-property" data-id="listproplabel0" type="button">Index</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

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
            alert(message.result.length);
            // add code here
            break;
        }
      }.bind(this));
    }.bind(this);

  });