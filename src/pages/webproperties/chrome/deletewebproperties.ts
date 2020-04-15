import { ILogEntry } from '@pnp/logging'
import * as pnp from '@pnp/pnpjs'
import { IWebProperty } from './../../../store/webproperties/types'

// we cannot use async methods, they do not work correctly when running 'npm run build',
// async methods works when running 'npm run watch'
export function deleteWebProperties(...args: any) {

  /* get parameters */
  const params = args
  const functionName = params[0].name
  const webprops: IWebProperty[] = JSON.parse(decodeURIComponent(params[1]).replace(/%27/g, "'"));

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

    let siteid = ''
    let webid = ''
    const endpoint = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/client.svc/ProcessQuery'
    const client = new $pnp.SPNS.SPHttpClient()

    $pnp.sp.site.select('Id')().then((site) => {
      siteid = site.Id
      $pnp.sp.web.select('Id, EffectiveBasePermissions')().then((web: any) => {

        if (!$pnp.sp.web.hasPermissions(web.EffectiveBasePermissions, $pnp.SPNS.PermissionKind.AddAndCustomizePages)) {
          window.postMessage(JSON.stringify({
            function: functionName,
            success: false,
            result: null,
            errorMessage: 'No script is enabled, cannot edit Web Properties',
            source: 'chrome-sp-editor',
          }), '*')
          return
        }

        webid = web.Id

        const prop = webprops[0]
        const payload = `
            <Request xmlns="http://schemas.microsoft.com/sharepoint/clientquery/2009" SchemaVersion="15.0.0.0" LibraryVersion="16.0.0.0" ApplicationName="SPEditor">
              <Actions>
                <Method Name="SetFieldValue" Id="9" ObjectPathId="4">
                  <Parameters>
                    <Parameter Type="String">${prop.key}</Parameter>
                    <Parameter Type="Null" />
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
            'Cache-Control': 'no-cache',
          },
          body: payload,
        }).then((r) => r.json())
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

            $pnp.sp.web.allProperties.select('vti_indexedpropertykeys')().then(result => {

              const allProps = []
              for (let iprop in result) {
                if (iprop && iprop !== 'odata.metadata' && iprop !== '__metadata' && iprop !== 'odata.editLink' && iprop !== 'odata.id' && iprop !== 'odata.type') {

                  const re = /_x.*?_/g
                  const found = iprop.match(re)
                  const origKey = iprop

                  if (found !== null)
                    for (const g in found) {
                      if (g) {
                        const unesc = found[g].replace('_x', '%u').replace('_', '')
                        iprop = iprop.replace(found[g], unescape(unesc))
                      }
                    }
                  allProps.push({ key: iprop.replace(/OData_/g, ''), value: result[origKey] })
                }
              }

              const propertyBag = allProps.find((el) => el.key === 'vti_indexedpropertykeys')

              if (propertyBag && propertyBag.value && propertyBag.value.length > 0) {
                let newIndexValue = propertyBag.value

                const bytes = []
                for (let i = 0; i < prop.key.length; ++i) {
                  bytes.push(prop.key.charCodeAt(i))
                  bytes.push(0)
                }

                const b64encoded = window.btoa(String.fromCharCode.apply(null, bytes))
                newIndexValue = newIndexValue.replace(b64encoded + '|', '')

                if (newIndexValue !== propertyBag.value) {
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
                      'Cache-Control': 'no-cache',
                    },
                    body: payload2,
                  }).then((r2) => r2.json())
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
                } else {
                  postMessage()
                }
              } else {
                postMessage()
              }
            })
          })
      })
    })
  })
}
