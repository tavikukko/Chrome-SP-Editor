import { Constants, IScriptLinksState, ScriptLinksActions } from './types'

const init: IScriptLinksState = {
  scriptlinks: [],
  loading: false,
  editpanel: false,
  newpanel: false,
}

export function scriptLinksReducer(state: IScriptLinksState = init, action: ScriptLinksActions): IScriptLinksState {
  switch (action.type) {
    case Constants.GET_ITEMS:
      return { ...state, scriptlinks: action.payload.items }
    case Constants.SET_EDITPANEL:
      return { ...state, ...action.payload }
    case Constants.SET_NEWPANEL:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
