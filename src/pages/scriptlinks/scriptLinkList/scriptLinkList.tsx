import { DetailsList, DetailsListLayoutMode, IColumn, MarqueeSelection, SelectionMode } from 'office-ui-fabric-react'
import React, { useRef } from 'react'
import { IScriptLink } from '../../../store/scriptlinks/types'

const ScriptLinkList = ({ scriptLinks, selectionRef, setSelectedItem, setShowItemPanel }: ScriptLinkListProps) => {

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

  return (
        <MarqueeSelection selection={selectionRef.current} isEnabled={true}>
            <DetailsList
                selection={selectionRef.current}
                items={scriptLinks}
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
  )
}

interface ScriptLinkListProps {
  scriptLinks: IScriptLink[]
  setSelectedItem: any
  setShowItemPanel: any
  selectionRef: any
}

export default ScriptLinkList
