import { Constants, HomeActions, IHomeState, MessageBarColors } from './types'

const init: IHomeState = {
  list: [],
  loading: false,
  isDark: false,
  appMessage: { showMessage: false, message: '', color: MessageBarColors.primary },
}

export function homeReducer(state: IHomeState = init, action: HomeActions): IHomeState {
  switch (action.type) {
    case Constants.ADD_ITEM:
      return { ...state, list: [...state.list, action.payload.item] }
    case Constants.SET_LOADING:
      return { ...state, ...action.payload }
    case Constants.SET_DARK_MODE:
      return { ...state, ...action.payload }
    case Constants.SET_APP_MESSAGE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
