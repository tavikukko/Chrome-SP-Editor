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

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, {
    loading,
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
/*
export function setError(error: boolean) {
  return action(Constants.SET_ERROR, {
    error,
  })
}

export function setErrorMessage(errorMessage: string) {
  return action(Constants.SET_ERROR_MESSAGE, {
    errorMessage,
  })
}
*/
