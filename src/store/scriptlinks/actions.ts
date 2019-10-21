import { action } from 'typesafe-actions'
import { Constants, INewScriptLink, IScriptLink } from './types'

export function getAllScriptLinks(items: IScriptLink[]) {
  return action(Constants.GET_ITEMS, {
    items,
  })
}

export function setEditPanel(editpanel: boolean) {
  return action(Constants.SET_EDITPANEL, {
    editpanel,
  })
}

export function setNewPanel(newpanel: boolean) {
  return action(Constants.SET_NEWPANEL, {
    newpanel,
  })
}

export function setSelectedItem(selectedItem: IScriptLink | undefined) {
  return action(Constants.SELECTED_ITEM, {
    selectedItem,
  })
}

export function setSelectedItems(selectedItems: IScriptLink[]) {
  return action(Constants.SELECTED_ITEMS, {
    selectedItems,
  })
}
