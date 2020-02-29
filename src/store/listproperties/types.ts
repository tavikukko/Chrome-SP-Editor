import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type ListPropertiesActions = ActionType<typeof actions>

export interface IListProperty {
  Key: string
  Value: string
}

export interface IListPropertyList {
  key: string
  text: string
}

export interface IListPropertiesState {
  listproperties: IListProperty[],
  lists: IListPropertyList[],
  loading: boolean,
  editpanel: boolean,
  newpanel: boolean,
  selectedList: string | undefined,
  selectedItems: IListProperty[],
  selectedItem: IListProperty | undefined,
  confirmremove: boolean,
  confirmedit: boolean,
}

export enum Constants {
  LP_GET_ITEMS = 'LP_GET_ITEMS',
  LP_GET_ITEMS_LISTS = 'LP_GET_ITEMS_LISTS',
  LP_ADD_ITEM = 'LP_ADD_ITEM',
  LP_UPDATE_ITEM = 'LP_UPDATE_ITEM',
  LP_REMOVE_ITEMS = 'LP_REMOVE_ITEM"',
  LP_SET_SELECTED_ITEM = 'LP_SET_SELECTED_ITEM',
  LP_SET_EDITPANEL = 'LP_SET_EDITPANEL',
  LP_SET_NEWPANEL = 'LP_SET_NEWPANEL',
  LP_SELECTED_ITEM = 'LP_SELECTED_ITEM',
  LP_SELECTED_ITEMS = 'LP_SELECTED_ITEMS',
  LP_SET_CONFIRM_REMOVE_DIALOG = 'LP_SET_CONFIRM_REMOVE_DIALOG',
  LP_SET_CONFIRM_EDIT_DIALOG = 'LP_SET_CONFIRM_EDIT_DIALOG',
}
