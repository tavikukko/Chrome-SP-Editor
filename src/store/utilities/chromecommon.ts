export function exescript(this: any, script: any) {
  try {
    const params = arguments
    if ((window as any) && (window as any)._spPageContextInfo && !(window as any)._spPageContextInfo.speditorctx) {
      if (typeof (window as any).SystemJS === 'undefined') {
        const s = document.createElement('script')
        // eslint-disable-next-line no-undef
        s.src = (window as any).sj
        s.onload = function() {
          script.apply(this, params)
        };
        (document.head || document.documentElement).appendChild(s)
      } else {
        script.apply(this, params)
      }
    } else if ((window as any).moduleLoaderPromise) {
      // polyfill for _spPageContextInfo on modern sites
      (window as any).moduleLoaderPromise.then(function(this: any, e: any) {
        (window as any)._spPageContextInfo = e.context._pageContext._legacyPageContext;
        (window as any)._spPageContextInfo.speditorctx = true

        if (typeof (window as any).SystemJS === 'undefined') {
          const s = document.createElement('script')
          s.src = (window as any).sj
          s.onload = function() {
            script.apply(this, params)
          };
          (document.head || document.documentElement).appendChild(s)
        } else {
          script.apply(this, params)
        }
      })
    } else {
      (window as any).postMessage(JSON.stringify({
        function: script.name,
        success: false,
        result: null,
        errorMessage: '1 Could not get _spPageContextInfo, propably because this is not a SharePoint site..',
        source: 'chrome-sp-editor',
      }), '*')
    }
  } catch (e) {
    (window as any).postMessage(JSON.stringify({
      function: script.name,
      success: false,
      result: null,
      errorMessage: e.message,
      source: 'chrome-sp-editor',
    }), '*')
  }
}
