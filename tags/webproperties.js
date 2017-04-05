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
                      <button id="addpropertybtn" type="button" class="btn btn-default" >Add property</button>
                  </div>
                </div>
              </div>
            <hr>
              <div class="row">
                <div class="col-xs-3">
                  <input id="filterprops" type="text" class="form-control" placeholder="Filter properties">
                </div>
              </div>
            <hr>
             <div id="webPropertyBag">
            </div>
          </div>
        </div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
      /*
            var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getCustomActions;
            script += " exescript(getCustomActions);";
            chrome.devtools.inspectedWindow.eval(script);
      
            port.onMessage.addListener(function (message) {
              if (typeof message !== 'object' || message === null ||
                message === undefined || message.source === undefined) {
                return;
              }
      
              switch (message.function) {
                case 'getCustomActions':
                  if (message.success) {
      
                    this.web = message.result[0].slice();
                    this.web.sort(function (a, b) { return a.sequence - b.sequence });
      
                    this.site = message.result[1].slice();
                    this.site.sort(function (a, b) { return a.sequence - b.sequence });
      
                    this.update();
      
                  }
                  else {
      
                    var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
                    script += " exescript(alertError, '" + message.result + "');";
                    chrome.devtools.inspectedWindow.eval(script);
      
                  }
                  break;
                case 'removeCustomAction':
      
                  var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getCustomActions;
                  script += " exescript(getCustomActions);";
                  chrome.devtools.inspectedWindow.eval(script);
      
                  break;
                case 'addCustomAction':
      
                  if (message.success) {
                    var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getCustomActions;
                    script += " exescript(getCustomActions);";
                    chrome.devtools.inspectedWindow.eval(script);
                  }
      
                  break;
              }
            }.bind(this));
      */
    }.bind(this);

    this.addweb = function (e) {

      var scriptpath = elem('scriptpath').value;
      var scriptsequence = elem('scriptsequence').value;

      addscriptlink('web', scriptsequence, scriptpath);

    }.bind(this);

    this.addsite = function (e) {

      var scriptpath = elem('scriptpath').value;
      var scriptsequence = elem('scriptsequence').value;

      addscriptlink('site', scriptsequence, scriptpath);

    }.bind(this);

    this.remove = function (e) {

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + removeCustomAction;
      script += " exescript(removeCustomAction, '" + e.item.link.scope + "', '" + e.item.link.id + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

  });