import { IOverlayProps, Panel, PanelType, PrimaryButton, Stack, TextField } from 'office-ui-fabric-react'
import React from 'react'

// TODO: add redux

const EditPanel = ({ setShowEditPanel, showEditPanel, selectedItem, setSelectedItem }: EditPanelProps) => {

  // TODO: get this from global state?
  const panelOverlayProps: IOverlayProps = { isDarkThemed: false }

  const _onRenderItemFooterContent = () => {
    return (
      <PrimaryButton
        onClick={() => setShowEditPanel(false)}
        style={{ marginRight: '8px' }}
        text={'Add'}
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
          label='Custom label rendering'
          description='Click the (i) icon!'
          value={selectedItem.Url}
        />

        <TextField
          label='Custom description rendering'
          description='A colorful description!'
        />
      </Stack>
    </Panel>
  )
}

interface EditPanelProps {
  setShowEditPanel: Function
  showEditPanel: boolean
  selectedItem: any
  setSelectedItem: Function
}

export default EditPanel
