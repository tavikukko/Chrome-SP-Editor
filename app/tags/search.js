riot.tag("search", `
            <div id="page-content-wrapper">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="panel panel-default">
                      <div class="panel-heading">Query</div>
                      <div class="panel-body">
                        <div class="form-group">
                          <textarea ref="searchString" class="form-control rounded-0" id="searchString" rows="5" placeholder="eg. contentclass:STS_List_*" onKeyDown="{ onEnter }" onKeyUp="{ buildPayload }"></textarea>
                        </div>
                        <div class="form-group">
                          <label for="rowlimit">Row limit:</label>
                          <input value=10 ref="rowlimit" type="text" class="form-control" id="rowlimit" placeholder="Row limit" onKeyUp="{ buildPayload }">
                        </div>
                        <div class="form-group">
                        <label for="startrow">Start row:</label>
                          <input value=0 ref="startrow" type="text" class="form-control" id="startrow" placeholder="Start" onKeyUp="{ buildPayload }">
                        </div>
                        <div class="form-group">
                        <label for="selectproperties">Select properties:</label>
                          <input ref="selectproperties" type="text" class="form-control" id="selectproperties" placeholder="eg. Title,contentclass" onKeyUp="{ buildPayload }">
                        </div>
                        <div class="form-group">
                          <button onclick="{ runSearch }" type="button" class="btn btn-primary btn-md" id="runsearchbtn" >Run search  <i class="{ searching ? 'fa fa-refresh fa-spin' : 'fa fa-refresh' }"></i></button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8" >
                  <div class="panel panel-default">
                    <div class="panel-heading">Options</i></div>
                    <div class="panel-body">

                      <div class="row">
                        <div class="col-md-4">
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="EnableStemming" id="EnableStemming" onclick="{ onselect }">Enable stemming</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="EnableQueryRules" id="EnableQueryRules" onclick="{ onselect }">Enable query rules</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="EnableNicknames" id="EnableNicknames" onclick="{ onselect }">Enable nicknames</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="ProcessBestBets" id="ProcessBestBets" onclick="{ onselect }">Process bestbets</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="ProcessPersonalFavorites" id="ProcessPersonalFavorites" onclick="{ onselect }">Process personal favorites</label>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="TrimDuplicates" id="TrimDuplicates" onclick="{ onselect }">Trim dublicates</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="EnableFQL" id="EnableFQL" onclick="{ onselect }">Enable FQL</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="EnablePhonetic" id="EnablePhonetic" onclick="{ onselect }">Enable phonetic</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="BypassResultTypes" id="BypassResultTypes" onclick="{ onselect }">Bypass result types</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="GenerateBlockRankLog" id="GenerateBlockRankLog" onclick="{ onselect }">Generate block rank</label>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="EnableInterleaving" id="EnableInterleaving" onclick="{ onselect }">Enable interleaving</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="EnableSorting" id="EnableSorting" onclick="{ onselect }">Enable sorting</label>
                          </div>
                          <div class="checkbox">
                            <label><input ref="option" type="checkbox" value="EnableOrderingHitHighlightedProperty" id="EnableOrderingHitHighlightedProperty" onclick="{ onselect }">Enable ordering hit highlighted property</label>
                          </div>

                        </div>
                      </div>
                      <div>
						<label for="code">Search payload preview:</label>
<pre id="code">
{ prewPayload }
</pre>
                      </div>
                    </div>
                </div>
				
				<!-- This is where search index updates start -->
				<div class="panel panel-default">
					<div class="panel-heading">Request Reindex</i></div>
						<div class="panel-body">
              <div class="form-group">
                <p>This section makes it possible to request a full reindex of the current web. This is useful, if the incremental crawl keeps forgetting to pick up some of the items.</p>
							  <button onclick="{ reIndexWeb }" type="button" class="btn btn-primary btn-md" id="reIndexWebBtn" >Reindex this web  <i class="{ searching ? 'fa fa-refresh fa-spin' : 'fa fa-refresh' }"></i></button>
							</div>
						</div>
					</div>
				</div>
			  </div>
				
		  </div>

            <virtual if="{ elapsedTime > 0 }">
              <div class="panel panel-default">
              <div class="panel-heading">Results, <b>{ totalRows }</b> hits in <b>{ elapsedTime }</b> ms (<i>total rows with duplicates </i><b>{ totalRowsIncludingDuplicates }</b>)</div>
              <div class="panel-body">

                <div class="panel-group" id="accordion">

                  <div class="panel panel-default" each="{ result, i in searchResults }">
                    <div class="panel-heading" data-toggle="collapse" href="#acord{i}" style="cursor: pointer;">
                      <h4 class="panel-title">
                      <!--<i class="badge badge-primary badge-pill">{i+1}</i>--><span> {result.name}</span><i style="cursor: pointer; float: right;" onclick="{ openLink }" class="fa fa-external-link"></i>
                      </h4>
                    </div>
                    <div id="acord{i}" class="panel-collapse collapse">

                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th class="col-md-3">Property</th>
                            <th class="col-md-9">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr each="{ prop, x in result.props }">
                            <td class="col-md-3 is-breakable"><!--<i class="badge badge-primary badge-pill">{x+1}</i>-->{ prop.key }</td>
                            <td class="col-md-9 is-breakable">{ prop.value }</td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div>

                </div>

              </div>

              </virtual>
            </div>
            `,
  function (opts) {

    this.searchResults = [];
    this.elapsedTime;
    this.totalRows;
    this.totalRowsIncludingDuplicates;
    this.searching = false;
    this.prewPayload = "";

    this.on("mount", function () {
      this.init();
    }.bind(this));

	this.reIndexWeb = function (e) {
		console.log("reIndexWeb started");
		
		var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateSchemaForWeb;
		script += " exescript(updateSchemaForWeb);";
		chrome.devtools.inspectedWindow.eval(script);
		
		console.log("reIndexWeb end");
    }.bind(this);
	
    this.init = function () {

      port.onMessage.addListener(function (message) {

        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'runSearch':
            this.searching = false;
            this.update();
            if (message.success) {
              //console.log(message.result)
              message.result.PrimarySearchResults.forEach(function (obj) {
                var rowProps = [];
                for (var name in obj) {
                  rowProps.push({ key: name, value: obj[name] });
                }
                this.searchResults.push({ name: obj.Title, props: rowProps });
              }.bind(this));

              this.elapsedTime = message.result.ElapsedTime;
              this.totalRows = message.result.TotalRows;
              this.totalRowsIncludingDuplicates = message.result.TotalRowsIncludingDuplicates;

              this.update();
              document.getElementById("runsearchbtn").scrollIntoView();
            }
            break;
          case 'updateSchemaForWeb':
            if (message.success) {
              console.log({message});
            } else {
              console.log({message});
            }
            break;
        }
      }.bind(this));

      $('input[ref="option"]').each(function () {
        var $check = $(this);

        $check.data('checked', 1).prop('indeterminate', true);

      });

      this.buildPayload();

    }.bind(this);

    this.runSearch = function (e) {
      this.searchResults = [];
      this.elapsedTime = 0;
      this.update();

      var searchOpts = {
        Querytext: this.refs.searchString.value.length > 0 ? this.refs.searchString.value : " ",
        RowLimit: Number(this.refs.rowlimit.value),
        StartRow: Number(this.refs.startrow.value),
        ClientType: "ContentSearchRegular"
      };

      $('input[ref="option"]').each(function (e) {
        var option = $(this);
        if (option.data('checked') == 2 && !option.prop('indeterminate') && option.prop('checked'))
          searchOpts[option[0].defaultValue] = true;
        else if (option.data('checked') == 0 && !option.prop('indeterminate') && !option.prop('checked'))
          searchOpts[option[0].defaultValue] = false;
      });

      if (this.refs.selectproperties.value.length > 0) {
        var selProps = this.refs.selectproperties.value.split(',');
        selProps.push("OriginalPath");
        selProps.push("Title");
        searchOpts["SelectProperties"] = selProps;
      }

      var content = encodeURIComponent(JSON.stringify(searchOpts));

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + runSearch;
      script += " exescript(runSearch, '" + content + "');";
      chrome.devtools.inspectedWindow.eval(script);

      this.searching = true;
      this.update();

    }.bind(this);

    this.openLink = function (e) {
      let obj = e.item.result.props.find(o => o.key === 'OriginalPath');
      chrome.tabs.create({ url: obj.value });
    }.bind(this);

    this.onEnter = function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.runSearch();
      } else this.buildPayload();
    }

    this.onselect = function (e) {

      var el = $("#" + e.target.id);
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
      this.buildPayload();
    }

    this.buildPayload = function (e) {
      var searchOpts = {
        Querytext: this.refs.searchString.value.length > 0 ? this.refs.searchString.value : " ",
        RowLimit: Number(this.refs.rowlimit.value),
        StartRow: Number(this.refs.startrow.value),
        ClientType: "ContentSearchRegular"
      };

      $('input[ref="option"]').each(function (e) {
        var option = $(this);
        if (option.data('checked') == 2 && !option.prop('indeterminate') && option.prop('checked'))
          searchOpts[option[0].defaultValue] = true;
        else if (option.data('checked') == 0 && !option.prop('indeterminate') && !option.prop('checked'))
          searchOpts[option[0].defaultValue] = false;
      });

      if (this.refs.selectproperties.value.length > 0) {
        var selProps = this.refs.selectproperties.value.split(',');
        selProps.push("OriginalPath");
        selProps.push("Title");
        searchOpts["SelectProperties"] = selProps;
      }

      this.prewPayload = JSON.stringify(searchOpts, null, 2);

      this.update();
    }

  });
