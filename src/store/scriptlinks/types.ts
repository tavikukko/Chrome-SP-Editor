import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type ScriptLinksActions = ActionType<typeof actions>

export interface IScriptLink {
  [key: string]: any
  Name: string
  Scope: number
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
}

export enum Constants {
  GET_ITEMS = 'GET_ITEMS',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  SET_MESSAGE = 'SET_MESSAGE',
  SET_LOADING = 'SET_LOADING',
  SET_EDITPANEL = 'SET_EDITPANEL',
  SET_NEWPANEL = 'SET_NEWPANEL',
}
