import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  MarqueeSelection,
  SelectionMode } from 'office-ui-fabric-react'
import {
  Selection,
} from 'office-ui-fabric-react/lib/utilities/selection'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import {
  setEditPanel,
  setSelectedItem,
  setSelectedItems,
} from '../../../store/scriptlinks/actions'
import { getAllScriptLinks } from '../../../store/scriptlinks/async-actions'
import { IScriptLink } from '../../../store/scriptlinks/types'

const ScriptLinkList = () => {

  const dispatch = useDispatch()
  const { scriptlinks, selectedItems } = useSelector((state: IRootState) => state.scriptLinks)

  useEffect(() => {
    getAllScriptLinks(dispatch)
  }, [])

  const selection = useRef(new Selection({
    onSelectionChanged: () => {
      const newSelection = selection.current.getSelection() as typeof selectedItems
      dispatch(setSelectedItems(newSelection))
    },
  }))

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

  return (
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
                  dispatch(setSelectedItem(item))
                  dispatch(setEditPanel(true))
                }}
            />
      </MarqueeSelection>
  )
}

export default ScriptLinkList
