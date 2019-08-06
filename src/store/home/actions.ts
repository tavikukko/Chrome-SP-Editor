import { action } from 'typesafe-actions';
import { Constants } from './types';

export function addItemToList(item: string) {
    return action(Constants.ADD_ITEM, {
        item
    });
}

export function setLoading(loading: boolean) {
    return action(Constants.SET_LOADING, {
        loading
    });
}
