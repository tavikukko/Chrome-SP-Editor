import { Dispatch } from 'redux'
import * as rootActions from '../../../store/home/actions'
import { HomeActions, MessageBarColors } from '../../../store/home/types'
import * as actions from '../../../store/listproperties/actions'
import { IListProperty, IListPropertyList, ListPropertiesActions } from '../../../store/listproperties/types'
import { exescript } from '../../../utilities/chromecommon'
import { getPnpjsPath, getSystemjsPath, spDelay } from '../../../utilities/utilities'
import { createListProperty } from './createlistproperty'
import { deleteListProperty } from './deletelistproperty'
import { getListProperties } from './getlistproperties'
import { getLists } from './getlists'

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
          let listProperties: IListProperty[] = message.result

          const vti_indexedpropertykeys = listProperties.find((obj) => {
            return obj.key === 'vti_indexedpropertykeys'
          })

          // find indexed properties
          if (vti_indexedpropertykeys) {
            listProperties = listProperties.map((property) => {

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

export async function addListProperty(dispatch: Dispatch<ListPropertiesActions | HomeActions>, payload: IListProperty, update: boolean) {

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
  (window as any).port.onMessage.addListener(async function addListPropertyCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }

    switch (message.function) {
      case createListProperty.name:
        if (message.success) {
          /* on success */
          // add small delay just be sure SP can process previous requests
          await spDelay(500)
          // load all scriptlinks
          getAllListProperties(dispatch, payload.listId)
          // set success message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: !update ? 'List Property added succesfully!' : 'List Property updated succesfully!',
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
        (window as any).port.onMessage.removeListener(addListPropertyCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${createListProperty}`
  script += ` ${exescript.name}(${createListProperty.name}, '${payload.key}', '${payload.value}', '${payload.listId}', ${payload.indexed});`
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

export async function removeListProperties(dispatch: Dispatch<ListPropertiesActions | HomeActions>, payload: IListProperty[]) {

  // hide confirm dialog
  dispatch(actions.setConfirmRemoveDialog(true))
  // show loading spinner
  dispatch(rootActions.setLoading(true));
  // add listener to receive the results from inspected page
  (window as any).port.onMessage.addListener(async function deleteListPropertiesCallback(message: any) {

    if (
      typeof message !== 'object' ||
      message === null ||
      message === undefined ||
      message.source === undefined
    ) {
      return
    }
    switch (message.function) {
      case deleteListProperty.name:
        if (message.success) {
          /* on success */
          // add small delay just be sure SP can process previous requests
          await spDelay(500)
          // load all scriptlinks
          getAllListProperties(dispatch, payload[0].listId)
          // set success message
          dispatch(rootActions.setAppMessage({
            showMessage: true,
            message: 'List property removed succesfully!',
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
        (window as any).port.onMessage.removeListener(deleteListPropertiesCallback)
        break
    }
  })

  // execute script in inspectedWindow
  let script = `${getPnpjsPath()} ${getSystemjsPath()} ${exescript} ${deleteListProperty}`
  script += ` ${exescript.name}(${deleteListProperty.name}, '${payload[0].key}', '${payload[0].listId}');`
  chrome.devtools.inspectedWindow.eval(script)
}
