import '@pnp/logging'
import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function deleteCustomActions(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name
  const ucas: any[] = JSON.parse(decodeURIComponent(params[1]).replace(/%27/g, "'"));

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
    const listener = new $pnp.FunctionListener((entry: ILogEntry) => {
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

    const postMessage = () => {
      window.postMessage(JSON.stringify({
        function: functionName,
        success: true,
        result: [],
        errorMessage: '',
        source: 'chrome-sp-editor',
      }), '*')
    }

    ucas.forEach(uca => {
      if (uca.Scope === 2) {
        $pnp.sp.site.userCustomActions.getById(uca.Id).delete().then(postMessage)
      } else {
        $pnp.sp.web.userCustomActions.getById(uca.Id).delete().then(postMessage)
      }
    })

  })
}
