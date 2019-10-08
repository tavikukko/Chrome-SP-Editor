import { Dropdown, IDropdownOption, IOverlayProps, Panel, PanelType, PrimaryButton, Stack, TextField } from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { IScriptLink } from '../../../store/scriptlinks/types'

// TODO: add redux

const EditPanel = ({ setShowEditPanel, showEditPanel, selectedItem, setSelectedItem }: EditPanelProps) => {

  const { isDark } = useSelector((state: IRootState) => state.home)

  const panelOverlayProps: IOverlayProps = { isDarkThemed: isDark }

  const _onRenderItemFooterContent = () => {
    return (
      <PrimaryButton
        onClick={() => {
          // TODO: update item
          setSelectedItem(undefined)
          setShowEditPanel(false)
        }
        }
        style={{ marginRight: '8px' }}
        text={'Update'}
      />
    )
  }

  return (
    <Panel
      isOpen={showEditPanel}
      type={PanelType.smallFixedFar}
      onDismiss={() => {
        setSelectedItem(undefined)
        setShowEditPanel(false)
      }
      }
      isLightDismiss={true}
      isFooterAtBottom={true}
      headerText='Panel with footer at bottom'
      closeButtonAriaLabel='Close'
      onRenderFooterContent={_onRenderItemFooterContent}
      overlayProps={panelOverlayProps}
    >
      {selectedItem &&
        <Stack>
          <TextField
            label='Url'
            description='Url of the file to be injected.'
            placeholder='~sitecollection/Style Library/custom.js'
            multiline
            autoAdjustHeight
            value={selectedItem.Url}
            onChange={(event, newValue?: string) =>
              setSelectedItem({ ...selectedItem, Url: newValue ? newValue : '' })}
          // TODO: do proper validation
          />
          <TextField
            label='Sequence'
            description='The sequence of the scriplink'
            styles={{ fieldGroup: { width: 100 } }}
            value={selectedItem.Sequence.toString()}
            type={'number'}
            onChange={(event, newValue?: string) =>
              setSelectedItem({ ...selectedItem, Sequence: newValue ? +newValue : selectedItem.Sequence })}
          // TODO: do proper casting & validation
          />
          <Dropdown
            placeholder='Select an option'
            label='Dropdown with error message'
            options={[
              { key: 2, text: 'Site Collection' },
              { key: 3, text: 'Current Web' },
            ]}
            selectedKey={selectedItem.Scope}
            onChange={(event, option?: IDropdownOption) =>
              setSelectedItem({ ...selectedItem, Scope: option ? +option.key : selectedItem.Scope })}
          // TODO: do proper casting & validation
          />
        </Stack>
      }
    </Panel>
  )
}

interface EditPanelProps {
  setShowEditPanel: Function
  showEditPanel: boolean
  selectedItem: IScriptLink | undefined
  setSelectedItem: Function
}

export default EditPanel
