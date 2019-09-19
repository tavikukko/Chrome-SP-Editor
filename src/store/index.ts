import { combineReducers, createStore } from 'redux'
import { homeReducer } from './home/reducers'
import { IHomeState } from './home/types'
import { scriptLinksReducer } from './scriptlinks/reducers'
import { IScriptLinksState } from './scriptlinks/types'

export interface IRootState {
  home: IHomeState,
  scriptLinks: IScriptLinksState
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    home: homeReducer,
    scriptLinks: scriptLinksReducer,
  }))

export default store
