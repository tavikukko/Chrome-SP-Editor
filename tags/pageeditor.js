riot.tag("pageeditor", `
        <div id="pageeditor" style="display: none;">
          <div id="webpart-zones-list"></div>
          <div id="webpart-xml-container"></div>
          <span id="webpart-save-error" style="display: none;"></span>
          <span id="webpart-save-success" style="display: none;">Webpart saved.</span>
          <a href="" id="webpart-save-button" class="btn btn-default">Save changes</a>
          <a href="" id="webpart-delete-button" class="btn btn-danger">Delete webpart</a>
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