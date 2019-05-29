(function () {

  var getContext = function () {
    if (window && window._spPageContextInfo) {
      window.postMessage(JSON.stringify({ _spPageContextInfo: _spPageContextInfo }), "*");
    } else if (window && window.moduleLoaderPromise) {
      // polyfill for _spPageContextInfo on modern sites
      window.moduleLoaderPromise.then(function (e) {
        window._spPageContextInfo = e.context._pageContext._legacyPageContext;
        window.postMessage(JSON.stringify({ _spPageContextInfo: window._spPageContextInfo }), "*");
      });
    } else {
      window.postMessage(JSON.stringify({ _spPageContextInfo: null }), "*");
    }
  }

  var inject = function (code, args) {
    var script = document.createElement('script');
    script.textContent = '(' + code + ')(' + (args || '') + ');';
    (document.head || document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
  }

  window.addEventListener("message", function (event) {
    var port = chrome.runtime.connect({ name: "SPEditor" });
    port.postMessage(event.data);
  }, { once: true });

  inject(getContext);

})();
