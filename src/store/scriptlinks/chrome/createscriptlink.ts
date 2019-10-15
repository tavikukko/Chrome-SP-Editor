import pnp from '@pnp/pnpjs'

export function createCustomAction() {

  const params = arguments
  const scope = params[1]
  let url = params[2]
  const sequence = params[3]

  const payload: { [k: string]: any } = {}

  payload.Location = 'ScriptLink'
  payload.Sequence = sequence

  let querystrings = ''

  if (url.split('?').length > 1) {
    querystrings = '?' + url.split('?')[1]
    url = url.split('?')[0]
  }

  // if url starts with ~ and ends .js we can inject with ScriptSrc (o365 / onprem)
  // if we are in o365, we can inject anything that ends with .js with ScriptSrc
  if ((url.indexOf('~') > -1 && url.match(/.js$/)) || (window.location.href.indexOf('.sharepoint.com') > 0 && url.match(/.js$/))) {
    payload.ScriptSrc = url + querystrings
  } else if (url.match(/.js$/) && window.location.href.indexOf('.sharepoint.com') === -1) {

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
      function: params.callee.name,
      success: false,
      result: 'Only JS and CSS files!!',
      source: 'chrome-sp-editor',
    }), '*')
    return
  }

  (async () => {
    const $pnp: typeof pnp = await (window as any).SystemJS.import(((window as any).speditorpnp))

    $pnp.setup({
      sp: {
        headers: {
          Accept: 'application/json; odata=verbose',
        },
      },
    })

    if (scope === 2) {
      await $pnp.sp.site.userCustomActions.add(payload)
    } else {
      await $pnp.sp.web.userCustomActions.add(payload)
    }

    window.postMessage(JSON.stringify({
      function: params.callee.name,
      success: true,
      result: [],
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
