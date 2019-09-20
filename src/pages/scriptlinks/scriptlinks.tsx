import { IonContent, IonPage } from '@ionic/react'
import { Dropdown, IOverlayProps, Stack, TextField } from 'office-ui-fabric-react'
import {
  DefaultButton,
  PrimaryButton,
} from 'office-ui-fabric-react/lib/Button'
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel'
import {
  Selection,
} from 'office-ui-fabric-react/lib/utilities/selection'
import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner'
import Header from '../../components/navigation/header'
import { IRootState } from '../../store'
import { getAllScriptLinks } from '../../store/scriptlinks/async-actions'
import { IScriptLink, ScriptLinksActions } from '../../store/scriptlinks/types'
import Commands from './commands/commands'
import ScriptLinkList from './scriptLinkList/scriptLinkList'

const ScriptLinks = ({ scriptlinks, scriptLinks, loading }: ScriptLinksProps) => {
  /* component props */
  const [showItemPanel, setShowItemPanel] = useState(false)
  const [showNewPanel, setShowNewPanel] = useState(false)
  const [selectedItem, setSelectedItem] = useState<IScriptLink | undefined>()
  const [selectedItems, setSelectedItems] = useState<IScriptLink[] | []>([])

  const selection = useRef(new Selection({
    onSelectionChanged: () => {
      const newSelection = selection.current.getSelection() as typeof selectedItems
      setSelectedItems(newSelection)
    },
  }))

  // TODO: get dark theme property from somewhere
  const panelOverlayProps: IOverlayProps = { isDarkThemed: false }

  // load initial data
  useEffect(() => {
    scriptLinks()
  }, [])

  const _onRenderItemFooterContent = (): JSX.Element => {
    return (
      <>
        <PrimaryButton
          onClick={() => setShowItemPanel(false)}
          style={{ marginRight: '8px' }}
          text={'Update'}
        />
        <DefaultButton
          onClick={() => setShowItemPanel(false)}
          text={'Remove'}
        />
      </>
    )
  }

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
      <IonPage>
        <Header title={'ScriptLinks'} />
        <IonContent>
          {/* Loading spinner overlay */}
          <LoadingSpinner loading={loading} />
          {/* Actions menu */}
          <Commands selectedItems={selectedItems} setShowNewPanel={setShowNewPanel} />
          {/* List of scriptLinks */}
          <ScriptLinkList scriptLinks={scriptlinks} selectionRef={selection} setSelectedItem={setSelectedItem} setShowItemPanel={setShowItemPanel} />
        </IonContent>
      </IonPage>

      {/* Panel item details */}
      {selectedItem && (
        <Panel
          isOpen={showItemPanel}
          type={PanelType.smallFixedFar}
          onDismiss={() => {
            setSelectedItem(undefined)
            setShowItemPanel(false)
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
      )}
      {/* Panel to create new item */}
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
        <Stack>
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
        </Stack>
      </Panel>
    </>
  )
}

/* types & redux */
const mapStateToProps = ({ scriptLinks }: IRootState) => ({
  scriptlinks: scriptLinks.scriptlinks,
  loading: scriptLinks.loading,
})

const mapDispatchToProps = (dispatch: Dispatch<ScriptLinksActions>) => ({
  scriptLinks: () => getAllScriptLinks(dispatch),
})

type ScriptLinksProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScriptLinks)
