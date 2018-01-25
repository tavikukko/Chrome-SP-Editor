riot.tag("sitedesigns", `
          <div id="page-content-wrapper">
            <div>
              <h4>Site Designs</h4>
              <p>Manage site designs</p>
            </div>
            <hr>
            <div class="row">
            <div class="col-xs-4">
              <select onchange="{ changedesign }" class="form-control" id="sitedesigssdd">
                <option each="{ design in designs }" value="{ design.Id }">{ design.Title }</option>
              </select>
            </div>
          </div>`,
  function (opts) {

    this.designs = [];

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getDesigns;
      script += " exescript(getDesigns);";
      chrome.devtools.inspectedWindow.eval(script);

      port.onMessage.addListener(function (message) {
        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'getDesigns':
            if (message.success) {
              this.designs = message.result.results;
              this.update();
            }
            break;
        }
      }.bind(this));

    }.bind(this);

  });
