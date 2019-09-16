export const exescript = function exescript(script) {
  var params = arguments;
  if (window._spPageContextInfo) {
    if (typeof window.SystemJS === 'undefined') {
      var s = document.createElement('script');
      // eslint-disable-next-line no-undef
      s.src = sj;
      s.onload = function () {
        script.apply(this, params);
      };
      (document.head || document.documentElement).appendChild(s);
    }
    else {
      script.apply(this, params);
    }
  }
  else if (window.moduleLoaderPromise) {
    // polyfill for _spPageContextInfo on modern sites
    window.moduleLoaderPromise.then(function (e) {
      window._spPageContextInfo = e.context._pageContext._legacyPageContext;
      if (typeof window.SystemJS === 'undefined') {
        var s = document.createElement('script');
        // eslint-disable-next-line no-undef
        s.src = sj;
        s.onload = function () {
          script.apply(this, params);
        };
        (document.head || document.documentElement).appendChild(s);
      }
      else {
        script.apply(this, params);
      }
    });
  }
  else {
    alert("Could not get _spPageContextInfo, propably because this ain't a SharePoint site..")
  }
}
