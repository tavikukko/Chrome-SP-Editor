riot.tag("search", `
            <div id="page-content-wrapper">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="panel panel-default">
                      <div class="panel-heading">Query</div>
                      <div class="panel-body">
                        <div class="form-group">
                          <textarea ref="searchString" class="form-control rounded-0" id="exampleFormControlTextarea1" rows="5" placeholder="Search string"></textarea>
                        </div>
                        <div class="form-group">
                          <input value=10 ref="rowlimit" type="text" class="form-control" id="inlineFormInputGroup" placeholder="Row limit">
                        </div>
                        <div class="form-group">
                          <input value=0 ref="startrow" type="text" class="form-control" id="inlineFormInputGroup" placeholder="Start">
                        </div>
                        <div class="form-group">
                          <button onclick="{ runSearch }" type="button" class="btn btn-primary btn-md">Run search</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8" >
                  <div class="panel panel-default">
                    <div class="panel-heading">Options</div>
                    <div class="panel-body">

                    <div class="row">
                    <div class="col-md-4">
                    <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="EnableStemming" >Enable stemming</label>
                  </div>
                  <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="EnableQueryRules">Enable query rules</label>
                  </div>
                  <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="EnableNicknames">Enable nicknames</label>
                  </div>
                  <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="ProcessBestBets">Process bestbets</label>
                  </div>
                  <div class="checkbox">
                  <label><input ref="option" type="checkbox" value="ProcessPersonalFavorites">Process personal favorites</label>
                </div>
                    </div>
                    <div class="col-md-4">
                    <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="TrimDuplicates" >Trim dublicates</label>
                  </div>
                  <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="EnableFQL">Enable FQL</label>
                  </div>
                  <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="EnablePhonetic">Enable phonetic</label>
                  </div>
                  <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="BypassResultTypes">Bypass result types</label>
                  </div>
                  <div class="checkbox">
                  <label><input ref="option" type="checkbox" value="GenerateBlockRankLog">Generate block rank</label>
                </div>
                    </div>
                    <div class="col-md-4">
                    <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="EnableInterleaving" >Enable interleaving</label>
                  </div>
                  <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="EnableSorting">Enable sorting</label>
                  </div>
                  <div class="checkbox">
                    <label><input ref="option" type="checkbox" value="EnableOrderingHitHighlightedProperty">Enable ordering hit highlighted property</label>
                  </div>
                    </div>
                  </div>


                    </div>
                  </div>
                </div>
              </div>


              <div class="panel-group" id="accordion">

                <div class="panel panel-default" each="{ result, i in searchResults }">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                    <i class="badge badge-primary badge-pill">{i+1}</i> <a data-toggle="collapse" href="#kissa{i}"><span> {result.name}</span></a>
                    </h4>
                  </div>
                  <div id="kissa{i}" class="panel-collapse collapse">

                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th class="col-md-3">Property</th>
                          <th class="col-md-9">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr each="{ prop, x in result.props }">
                          <td class="col-md-3 is-breakable"><i class="badge badge-primary badge-pill">{x+1}</i> { prop.key }</td>
                          <td class="col-md-9 is-breakable">{ prop.value }</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>

              </div>

            </div>
            `,
  function (opts) {

    this.searchResults = [];

    this.on("mount", function () {
      this.init();
    }.bind(this));

    this.init = function () {

      port.onMessage.addListener(function (message) {

        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'runSearch':
            if (message.success) {
              // update results here
              message.result.forEach(function (obj) {
                var rowProps = [];
                for (var name in obj) {
                  rowProps.push({ key: name, value: obj[name] });
                }
                this.searchResults.push({name: obj.OriginalPath, props: rowProps });
              }.bind(this));

              this.update();
            }
            else {
              var script = sj + ' ' + alertify + ' ' + exescript + ' ' + alertError;
              script += " exescript(alertError, '" + message.result + "');";
              chrome.devtools.inspectedWindow.eval(script);
            }
            break;
        }
      }.bind(this));

      // TODO: loop all checkbox options here and set three states.
      $('input[ref="option"]').each(function() {
        // `this` is the div
        console.log("hello")
        var $check = $(this);

      $check.data('checked', 1).prop('indeterminate', true).click(function (e) {
          var el = $(this);
          switch (el.data('checked')) {
            // unchecked, going indeterminate
            case 0:
              el.data('checked', 1);
              el.prop('indeterminate', true);
              break;
            // indeterminate, going checked
            case 1:
              el.data('checked', 2);
              el.prop('indeterminate', false);
              el.prop('checked', true);
              break;
            // checked, going unchecked
            default:
              el.data('checked', 0);
              el.prop('indeterminate', false);
              el.prop('checked', false);
          }
        });
      });

    }.bind(this);

    this.runSearch = function (e) {
      this.searchResults = [];
      this.update();

      var searchOpts = {
        Querytext: this.refs.searchString.value,
        RowLimit: Number(this.refs.rowlimit.value),
        StartRow: Number(this.refs.startrow.value)
      };

      $('input[ref="option"]').each(function(e) {
        var option = $(this);
        if ( option.data('checked') == 2 && !option.prop('indeterminate') && option.prop('checked') )
          searchOpts[option[0].defaultValue] = true;
        else if ( option.data('checked') == 0 && !option.prop('indeterminate') && !option.prop('checked') )
        searchOpts[option[0].defaultValue] = false;
      });

      var content = JSON.stringify(searchOpts);

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + runSearch;
      script += " exescript(runSearch, '" + content + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

  });
