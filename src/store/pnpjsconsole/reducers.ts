import { initCode } from '../../pages/pnpjsconsole/components/utils'
import { Constants, IPnPjsConsoleState, PnPjsConsoleActions } from './types'

const init: IPnPjsConsoleState = {
  code: initCode(),
  definitions: [],
}

export function pnpJSConsoleReducer(state: IPnPjsConsoleState = init, action: PnPjsConsoleActions): IPnPjsConsoleState {
  switch (action.type) {
    case Constants.PC_SET_CODE:
      return { ...state, ...action.payload }
    case Constants.PC_SET_DEFINITIONS:
      return { ...state, definitions: action.payload.definitions }
    default:
      return state
  }
}
