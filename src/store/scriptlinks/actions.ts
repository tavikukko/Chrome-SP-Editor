import { action } from 'typesafe-actions'
import { Constants, IScriptLink } from './types'

export function setAllScriptLinks(items: IScriptLink[]) {
  return action(Constants.SL_GET_ITEMS, {
    items,
  })
}

export function setEditPanel(editpanel: boolean) {
  return action(Constants.SL_SET_EDITPANEL, {
    editpanel,
  })
}

export function setNewPanel(newpanel: boolean) {
  return action(Constants.SL_SET_NEWPANEL, {
    newpanel,
  })
}

export function setSelectedItem(selectedItem: IScriptLink | undefined) {
  return action(Constants.SL_SELECTED_ITEM, {
    selectedItem,
  })
}

export function setSelectedItems(selectedItems: IScriptLink[]) {
  return action(Constants.SL_SELECTED_ITEMS, {
    selectedItems,
  })
}

export function setConfirmEditDialog(confirmedit: boolean) {
  return action(Constants.SL_SET_CONFIRM_EDIT_DIALOG, {
    confirmedit,
  })
}

export function setConfirmRemoveDialog(confirmremove: boolean) {
  return action(Constants.SL_SET_CONFIRM_REMOVE_DIALOG, {
    confirmremove,
  })
}

export function setConfirmCacheDialog(confirmcache: boolean) {
  return action(Constants.SL_SET_CONFIRM_CACHE_DIALOG, {
    confirmcache,
  })
}
