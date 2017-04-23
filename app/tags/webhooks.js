riot.tag("webhooks", `
            <div id="page-content-wrapper">
              <div>
                <h4>WebHooks</h4>
                <p>Add / remove webhooks.</p>
              </div>
              <hr>
                <div class="row"> 
                  <div class="col-xs-4">
                    <select class="form-control" id="webhooklist">
                      <option each="{list in lists}" value="{ list.listId }">{ list.listTitle }</option>
                    </select>
                  </div>
                  <div class="col-xs-8">
                    <div class="input-group">
                      <input id="webhookurl" type="text" class="form-control" placeholder="Full url to your webhook endpoint">
                      <span class="input-group-btn">
                          <button onclick="{ addsub }" id="addwebhookbtn" class="btn btn-default" type="button">Add</button>
                      </span>
                    </div>
                </div>
              </div>
              <hr>
              <div id="subscriptions">
                <ul class="list-group" each="{ subscription in subscriptions }">
                  <li class="list-group-item active">
                    <span style="display: inline-block;width: 33.33%;text-align: left;">{ subscription.listTitle }</span>
                    <span style="display: inline-block;width: 33.33%;text-align: center;">{ subscription.subExpirationDateTime }</span>
                    <span style="display: inline-block;width: 32.33%;text-align: right;">{ subscription.subId }</span>
                  </li>
                  <li class="list-group-item">
                    <span>{ subscription.subNotificationUrl }</span>
                    <span onclick="{ removesub }" class="sub-remove glyphicon glyphicon-remove pull-right" style="cursor: pointer;"></span>
                  </li>
                </ul>
              </div>
          </div>`,
  function (opts) {

    this.lists = [];

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getSubscriptions;
      script += " exescript(getSubscriptions);";
      chrome.devtools.inspectedWindow.eval(script);

      port.onMessage.addListener(function (message) {

        if (typeof message !== 'object' || message === null ||
          message === undefined || message.source === undefined) {
          return;
        }

        switch (message.function) {
          case 'getSubscriptions':
            if (message.success) {
              if (this.lists < 1)
                this.lists = message.lists.slice();
              this.subscriptions = message.result.slice();
              this.update();
            }
            break;
          case 'removeSubscription':
          case 'addSubscriptions':
            var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + getSubscriptions;
            script += " exescript(getSubscriptions);";
            chrome.devtools.inspectedWindow.eval(script);
            break;
        }

      }.bind(this));

    }.bind(this);

    this.removesub = function (e) {

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + removeSubscription;
      script += " exescript(removeSubscription, '" + e.item.subscription.listId + "', '" + e.item.subscription.subId + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

    this.addsub = function (e) {

      var webhooklist = $("#webhooklist").val();
      var webhookurl = elem('webhookurl').value;

      var script = pnp + ' ' + sj + ' ' + alertify + ' ' + exescript + ' ' + addSubscriptions;
      script += " exescript(addSubscriptions, '" + webhooklist + "', '" + webhookurl + "');";
      chrome.devtools.inspectedWindow.eval(script);

    }.bind(this);

  });