import {
  DefaultButton,
  DetailsList,
  DetailsListLayoutMode,
  Dialog,
  DialogFooter,
  DialogType,
  IColumn,
  MarqueeSelection,
  PrimaryButton,
  ScrollablePane,
  SelectionMode,
  Sticky,
  StickyPositionType,
} from 'office-ui-fabric-react'
import {
  Selection,
} from 'office-ui-fabric-react/lib/utilities/selection'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import {
  setConfirmRemoveDialog,
  setEditPanel,
  setSelectedItem,
  setSelectedItems,
} from '../../../store/scriptlinks/actions'
import { deleteScriptLinks, getAllScriptLinks } from '../../../store/scriptlinks/async-actions'
import { IScriptLink } from '../../../store/scriptlinks/types'

const ScriptLinkList = () => {

  const dispatch = useDispatch()
  const { scriptlinks, selectedItems, confirmremove } = useSelector((state: IRootState) => state.scriptLinks)
  const { isDark } = useSelector((state: IRootState) => state.home)

  // set selected items to store
  const [selection] = useState(
    new Selection({
      onSelectionChanged: () => {
        const newSelection = selection.getSelection() as typeof selectedItems
        dispatch(setSelectedItems(newSelection))
      },
    }),
  )

  // load initial data
  useEffect(() => {
    getAllScriptLinks(dispatch)
  }, [])

  // clear selection after every update on scriptlinks
  useEffect(() => {
    selection.setAllSelected(false)
    dispatch(setSelectedItems([]))
  }, [scriptlinks])

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
      fieldName: 'ScopeName',
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

  // make columns sticky
  const renderHeader = (headerProps: any, defaultRender: any) => {
    return (
      <Sticky
        stickyPosition={StickyPositionType.Both}
        isScrollSynced={true}
      >
        {defaultRender(headerProps)}
      </Sticky>
    )
  }

  return (
    <>
      <ScrollablePane>
        <MarqueeSelection selection={selection} isEnabled={true}>
          <DetailsList
            layoutMode={DetailsListLayoutMode.fixedColumns}
            onShouldVirtualize={() => false}
            selection={selection}
            items={scriptlinks}
            selectionPreservedOnEmptyClick={true}
            columns={detailsListColumns}
            selectionMode={SelectionMode.multiple}
            getKey={(item: IScriptLink) => {
              return item.Id
            }}
            setKey='set'
            isHeaderVisible={true}
            enterModalSelectionOnTouch={true}
            onItemInvoked={(item: IScriptLink) => {
              dispatch(setSelectedItem(item))
              dispatch(setEditPanel(true))
            }}
            onRenderDetailsHeader={renderHeader}
          />
        </MarqueeSelection>
      </ScrollablePane>

      <Dialog
        hidden={confirmremove}
        onDismiss={() => dispatch(setConfirmRemoveDialog(true))}
        dialogContentProps={{
          type: DialogType.largeHeader,
          title: 'Remove ScriptLinks',
          closeButtonAriaLabel: 'Close',
          subText: selectedItems.length > 1
            ? `Sure you want to remove these ${selectedItems.length} selected scriptlinks?`
            : `Sure you want to remove the selected scriptlink?`,
        }}
        modalProps={{
          isDarkOverlay: isDark,
        }}
      >
        <DialogFooter>
          <PrimaryButton onClick={() => deleteScriptLinks(dispatch, selectedItems)} text='Delete' />
          <DefaultButton onClick={() => dispatch(setConfirmRemoveDialog(true))} text='Cancel' />
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default ScriptLinkList
