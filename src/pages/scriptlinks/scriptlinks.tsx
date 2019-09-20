import React, { useEffect, useRef, useState } from 'react'

import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode,
} from 'office-ui-fabric-react/lib/DetailsList'

import { IonContent, IonPage } from '@ionic/react'
import { IOverlayProps, MarqueeSelection, Stack, TextField } from 'office-ui-fabric-react'
import {
  DefaultButton,
  PrimaryButton,
} from 'office-ui-fabric-react/lib/Button'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar'
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel'
import {
  Selection,
} from 'office-ui-fabric-react/lib/utilities/selection'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Header from '../../components/navigation/header'
import { IRootState } from '../../store'
import { getAllScriptLinks } from '../../store/scriptlinks/async-actions'
import { IScriptLink, ScriptLinksActions } from '../../store/scriptlinks/types'
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";

const ScriptLinks = ({ scriptlinks, scriptLinks, loading }: HomeProps) => {
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
  const panelOverlayProps: IOverlayProps = { isDarkThemed: true }

  // Populate columns
  const detailsListColumns: IColumn[] = [
    {
      data: 'number',
      fieldName: 'Sequence',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      isSorted: false,
      isSortedDescending: false,
      key: 'column2',
      maxWidth: 100,
      minWidth: 100,
      name: 'Sequence',
    },
    {
      data: 'string',
      fieldName: 'Url',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      isSorted: false,
      isSortedDescending: false,
      key: 'column1',
      maxWidth: 350,
      minWidth: 210,
      name: 'ScriptSrc',
    },
    {
      data: 'string',
      fieldName: 'Scope',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      isSorted: false,
      isSortedDescending: false,
      key: 'column3',
      maxWidth: 350,
      minWidth: 210,
      name: 'Scope',
    },
  ]

  // load initial data
  useEffect(() => {
    scriptLinks()
  }, [])

  const _onRenderItemFooterContent = (): JSX.Element => {
    return (
      <div>
        <PrimaryButton
          onClick={() => setShowItemPanel(false)}
          style={{ marginRight: '8px' }}
        >
          Update
        </PrimaryButton>
        <DefaultButton onClick={() => setShowItemPanel(false)}>
          Remove
        </DefaultButton>
      </div>
    )
  }

  const _onRenderNewFooterContent = (): JSX.Element => {
    return (
      <div>
        <PrimaryButton
          onClick={() => setShowNewPanel(false)}
          style={{ marginRight: '8px' }}
        >
          Add
        </PrimaryButton>
      </div>
    )
  }

  return (
    <>
      <IonPage>
        <Header title={'ScriptLinks'} />
        <IonContent>
          {/* Actions menu */}
          <LoadingSpinner loading={loading} />
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
          {/* List of scriptLinks */}
          <MarqueeSelection selection={selection.current} isEnabled={true}>
            <DetailsList
              selection={selection.current}
              items={scriptlinks}
              columns={detailsListColumns}
              selectionMode={SelectionMode.multiple}
              setKey='set'
              layoutMode={DetailsListLayoutMode.justified}
              isHeaderVisible={true}
              enterModalSelectionOnTouch={true}
              onItemInvoked={(item: IScriptLink) => {
                setSelectedItem(item)
                setShowItemPanel(true)
              }}
            />
          </MarqueeSelection>
        </IonContent>
      </IonPage>

      {/* Panel to item details */}
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
        {/* Panel form */}
        <Stack>
          <TextField
            label='Custom label rendering'
            description='Click the (i) icon!'
          />

          <TextField
            label='Custom description rendering'
            description='A colorful description!'
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

type HomeProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScriptLinks)
