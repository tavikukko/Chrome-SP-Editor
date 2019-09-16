import { action } from 'typesafe-actions';
import { Constants, IScriptLinks } from './types';

export function getItems(items: IScriptLinks[]) {
  return action(Constants.GET_ITEMS, {
      items
  });
}

export function addItemToList(item: IScriptLinks) {
    return action(Constants.ADD_ITEM, {
        item
    });
}

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}
