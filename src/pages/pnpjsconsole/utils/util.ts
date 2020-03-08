import { Dispatch } from 'redux'
import { HomeActions } from '../../../store/home/types'
import { setDefinitions } from '../../../store/pnpjsconsole/actions'
import { IDefinitions, PnPjsConsoleActions } from '../../../store/pnpjsconsole/types'
import { getExtensionDirectory, loadDefinitions } from '../components/utils'

export async function fetchDefinitions(dispatch: Dispatch<PnPjsConsoleActions | HomeActions>) {
  const directoryEntry = await getExtensionDirectory()
  const definitions: IDefinitions[] = await loadDefinitions(directoryEntry, ['@pnp', '@microsoft'])
  dispatch(setDefinitions(definitions))
  return
}
