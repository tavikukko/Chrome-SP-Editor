import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function deleteListProperty(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name
  const key = params[1]
  const listId = params[2]

  const listPropertyPayload = (pkey: any, pvalue: any, plistId: any, pdel: boolean) => {
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
                ${!pdel ? `<Parameter Type="String">${pvalue}</Parameter>` : `<Parameter Type="Null" />`}
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
      },
      body: listPropertyPayload(key, '', listId, true),
    })
    .then(x => {
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

          if (vtiprop && vtiprop.indexOf(b64encoded) > -1) {
            newIndexValue = vtiprop.replace(b64encoded, '')

            client.post(endpoint, {
              headers: {
                Accept: '*/*',
                'Content-Type': 'text/xml;charset="UTF-8"',
                'X-Requested-With': 'XMLHttpRequest',
              },
              body: listPropertyPayload('vti_indexedpropertykeys', newIndexValue, listId, false),
            }).then(postMessage)
          } else {
            postMessage()
          }
        })
    })
  })
}
