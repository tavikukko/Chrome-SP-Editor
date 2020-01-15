import { combineReducers, createStore } from 'redux'
import { homeReducer } from './home/reducers'
import { IHomeState } from './home/types'
import { pnpJSConsoleReducer } from './pnpjsconsole/reducers'
import { IPnPjsConsoleState } from './pnpjsconsole/types'
import { scriptLinksReducer } from './scriptlinks/reducers'
import { IScriptLinksState } from './scriptlinks/types'

export interface IRootState {
  home: IHomeState,
  scriptLinks: IScriptLinksState
  pnpjsconsole: IPnPjsConsoleState
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    home: homeReducer,
    scriptLinks: scriptLinksReducer,
    pnpjsconsole: pnpJSConsoleReducer,
  }))

export default store
