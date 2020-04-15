import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function createListProperty(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name
  const key = params[1]
  const value = params[2]
  const listId = params[3]
  const indexed = params[4]

  const listPropertyPayload = (pkey: any, pvalue: any, plistId: any) => {
    return `
          <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
          <Actions>
            <ObjectPath Id="1" ObjectPathId="0" />
            <ObjectPath Id="3" ObjectPathId="2" />
            <ObjectPath Id="5" ObjectPathId="4" />
            <ObjectPath Id="7" ObjectPathId="6" />
            <ObjectPath Id="9" ObjectPathId="8" />
            <ObjectPath Id="11" ObjectPathId="10" />
            <Method Name="SetFieldValue" Id="12" ObjectPathId="10">
              <Parameters>
                <Parameter Type="String">${pkey}</Parameter>
                <Parameter Type="String">${pvalue}</Parameter>
              </Parameters>
            </Method>
            <Method Name="Update" Id="13" ObjectPathId="8" />
          </Actions>
          <ObjectPaths>
            <StaticProperty Id="0" TypeId="{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}" Name="Current" />
            <Property Id="2" ParentId="0" Name="Web" />
            <Property Id="4" ParentId="2" Name="Lists" />
            <Method Id="6" ParentId="4" Name="GetById">
              <Parameters>
                <Parameter Type="String">${plistId}</Parameter>
              </Parameters>
            </Method>
            <Property Id="8" ParentId="6" Name="RootFolder" />
            <Property Id="10" ParentId="8" Name="Properties" />
          </ObjectPaths>
        </Request>`
  }

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

    const endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery'

    const client = new $pnp.SPNS.SPHttpClient()
    client.post(endpoint, {
      headers: {
        Accept: '*/*',
        'Content-Type': 'text/xml;charset="UTF-8"',
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
      },
      body: listPropertyPayload(key, value, listId),
    })
      .then(r => r.json())
      .then(r => {
        if (r[0]?.ErrorInfo?.ErrorMessage) {
          window.postMessage(JSON.stringify({
            function: functionName,
            success: false,
            result: null,
            errorMessage: r[0].ErrorInfo.ErrorMessage,
            source: 'chrome-sp-editor',
          }), '*')
          return
        }
        $pnp.sp.web.lists.getById(listId).expand('RootFolder/Properties')
          .select('RootFolder/Properties/vti_x005f_indexedpropertykeys')().then((res: any) => {
            const vtiprop = res.RootFolder.Properties.vti_x005f_indexedpropertykeys

            const bytes = []
            for (let i = 0; i < key.length; ++i) {
              bytes.push(key.charCodeAt(i))
              bytes.push(0)
            }

            const b64encoded = window.btoa(String.fromCharCode.apply(null, bytes)) + '|'
            let newIndexValue = ''

            if (indexed) {
              newIndexValue = vtiprop && vtiprop.length > 0 ?
                vtiprop.indexOf(b64encoded) === -1 ? `${vtiprop}${b64encoded}` : vtiprop
                : b64encoded
            } else {
              if (vtiprop && vtiprop.length > 0) {
                newIndexValue = vtiprop
                newIndexValue = newIndexValue.replace(b64encoded, '')
              }
            }
            if ((!vtiprop && !indexed) || (vtiprop && !indexed && vtiprop.indexOf(b64encoded) === -1)) {
              postMessage()
            } else {
              client.post(endpoint, {
                headers: {
                  Accept: '*/*',
                  'Content-Type': 'text/xml;charset="UTF-8"',
                  'X-Requested-With': 'XMLHttpRequest',
                  'Cache-Control': 'no-cache',
                },
                body: listPropertyPayload('vti_indexedpropertykeys', newIndexValue, listId),
              })
                .then(r2 => r2.json())
                .then(r2 => {
                  if (r2[0]?.ErrorInfo?.ErrorMessage) {
                    window.postMessage(JSON.stringify({
                      function: functionName,
                      success: false,
                      result: null,
                      errorMessage: r2[0].ErrorInfo.ErrorMessage,
                      source: 'chrome-sp-editor',
                    }), '*')
                    return
                  }
                  postMessage()
                })
            }
          })
      })
  })
}
