import { Dispatch } from 'redux'
import { addItemToList, setLoading } from './actions'
import { HomeActions } from './types'

const sleep = async (timeout: number) => {
  return new Promise((resolve) => setTimeout(() => resolve(), timeout))
}

export async function addItemAsync(dispatch: Dispatch<HomeActions>, item: string) {
  dispatch(setLoading(true))
  await sleep(1000)
  dispatch(addItemToList(item))
  dispatch(setLoading(false))
}
