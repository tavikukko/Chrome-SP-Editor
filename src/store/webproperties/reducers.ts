import { Constants, IWebPropertiesState, WebPropertiesActions } from './types'

const init: IWebPropertiesState = {
  webproperties: [],
  loading: false,
  editpanel: false,
  newpanel: false,
  selectedItems: [],
  selectedItem: undefined,
  confirmremove: true,
  confirmedit: true,
  searchstring: '',
}

export function webPropertiesReducer(state: IWebPropertiesState = init, action: WebPropertiesActions): IWebPropertiesState {
  switch (action.type) {
    case Constants.WP_GET_ITEMS:
      return { ...state, webproperties: action.payload.items }
    case Constants.WP_SET_EDITPANEL:
      return { ...state, ...action.payload }
    case Constants.WP_SET_NEWPANEL:
      return { ...state, ...action.payload }
    case Constants.WP_SELECTED_ITEMS:
      return { ...state, ...action.payload }
    case Constants.WP_SELECTED_ITEM:
      return { ...state, ...action.payload }
    case Constants.WP_SET_CONFIRM_EDIT_DIALOG:
      return { ...state, ...action.payload }
    case Constants.WP_SET_CONFIRM_REMOVE_DIALOG:
      return { ...state, ...action.payload }
    case Constants.WP_SET_SEARCH_STRING:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
