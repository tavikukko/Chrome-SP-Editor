import { Constants, ScriptLinksActions, IScriptLinksState } from './types';

const init: IScriptLinksState = {
  scriptlinks: [],
  loading: false
};

export function scriptLinksReducer(state: IScriptLinksState = init, action: ScriptLinksActions): IScriptLinksState {
  switch (action.type) {
    case Constants.GET_ITEMS:
      return { ...state, scriptlinks: action.payload.items };
    case Constants.ADD_ITEM:
      return { ...state, scriptlinks: [...state.scriptlinks, action.payload.item] };
    case Constants.SET_LOADING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
