import { Dispatch } from 'redux'
import * as rootActions from '../../../store/home/actions'
import { HomeActions, MessageBarColors } from '../../../store/home/types'
import * as actions from '../../../store/webproperties/actions'
import { IWebProperty, WebPropertiesActions } from '../../../store/webproperties/types'
import { exescript } from '../../../utilities/chromecommon'
import { getPnpjsPath, getSystemjsPath } from '../../../utilities/utilities'
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
          const webProperties: IWebProperty[] = message.result
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
