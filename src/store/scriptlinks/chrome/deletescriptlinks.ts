import * as pnp from '@pnp/pnpjs'

export async function deleteCustomActions(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name
  const ucas: any[] = JSON.parse(decodeURIComponent(params[1]))

  const $pnp: typeof pnp = await (window as any).SystemJS.import(((window as any).speditorpnp))

  /* setup pnp */
  $pnp.log.clearSubscribers()
  const listener = new $pnp.FunctionListener(async (entry: pnp.LogEntry) => {
    const error = await entry.data.response.clone().json()
    window.postMessage(JSON.stringify({
      function: functionName,
      success: false,
      result: null,
      errorMessage: error.error.message.value,
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

  ucas.forEach(async uca => {
    if (uca.Scope === 2) {
      await $pnp.sp.site.userCustomActions.getById(uca.Id).delete()
    } else {
      await $pnp.sp.web.userCustomActions.getById(uca.Id).delete()
    }
  })

  window.postMessage(JSON.stringify({
    function: functionName,
    success: true,
    result: [],
    errorMessage: '',
    source: 'chrome-sp-editor',
  }), '*')

}
