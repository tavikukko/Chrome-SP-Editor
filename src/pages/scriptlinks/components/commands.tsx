import { CommandBar } from 'office-ui-fabric-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { setConfirmCacheDialog, setConfirmRemoveDialog, setNewPanel } from '../../../store/scriptlinks/actions'

const ScriptLinkCommands = () => {
  const dispatch = useDispatch()
  const { selectedItems } = useSelector((state: IRootState) => state.scriptLinks)

  return (
    <CommandBar
      items={[
        {
          key: 'newItem',
          text: 'New',
          iconProps: { iconName: 'Add' },
          onClick: () => {
            dispatch(setNewPanel(true))
          },
        },
        {
          key: 'deleteRow',
          text: 'Remove',
          iconProps: { iconName: 'Delete' },
          onClick: () => {
            dispatch(setConfirmRemoveDialog(false))
          },
          disabled: selectedItems.length < 1,
        },
        {
          key: 'refreshCaches',
          text: 'Refresh caches',
          iconProps: { iconName: 'Refresh' },
          onClick: () => {
            dispatch(setConfirmCacheDialog(false))
          },
          disabled: selectedItems.length < 1,
        },
      ]}
    />
  )
}

export default ScriptLinkCommands
