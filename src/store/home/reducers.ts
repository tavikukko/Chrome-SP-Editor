import { fabricDark } from '../../fabricThemes'
import { Constants, HomeActions, IHomeState, MessageBarColors } from './types'

const init: IHomeState = {
  loading: false,
  isDark: false,
  theme: fabricDark,
  appMessage: { showMessage: false, message: '', color: MessageBarColors.primary },
}

export function homeReducer(state: IHomeState = init, action: HomeActions): IHomeState {
  switch (action.type) {
    case Constants.SET_LOADING:
      return { ...state, ...action.payload }
    case Constants.SET_DARK_MODE:
      return { ...state, ...action.payload }
    case Constants.SET_APP_MESSAGE:
      return { ...state, ...action.payload }
    case Constants.SET_THEME:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
