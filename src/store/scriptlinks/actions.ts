import { action } from 'typesafe-actions'
import { Constants, INewScriptLink, IScriptLink } from './types'

export function getAllScriptLinks(items: IScriptLink[]) {
  return action(Constants.GET_ITEMS, {
    items,
  })
}

export function addScriptLink(item: INewScriptLink) {
  return action(Constants.ADD_ITEM, {
    item,
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
