import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type WebPropertiesActions = ActionType<typeof actions>

export interface IWebProperty {
  key: string
  value: string
  indexed: boolean
}

export interface IWebPropertiesState {
  webproperties: IWebProperty[],
  loading: boolean,
  editpanel: boolean,
  newpanel: boolean,
  selectedItems: IWebProperty[],
  selectedItem: IWebProperty | undefined,
  confirmremove: boolean,
  confirmedit: boolean,
  searchstring: string,
}

export enum Constants {
  WP_GET_ITEMS = 'WP_GET_ITEMS',
  WP_ADD_ITEM = 'WP_ADD_ITEM',
  WP_UPDATE_ITEM = 'WP_UPDATE_ITEM',
  WP_REMOVE_ITEMS = 'WP_REMOVE_ITEM"',
  WP_SET_EDITPANEL = 'WP_SET_EDITPANEL',
  WP_SET_NEWPANEL = 'WP_SET_NEWPANEL',
  WP_SELECTED_ITEM = 'WP_SELECTED_ITEM',
  WP_SELECTED_ITEMS = 'WP_SELECTED_ITEMS',
  WP_SET_CONFIRM_REMOVE_DIALOG = 'WP_SET_CONFIRM_REMOVE_DIALOG',
  WP_SET_CONFIRM_EDIT_DIALOG = 'WP_SET_CONFIRM_EDIT_DIALOG',
  WP_SET_SEARCH_STRING = 'WP_SET_SEARCH_STRING',
}
