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

  var updatePromotedState = async function (siteUrl, serverRequestPath, state) {

    let ctxR = await fetch(`${siteUrl}/_api/contextinfo`, {
        method: 'POST',
        headers: {
            accept: 'application/json;odata=nometadata',
            'content-type': 'application/json;odata=nometadata',
        }
    })

    let ctx = await ctxR.json();
    await fetch(`${siteUrl}/_api/web/getFileByServerRelativeUrl('${serverRequestPath}')/listItemAllFields`, {
        method: 'POST',
        headers: {
            accept: 'application/json;odata=verbose',
            'X-HTTP-Method': 'MERGE',
            'IF-MATCH': '*',
            'X-RequestDigest': ctx.FormDigestValue,
            'content-type': 'application/json;odata=verbose',
        },
        body: JSON.stringify(
            {
                "__metadata":
                    { "type": "SP.Data.SitePagesItem" },
                "PromotedState": state
            }
        )
    })
    /*
    // this is to re-publish the page
    const item = await fetch(`${siteUrl}/_api/web/getFileByServerRelativeUrl('${serverRequestPath}')/listItemAllFields`, {
      method: 'GET',
      headers: {
        accept: 'application/json;odata=nometadata',
        'content-type': 'application/json;odata=nometadata',
      }
    })
    const data = await item.json()

    await fetch(`${siteUrl}/_api/sitepages/pages(${data.ID})/publish`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;odata=verbose;charset=utf-8',
            'X-RequestDigest': ctx.FormDigestValue,

        },
        body: JSON.stringify(
            {
                "__metadata":
                    { "type": "SP.Publishing.SitePage" },
            }
        )
    })
    */
    window.postMessage(JSON.stringify({
      updatePromotedState: true
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

  window.updatePromoted = function (siteUrl, serverRequestPath, state) {
    window.addEventListener("message", function (event) {
      var port = chrome.runtime.connect({ name: "SPEditor" });
      port.postMessage(event.data);
    }, { once: true });

    inject(updatePromotedState, "'" + siteUrl + "','" + serverRequestPath + "', " + state);
  }

})();
