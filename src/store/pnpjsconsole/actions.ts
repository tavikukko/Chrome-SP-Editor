import { action } from 'typesafe-actions'
import { Constants, IDefinitions } from './types'

export function setCode(code: string) {
  return action(Constants.PC_SET_CODE, {
    code,
  })
}

export function setDefinitions(definitions: IDefinitions[]) {
  return action(Constants.PC_SET_DEFINITIONS, {
    definitions,
  })
}
