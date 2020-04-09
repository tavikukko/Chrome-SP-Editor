import { Constants, IListPropertiesState, ListPropertiesActions } from './types'

const init: IListPropertiesState = {
  listproperties: [],
  lists: [],
  loading: false,
  editpanel: false,
  newpanel: false,
  selectedList: undefined,
  selectedItems: [],
  selectedItem: undefined,
  confirmremove: true,
  confirmedit: true,
  searchstring: '',
}

export function listPropertiesReducer(state: IListPropertiesState = init, action: ListPropertiesActions): IListPropertiesState {
  switch (action.type) {
    case Constants.LP_GET_ITEMS:
      return { ...state, listproperties: action.payload.items }
    case Constants.LP_GET_ITEMS_LISTS:
      return { ...state, lists: action.payload.lists }
    case Constants.LP_SET_SELECTED_ITEM:
      return { ...state, ...action.payload }
    case Constants.LP_SET_EDITPANEL:
      return { ...state, ...action.payload }
    case Constants.LP_SET_NEWPANEL:
      return { ...state, ...action.payload }
    case Constants.LP_SELECTED_ITEMS:
      return { ...state, ...action.payload }
    case Constants.LP_SELECTED_ITEM:
      return { ...state, ...action.payload }
    case Constants.LP_SET_CONFIRM_EDIT_DIALOG:
      return { ...state, ...action.payload }
    case Constants.LP_SET_CONFIRM_REMOVE_DIALOG:
      return { ...state, ...action.payload }
    case Constants.LP_SET_SEARCH_STRING:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
