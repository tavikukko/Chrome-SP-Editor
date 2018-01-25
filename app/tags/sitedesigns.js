riot.tag("sitedesigns", `
          <div id="page-content-wrapper">
            <div>
              <h4>Site Designs</h4>
            </div>
            <hr>
            <div class="form-group">
              <select onchange="{ changeDesign }" class="form-control" id="sitedesignsdd">
                <option value="">Create new design..</option>
                <option each="{ design in designs }" value="{ design.Id }">{ design.Title }</option>
              </select>
            </div>

            <virtual if="{ selectedDesign }">
              <div class="form-group">
                <label for="design-id">Id</label>
                <input type="text" class="form-control" value="{ selectedDesign.Id }" id="design-id" readonly>
              </div>
              <div class="form-group">
                <label for="design-title">Title</label>
                <input type="text" class="form-control" value="{ selectedDesign.Title }" id="design-title">
              </div>
              <div class="form-group">
                <label for="design-desc">Description</label>
                <textarea class="form-control" rows="5" id="design-desc">{ selectedDesign.Description }</textarea>
              </div>
              <div class="form-group">
                <label for="design-imageAltText">Preview Image Alt Text</label>
                <input type="text" class="form-control" value="{ selectedDesign.PreviewImageAltText }" id="design-imageAltText">
              </div>
              <div class="form-group">
                <label for="design-imageUrl">Preview Image Url</label>
                <input type="text" class="form-control" value="{ selectedDesign.PreviewImageUrl }" id="design-imageUrl">
              </div>
              <div class="form-group">
                <label for="design-template">WebTemplate</label>
                <input type="text" class="form-control" value="{ selectedDesign.WebTemplate }" id="design-template">
              </div>
              <div class="form-group">
                <label for="design-version">Version</label>
                <input type="text" class="form-control" value="{ selectedDesign.Version }" id="design-version">
              </div>
              <div class="row">
              <div class="col-sm-5">
                  <select name="from[]" id="multiselect" class="form-control" size="8" multiple="multiple">
                    <option each="{ script in scripts }" value="{ script }">{ script }</option>
                  </select>
              </div>

              <div class="col-sm-2">
                  <button onclick="{ rightSelecteAll }" type="button" id="multiselect_rightAll" class="btn btn-block"><i class="glyphicon glyphicon-forward"></i></button>
                  <button onclick="{ rightSelected }" type="button" id="multiselect_rightSelected" class="btn btn-block"><i class="glyphicon glyphicon-chevron-right"></i></button>
                  <button onclick="{ leftSelected }" type="button" id="multiselect_leftSelected" class="btn btn-block"><i class="glyphicon glyphicon-chevron-left"></i></button>
                  <button onclick="{ leftSelecteAll }" type="button" id="multiselect_leftAll" class="btn btn-block"><i class="glyphicon glyphicon-backward"></i></button>
              </div>

              <div class="col-sm-5">
                  <select name="to[]" id="multiselect_to" class="form-control" size="8" multiple="multiple">
                    <option each="{ script in selectedDesign.SiteScriptIds.results }" value="{ script }">{ script }</option>
                  </select>

                  <div class="row">
                      <div class="col-sm-6">
                          <button onclick="{ moveScriptUp }" type="button" id="multiselect_move_up" class="btn btn-block"><i class="glyphicon glyphicon-arrow-up"></i></button>
                      </div>
                      <div class="col-sm-6">
                          <button type="button" id="multiselect_move_down" class="btn btn-block col-sm-6"><i class="glyphicon glyphicon-arrow-down"></i></button>
                      </div>
                  </div>
              </div>
          </div>
              <div class="form-group">
                <button onclick="{ updateDesign }" class="btn btn-success">Save</button>
                <button onclick="{ deleteDesign }" class="btn btn-danger">Delete</button>
              </div>
            </virtual>

          </div>`,
  function (opts) {

    //this.designs = [];
    this.selectedDesign = null;
    //this.scripts = [];
    //this.allScripts = null;

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {

      scheduleDimmer();
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getDesigns;
      script += " exescript(getDesigns);";
      chrome.devtools.inspectedWindow.eval(script);

      var script = sj + ' ' + alertify + ' ' + exescript + ' ' + getScripts;
      script += " exescript(getScripts);";
      chrome.devtools.inspectedWindow.eval(script);

      port.onMessage.addListener(function (message) {
        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'getScripts':
            if (message.success) {
              hideDimmer();
              var self = this;
              this.scripts = [];
              message.result.results.forEach(function (arrayItem) {
                this.scripts.push(arrayItem.Id)
              }.bind(this));
              this.allScripts = message.result.results;

              this.update();
            }
            else hideDimmer();
            break;
          case 'getDesigns':
            if (message.success) {
              hideDimmer()
              this.designs = message.result.results;
              this.update();
            }
            else hideDimmer();
            break;
          case 'getDesign':
            if (message.success) {
              hideDimmer();
              this.selectedDesign = message.result;
              var element = document.getElementById('sitedesignsdd');
              element.value = message.result.Id;

              this.scripts = [];
              this.allScripts.forEach(function (arrayItem) {
                this.scripts.push(arrayItem.Id)
              }.bind(this));

              this.update();
            }
            else hideDimmer();
            break;
        }
      }.bind(this));

    }.bind(this);

    this.rightSelected = function (e) {
      var self = this;
      $('#multiselect :selected').each(function (i, sel) {
        var remove = $(sel).val();
        self.scripts = self.scripts.filter(function (item) {
          return item != remove;
        });
        self.selectedDesign.SiteScriptIds.results.push(remove);
      });
      this.update();
      $("#multiselect").val([]);
    }.bind(this);

    this.rightSelecteAll = function (e) {
      var self = this;
      $("#multiselect option").each(function () {
        var remove = $(this).val();
        self.scripts = self.scripts.filter(function (item) {
          return item != remove;
        });
        self.selectedDesign.SiteScriptIds.results.push(remove);
      });
      this.update();
      $("#multiselect").val([]);
    }.bind(this);

    this.leftSelected = function (e) {
      var self = this;
      $('#multiselect_to :selected').each(function (i, sel) {
        var remove = $(sel).val();
        self.selectedDesign.SiteScriptIds.results = self.selectedDesign.SiteScriptIds.results.filter(function (item) {
          return item != remove;
        });
        self.scripts.push(remove);
      });
      this.update();
      $("#multiselect_to").val([]);
    }.bind(this);

    this.leftSelecteAll = function (e) {
      var self = this;
      $("#multiselect_to option").each(function () {
        var remove = $(this).val();
        self.selectedDesign.SiteScriptIds.results = self.selectedDesign.SiteScriptIds.results.filter(function (item) {
          return item != remove;
        });
        self.scripts.push(remove);
      });
      this.update();
      $("#multiselect_to").val([]);
    }.bind(this);

    this.moveScriptUp = function (e) {
      var self = this;
      $('#multiselect_to :selected').each(function (i, sel) {
        var remove = $(sel).val();
        self.moveUp(self.selectedDesign.SiteScriptIds.results, remove)
      });
      this.update();
      $("#multiselect_to").val([]);
    }.bind(this);

    this.moveScriptDown = function (e) {
      var self = this;
      $('#multiselect_to :selected').each(function (i, sel) {
        var remove = $(sel).val();
        self.moveDown(self.selectedDesign.SiteScriptIds.results, remove)
      });
      this.update();
      $("#multiselect_to").val([]);
    }.bind(this);

    this.changeDesign = function (e) {
      var designId = $("#sitedesignsdd").val();
      if (designId == "") {
        this.selectedDesign = null;
        this.update();
        return;
      }
      scheduleDimmer();
      var script = sj + ' ' + alertify + ' ' + exescript + ' ' + getDesign;
      script += " exescript(getDesign, '" + designId + "');";
      chrome.devtools.inspectedWindow.eval(script);
    }.bind(this);

    /* functions for moving items in array */
    this.move = function (array, element, delta) {
      var index = array.indexOf(element);
      var newIndex = index + delta;
      if (newIndex < 0 || newIndex == array.length) return; //Already at the top or bottom.
      var indexes = [index, newIndex].sort(); //Sort the indixes
      array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]); //Replace from lowest index, two elements, reverting the order
    }.bind(this);

    this.moveUp = function (array, element) {
      this.move(array, element, -1);
    }.bind(this);

    this.moveDown = function (array, element) {
      this.move(array, element, 1);
    }.bind(this);
    /* --end-- */

  });
