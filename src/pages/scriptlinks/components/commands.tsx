import { CommandBar } from 'office-ui-fabric-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { setNewPanel } from '../../../store/scriptlinks/actions'
import { deleteScriptLinks } from '../../../store/scriptlinks/async-actions'

const ScriptLinkCommands = () => {
  const dispatch = useDispatch()
  const { selectedItems } = useSelector((state: IRootState) => state.scriptLinks)

  return (
    <CommandBar
      items={[
        {
          key: 'newItem',
          name: 'New',
          cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
          iconProps: {
            iconName: 'Add',
          },
          ariaLabel: 'New',
          onClick: () => {
            dispatch(setNewPanel(true))
          },
        },
        {
          key: 'deleteRow',
          text: 'Remove',
          iconProps: { iconName: 'Delete' },
          disabled: selectedItems.length < 1,
          onClick: () => {
            deleteScriptLinks(dispatch, selectedItems)
          },
        },
      ]}
      overflowButtonProps={{ ariaLabel: 'More commands' }}
      ariaLabel={
        'Use left and right arrow keys to navigate between commands'
      }
    />
  )
}

export default ScriptLinkCommands