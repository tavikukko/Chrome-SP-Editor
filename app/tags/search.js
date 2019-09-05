riot.tag("search", `
            <div id="page-content-wrapper">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <div class="panel panel-default">
                      <div class="panel-heading">Query</div>
                      <div class="panel-body">
                        <div class="form-group">
                          <textarea ref="searchString" class="form-control rounded-0" id="searchString" rows="5" placeholder="eg. contentclass:STS_List_*" onKeyDown="{ onEnter }" onKeyUp="{ generatePreview }"></textarea>
                        </div>
                        <div class="form-group">
                          <label for="rowlimit">RowLimit:</label>
                          <input value=10 ref="rowlimit" type="text" class="form-control" id="rowlimit" placeholder="Row limit" onKeyUp="{ generatePreview }">
                        </div>
                        <div class="form-group">
                        <label for="startrow">StartRow:</label>
                          <input value=0 ref="startrow" type="text" class="form-control" id="startrow" placeholder="Start" onKeyUp="{ generatePreview }">
                        </div>
                        <div class="form-group">
                        <label for="selectproperties">SelectProperties:</label>
                          <input ref="selectproperties" type="text" class="form-control" id="selectproperties" placeholder="eg. Title,contentclass" onKeyUp="{ generatePreview }">
                        </div>
                        <div class="form-group">
                        <label for="sortList">SortList:</label><i>  (0=Ascending,1=Descending)</i>
                          <input ref="sortList" type="text" class="form-control" id="sortList" placeholder="eg. firstName:0,LastName:1" onKeyUp="{ generatePreview }">
                        </div>
                        <div class="form-group">
                        <label for="refinementfilters">RefinementFilters:</label>
                          <input ref="refinementfilters" type="text" class="form-control" id="refinementfilters" placeholder='eg. and(lastname:equals("burr"),firstname:equals("bill"))' onKeyUp="{ generatePreview }">
                        </div>
                        <div class="form-group">
                        <label for="sourceid">SourceId:</label>
                          <div class="input-group">
                            <input ref="sourceid" type="text" class="form-control" id="sourceid" placeholder='eg. b09a7990-05ea-4af9-81ef-edfab16c4e31' onKeyUp="{ generatePreview }">
                            <div class="input-group-btn">
                              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select <span class="caret"></span></button>
                              <ul class="dropdown-menu dropdown-menu-right">
                                <li onclick="{ addSourceId }" ><a data-id="e7ec8cee-ded8-43c9-beb5-436b54b31e84" href="#">Documents</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="5dc9f503-801e-4ced-8a2c-5d1237132419" href="#">ItemsMatchingContentType</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="e1327b9c-2b8c-4b23-99c9-3730cb29c3f7" href="#">ItemsMatchingTag</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="48fec42e-4a92-48ce-8363-c2703a40e67d" href="#">ItemsRelatedToCurrentUser</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="5c069288-1d17-454a-8ac6-9c642a065f48" href="#">ItemsWithSameKeywordAsThisItem</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="b09a7990-05ea-4af9-81ef-edfab16c4e31" href="#">LocalPeopleResults</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="203fba36-2763-4060-9931-911ac8c0583b" href="#">LocalReportsAndDataResults</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="8413cd39-2156-4e00-b54d-11efd9abdb89" href="#">LocalSharePointResults</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="78b793ce-7956-4669-aa3b-451fc5defebf" href="#">LocalVideoResults</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="5e34578e-4d08-4edc-8bf3-002acf3cdbcc" href="#">Pages</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="38403c8c-3975-41a8-826e-717f2d41568a" href="#">Pictures</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="97c71db1-58ce-4891-8b64-585bc2326c12" href="#">Popular</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="ba63bbae-fa9c-42c0-b027-9a878f16557c" href="#">RecentlyChangedItems</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="ec675252-14fa-4fbe-84dd-8d098ed74181" href="#">RecommendedItems</a></li>
                                <li onclick="{ addSourceId }" ><a data-id="9479bf85-e257-4318-b5a8-81a180f5faa1" href="#">Wiki</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="btn-group" role="group">
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

        <div class="panel panel-default">
          <div class="panel-heading">Search current page and show all available managed properties</div>
          <div class="panel-body">
            <div class="btn-group" role="group">
              <button onclick="{ showAllCurrentPage }" type="button" class="btn btn-info btn-md" >Search current page <i class="{ searchingPage ? 'fa fa-refresh fa-spin' : 'fa fa-refresh' }"></i></button>
            </div>
          </div>
        </div>

				<!-- This is where search index updates start -->
				<div class="panel panel-default">
					<div class="panel-heading">Request Reindex</div>
						<div class="panel-body">
              <div class="form-group">
                <p>This section makes it possible to request a full reindex of the current web. This is useful, if the incremental crawl keeps forgetting to pick up some of the items.</p>
							  <button onclick="{ reIndexWeb }" type="button" class="btn btn-primary btn-md" id="reIndexWebBtn" >Reindex this web</button>
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
                            <td class="col-md-3 is-breakable">{ x + 1 }. { prop.key }</td>
                            <td class="col-md-9 is-breakable">{ prop.value }</td>
                          </tr>
                          <tr>
                            <td class="col-md-3 is-breakable">
                            <button onclick="{ showAll }" type="button" class="btn btn-primary btn-md" id="showallhbtn" >Show all properties  <i class="{ searching ? 'fa fa-refresh fa-spin' : 'fa fa-refresh' }"></i></button>
                            </td>
                            <td class="col-md-9 is-breakable"></td>
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
    this.searchingPage = false;
    this.prewPayload = "";

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
          case 'runSearchAllPropsCurPage':
            this.searching = false;
            this.searchingPage = false;
            this.update();
            if (message.success) {
              message.result.PrimarySearchResults.forEach(function (obj) {
                var rowProps = [];
                for (var name in obj) {
                  rowProps.push({ key: name, value: obj[name] });
                }
                this.searchResults.push({ name: obj.Title, props: rowProps.sort((a,b) => (a.key.toLowerCase() > b.key.toLowerCase()) ? 1 : ((b.key.toLowerCase() > a.key.toLowerCase()) ? -1 : 0)) });
              }.bind(this));

              this.elapsedTime = message.result.ElapsedTime;
              this.totalRows = message.result.TotalRows;
              this.totalRowsIncludingDuplicates = message.result.TotalRowsIncludingDuplicates;

              this.update();
              document.getElementById("runsearchbtn").scrollIntoView();
            } else {
              this.searching = false;
              this.searchingPage = false;
              this.update();
            }
            break;
          case 'runSearchAllProps':
            if (message.success) {
              message.result.PrimarySearchResults.forEach(function (obj) {
                var rowProps = [];
                for (var name in obj) {
                  rowProps.push({ key: name, value: obj[name] });
                }
                this.searchResults.forEach((result, i) => {
                  var item = result.props.findIndex(o => o.key === 'DocId' && o.value === obj["DocId"]);

                  if (item > -1) {
                    this.searchResults[i].props = rowProps.sort((a,b) => (a.key.toLowerCase() > b.key.toLowerCase()) ? 1 : ((b.key.toLowerCase() > a.key.toLowerCase()) ? -1 : 0));
                  }
                })
              }.bind(this));
            }
            this.searching = false;
            this.searchingPage = false;
            this.update();
            break;
          case 'updateSchemaForWeb':
            if (message.success) {
              console.log({ message });
            } else {
              console.log({ message });
            }
            break;
        }
      }.bind(this));

      $('input[ref="option"]').each(function () {
        var $check = $(this);

        $check.data('checked', 1).prop('indeterminate', true);

      });

      this.generatePreview();

    }.bind(this);

    this.runSearch = function (e) {
      this.searchResults = [];
      this.elapsedTime = 0;
      this.update();

      var searchOpts = this.generatePayload()

      var content = encodeURIComponent(JSON.stringify(searchOpts));

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + runSearch;
      script += " exescript(runSearch, '" + content + "');";
      chrome.devtools.inspectedWindow.eval(script);

      this.searching = true;
      this.update();

    }.bind(this);

    this.addSourceId = function (e) {
      this.refs.sourceid.value = e.target.dataset.id;
      this.generatePreview();
    }.bind(this);

    this.openLink = function (e) {
      let obj = e.item.result.props.find(o => o.key === 'OriginalPath');
      chrome.tabs.create({ url: obj.value });
    }.bind(this);

    this.showAll = function (e) {
      let obj = e.item.result.props.find(o => o.key === 'DocId');
      if (obj && obj.value) {

        var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + runSearchAllProps;
        script += " exescript(runSearchAllProps, '" + obj.value + "');";
        chrome.devtools.inspectedWindow.eval(script);

        this.searching = true;
        this.update();

      }
    }.bind(this);

    this.showAllCurrentPage = function (e) {
      this.searchResults = [];
      this.elapsedTime = 0;
      this.update();
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + runSearchAllPropsCurPage;
      script += " exescript(runSearchAllPropsCurPage);";
      chrome.devtools.inspectedWindow.eval(script);

      this.searchingPage = true;
      this.update();

    }.bind(this);

    this.reIndexWeb = function (e) {
      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + updateSchemaForWeb;
      script += " exescript(updateSchemaForWeb);";
      chrome.devtools.inspectedWindow.eval(script);
    }.bind(this);

    this.onEnter = function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.runSearch();
      } else this.generatePreview();
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
      this.generatePreview();
    }

    this.generatePreview = function (e) {
      var searchOpts = this.generatePayload()
      this.prewPayload = JSON.stringify(searchOpts, null, 2);
      this.update();
    }

    this.generatePayload = function (e) {
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

      var selProps = this.refs.selectproperties.value.length > 0 ? this.refs.selectproperties.value.split(',').map(item => item.trim()) : []
      selProps.push("OriginalPath");
      selProps.push("Title");
      searchOpts["SelectProperties"] = selProps;

      if (this.refs.sortList.value.length > 0) {
        var sortList = [];
        this.refs.sortList.value.split(',').forEach(item => {
          var keyVal = item.split(':')
          var property = keyVal[0].trim();
          if (property.length > 0) {
            var sortItem = {
              Property: property,
              Direction: keyVal[1] && Number(keyVal[1].trim()) ? Number(keyVal[1].trim()) : 0,
            }
            sortList.push(sortItem);
          }
        });
        if (sortList.length > 0)
          searchOpts["SortList"] = sortList;
      }

      if (this.refs.refinementfilters.value.length > 0) {
        var refFilters = this.refs.refinementfilters.value.split(';').map(item => item.replace(/'/g, '"'));
        searchOpts["RefinementFilters"] = refFilters;
      }

      if (this.refs.sourceid.value.length > 0) {
        searchOpts["SourceId"] = this.refs.sourceid.value;
      }

      return searchOpts;
    }

  });
