import { CommandBar, Dropdown, IStackTokens, ResponsiveMode, SearchBox, Stack } from 'office-ui-fabric-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { getAllListProperties } from '../../../store/listproperties/async-actions'

const ListPropertiesCommands = () => {
  const wrapStackTokens: IStackTokens = { childrenGap: -1 }
  const { lists } = useSelector((state: IRootState) => state.listProperties)
  const dispatch = useDispatch()

  return (
    <>
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
            },
          },
          {
            key: 'deleteRow',
            text: 'Remove',
            iconProps: { iconName: 'Delete' },
            onClick: () => {
            },
          },
        ]}
        overflowButtonProps={{ ariaLabel: 'More commands' }}
        ariaLabel={
          'Use left and right arrow keys to navigate between commands'
        }
      />
      <Stack horizontal tokens={wrapStackTokens}>
        <Stack.Item grow>
          <Dropdown
            placeholder='Select list'
            options={lists}
            responsiveMode={ResponsiveMode.xxxLarge}
            onChange={(elem, option: any) => { getAllListProperties(dispatch, option.key.toString()) }}
          />
        </Stack.Item>
        <Stack.Item grow>
          <SearchBox
            placeholder='Filter properties'
            onFocus={() => console.log('onFocus called')}
            onBlur={() => console.log('onBlur called')}
            iconProps={{ iconName: 'Filter' }}
          />
        </Stack.Item>
      </Stack>
    </>
  )
}

export default ListPropertiesCommands
