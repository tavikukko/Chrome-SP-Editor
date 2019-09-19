import { Dispatch } from 'redux'
import * as actions from './actions'
import { HomeActions } from './types'

const sleep = async (timeout: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(), timeout))
}

export async function addItemAsync(dispatch: Dispatch<HomeActions>, item: string) {
  dispatch(actions.setLoading(true))
  await sleep(1000)
  dispatch(actions.addItemToList(item))
  dispatch(actions.setLoading(false))
}
