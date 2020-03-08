import { Dispatch } from 'redux'
import * as rootActions from '../../../store/home/actions'
import { HomeActions, MessageBarColors } from '../../../store/home/types'
import * as actions from '../../../store/webhooks/actions'
import { IWebHook, IWebHookLists, WebHooksActions } from '../../../store/webhooks/types'
import { exescript } from '../../../utilities/chromecommon'
import { getPnpjsPath, getSystemjsPath } from '../../../utilities/utilities'
import { getWebHooks } from './getwebhooks'

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
