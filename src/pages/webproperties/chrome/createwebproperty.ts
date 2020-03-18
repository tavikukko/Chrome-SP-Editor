import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function createWebProperty(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name
  const key = params[1]
  const value = params[2]
  const indexed = params[3];
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

    let webid = ''
    let siteid = ''

    $pnp.sp.site.select('Id')().then((site) => {
      siteid = site.Id
      $pnp.sp.web.select('Id')().then((web) => {
        webid = web.Id
        const endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery'
        const payload = `
          <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
            <Actions>
              <Method Name="SetFieldValue" Id="9" ObjectPathId="4">
                <Parameters>
                  <Parameter Type="String">${key}</Parameter>
                  <Parameter Type="String">${value}</Parameter>
                </Parameters>
              </Method>
              <Method Name="Update" Id="10" ObjectPathId="2" />
            </Actions>
            <ObjectPaths>
              <Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteid}:web:${webid}" />
              <Property Id="4" ParentId="2" Name="AllProperties" />
            </ObjectPaths>
          </Request>`

        const client = new $pnp.SPNS.SPHttpClient()
        client.post(endpoint, {
          headers: {
            Accept: '*/*',
            'Content-Type': 'text/xml;charset="UTF-8"',
            'X-Requested-With': 'XMLHttpRequest',
          },
          body: payload,
        })
          .then((r) => {
            //  if (indexed) {
            $pnp.sp.web.allProperties.select('vti_indexedpropertykeys')().then(result => {

              const allProps = []
              for (let prop in result) {
                if (prop && prop !== 'odata.metadata' && prop !== '__metadata' && prop !== 'odata.editLink' && prop !== 'odata.id' && prop !== 'odata.type') {

                  const re = /_x.*?_/g
                  const found = prop.match(re)
                  const origKey = prop

                  if (found !== null)
                    for (const g in found) {
                      if (g) {
                        const unesc = found[g].replace('_x', '%u').replace('_', '')
                        prop = prop.replace(found[g], unescape(unesc))
                      }
                    }
                  allProps.push({ key: prop.replace(/OData_/g, ''), value: result[origKey] })
                }
              }

              const bytes = []
              for (let i = 0; i < key.length; ++i) {
                bytes.push(key.charCodeAt(i))
                bytes.push(0)
              }

              const b64encoded = window.btoa(String.fromCharCode.apply(null, bytes))
              let newIndexValue = ''

              const propertyBag = allProps.find((el) => el.key === 'vti_indexedpropertykeys')

              if (indexed) {
                newIndexValue = propertyBag && propertyBag.value && propertyBag.value.length > 0 ?
                  propertyBag.value.indexOf(`${b64encoded}|`) === -1 ? `${propertyBag.value}${b64encoded}|` : propertyBag.value
                  : newIndexValue = `${b64encoded}|`
              } else {
                if (propertyBag && propertyBag.value && propertyBag.value.length > 0) {
                  newIndexValue = propertyBag.value
                  newIndexValue = newIndexValue.replace(b64encoded + '|', '')
                }
              }

              const payload2 = `
                <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
                  <Actions>
                    <Method Name="SetFieldValue" Id="9" ObjectPathId="4">
                      <Parameters>
                        <Parameter Type="String">vti_indexedpropertykeys</Parameter>
                        <Parameter Type="String">${newIndexValue}</Parameter>
                      </Parameters>
                    </Method>
                    <Method Name="Update" Id="10" ObjectPathId="2" />
                  </Actions>
                  <ObjectPaths>
                    <Identity Id="2" Name="740c6a0b-85e2-48a0-a494-e0f1759d4aa7:site:${siteid}:web:${webid}" />
                    <Property Id="4" ParentId="2" Name="AllProperties" />
                  </ObjectPaths>
                </Request>`

              client.post(endpoint, {
                headers: {
                  Accept: '*/*',
                  'Content-Type': 'text/xml;charset="UTF-8"',
                  'X-Requested-With': 'XMLHttpRequest',
                },
                body: payload2,
              }).then(postMessage)
            })
            /*  } else {
                postMessage()
              }*/
          })
      })
    })

  })
}
