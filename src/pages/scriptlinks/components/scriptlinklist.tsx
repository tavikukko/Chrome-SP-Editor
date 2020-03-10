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
  setAllScriptLinks,
  setConfirmCacheDialog,
  setConfirmRemoveDialog,
  setEditPanel,
  setSelectedItem,
  setSelectedItems,
} from '../../../store/scriptlinks/actions'
import { IScriptLink } from '../../../store/scriptlinks/types'
import { cacheScriptLinks, deleteScriptLinks, getAllScriptLinks } from '../chrome/chrome-actions'

const ScriptLinkList = () => {

  const dispatch = useDispatch()
  const { scriptlinks, selectedItems, confirmremove, confirmcache } = useSelector((state: IRootState) => state.scriptLinks)
  const { isDark } = useSelector((state: IRootState) => state.home)

  const [sortkey, setSortkey] = useState('Sequence')
  const [sequenceAsc, setSequenceAsc] = useState(true)
  const [scopeAsc, setScopeAsc] = useState(false)
  const [scriptSrcAsc, setScriptSrcAsc] = useState(true)

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // clear selection after every update on scriptlinks
  useEffect(() => {
    selection.setAllSelected(false)
    dispatch(setSelectedItems([]))
    setSequenceAsc(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptlinks])

  const onColumnClick = (_e: any, { key }: any) => {
    if (key === 'Sequence') {
      scriptlinks.sort((a, b) => (a.Sequence < b.Sequence) ? sequenceAsc ? 1 : -1 : ((b.Sequence < a.Sequence) ? sequenceAsc ? -1 : 1 : 0))
      setSequenceAsc(!sequenceAsc)
    } else if (key === 'ScriptSrc') {
      scriptlinks.sort((a, b) => (a.Url.toLocaleLowerCase() < b.Url.toLocaleLowerCase()) ? scriptSrcAsc ? 1 : -1 : ((b.Url.toLocaleLowerCase() < a.Url.toLocaleLowerCase()) ? scriptSrcAsc ? -1 : 1 : 0))
      setScriptSrcAsc(!scriptSrcAsc)
    } else if (key === 'Scope') {
      scriptlinks.sort((a, b) => (a.ScopeName.toLocaleLowerCase() < b.ScopeName.toLocaleLowerCase()) ? scopeAsc ? 1 : -1 : ((b.ScopeName.toLocaleLowerCase() < a.ScopeName.toLocaleLowerCase()) ? scopeAsc ? -1 : 1 : 0))
      setScopeAsc(!scopeAsc)
    }
    setSortkey(key)
    dispatch(setAllScriptLinks(scriptlinks))

    selection.setAllSelected(false)
    dispatch(setSelectedItems([]))
  }

  const detailsListColumns: IColumn[] = [
    {
      data: 'number',
      fieldName: 'Sequence',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      isSorted: sortkey === 'Sequence',
      isSortedDescending: sequenceAsc,
      key: 'Sequence',
      maxWidth: 100,
      minWidth: 100,
      name: 'Sequence',
      onColumnClick,
    },
    {
      data: 'string',
      fieldName: 'Url',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      isSorted: sortkey === 'ScriptSrc',
      isSortedDescending: scriptSrcAsc,
      key: 'ScriptSrc',
      maxWidth: 350,
      minWidth: 210,
      name: 'ScriptSrc',
      onColumnClick,
    },
    {
      data: 'string',
      fieldName: 'ScopeName',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      isSorted: sortkey === 'Scope',
      isSortedDescending: scopeAsc,
      key: 'Scope',
      maxWidth: 350,
      minWidth: 210,
      name: 'Scope',
      onColumnClick,
    },
  ]

  // make columns sticky
  const renderHeader = (headerProps: any, defaultRender: any) => {
    return (
      <Sticky
        stickyPosition={StickyPositionType.Header}
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
            setKey='scriptlinkslist'
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
          showCloseButton: true,
          type: DialogType.normal,
          title: 'Remove ScriptLinks',
          closeButtonAriaLabel: 'Cancel',
          subText: selectedItems.length > 1
            ? `Sure you want to remove these ${selectedItems.length} selected scriptlinks?`
            : `Sure you want to remove the selected scriptlink?`,
        }}
        modalProps={{
          isDarkOverlay: isDark,
        }}
      >
        <DialogFooter>
          <PrimaryButton onClick={() => deleteScriptLinks(dispatch, selectedItems)} text='Remove' />
          <DefaultButton onClick={() => dispatch(setConfirmRemoveDialog(true))} text='Cancel' />
        </DialogFooter>
      </Dialog>

      <Dialog
        hidden={confirmcache}
        onDismiss={() => dispatch(setConfirmCacheDialog(true))}
        dialogContentProps={{
          showCloseButton: true,
          type: DialogType.normal,
          title: 'Refresh cache',
          closeButtonAriaLabel: 'Cancel',
          subText: selectedItems.length > 1
            ? `Sure you want to refresh the cache for these ${selectedItems.length} selected scriptlinks?`
            : `Sure you want to refresh the cache for the selected scriptlink?`,
        }}
        modalProps={{
          isDarkOverlay: isDark,
        }}
      >
        <DialogFooter>
          <PrimaryButton onClick={() => cacheScriptLinks(dispatch, selectedItems)} text='Refresh cache' />
          <DefaultButton onClick={() => dispatch(setConfirmCacheDialog(true))} text='Cancel' />
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default ScriptLinkList
