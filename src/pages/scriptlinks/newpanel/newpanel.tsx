import { Dropdown, IOverlayProps, Panel, PanelType, PrimaryButton, Stack, TextField } from 'office-ui-fabric-react'
import React from 'react'

// TODO: add redux

const NewPanel = ({ setShowNewPanel, showNewPanel }: NewPanelProps) => {

  const panelOverlayProps: IOverlayProps = { isDarkThemed: false }

  const _onRenderNewFooterContent = (): JSX.Element => {
    return (
        <PrimaryButton
          onClick={() => setShowNewPanel(false)}
          style={{ marginRight: '8px' }}
          text={'Add'}
        />
    )
  }

  return (
    <>
      <Panel
        isOpen={showNewPanel}
        type={PanelType.smallFixedFar}
        onDismiss={() => setShowNewPanel(false)}
        isLightDismiss={true}
        isFooterAtBottom={true}
        headerText='Panel with footer at bottom'
        closeButtonAriaLabel='Close'
        onRenderFooterContent={_onRenderNewFooterContent}
        overlayProps={panelOverlayProps}
      >
        {/* Panel new form */}
        < Stack >
          <TextField
            label='Url'
            description='Url of the file to be injected.'
            placeholder='~sitecollection/Style Library/custom.js'
            multiline
            autoAdjustHeight
          />
          <TextField
            label='Sequence'
            description='The sequence of the scriplink'
            styles={{ fieldGroup: { width: 100 } }}
          />
          <Dropdown
            placeholder='Select an option'
            label='Dropdown with error message'
            options={[
              { key: '2', text: 'Current Web' },
              { key: '3', text: 'Site Collection' },
            ]}
          />
        </Stack >
      </Panel >
    </>
  )
}

interface NewPanelProps {
  setShowNewPanel: any
  showNewPanel: boolean
}

export default NewPanel
