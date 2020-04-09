import { action } from 'typesafe-actions'
import { Constants, IListProperty, IListPropertyList } from './types'

export function setAllListProperties(items: IListProperty[]) {
  return action(Constants.LP_GET_ITEMS, {
    items,
  })
}

export function setAllLists(lists: IListPropertyList[]) {
  return action(Constants.LP_GET_ITEMS_LISTS, {
    lists,
  })
}

export function setSelectedList(selectedList: string | undefined) {
  return action(Constants.LP_SET_SELECTED_ITEM, {
    selectedList,
  })
}

export function setEditPanel(editpanel: boolean) {
  return action(Constants.LP_SET_EDITPANEL, {
    editpanel,
  })
}

export function setNewPanel(newpanel: boolean) {
  return action(Constants.LP_SET_NEWPANEL, {
    newpanel,
  })
}

export function setSelectedItem(selectedItem: IListProperty | undefined) {
  return action(Constants.LP_SELECTED_ITEM, {
    selectedItem,
  })
}

export function setSelectedItems(selectedItems: IListProperty[]) {
  return action(Constants.LP_SELECTED_ITEMS, {
    selectedItems,
  })
}

export function setConfirmEditDialog(confirmedit: boolean) {
  return action(Constants.LP_SET_CONFIRM_EDIT_DIALOG, {
    confirmedit,
  })
}

export function setConfirmRemoveDialog(confirmremove: boolean) {
  return action(Constants.LP_SET_CONFIRM_REMOVE_DIALOG, {
    confirmremove,
  })
}

export function setSearchString(searchstring: string) {
  return action(Constants.LP_SET_SEARCH_STRING, {
    searchstring,
  })
}
