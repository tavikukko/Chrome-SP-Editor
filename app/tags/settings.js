riot.tag("settings", `
          <div id="page-content-wrapper">
            <h4>Settings</h4>
            <hr>
            <div>
              <input type="checkbox" id="darkMode" onClick="{ toggleDarkMode }" checked="{ darkMode }"/> 
              <label for="darkMode"> Dark Mode</label>
            </div>
            <hr>
            <h4>About</h4>
            <hr>
            <div>github: <a href="https://github.com/tavikukko/Chrome-SP-Editor">https://github.com/tavikukko/Chrome-SP-Editor</a></div>
            <div>twitter: <a href="https://twitter.com/tavikukko">@tavikukko</a></div>
          </div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.darkMode = false;
    this.toggleDarkMode = e => {
      this.darkMode = !this.darkMode;
      if(this.darkMode) {
        $('#darkModeEl').attr('href', 'css/dark.css');
      } else {
        $('#darkModeEl').attr('href', 'css/light.css');
      }
    };

    this.init = function () {
      // add here the init code
    }.bind(this);

  });