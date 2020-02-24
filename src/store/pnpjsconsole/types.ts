import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type PnPjsConsoleActions = ActionType<typeof actions>

export interface IPnPjsConsoleState {
  code: string,
  definitions: IDefinitions[],
}

export interface IDefinitions {
  content: string,
  filePath: string
}

export enum Constants {
  PC_SET_CODE = 'PC_SET_CODE',
  PC_SET_DEFINITIONS = 'PC_SET_DEFINITIONS',
}
