import { Dispatch } from 'redux'
import * as rootActions from '../home/actions'
import { exescript } from '../utilities/chromecommon'
import { getPnpjsPath, getSystemjsPath } from '../utilities/utilities'
import { HomeActions, MessageBarColors } from './../home/types'
import * as actions from './actions'
import { createCustomAction } from './chrome/createscriptlink'
import { getCustomActions } from './chrome/getscriptlinks'
import { INewScriptLink, IScriptLink, ScriptLinksActions } from './types'

export async function getAllScriptLinks(dispatch: Dispatch<ScriptLinksActions | HomeActions>) {

  dispatch(rootActions.setLoading(true));
  // add listener to receive the results from inspectedPage
  (window as any).port.onMessage.addListener(function getAllScriptLinksCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }

    switch (message.function) {
      case getCustomActions.name:
        if (message.success) {
          /* on success */
          const scriptLinks: IScriptLink[] = message.result.map((uca: IScriptLink) => {
            if (uca && uca.ScriptBlock && uca.ScriptBlock.toLocaleLowerCase().indexOf('href="') > -1) {
              let url = uca.ScriptBlock.substring(uca.ScriptBlock.toLocaleLowerCase().indexOf('href="'))
              url = url.substring(url.indexOf('"') + 1)
              url = url.substring(0, url.indexOf('"'))
              uca.Url = url
            } else {
              uca.Url = uca.ScriptSrc
            }
            uca.ScopeName = uca.Scope === 2 ? 'Site Collection' : 'Current Web'
            // TODO: what to do with other custom actions?
            return uca
          })
          // add scriptlinks to state
          dispatch(actions.getAllScriptLinks(scriptLinks))
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
        (window as any).port.onMessage.removeListener(getAllScriptLinksCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${getCustomActions}`
  script += ` exescript(${getCustomActions.name});`
  chrome.devtools.inspectedWindow.eval(script)
}

export async function addScriptLink(dispatch: Dispatch<ScriptLinksActions | HomeActions>, payload: INewScriptLink) {

  // add listener to receive the results from inspected page
  (window as any).port.onMessage.addListener(function addScriptLinkCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }

    switch (message.function) {
      case createCustomAction.name:
        if (message.success) {
          /* on success */
          // load all scriptlinks
          getAllScriptLinks(dispatch)
          // close panel
          dispatch(actions.setNewPanel(false))
          // set success message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: 'SciprLink added succesfully!',
            color: MessageBarColors.success,
          }))
        } else {
          /* on error */
          // close panel
          dispatch(actions.setNewPanel(false))
          // show error message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: message.errorMessage,
            color: MessageBarColors.danger,
          }))
        }
        // remove listener
        (window as any).port.onMessage.removeListener(addScriptLinkCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${createCustomAction}`
  script += ` exescript(${createCustomAction.name}, ${payload.Scope}, '${payload.Url}', ${payload.Sequence});`
  chrome.devtools.inspectedWindow.eval(script)
}
