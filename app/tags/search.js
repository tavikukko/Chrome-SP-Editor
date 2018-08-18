riot.tag("search", `
            <div id="page-content-wrapper">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="panel panel-default">
                      <div class="panel-heading">Query string</div>
                      <div class="panel-body">
                        <div class="form-group">
                          <textarea ref="searchString" class="form-control rounded-0" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <div class="class="form-group">
                          <button onclick="{ runSearch }" type="button" class="btn btn-primary btn-md">Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8" >
                  <div class="panel panel-default">
                    <div class="panel-heading">Options</div>
                    <div class="panel-body">
                      <div class="checkbox">
                        <label><input ref="option1" type="checkbox" value="">Option 1</label>
                      </div>
                      <div class="checkbox">
                        <label><input ref="option2" type="checkbox" value="">Option 2</label>
                      </div>
                      <div class="checkbox">
                        <label><input ref="option3" type="checkbox" value="">Option 3</label>
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
    }.bind(this);

    this.runSearch = function (e) {
      this.searchResults = [];
      this.update();

      var searchOpts = {
        Querytext: this.refs.searchString.value,
        RowLimit: 500,
        //EnableInterleaving: true
      };

      var content = JSON.stringify(searchOpts);

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + runSearch;
      script += " exescript(runSearch, '" + content + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

  });
