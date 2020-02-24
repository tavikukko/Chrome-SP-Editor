import { action } from 'typesafe-actions'
import { Constants, IWebHook, IWebHookLists } from './types'

export function setAllWebHooks(items: IWebHook[]) {
  return action(Constants.WH_GET_ITEMS, {
    items,
  })
}

export function setAllWebHookLists(lists: IWebHookLists[]) {
  return action(Constants.WH_GET_ITEMS_LISTS, {
    lists,
  })
}

export function setEditPanel(editpanel: boolean) {
  return action(Constants.WH_SET_EDITPANEL, {
    editpanel,
  })
}

export function setNewPanel(newpanel: boolean) {
  return action(Constants.WH_SET_NEWPANEL, {
    newpanel,
  })
}

export function setSelectedItem(selectedItem: IWebHook | undefined) {
  return action(Constants.WH_SELECTED_ITEM, {
    selectedItem,
  })
}

export function setSelectedItems(selectedItems: IWebHook[]) {
  return action(Constants.WH_SELECTED_ITEMS, {
    selectedItems,
  })
}

export function setConfirmEditDialog(confirmedit: boolean) {
  return action(Constants.WH_SET_CONFIRM_EDIT_DIALOG, {
    confirmedit,
  })
}

export function setConfirmRemoveDialog(confirmremove: boolean) {
  return action(Constants.WH_SET_CONFIRM_REMOVE_DIALOG, {
    confirmremove,
  })
}
