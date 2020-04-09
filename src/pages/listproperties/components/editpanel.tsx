import {
  DefaultButton,
  Dialog,
  DialogFooter,
  DialogType,
  IOverlayProps,
  Panel,
  PanelType,
  PrimaryButton,
  Stack,
  TextField,
  Toggle,
} from 'office-ui-fabric-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { setConfirmEditDialog, setEditPanel, setSelectedItem } from '../../../store/listproperties/actions'
import { IListProperty } from '../../../store/listproperties/types'
import { addListProperty } from '../chrome/chrome-actions'

const ListPropertiesEditPanel = () => {

  const dispatch = useDispatch()
  const { isDark } = useSelector((state: IRootState) => state.home)
  const { editpanel, selectedItem, confirmedit } = useSelector((state: IRootState) => state.listProperties)

  const [editItem, setEditItem] = useState<IListProperty>()

  useEffect(() => {
    setEditItem(selectedItem)
  }, [selectedItem])

  const panelOverlayProps: IOverlayProps = { isDarkThemed: isDark }
  const _onRenderItemFooterContent = () => {
    return (
      <PrimaryButton
        onClick={() => dispatch(setConfirmEditDialog(false))}
        style={{ marginRight: '8px' }}
        text={'Update'}
      />
    )
  }

  return (
    <Panel
      isOpen={editpanel}
      type={PanelType.smallFixedFar}
      onDismiss={() => {
        dispatch(setSelectedItem(undefined))
        dispatch(setEditPanel(false))
      }
      }
      isLightDismiss={true}
      isFooterAtBottom={true}
      headerText='Edit List Property'
      closeButtonAriaLabel='Close'
      onRenderFooterContent={_onRenderItemFooterContent}
      overlayProps={panelOverlayProps}
    >
      {selectedItem &&
        <Stack>
          <TextField
            label='Property Key'
            description='The key of the property'
            value={editItem ? editItem.key : ''}
            readOnly
            disabled
          />
          <TextField
            label='Property Value'
            description='The value of the property'
            value={editItem ? editItem.value : ''}
            multiline
            rows={5}
            autoAdjustHeight
            onChange={(event, newValue?: string) => {
              dispatch(setSelectedItem({ ...selectedItem, value: newValue ? newValue : '' }))
            }}
          />
        <Toggle
          label='Indexed'
          checked={selectedItem.indexed}
          onText='Yes'
          offText='No'
          onChange={(event, checked?: boolean) => {
            dispatch(setSelectedItem({ ...selectedItem, indexed: checked ? true : false }))
          }}
        />

        </Stack>
      }
      <Dialog
        hidden={confirmedit}
        onDismiss={() => dispatch(setConfirmEditDialog(true))}
        dialogContentProps={{
          showCloseButton: true,
          type: DialogType.normal,
          title: 'Edit List Property',
          closeButtonAriaLabel: 'Cancel',
          subText: `Sure you want to edit the selected list property?`,
        }}
        modalProps={{
          isDarkOverlay: isDark,
        }}
      >
        <DialogFooter>
          <PrimaryButton onClick={() => { addListProperty(dispatch, selectedItem!, true) }} text='Update' />
          <DefaultButton onClick={() => { dispatch(setConfirmEditDialog(true)) }} text='Cancel' />
        </DialogFooter>
      </Dialog>
    </Panel>
  )
}

export default ListPropertiesEditPanel
