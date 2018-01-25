riot.tag("sitescripts", `
            <div id="page-content-wrapper">

              <div class="form-group">
              <label for="sitescriptsdd">Select script</label>
                <select onchange="{ changeScript }" class="form-control" id="sitescriptsdd">
                  <option value="">Create new script..</option>
                  <option each="{ script in scripts }" value="{ script.Id }">{ script.Title }</option>
                </select>
              </div>

              <virtual if="{ selectedScript }">
                <div class="form-group">
                  <label for="script-id">Id</label>
                  <input type="text" class="form-control" value="{ selectedScript.Id }" id="script-id" readonly>
                </div>
                <div class="form-group">
                  <label for="script-title">Title</label>
                  <input type="text" class="form-control" value="{ selectedScript.Title }" id="script-title">
                </div>
                <div class="form-group">
                  <label for="script-desc">Description</label>
                  <textarea class="form-control" rows="5" id="script-desc">{ selectedScript.Description }</textarea>
                </div>
                <div class="form-group">
                  <label for="script-version">Version</label>
                  <input type="text" class="form-control" value="{ selectedScript.Version }" id="script-version">
                </div>
                <div class="form-group">
                  <button onclick="{ updateScript }" class="btn btn-success">Save</button>
                  <button class="btn btn-danger">Remove</button>
                </div>
              </virtual>

              <virtual if="{ !selectedScript }">
                <div class="form-group">
                  <label for="script-title">Title</label>
                  <input type="text" class="form-control" id="new-script-title">
                </div>
                <!--<div class="form-group">
                  <label for="script-desc">Description</label>
                  <input type="text" class="form-control" id="new-script-desc">
                </div>-->
                <div class="form-group">
                  <button onclick="{ savenew }" class="btn btn-success">Save</button>
                  <button onclick="{ clearform }" class="btn btn-danger">Clear</button>
                </div>
              </virtual>

            </div>
            `,
  function (opts) {

    this.scripts = [];
    this.selectedScript = null;

    this.on("mount", function () {

      if (!sitescriptseditor) {
        require(['vs/editor/editor.main'], function () {
          sitescriptseditor = monaco.editor.create(document.getElementById('sitescripts-container'), {
            value: [
              '{',
              '\t"$schema": "schema.json",',
              '\t"actions": [',
              '\t\t{',
              '\t\t\t"verb": "applyTheme",',
              '\t\t\t"themeName": "Contoso Theme"',
              '\t\t}',
              '\t],',
              '\t"bindata": { },',
              '\t"version": 1',
              '}',
            ].join('\n'),
            language: 'json',
            lineNumbers: true,
            roundedSelection: true,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: "vs-dark",
            fontSize: 16,
            renderIndentGuides: true
          });

          monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true
          });

          monaco.languages.css.cssDefaults.setDiagnosticsOptions({
            lint: false,
            validate: false
          });

          window.addEventListener('resize', function () {
            sitescriptseditor.layout();
          });

        }.bind(this));
      }

      var sitescriptslistener = function (message) {
        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'getScripts':
            if (message.success) {
              this.scripts = message.result.results;
              this.update();
            }
            break;
            case 'getScript':
            console.log(message.result)
            if (message.success) {
              this.selectedScript = message.result;
              var element = document.getElementById('sitescriptsdd');
              element.value = message.result.Id;
              sitescriptseditor.setValue(message.result.Content);
              sitescriptseditor.setScrollTop(0);
              sitescriptseditor.setScrollLeft(0);
              this.update();
            }
            break;
            case 'addScript':
            console.log(message.result)
            if (message.success) {
              this.scripts.push(message.result)

              var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getScript;
              script += " exescript(getScript, '" + message.result.Id + "');";
              chrome.devtools.inspectedWindow.eval(script);
              this.update();

            }
            break;
            case 'updateScript':
            // update dropdown for Title changes
            if (message.success) {
              alert("update ok")
            }
            break
        }
      }.bind(this);

      for (i = 0; i < sitescriptslisteners.length; i++) {
        port.onMessage.removeListener(sitescriptslisteners[i]);
      }

      sitescriptslisteners = [];
      sitescriptslisteners.push(sitescriptslistener)
      port.onMessage.addListener(sitescriptslistener);

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getScripts;
      script += " exescript(getScripts);";
      chrome.devtools.inspectedWindow.eval(script);

    });

    this.changeScript = function (e) {
      var scriptId = $("#sitescriptsdd").val();
      this.selectedId = scriptId;

      if (scriptId == "") {
        this.selectedScript = null;
        var value = [
          '{',
          '\t"$schema": "schema.json",',
          '\t"actions": [',
          '\t\t{',
          '\t\t\t"verb": "applyTheme",',
          '\t\t\t"themeName": "Contoso Theme"',
          '\t\t}',
          '\t],',
          '\t"bindata": { },',
          '\t"version": 1',
          '}',
        ].join('\n');

        sitescriptseditor.setValue(value);
        sitescriptseditor.setScrollTop(0);
        sitescriptseditor.setScrollLeft(0);

        this.update();
        return;
      }

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getScript;
      script += " exescript(getScript, '" + scriptId + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

    this.savenew = function (e) {

      var title = $("#new-script-title").val();
      if (title.length < 1) {
        alert("Site script Title cannot be empty!")
        return;
      }
      var desc = $("#new-script-desc").val();
      var content = encodeURIComponent(sitescriptseditor.getValue());

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addScript;
      script += " exescript(addScript, '" + title + "', '" + content + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

    this.clearform = function (e) {

      var value = [
        '{',
        '\t"$schema": "schema.json",',
        '\t"actions": [',
        '\t\t{',
        '\t\t\t"verb": "applyTheme",',
        '\t\t\t"themeName": "Contoso Theme"',
        '\t\t}',
        '\t],',
        '\t"bindata": { },',
        '\t"version": 1',
        '}',
      ].join('\n');

      sitescriptseditor.setValue(value);

      $("#new-script-title").val("")

    }.bind(this);

    this.updateScript = function (e) {

      var title = $("#script-title").val();
      var id = $("#script-id").val();
      var desc = $("#script-desc").val();
      var version = $("#script-version").val();

      if (title.length < 1) {
        alert("Site script Title cannot be empty!")
        return;
      }

      var content = encodeURIComponent(sitescriptseditor.getValue());

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateScript;
      script += " exescript(updateScript, '" + id + "', '" + title + "', '" + desc + "', " + version + ", '" + content + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

  });
