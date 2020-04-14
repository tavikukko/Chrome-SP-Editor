import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'
import { IScriptLink } from './../../../store/scriptlinks/types'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function updateCacheCustomAction(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name

  const ucas: any[] = JSON.parse(decodeURIComponent(params[1]).replace(/%27/g, "'"))
  const promises: any[] = []

  const postMessage = () => {
    window.postMessage(JSON.stringify({
      function: functionName,
      success: true,
      result: [],
      errorMessage: '',
      source: 'chrome-sp-editor',
    }), '*')
  }

  const timeStamp = new Date().getTime().toString();

  (window as any).SystemJS.import(((window as any).speditorpnp)).then(($pnp: typeof pnp) => {

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

      ucas.forEach((uc: IScriptLink) => {
        const scope = uc.Scope
        let url = uc.Url
        const id = uc.Id

        /* prepare payload */
        const payload: { [k: string]: any } = {}

        let querystrings = ''

        if (url.split('?').length > 1) {
          querystrings = '?' + url.split('?')[1]
          url = url.split('?')[0]
        }

        const par = new URLSearchParams(querystrings)
        par.set('sptag', timeStamp)
        querystrings = `?${par.toString()}`

        // if url starts with ~ and ends .js we can inject with ScriptSrc (o365 / onprem)
        // if we are in o365, we can inject anything that ends with .js with ScriptSrc
        if ((url.indexOf('~') > -1 && url.match(/.js$/)) || (window.location.href.indexOf('.sharepoint.') > 0 && url.match(/.js$/))) {
          payload.ScriptSrc = url + querystrings
        } else if (url.match(/.js$/) && window.location.href.indexOf('.sharepoint.') === -1) {

          let headID = ''
          let newScript = ''
          const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
          for (let i = 0; i < 5; i++) {
            headID += possible.charAt(Math.floor(Math.random() * possible.length))
          }
          for (let i = 0; i < 5; i++) {
            newScript += possible.charAt(Math.floor(Math.random() * possible.length))
          }

          let jsScriptBlock = `var ${headID} = document.getElementsByTagName("head")[0];`
          jsScriptBlock += ` var ${newScript} = document.createElement("script");`
          jsScriptBlock += ` ${newScript}.type = "text/javascript";`
          jsScriptBlock += ` ${newScript}.src = "${url}${querystrings}";`
          jsScriptBlock += ` ${headID}.appendChild(${newScript});`
          payload.ScriptBlock = jsScriptBlock
        } else if (url.match(/.css$/)) {
          // tslint:disable-next-line:prefer-template
          payload.ScriptBlock = "if (window.location.href.toLowerCase().indexOf('_layouts/15/termstoremanager.aspx') === -1) { document.write('<link rel=\"stylesheet\" href=\"" + url + querystrings + "\" />');}"
        } else {
          window.postMessage(JSON.stringify({
            function: functionName,
            success: false,
            result: null,
            errorMessage: 'Only inject js or css files!',
            source: 'chrome-sp-editor',
          }), '*')
          return
        }

        /* import pnp */
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

        // site collection scope
        if (scope === 2) {
          // check that uca exists in site
          promises.push($pnp.sp.site.userCustomActions.getById(id)().then(uca => {
            // update uca if exists
            if (uca && uca.Id) {
              return $pnp.sp.site.userCustomActions.getById(id).update(payload)
            }
          }))
          // web scope
        } else {
          // check that uca exists in web
          promises.push($pnp.sp.web.userCustomActions.getById(id)().then(uca => {
            // update uca if exists
            if (uca && uca.Id) {
              return $pnp.sp.web.userCustomActions.getById(id).update(payload)
            }
          }))
        }
      })
      Promise.all(promises).then(postMessage)
    })
  })
}
