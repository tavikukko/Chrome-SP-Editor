import { Dispatch } from 'redux'
import * as rootActions from '../home/actions'
import { exescript } from '../utilities/chromecommon'
import { getPnpjsPath, getSystemjsPath } from '../utilities/utilities'
import { HomeActions, MessageBarColors } from './../home/types'
import * as actions from './actions'
import { getListProperties } from './chrome/getlistproperties'
import { getLists } from './chrome/getlists'
import { IListProperty, IListPropertyList, ListPropertiesActions } from './types'

export async function getAllListProperties(dispatch: Dispatch<ListPropertiesActions | HomeActions>, listId: string) {

  dispatch(rootActions.setLoading(true));
  // add listener to receive the results from inspectedPage
  (window as any).port.onMessage.addListener(function getAllListPropertiesCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }

    switch (message.function) {
      case getListProperties.name:
        if (message.success) {
          /* on success */
          const listProperties: IListProperty[] = message.result
          // add webproperties to state
          dispatch(actions.setAllListProperties(listProperties))
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
        (window as any).port.onMessage.removeListener(getAllListPropertiesCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${getListProperties}`
  script += ` ${exescript.name}(${getListProperties.name}, '${listId}');`
  chrome.devtools.inspectedWindow.eval(script)
}

export async function getAllLists(dispatch: Dispatch<ListPropertiesActions | HomeActions>, selectedList: string | undefined) {

  dispatch(rootActions.setLoading(true));
  // add listener to receive the results from inspectedPage
  (window as any).port.onMessage.addListener(function getAllListsCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }

    switch (message.function) {
      case getLists.name:
        if (message.success) {
          /* on success */
          const lists: IListPropertyList[] = message.result
          if (lists) {
            const check = lists.find(list => list.key === selectedList)
            // if the selected list does not exist,
            // propably inspected page have changed to another site
            if (!check) {
              dispatch(actions.setSelectedList(''))
              dispatch(actions.setAllListProperties([]))
            }
            // add webproperties to state
            dispatch(actions.setAllLists(lists))
          } else {
            dispatch(actions.setSelectedList(''))
            dispatch(actions.setAllListProperties([]))
            dispatch(actions.setAllLists([]))
          }
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
        (window as any).port.onMessage.removeListener(getAllListsCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${getLists}`
  script += ` ${exescript.name}(${getLists.name});`
  chrome.devtools.inspectedWindow.eval(script)
}
