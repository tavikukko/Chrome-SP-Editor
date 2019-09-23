import pnp from '@pnp/pnpjs'

export function getCustomActions() {
  const params = arguments;
  (async () => {
    const $pnp: typeof pnp = await (window as any).SystemJS.import(((window as any).speditorpnp))

    $pnp.setup({
      sp: {
        headers: {
          Accept: 'application/json; odata=verbose',
        },
      },
    })

    const siteactions = await $pnp.sp.site.userCustomActions
      .select('Sequence, Name, ScriptSrc, ScriptBlock, Scope, Id, Title').get()
    const webactions = await $pnp.sp.web.userCustomActions
      .select('Sequence, Name, ScriptSrc, ScriptBlock, Scope, Id, Title').get()

    const actions = siteactions.concat(webactions)

    window.postMessage(JSON.stringify({
      function: params.callee.name,
      success: true,
      result: actions,
      source: 'chrome-sp-editor',
    }), '*')
  })()
    .catch((e: any) => {
      window.postMessage(JSON.stringify({
        function: params.callee.name,
        success: false,
        result: e,
        source: 'chrome-sp-editor',
      }), '*')
    })
}
