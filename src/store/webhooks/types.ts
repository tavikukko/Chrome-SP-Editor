import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type WebHooksActions = ActionType<typeof actions>

export interface IWebHook {
  listTitle: string
  listId: string
  clientState: string
  expirationDateTime: string
  id: string
  notificationUrl: string
  resource: string
  resourceData: string
}

export interface IWebHookLists {
  listTitle: string
  listId: string
}

export interface IWebHooksState {
  webhooks: IWebHook[],
  lists: IWebHookLists[],
  loading: boolean,
  editpanel: boolean,
  newpanel: boolean,
  selectedItems: IWebHook[],
  selectedItem: IWebHook | undefined,
  confirmremove: boolean,
  confirmedit: boolean,
}

export enum Constants {
  WH_GET_ITEMS = 'WH_GET_ITEMS',
  WH_GET_ITEMS_LISTS = 'WH_GET_ITEMS_LISTS',
  WH_ADD_ITEM = 'WH_ADD_ITEM',
  WH_UPDATE_ITEM = 'WH_UPDATE_ITEM',
  WH_REMOVE_ITEMS = 'WH_REMOVE_ITEM"',
  WH_SET_EDITPANEL = 'WH_SET_EDITPANEL',
  WH_SET_NEWPANEL = 'WH_SET_NEWPANEL',
  WH_SELECTED_ITEM = 'WH_SELECTED_ITEM',
  WH_SELECTED_ITEMS = 'WH_SELECTED_ITEMS',
  WH_SET_CONFIRM_REMOVE_DIALOG = 'WH_SET_CONFIRM_REMOVE_DIALOG',
  WH_SET_CONFIRM_EDIT_DIALOG = 'WH_SET_CONFIRM_EDIT_DIALOG',
}
