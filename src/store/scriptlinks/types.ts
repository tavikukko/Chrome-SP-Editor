import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ScriptLinksActions = ActionType<typeof actions>;

export interface IScriptLinks {
  [key: string]: any;
  path: string;
  sequence: number;
  scope: string;
}

export interface IScriptLinksState {
  scriptlinks: IScriptLinks[],
  loading: boolean
}

export enum Constants {
  GET_ITEMS = 'GET_ITEMS',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  SET_LOADING = 'SET_LOADING',
}
