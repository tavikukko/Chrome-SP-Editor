import * as pnp from '@pnp/pnpjs'

// we cannot use async methos cos its difficult to get them imported to inspactedTab
export function getCustomActions(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name;

  /* import pnp */
  (window as any).SystemJS.import(((window as any).speditorpnp)).then(($pnp: typeof pnp) => {
    /*** setup pnp ***/
    $pnp.setup({
      sp: {
        headers: {
          Accept: 'application/json; odata=verbose',
        },
      },
    })
    /*** clear previous log listeners ***/
    $pnp.log.clearSubscribers()
    /*** setup log listener ***/
    const listener = new $pnp.FunctionListener((entry: pnp.LogEntry) => {
      entry.data.response.clone().json().then((error: any) => {
        window.postMessage(JSON.stringify({
          function: functionName,
          success: false,
          result: null,
          errorMessage: error.error.message.value,
          source: 'chrome-sp-editor',
        }), '*')
      })
    })
    $pnp.log.subscribe(listener)
    /* *** */

    // get site customactions
    $pnp.sp.site.userCustomActions
      .select('Sequence, Name, ScriptSrc, ScriptBlock, Scope, Id, Title').orderBy('Sequence', true).get()
      .then(siteactions => {
        // get web customactions
        $pnp.sp.web.userCustomActions
          .select('Sequence, Name, ScriptSrc, ScriptBlock, Scope, Id, Title').orderBy('Sequence', true).get()
          .then(webactions => {
            // join customactions
            // TODO: add order ??
            const actions = siteactions.concat(webactions)
            // post results back to extension
            window.postMessage(JSON.stringify({
              function: functionName,
              success: true,
              result: actions,
              errorMessage: '',
              source: 'chrome-sp-editor',
            }), '*')
          })
      })
  })
}
