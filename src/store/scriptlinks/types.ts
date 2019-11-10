import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type ScriptLinksActions = ActionType<typeof actions>

export interface IScriptLink {
  [key: string]: any
  Name: string
  Scope: number
  ScopeName: string
  ScriptBlock: string
  ScriptSrc: string
  Sequence: number
  Url: string
  Title: string
  Id: string
}

export interface INewScriptLink {
  Scope: number
  Sequence: number
  Url: string
}

export interface IScriptLinksState {
  scriptlinks: IScriptLink[],
  loading: boolean,
  editpanel: boolean,
  newpanel: boolean,
  selectedItems: IScriptLink[],
  selectedItem: IScriptLink | undefined,
}

export enum Constants {
  GET_ITEMS = 'GET_ITEMS',
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEMS = 'REMOVE_ITEM"',
  SET_EDITPANEL = 'SET_EDITPANEL',
  SET_NEWPANEL = 'SET_NEWPANEL',
  SELECTED_ITEM = 'SELECTED_ITEM',
  SELECTED_ITEMS = 'SELECTED_ITEMS',
}
