import { Constants, IScriptLinksState, ScriptLinksActions } from './types'

const init: IScriptLinksState = {
  scriptlinks: [],
  loading: false,
  editpanel: false,
  newpanel: false,
  selectedItems: [],
  selectedItem: undefined,
  confirmremove: true,
  confirmedit: true,
  confirmcache: true,
}

export function scriptLinksReducer(state: IScriptLinksState = init, action: ScriptLinksActions): IScriptLinksState {
  switch (action.type) {
    case Constants.SL_GET_ITEMS:
      return { ...state, scriptlinks: action.payload.items }
    case Constants.SL_SET_EDITPANEL:
      return { ...state, ...action.payload }
    case Constants.SL_SET_NEWPANEL:
      return { ...state, ...action.payload }
    case Constants.SL_SELECTED_ITEMS:
      return { ...state, ...action.payload }
    case Constants.SL_SELECTED_ITEM:
      return { ...state, ...action.payload }
    case Constants.SL_SET_CONFIRM_EDIT_DIALOG:
      return { ...state, ...action.payload }
    case Constants.SL_SET_CONFIRM_REMOVE_DIALOG:
      return { ...state, ...action.payload }
    case Constants.SL_SET_CONFIRM_CACHE_DIALOG:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
