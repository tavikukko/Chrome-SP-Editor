(function () {

  var getContext = function () {
    if (window && window._spPageContextInfo && !window._spPageContextInfo.speditorctx) {
      window.postMessage(JSON.stringify({ _spPageContextInfo: _spPageContextInfo }), "*");
    } else if (window && window.moduleLoaderPromise) {
      // polyfill for _spPageContextInfo on modern sites
      window.moduleLoaderPromise.then(function (e) {
        window._spPageContextInfo = e.context._pageContext._legacyPageContext;
        window._spPageContextInfo.speditorctx = true;
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

  var updatePageLayout = async function (siteUrl, serverRequestPath, layout) {

    let ctxR = await fetch(siteUrl + '/_api/contextinfo', {
      method: 'POST',
      headers: {
        accept: 'application/json;odata=nometadata',
        'content-type': 'application/json;odata=nometadata',
      }
    })

    let ctx = await ctxR.json();
    await fetch(siteUrl + "/_api/web/getFileByServerRelativeUrl('" + serverRequestPath + "')/listItemAllFields", {
      method: 'POST',
      headers: {
        accept: 'application/json;odata=nometadata',
        'X-HTTP-Method': 'MERGE',
        'IF-MATCH': '*',
        'X-RequestDigest': ctx.FormDigestValue,
        'content-type': 'application/json;odata=nometadata',
      },
      body: JSON.stringify({
        PageLayoutType: layout
      })
    })
    window.postMessage(JSON.stringify({
      update: true
    }), "*");
  }

  window.addEventListener("message", function (event) {
    var port = chrome.runtime.connect({ name: "SPEditor" });
    port.postMessage(event.data);
  }, { once: true });

  inject(getContext);

  window.updateLayout = function (siteUrl, serverRequestPath, layout) {
    window.addEventListener("message", function (event) {
      var port = chrome.runtime.connect({ name: "SPEditor" });
      port.postMessage(event.data);
    }, { once: true });

    inject(updatePageLayout, "'" + siteUrl + "','" + serverRequestPath + "', '" + layout + "'");
  }

})();
