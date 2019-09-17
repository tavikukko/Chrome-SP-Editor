export const getCustomActions = function getCustomActions() {
  (async () => {
    // eslint-disable-next-line no-undef
    const $pnp = await window.SystemJS.import(speditorpnp)

    $pnp.setup({
      sp: {
        headers: {
          "Accept": "application/json; odata=verbose"
        }
      }
    });

    const siteactions = await $pnp.sp.site.userCustomActions.
                    select("Sequence, Name, ScriptSrc, ScriptBlock, Scope, Id, Title").get();
    const webactions = await $pnp.sp.web.userCustomActions
                    .select("Sequence, Name, ScriptSrc, ScriptBlock, Scope, Id, Title").get();
    
    const actions = siteactions.concat(webactions);

    window.postMessage(JSON.stringify({
      function: 'getCustomActions',
      success: true,
      result: actions,
      source: 'chrome-sp-editor'
    }), '*');
  })()
    .catch(e => {
      window.postMessage(JSON.stringify({
        function: 'getCustomActions',
        success: false,
        result: e,
        source: 'chrome-sp-editor'
      }), '*');
    });
}

