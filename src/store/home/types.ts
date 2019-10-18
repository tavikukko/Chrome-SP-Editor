import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type HomeActions = ActionType<typeof actions>

export interface IHomeState {
  list: string[],
  loading: boolean,
  isDark: boolean,
  appMessage: IAppMessage
}

export interface IAppMessage {
  showMessage: boolean
  message: string
  color: MessageBarColors
}

export enum Constants {
    ADD_ITEM = 'ADD_ITEM',
    SET_LOADING = 'SET_LOADING',
    SET_DARK_MODE = 'SET_DARK_MODE',
    SET_APP_MESSAGE = 'SET_APP_MESSAGE',
}

export enum MessageBarColors {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  light = 'light',
  medium = 'medium',
  dark = 'dark',
}
