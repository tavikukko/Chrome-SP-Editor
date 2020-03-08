import {
  DefaultButton,
  DetailsList,
  Dialog,
  DialogFooter,
  DialogType,
  IColumn,
  PrimaryButton,
  ScrollablePane,
  Sticky,
  StickyPositionType,
} from 'office-ui-fabric-react'
import {
  Selection,
} from 'office-ui-fabric-react/lib/utilities/selection'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
/* import {
  setAllScriptLinks,
  setConfirmRemoveDialog,
  setEditPanel,
  setSelectedItem,
  setSelectedItems,
} from '../../../store/scriptlinks/actions' */
import { getAllWebHooks } from '../chrome/chrome-actions'
// import { IScriptLink } from '../../../store/scriptlinks/types'

const WebHooksList = () => {

  const dispatch = useDispatch()
  const { webhooks } = useSelector((state: IRootState) => state.webHooks)
  const { isDark } = useSelector((state: IRootState) => state.home)

  // const [sortkey, setSortkey] = useState('Sequence')
  const [sequenceAsc, setSequenceAsc] = useState(true)
  const [scopeAsc, setScopeAsc] = useState(false)
  const [scriptSrcAsc, setScriptSrcAsc] = useState(true)

  // set selected items to store
  const [selection] = useState(
    new Selection({
      onSelectionChanged: () => {
        /* const newSelection = selection.getSelection() as typeof selectedItems
        dispatch(setSelectedItems(newSelection)) */
      },
    }),
  )

  // load initial data
  useEffect(() => {
    getAllWebHooks(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // clear selection after every update on scriptlinks
  useEffect(() => {
    selection.setAllSelected(false)
    // dispatch(setSelectedItems([]))
    // setSequenceAsc(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }/*, [scriptlinks] */)

  const onColumnClick = (_e: any, { key }: any) => {
    if (key === 'Sequence') {
      // scriptlinks.sort((a, b) => (a.Sequence < b.Sequence) ? sequenceAsc ? 1 : -1 : ((b.Sequence < a.Sequence) ? sequenceAsc ? -1 : 1 : 0))
      setSequenceAsc(!sequenceAsc)
    } else if (key === 'ScriptSrc') {
      // scriptlinks.sort((a, b) => (a.Url < b.Url) ? scriptSrcAsc ? 1 : -1 : ((b.Url < a.Url) ? scriptSrcAsc ? -1 : 1 : 0))
      setScriptSrcAsc(!scriptSrcAsc)
    } else if (key === 'Scope') {
      // scriptlinks.sort((a, b) => (a.ScopeName < b.ScopeName) ? scopeAsc ? 1 : -1 : ((b.ScopeName < a.ScopeName) ? scopeAsc ? -1 : 1 : 0))
      setScopeAsc(!scopeAsc)
    }
    // setSortkey(key)
    // dispatch(setAllScriptLinks(scriptlinks))

    selection.setAllSelected(false)
    // dispatch(setSelectedItems([]))
  }
/*
{
  listTitle: string
  listId: string
  clientState: string
  expirationDateTime: string
  id: string
  notificationUrl: string
  resource: string
  resourceData: string
}

*/
  const detailsListColumns: IColumn[] = [
    { key: 'expirationDateTime', name: 'Expires', fieldName: 'expirationDateTime', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'notificationUrl', name: 'Webhook Url', fieldName: 'notificationUrl', minWidth: 100, maxWidth: 200 },
  ]

  const groupBy = (xs: any[], key: string) => {
    return xs.reduce((rv: any, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x)
      return rv
    }, {})
  }

  const createGroupData = (arr: any[], by: string) => {
    const grouped = groupBy(arr, by)
    const groupData: any[] = []
    let groupIndex = 0
    Object.keys(grouped).forEach((group) => {
      groupData.push({ key: group + groupIndex, name: group, startIndex: groupIndex, count: grouped[group].length, level: 0 })
      groupIndex += grouped[group].length
    })
    return groupData
  }

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
        <DetailsList
          // componentRef={this._root}
          items={webhooks}
          groups={createGroupData(webhooks, 'listTitle')}
          columns={detailsListColumns}
          ariaLabelForSelectAllCheckbox='Toggle selection for all items'
          ariaLabelForSelectionColumn='Toggle selection'
          checkButtonAriaLabel='Row checkbox'
          // onRenderDetailsHeader={this._onRenderDetailsHeader}
          groupProps={{
            showEmptyGroups: true,
          }}
          // onRenderItemColumn={this._onRenderColumn}
          compact={true}
        />
      </ScrollablePane>

      <Dialog
        hidden={true} // {confirmremove}
        // onDismiss={() => dispatch(setConfirmRemoveDialog(true))}
        dialogContentProps={{
          showCloseButton: true,
          type: DialogType.normal,
          title: 'Remove web property',
          closeButtonAriaLabel: 'Cancel',
          /* subText: selectedItems.length > 1
            ? `Sure you want to remove these ${selectedItems.length} selected scriptlinks?`
            : `Sure you want to remove the selected scriptlink?`, */
        }}
        modalProps={{
          isDarkOverlay: isDark,
        }}
      >
        <DialogFooter>
          <PrimaryButton text='Remove' />
          <DefaultButton text='Cancel' />
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default WebHooksList
