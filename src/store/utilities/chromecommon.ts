export function exescript(this: any, script: any) {
  const params = arguments
  if ((window as any)._spPageContextInfo) {
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
      (window as any)._spPageContextInfo = e.context._pageContext._legacyPageContext
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
    })
  } else {
    window.postMessage(JSON.stringify({
      function: script.name,
      success: false,
      result: 'Could not get _spPageContextInfo, propably because this aint a SharePoint site..',
      source: 'chrome-sp-editor',
    }), '*')
  }
}
