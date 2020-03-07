import { CommandBar, SearchBox } from 'office-ui-fabric-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { setConfirmRemoveDialog, setNewPanel } from '../../../store/webproperties/actions'

const WebPropertiesCommands = () => {

  const { selectedItems, selectedItem, webproperties } = useSelector((state: IRootState) => state.webProperties)
  const dispatch = useDispatch()

  return (
    <>
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
          ariaLabel: 'New',
          onClick: () => {
            dispatch(setNewPanel(true))
          },
        },
        {
          key: 'deleteRow',
          text: 'Remove',
          iconProps: { iconName: 'Delete' },
          disabled:  selectedItems.length < 1 ,
          onClick: () => {
            dispatch(setConfirmRemoveDialog(false))
          },
        },
        {
          key: 'indexRow',
          text: 'Index',
          iconProps: { iconName: 'DocumentSearch' },
          disabled: selectedItems.length !== 1,
          onClick: () => {
            // dispatch(setConfirmIndexDialog(false))
            // dispatch(setConfirmUnIndexDialog(false))
          },
        },
        {
          key: 'search',
          onClick: () => {
            // filter web properties
          },
          onRender: () => <SearchBox
            placeholder='Filter properties'
            onFocus={() => console.log('onFocus called')}
            onBlur={() => console.log('onBlur called')}
            iconProps={{ iconName: 'Filter' }}
            styles={{ root: { width: 300 } }}
            disabled={webproperties.length === 0}
          />,
        },
      ]}
      overflowButtonProps={{ ariaLabel: 'More commands' }}
      ariaLabel={
        'Use left and right arrow keys to navigate between commands'
      }
    />
  </>
  )
}

export default WebPropertiesCommands
