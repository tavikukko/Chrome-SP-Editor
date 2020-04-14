import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function getWebHooks(...args: any) {

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

    const postMessage = (actions: any) => {
      window.postMessage(JSON.stringify({
        function: functionName,
        success: true,
        result: actions,
        errorMessage: '',
        source: 'chrome-sp-editor',
      }), '*')
    }

    $pnp.sp.web.lists.expand('Subscriptions').select('Id, Title, Subscriptions').orderBy('Title', true)().then((result: any[]) => {

      const webhooks: any[] = []
      const lists: any[] = []

      result.forEach(list => {
        lists.push({
          listTitle: list.Title,
          listId: list.Id,
        })
        if (list.Subscriptions && list.Subscriptions.results && list.Subscriptions.results.length && list.Subscriptions.results.length > 0) {
          list.Subscriptions.results.forEach((element: any) => {
            webhooks.push({
              listTitle: list.Title,
              listId: list.Id,
              clientState: element.clientState,
              expirationDateTime: element.expirationDateTime,
              id: element.id,
              notificationUrl: element.notificationUrl,
              resource: element.resource,
              resourceData: element.resourceData,
            })
          })
        }
      })

      postMessage({lists, webhooks})
    })
  })
}
