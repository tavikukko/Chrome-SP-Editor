import { Constants, IWebHooksState, WebHooksActions } from './types'

const init: IWebHooksState = {
  webhooks: [],
  lists: [],
  loading: false,
  editpanel: false,
  newpanel: false,
  selectedItems: [],
  selectedItem: undefined,
  confirmremove: true,
  confirmedit: true,
}

export function webHooksReducer(state: IWebHooksState = init, action: WebHooksActions): IWebHooksState {
  switch (action.type) {
    case Constants.WH_GET_ITEMS:
      return { ...state, webhooks: action.payload.items }
    case Constants.WH_GET_ITEMS_LISTS:
      return { ...state, lists: action.payload.lists }
    case Constants.WH_SET_EDITPANEL:
      return { ...state, ...action.payload }
    case Constants.WH_SET_NEWPANEL:
      return { ...state, ...action.payload }
    case Constants.WH_SELECTED_ITEMS:
      return { ...state, ...action.payload }
    case Constants.WH_SELECTED_ITEM:
      return { ...state, ...action.payload }
    case Constants.WH_SET_CONFIRM_EDIT_DIALOG:
      return { ...state, ...action.payload }
    case Constants.WH_SET_CONFIRM_REMOVE_DIALOG:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
