riot.tag("files", `
        <div id="files" style="display: none;">
          <div id="page-content-wrapper">
            <h4>Files</h4>
            <p>Add files to rootsite Style library.
            Allowed characters [a-z 0-9 . _ -], trimmed automatically.</p>
            <div class="row">
               <div class="col-lg-6">
                  <div class="input-group">
                     <input id="addfile" type="text" class="form-control" placeholder="myfile.js">
                     <span class="input-group-btn">
                        <button id="addfilebtn" class="btn btn-default" type="button">Add</button>
                     </span>
                  </div>
               </div>
            </div>
            <hr>
            <h4>Scriptlink</h4>
            <p>Inject the new file: <b><span id="trimmedfilename"></b></p>
              <div class="row">
                <div class="col-xs-2">
                  <input id="filescriptsequence" type="text" class="form-control" placeholder="Sequence">
                </div>
                <div class="col-xs-7">
                  <input id="filescriptpath" type="text" class="form-control" placeholder="">
                </div>
                <div class="col-xs-3">
                  <div class="input-group-btn">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Add ScriptLink <span class="caret"></span></button>
                      <ul class="dropdown-menu pull-right">
                          <li id="fileaddscriptsite"><a href="#">To site collection</a></li>
                          <li id="fileaddscriptweb"><a href="#">To current web</a></li>
                      </ul>
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