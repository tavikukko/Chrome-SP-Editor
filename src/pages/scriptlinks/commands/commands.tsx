import { CommandBar } from 'office-ui-fabric-react'
import React from 'react'
import { IScriptLink } from '../../../store/scriptlinks/types'

const Commands = ({ selectedItems, setShowNewPanel }: CommandsProps) => {
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
                onClick: () => setShowNewPanel(true),
              },
              {
                key: 'deleteRow',
                text: 'Remove',
                iconProps: { iconName: 'Delete' },
                disabled: selectedItems.length < 1,
                // onClick: () => deleteRows()
              },
            ]}
            overflowButtonProps={{ ariaLabel: 'More commands' }}
            ariaLabel={
            'Use left and right arrow keys to navigate between commands'
            }
        />
  )
}

interface CommandsProps {
  selectedItems: IScriptLink[]
  setShowNewPanel: Function
}

export default Commands
