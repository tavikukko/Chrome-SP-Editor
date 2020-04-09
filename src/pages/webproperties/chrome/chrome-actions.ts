import { Dispatch } from 'redux'
import * as rootActions from '../../../store/home/actions'
import { HomeActions, MessageBarColors } from '../../../store/home/types'
import * as actions from '../../../store/webproperties/actions'
import { IWebProperty, WebPropertiesActions } from '../../../store/webproperties/types'
import { exescript } from '../../../utilities/chromecommon'
import { getPnpjsPath, getSystemjsPath, spDelay } from '../../../utilities/utilities'
import { createWebProperty } from './createwebproperty'
import { deleteWebProperties } from './deletewebproperties'
import { getWebProperties } from './getwebproperties'

export async function getAllWebProperties(dispatch: Dispatch<WebPropertiesActions | HomeActions>) {

  dispatch(rootActions.setLoading(true));
  // add listener to receive the results from inspectedPage
  (window as any).port.onMessage.addListener(function getAllWebPropertiesCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }

    switch (message.function) {
      case getWebProperties.name:
        if (message.success) {
          /* on success */
          let webProperties: IWebProperty[] = message.result

          const vti_indexedpropertykeys = webProperties.find((obj) => {
            return obj.key === 'vti_indexedpropertykeys'
          })

          // find indexed properties
          if (vti_indexedpropertykeys) {
            webProperties = webProperties.map((property) => {

              const bytes = []
              for (let i = 0; i < property.key.length; ++i) {
                bytes.push(property.key.charCodeAt(i))
                bytes.push(0)
              }
              const b64encoded = window.btoa(String.fromCharCode.apply(null, bytes))
              property.indexed = vti_indexedpropertykeys.value.indexOf(b64encoded + '|') > -1
              return property
            })
          }

          // add webproperties to state
          dispatch(actions.setAllWebProperties(webProperties))
          // hide loading component
          dispatch(rootActions.setLoading(false))
        } else {
          /* on error */
          // hide loading component
          dispatch(rootActions.setLoading(false))
          // show error message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: message.errorMessage,
            color: MessageBarColors.danger,
          }))
        }
        // remove listener
        (window as any).port.onMessage.removeListener(getAllWebPropertiesCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${getWebProperties}`
  script += ` ${exescript.name}(${getWebProperties.name});`
  chrome.devtools.inspectedWindow.eval(script)
}

export async function addWebProperty(dispatch: Dispatch<WebPropertiesActions | HomeActions>, payload: IWebProperty, update: boolean) {

  // show loading spinner
  dispatch(rootActions.setLoading(true))
  // close panel
  if (update) {
    dispatch(actions.setConfirmEditDialog(true))
    dispatch(actions.setEditPanel(false))
  } else {
    dispatch(actions.setNewPanel(false))
  }

  // add listener to receive the results from inspected page
  (window as any).port.onMessage.addListener(async function addWebPropertyCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }

    switch (message.function) {
      case createWebProperty.name:
        if (message.success) {
          /* on success */
          // add small delay just be sure SP can process previous requests
          await spDelay(500)
          // load all scriptlinks
          getAllWebProperties(dispatch)
          // set success message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: !update ? 'Web Property added succesfully!' : 'Web Property updated succesfully!',
            color: MessageBarColors.success,
          }))
        } else {
          /* on error */
          // hide loading
          dispatch(rootActions.setLoading(false))
          // show error message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: message.errorMessage,
            color: MessageBarColors.danger,
          }))
        }
        // remove listener
        (window as any).port.onMessage.removeListener(addWebPropertyCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${createWebProperty}`
  script += ` ${exescript.name}(${createWebProperty.name}, '${payload.key}', '${payload.value}', ${payload.indexed});`
  chrome.devtools.inspectedWindow.eval(script)
}

export async function removeWebProperties(dispatch: Dispatch<WebPropertiesActions | HomeActions>, payload: IWebProperty[]) {

  // hide confirm dialog
  dispatch(actions.setConfirmRemoveDialog(true))
  // show loading spinner
  dispatch(rootActions.setLoading(true));
  // add listener to receive the results from inspected page
  (window as any).port.onMessage.addListener(async function deleteWebPropertiesCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }
    switch (message.function) {
      case deleteWebProperties.name:
        if (message.success) {
          /* on success */
          // add small delay just be sure SP can process previous requests
          await spDelay(500)
          // load all scriptlinks
          getAllWebProperties(dispatch)
          // set success message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: 'Web properties removed succesfully!',
            color: MessageBarColors.success,
          }))
        } else {
          /* on error */
          // hide loading
          dispatch(rootActions.setLoading(false))
          // set error message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: message.errorMessage,
            color: MessageBarColors.danger,
          }))
        }
        // remove listener
        (window as any).port.onMessage.removeListener(deleteWebPropertiesCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${deleteWebProperties}`
  script += ` ${exescript.name}(${deleteWebProperties.name}, '${encodeURIComponent(JSON.stringify(payload)).replace(/'/g, '%27')}');`
  chrome.devtools.inspectedWindow.eval(script)
}
