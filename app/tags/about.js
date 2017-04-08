riot.tag("about", `
          <div id="page-content-wrapper">
            <h4>About</h4>
            <hr>
            <div>github: https://github.com/tavikukko/Chrome-SP-Editor</div>
            <div>twitter: https://twitter.com/tavikukko</div>
          </div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
      // add here the init code
    }.bind(this);

  });