import { action } from 'typesafe-actions'
import { Constants, IScriptLink } from './types'

export function getAllScriptLinks(items: IScriptLink[]) {
  return action(Constants.GET_ITEMS, {
    items,
  })
}

export function addItemToList(item: IScriptLink) {
  return action(Constants.ADD_ITEM, {
    item,
  })
}

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, {
    loading,
  })
}
