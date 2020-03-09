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
  confirmremove: boolean,
  confirmedit: boolean,
  confirmcache: boolean,
}

export enum Constants {
  SL_GET_ITEMS = 'SL_GET_ITEMS',
  SL_ADD_ITEM = 'SL_ADD_ITEM',
  SL_UPDATE_ITEM = 'SL_UPDATE_ITEM',
  SL_REMOVE_ITEMS = 'SL_REMOVE_ITEM"',
  SL_SET_EDITPANEL = 'SL_SET_EDITPANEL',
  SL_SET_NEWPANEL = 'SL_SET_NEWPANEL',
  SL_SELECTED_ITEM = 'SL_SELECTED_ITEM',
  SL_SELECTED_ITEMS = 'SL_SELECTED_ITEMS',
  SL_SET_CONFIRM_REMOVE_DIALOG = 'SL_SET_CONFIRM_REMOVE_DIALOG',
  SL_SET_CONFIRM_EDIT_DIALOG = 'SL_SET_CONFIRM_EDIT_DIALOG',
  SL_SET_CONFIRM_CACHE_DIALOG = 'SL_SET_CONFIRM_CACHE_DIALOG',
}
