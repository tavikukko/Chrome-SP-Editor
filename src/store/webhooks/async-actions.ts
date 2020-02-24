import { Dispatch } from 'redux'
import * as rootActions from '../home/actions'
import { exescript } from '../utilities/chromecommon'
import { getPnpjsPath, getSystemjsPath } from '../utilities/utilities'
import { HomeActions, MessageBarColors } from './../home/types'
import * as actions from './actions'
import { getWebHooks } from './chrome/getwebhooks'
import { IWebHook, IWebHookLists, WebHooksActions } from './types'

export async function getAllWebHooks(dispatch: Dispatch<WebHooksActions | HomeActions>) {

  dispatch(rootActions.setLoading(true));
  // add listener to receive the results from inspectedPage
  (window as any).port.onMessage.addListener(function getAllWebHooksCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }

    switch (message.function) {
      case getWebHooks.name:
        if (message.success) {
          /* on success */
          const webhooks: IWebHook[] = message.result.webhooks
          const webhooklists: IWebHookLists[] = message.result.lists

          // add webproperties to state
          dispatch(actions.setAllWebHooks(webhooks))
          dispatch(actions.setAllWebHookLists(webhooklists))
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
        (window as any).port.onMessage.removeListener(getAllWebHooksCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${getWebHooks}`
  script += ` ${exescript.name}(${getWebHooks.name});`
  chrome.devtools.inspectedWindow.eval(script)
}
