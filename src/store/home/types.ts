import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type HomeActions = ActionType<typeof actions>

export interface IHomeState {
  list: string[],
  loading: boolean,
  isDark: boolean,
  error: boolean,
  errorMessage: string,
}

export enum Constants {
    ADD_ITEM = 'ADD_ITEM',
    SET_LOADING = 'SET_LOADING',
    SET_DARK_MODE = 'SET_DARK_MODE',
    SET_ERROR = 'SET_ERROR',
    SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
}
