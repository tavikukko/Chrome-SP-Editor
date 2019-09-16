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

    const siteactions = await $pnp.sp.site.userCustomActions.get();
    const webactions = await $pnp.sp.web.userCustomActions.get();
    var actions = siteactions.concat(webactions);

    console.log(actions)
    window.postMessage(JSON.stringify({
      function: 'getCustomActions',
      success: true,
      result: actions,
      source: 'chrome-sp-editor'
    }), '*');
  })()
    .catch(console.error);
}

