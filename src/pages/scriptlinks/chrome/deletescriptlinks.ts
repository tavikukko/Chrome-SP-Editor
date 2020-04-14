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
          'Cache-Control': 'no-cache',
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
    const promises: any[] = []

    $pnp.sp.web.select('Id, EffectiveBasePermissions')().then((web: any) => {
      if (!$pnp.sp.web.hasPermissions(web.EffectiveBasePermissions, $pnp.SPNS.PermissionKind.AddAndCustomizePages)) {
        window.postMessage(JSON.stringify({
          function: functionName,
          success: false,
          result: null,
          errorMessage: 'No script is enabled, cannot edit Custom Actions',
          source: 'chrome-sp-editor',
        }), '*')
        return
      }

      ucas.forEach(uca => {
        if (uca.Scope === 2) {
          promises.push($pnp.sp.site.userCustomActions.getById(uca.Id).delete())
        } else {
          promises.push($pnp.sp.web.userCustomActions.getById(uca.Id).delete())
        }
      })
      Promise.all(promises).then(postMessage)
    })
  })
}
