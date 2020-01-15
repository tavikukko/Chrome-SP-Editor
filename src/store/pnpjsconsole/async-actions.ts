import { Dispatch } from 'redux'
import { getExtensionDirectory, loadDefinitions } from '../../pages/pnpjsconsole/components/utils'
import { HomeActions } from './../home/types'
import { setDefinitions } from './actions'
import { IDefinitions, PnPjsConsoleActions } from './types'

export async function fetchDefinitions(dispatch: Dispatch<PnPjsConsoleActions | HomeActions>) {
  const directoryEntry = await getExtensionDirectory()
  const definitions: IDefinitions[] = await loadDefinitions(directoryEntry, ['@pnp', '@microsoft'])
  dispatch(setDefinitions(definitions))
  return
}
