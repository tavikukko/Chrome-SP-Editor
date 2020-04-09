import { CommandBar, Dropdown, IDropdownOption, ResponsiveMode, SearchBox } from 'office-ui-fabric-react'
import React, { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { setConfirmRemoveDialog, setNewPanel, setSearchString, setSelectedList } from '../../../store/listproperties/actions'
import { getAllListProperties } from '../chrome/chrome-actions'

const ListPropertiesCommands = () => {
  const { lists, selectedList, selectedItems } = useSelector((state: IRootState) => state.listProperties)
  const dispatch = useDispatch()

  return (
      <CommandBar
        styles={{
          root: {
            alignItems: 'center',
          },
        }}
        items={[
          {
            key: 'newItem',
            name: 'New',
            cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
            iconProps: {
              iconName: 'Add',
            },
            disabled: !selectedList,
            ariaLabel: 'New',
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
            disabled: selectedItems.length !== 1 ,
          },
          {
            key: 'listSelector',
            onRender: () => <Dropdown
              placeholder='Select list'
              selectedKey={selectedList}
              options={lists}
              responsiveMode={ResponsiveMode.xxxLarge}
              onChange={(event: FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined, index?: number | undefined): void => {
                if (option) {
                  getAllListProperties(dispatch, option.key.toString())
                  dispatch(setSelectedList(option.key.toString()))
                }
              }}
              styles={{ root: { width: 300 } }}
            />,
          },
          {
            key: 'search',
            onRender: () => <SearchBox
              placeholder='Filter properties'
              onFocus={() => console.log('onFocus called')}
              onBlur={() => console.log('onBlur called')}
              iconProps={{ iconName: 'Filter' }}
              styles={{ root: { width: 300, paddingLeft: '6px' } }}
              onChange={(ev, value) => dispatch(setSearchString(value ? value : ''))}
            />,
          },
        ]}
        overflowButtonProps={{ ariaLabel: 'More commands' }}
        ariaLabel={
          'Use left and right arrow keys to navigate between commands'
        }
      />
  )
}

export default ListPropertiesCommands
