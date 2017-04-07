riot.tag("pageeditor", `
        <div id="pageeditor">
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
      // init code here
    }.bind(this);

  });