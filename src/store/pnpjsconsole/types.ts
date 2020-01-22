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
  SET_CODE = 'SET_CODE',
  SET_DEFINITIONS = 'SET_DEFINITIONS',
}
