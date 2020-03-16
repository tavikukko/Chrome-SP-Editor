import {
  DefaultButton,
  DetailsList,
  DetailsListLayoutMode,
  Dialog,
  DialogFooter,
  DialogType,
  IColumn,
  Icon,
  MarqueeSelection,
  mergeStyles,
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
import { setConfirmRemoveDialog, setEditPanel, setSelectedItem, setSelectedItems} from '../../../store/webproperties/actions'
import { IWebProperty } from '../../../store/webproperties/types'
import { getAllWebProperties, removeWebProperties } from '../chrome/chrome-actions'

const WebPropertiesList = () => {

  const dispatch = useDispatch()
  const { webproperties, selectedItems, confirmremove, searchstring } = useSelector((state: IRootState) => state.webProperties)
  const { isDark } = useSelector((state: IRootState) => state.home)

  const [sortkey, setSortkey] = useState('webkey')
  const [keyAsc, setKeyAsc] = useState(true)
  const [indexedAsc, setIndexedAsc] = useState(true)

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
    getAllWebProperties(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // clear selection after every update on webproperties
  useEffect(() => {
    selection.setAllSelected(false)
    dispatch(setSelectedItems([]))
    setKeyAsc(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webproperties])

  const onColumnClick = (_e: any, { key }: any) => {
    if (key === 'webkey') {
      webproperties.sort((a, b) => (a.key.toLocaleLowerCase() < b.key.toLocaleLowerCase()) ? keyAsc ? 1 : -1 : ((b.key.toLocaleLowerCase() < a.key.toLocaleLowerCase()) ? keyAsc ? -1 : 1 : 0))
      setKeyAsc(!keyAsc)
    } else if (key === 'indexed') {
      webproperties.sort((a, b) => (a.indexed < b.indexed) ? indexedAsc ? 1 : -1 : ((b.indexed < a.indexed) ? indexedAsc ? -1 : 1 : 0))
      setIndexedAsc(!indexedAsc)
    }
    setSortkey(key)
    // dispatch(setAllWebProperties(webproperties))

    selection.setAllSelected(false)
    dispatch(setSelectedItems([]))
  }

  const filteredProps = webproperties.filter(prop => prop.key.toLocaleLowerCase().indexOf(searchstring.toLocaleLowerCase()) > -1)

  const detailsListColumns: IColumn[] = [
    {
      data: 'string',
      fieldName: 'indexed',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      isSorted: sortkey === 'indexed',
      isSortedDescending: indexedAsc,
      key: 'indexed',
      maxWidth: 70,
      minWidth: 50,
      name: `Indexed (${filteredProps.filter(prop => prop.indexed === true).length})`,
      onColumnClick,
    },
    {
      data: 'string',
      fieldName: 'key',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      isSorted: sortkey === 'webkey',
      isSortedDescending: keyAsc,
      key: 'webkey',
      maxWidth: 200,
      minWidth: 100,
      name: `Property (${filteredProps.length})`,
      onColumnClick,
    },
    {
      data: 'string',
      fieldName: 'value',
      isPadded: true,
      isResizable: true,
      isRowHeader: true,
      key: 'webvalue',
      minWidth: 210,
      name: 'Value',
      isMultiline: true,
      isCollapsable: false,
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

  const iconClass = mergeStyles({
    fontSize: 20,
    height: 20,
    width: 20,
    marginLeft: '14px',
  })

  // render custom column (indexed) with icon
  const _renderItemColumn = (item?: any, index?: number | undefined, column?: IColumn | undefined) => {
    const fieldContent = item[column?.fieldName as keyof IWebProperty] as string

    switch (column?.key) {
      case 'indexed':
        const webProp = item as IWebProperty
        return webProp.indexed ? <span><Icon iconName='CheckMark' className={iconClass} /></span> : <span></span>

      default:
        return <span>{fieldContent}</span>
    }
  }

  return (
    <>
      <ScrollablePane>
        <MarqueeSelection selection={selection} isEnabled={true}>
          <DetailsList
            layoutMode={DetailsListLayoutMode.justified}
            onShouldVirtualize={() => false}
            selection={selection}
            items={filteredProps}
            selectionPreservedOnEmptyClick={true}
            columns={detailsListColumns}
            selectionMode={SelectionMode.multiple}
            getKey={(item: IWebProperty) => {
              return item.key
            }}
            setKey='Webset'
            isHeaderVisible={true}
            enterModalSelectionOnTouch={true}
            onItemInvoked={(item: IWebProperty) => {
              dispatch(setSelectedItem(item))
              dispatch(setEditPanel(true))
            }}
            onRenderDetailsHeader={renderHeader}
            onRenderItemColumn={_renderItemColumn}
          />
        </MarqueeSelection>
      </ScrollablePane>

      <Dialog
        hidden={confirmremove} // Dialog for Remove
        onDismiss={() => dispatch(setConfirmRemoveDialog(true))}
        dialogContentProps={{
          showCloseButton: true,
          type: DialogType.normal,
          title: 'Remove web property',
          closeButtonAriaLabel: 'Cancel',
          subText: selectedItems.length > 1
            ? `Sure you want to remove these ${selectedItems.length} selected web properties?`
            : `Sure you want to remove the "${selectedItems && selectedItems.length > 0 ? selectedItems[0].key : ''}" web property?`,
        }}
        modalProps={{
          isDarkOverlay: isDark,
        }}
      >
        <DialogFooter>
        <PrimaryButton onClick={() => removeWebProperties(dispatch, selectedItems)} text='Remove' />
          <DefaultButton onClick={() => dispatch(setConfirmRemoveDialog(true))} text='Cancel' />
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default WebPropertiesList
