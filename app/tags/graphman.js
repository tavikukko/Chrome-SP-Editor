riot.tag("graphman", `
<div id="page-content-wrapper">
  <h4>Graph Man</h4>
  <hr>
    <img onclick="{ login }" id="ms-signin-button" src="img/MSSignInButton.svg"></img>
    <span>{ this.user.name } { this.user.displayableId }</span>
    <button onclick="{ acquireTokenSilent }">acquireTokenSilent</button>
    <button onclick="{ acquireTokenPopup }">acquireTokenPopup</button>

  <hr>
  <div>
  <label class="checkbox-inline"><input type="checkbox" value="">Option 1</label>
  <label class="checkbox-inline"><input type="checkbox" value="">Option 2</label>
  <label class="checkbox-inline"><input type="checkbox" value="">Option 3</label>
  </div>
</div>`,
  function (opts) {

    this.userAgentApplication;

    this.user = {
      name: ""
    };

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
    }.bind(this);

    this.login = function (e) {
      userAgentApplication.loginPopup(["user.read"]).then(function (token) {
        this.user = userAgentApplication.getUser();
        console.log(this.user)
        this.update();
      }.bind(this));
    }.bind(this);

    this.acquireTokenPopup = function (scopes) {
      userAgentApplication.acquireTokenPopup(["user.read"]).then(function (token) {
        console.log("Success acquiring access token");
        console.log(token)
      }, function (error) {
        console.log("Failure acquiring token: " + error);
      });
    }.bind(this);

    this.acquireTokenSilent = function (scopes) {
      userAgentApplication.acquireTokenSilent(["user.read"], null, this.user).then(function (token) {
        console.log("Success acquiring access token");
        console.log(token)

      }, function (error) {
        console.log("Failure acquiring token: " + error);
      }.bind(this));
    }.bind(this);

    /*
        this.getLoginData = function (token) {
          fetch('https://graph.microsoft.com/v1.0/me', {
            method: 'GET',
            headers: new Headers({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          })
            .then((resp) => resp.json()) // Transform the data into json
            .then(function (data) {
              console.log(data)
              alert("all good :)")
            })
        }.bind(this);
    */

  });
