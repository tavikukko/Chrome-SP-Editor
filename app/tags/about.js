riot.tag("about", `
        <div>
          <div id="page-content-wrapper">
            <h4>About</h4>
            <hr>
            <div>github: <a href="https://github.com/tavikukko/Chrome-SP-Editor">https://github.com/tavikukko/Chrome-SP-Editor</a></div>
            <div>twitter: <a href="https://twitter.com/tavikukko">https://twitter.com/tavikukko</a></div>
          </div>
        </div>`,
  function (opts) {

    this.on("mount", function () {
      this.init();
    });

    this.init = function () {
      // add here the init code
    }.bind(this);

  });