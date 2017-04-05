riot.tag("files", `
        <div id="files" style="display: none;">
          <div id="page-content-wrapper">
            <h4>Files</h4>
            <p>Add files to rootsite Style library.
            Allowed characters [a-z 0-9 . _ -], trimmed automatically.</p>
            <div class="row">
               <div class="col-lg-6">
                  <div class="input-group">
                     <input keyup="{ updatepath }" id="addfile" type="text" class="form-control" placeholder="myfile.js">
                     <span class="input-group-btn">
                        <button onclick="{ addfile }" id="addfilebtn" class="btn btn-default" type="button">Add</button>
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
                  <input id="filescriptpath" type="text" class="form-control" placeholder="" value="{ filescriptpath }">
                </div>
                <div class="col-xs-3">
                  <div class="input-group-btn">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Add ScriptLink <span class="caret"></span></button>
                      <ul class="dropdown-menu pull-right">
                          <li onclick="{ addsite }" id="fileaddscriptsite"><a href="#">To site collection</a></li>
                          <li onclick="{ addweb }" id="fileaddscriptweb"><a href="#">To current web</a></li>
                      </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>`,
  function (opts) {

    this.filescriptpath = "";

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
      // add init code here
    }.bind(this);

    this.updatepath = function (e) {
      this.filescriptpath = '~sitecollection/Style library/' + e.target.value.replace(/[^a-z0-9/._-]/gi, '');
    }.bind(this);

    this.addweb = function (e) {
      var scriptpath = elem('filescriptpath').value;
      var scriptsequence = elem('filescriptsequence').value;
      addscriptlink('web', scriptsequence, scriptpath);
    }.bind(this);

    this.addsite = function (e) {
      var scriptpath = elem('filescriptpath').value;
      var scriptsequence = elem('filescriptsequence').value;
      addscriptlink('site', scriptsequence, scriptpath);
    }.bind(this);

    this.addfile = function (e) {
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
    }.bind(this);

  });