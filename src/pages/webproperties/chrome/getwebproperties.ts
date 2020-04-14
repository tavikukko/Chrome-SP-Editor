import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function getWebProperties(...args: any) {

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

    const postMessage = (actions: any[]) => {
      window.postMessage(JSON.stringify({
        function: functionName,
        success: true,
        result: actions,
        errorMessage: '',
        source: 'chrome-sp-editor',
      }), '*')
    }

    $pnp.sp.web.allProperties().then(result => {

      const compare = (a: any, b: any) => {
        return (a.key.toLowerCase() < b.key.toLowerCase()) ? -1
        : (a.key.toLowerCase() > b.key.toLowerCase()) ? 1
        : 0
      }

      const allProps = []
      for (let key in result) {
        if (key && key !== 'odata.metadata' && key !== '__metadata' && key !== 'odata.editLink' && key !== 'odata.id' && key !== 'odata.type') {

          const re = /_x.*?_/g
          const found = key.match(re)
          const origKey = key

          if (found !== null)
            for (const g in found) {
              if (g) {
                const unesc = found[g].replace('_x', '%u').replace('_', '')
                key = key.replace(found[g], unescape(unesc))
              }
            }
          allProps.push({ key: key.replace(/OData_/g, ''), value: result[origKey] })
        }
      }

      allProps.sort(compare)
      postMessage(allProps)
    })
  })
}
