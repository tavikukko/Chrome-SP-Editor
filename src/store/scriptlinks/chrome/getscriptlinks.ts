import * as pnp from '@pnp/pnpjs'

export async function getCustomActions(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name

  /* setup pnp */
  const $pnp: typeof pnp = await(window as any).SystemJS.import(((window as any).speditorpnp))
  $pnp.log.clearSubscribers()
  const listener = new $pnp.FunctionListener(async (entry: pnp.LogEntry) => {
    const error = await entry.data.response.clone().json()
    window.postMessage(JSON.stringify({
      function: functionName,
      success: false,
      result: null,
      message: error.error.message.value,
      source: 'chrome-sp-editor',
    }), '*')
  })
  $pnp.log.subscribe(listener)
  $pnp.setup({
    sp: {
      headers: {
        Accept: 'application/json; odata=verbose',
      },
    },
  })
  /* ******* */

  const siteactions = await $pnp.sp.site.userCustomActions
    .select('Sequence, Name, ScriptSrc, ScriptBlock, Scope, Id, Title').get()
  const webactions = await $pnp.sp.web.userCustomActions
    .select('Sequence, Name, ScriptSrc, ScriptBlock, Scope, Id, Title').get()

  const actions = siteactions.concat(webactions)

  window.postMessage(JSON.stringify({
    function: functionName,
    success: true,
    result: actions,
    errorMessage: '',
    source: 'chrome-sp-editor',
  }), '*')

}
