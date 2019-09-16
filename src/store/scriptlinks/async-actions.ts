import { Dispatch } from 'redux';
import * as actions from './actions';
import { ScriptLinksActions, IScriptLinks } from './types';

const sleep = async (timeout: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}

export async function getItems(dispatch: Dispatch<ScriptLinksActions>) {
  dispatch(actions.setLoading(true));
  await sleep(1000);
  const items: IScriptLinks[] = [{
    path: "~sitecollection/Style Library/Valo/riot.min.js?v=1.17",
    sequence: 10000,
    scope: "Current Web"
  }]
  dispatch(actions.getItems(items));
  dispatch(actions.setLoading(false));
}

export async function addItemAsync(dispatch: Dispatch<ScriptLinksActions>, item: IScriptLinks) {
  dispatch(actions.setLoading(true));
  await sleep(1000);
  dispatch(actions.addItemToList(item));
  dispatch(actions.setLoading(false));
}
