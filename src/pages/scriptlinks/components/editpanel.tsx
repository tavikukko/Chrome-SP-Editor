import { Dropdown, IDropdownOption, IOverlayProps, Panel, PanelType, PrimaryButton, Stack, TextField } from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { IScriptLink } from '../../../store/scriptlinks/types'

// TODO: add redux

const EditPanel = ({ setShowEditPanel, showEditPanel, selectedItem, setSelectedItem }: EditPanelProps) => {

  // TODO: get this from global state?
  const panelOverlayProps: IOverlayProps = { isDarkThemed: false }

  const [item, setItem] = useState(selectedItem)

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
      <Stack>
        <TextField
          label='Url'
          description='Url of the file to be injected.'
          placeholder='~sitecollection/Style Library/custom.js'
          multiline
          autoAdjustHeight
          value={item.Url}
          onChange={(event, newValue?: string) =>
            setItem({ ...item, Url: newValue ? newValue : '' })}
            // TODO: do proper validation
        />
        <TextField
          label='Sequence'
          description='The sequence of the scriplink'
          styles={{ fieldGroup: { width: 100 } }}
          value={item.Sequence.toString()}
          type={'number'}
          onChange={(event, newValue?: string) =>
            setItem({ ...item, Sequence: newValue ? +newValue : item.Sequence })}
            // TODO: do proper casting & validation
        />
        <Dropdown
          placeholder='Select an option'
          label='Dropdown with error message'
          options={[
            { key: 2, text: 'Site Collection' },
            { key: 3, text: 'Current Web' },
          ]}
          selectedKey={item.Scope}
          onChange={(event, option?: IDropdownOption) =>
            setItem({ ...item, Scope: option ? +option.key : item.Scope })}
            // TODO: do proper casting & validation
        />
      </Stack>
    </Panel>
  )
}

interface EditPanelProps {
  setShowEditPanel: Function
  showEditPanel: boolean
  selectedItem: IScriptLink
  setSelectedItem: Function
}

export default EditPanel
