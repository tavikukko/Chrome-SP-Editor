import { combineReducers, createStore } from 'redux'
import { homeReducer } from './home/reducers'
import { IHomeState } from './home/types'
import { listPropertiesReducer } from './listproperties/reducers'
import { IListPropertiesState } from './listproperties/types'
import { pnpJSConsoleReducer } from './pnpjsconsole/reducers'
import { IPnPjsConsoleState } from './pnpjsconsole/types'
import { scriptLinksReducer } from './scriptlinks/reducers'
import { IScriptLinksState } from './scriptlinks/types'
import { webHooksReducer } from './webhooks/reducers'
import { IWebHooksState } from './webhooks/types'
import { webPropertiesReducer } from './webproperties/reducers'
import { IWebPropertiesState } from './webproperties/types'

export interface IRootState {
  home: IHomeState,
  scriptLinks: IScriptLinksState
  pnpjsconsole: IPnPjsConsoleState
  webProperties: IWebPropertiesState
  webHooks: IWebHooksState
  listProperties: IListPropertiesState
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    home: homeReducer,
    scriptLinks: scriptLinksReducer,
    pnpjsconsole: pnpJSConsoleReducer,
    webProperties: webPropertiesReducer,
    webHooks: webHooksReducer,
    listProperties: listPropertiesReducer,
  }))

export default store
