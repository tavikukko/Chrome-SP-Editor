import { action } from 'typesafe-actions'
import { Constants, IWebProperty } from './types'

export function setAllWebProperties(items: IWebProperty[]) {
  return action(Constants.WP_GET_ITEMS, {
    items,
  })
}

export function setEditPanel(editpanel: boolean) {
  return action(Constants.WP_SET_EDITPANEL, {
    editpanel,
  })
}

export function setNewPanel(newpanel: boolean) {
  return action(Constants.WP_SET_NEWPANEL, {
    newpanel,
  })
}

export function setSelectedItem(selectedItem: IWebProperty | undefined) {
  return action(Constants.WP_SELECTED_ITEM, {
    selectedItem,
  })
}

export function setSelectedItems(selectedItems: IWebProperty[]) {
  return action(Constants.WP_SELECTED_ITEMS, {
    selectedItems,
  })
}

export function setConfirmEditDialog(confirmedit: boolean) {
  return action(Constants.WP_SET_CONFIRM_EDIT_DIALOG, {
    confirmedit,
  })
}

export function setConfirmRemoveDialog(confirmremove: boolean) {
  return action(Constants.WP_SET_CONFIRM_REMOVE_DIALOG, {
    confirmremove,
  })
}

export function setSearchString(searchstring: string) {
  return action(Constants.WP_SET_SEARCH_STRING, {
    searchstring,
  })
}
