riot.tag("scriptlinks", `
        <div id="scriptlinks" style="display: none;">
          <div id="page-content-wrapper">
            <div>
              <h4>Scriptlinks</h4>
              <p>Add / remove scriptlinks.
              <b>Local</b> js files, use <b>~sitecollection/path/to/your/file.js</b>.
              <b>Local css</b> and <b>external css and js</b> files must use absolute url.</p>
            </div>
            <hr>
              <div class="row"> 
                <div class="col-xs-2">
                  <input id="scriptsequence" type="text" class="form-control" placeholder="Sequence">
                </div>
                <div class="col-xs-7">
                  <input id="scriptpath" type="text" class="form-control" placeholder="~sitecollection/style library/scripts/custom.js">
                </div>
                <div class="col-xs-3">
                  <div class="input-group-btn">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Add ScriptLink <span class="caret"></span></button>
                      <ul class="dropdown-menu pull-right">
                          <li onclick="{ addsite }" id="addscriptsite"><a href="#">To site collection</a></li>
                          <li onclick="{ addweb }" id="addscriptweb"><a href="#">To current web</a></li>
                      </ul>
                  </div>
                </div>
            </div>
            <hr>
            <div id="scriptlinks">
              <ul class="list-group">
                <li class="list-group-item active">Current web scriptlinks</li>
                <li class="list-group-item" each="{ link, i in web }">
                  <span class="pull-left" style="width: 10%">{ link.sequence }</span>
                  <span>{ link.scripturl }</span>
                  <span onclick="{ remove }" data-scope="web" data-id="{ link.id }"class="scriptlinks-remove glyphicon glyphicon-remove pull-right" style="cursor: hand;"></span>
                </li>
              </ul>
              <ul class="list-group">
                <li class="list-group-item active">Site collection scriptlinks</li>
                <li class="list-group-item" each="{ link, i in site }">
                <span class="pull-left" style="width: 10%">{ link.sequence }</span>
                <span>{ link.scripturl }</span>
                <span onclick="{ remove }" data-scope="site" data-id="{ link.id }" class="scriptlinks-remove glyphicon glyphicon-remove pull-right" style="cursor: hand;"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {

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