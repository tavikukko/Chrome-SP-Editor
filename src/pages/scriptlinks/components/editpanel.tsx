import {
  Dropdown,
  IDropdownOption,
  IOverlayProps,
  Panel,
  PanelType,
  PrimaryButton,
  Stack,
  TextField,
} from 'office-ui-fabric-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { setEditPanel, setSelectedItem } from '../../../store/scriptlinks/actions'

const ScriptLinksEditPanel = () => {

  const dispatch = useDispatch()
  const { isDark } = useSelector((state: IRootState) => state.home)
  const { editpanel, selectedItem } = useSelector((state: IRootState) => state.scriptLinks)

  const panelOverlayProps: IOverlayProps = { isDarkThemed: isDark }
  const _onRenderItemFooterContent = () => {
    return (
      <PrimaryButton
        onClick={() => {
          // TODO: update item
          dispatch(setSelectedItem(undefined))
        }
        }
        style={{ marginRight: '8px' }}
        text={'Update'}
      />
    )
  }

  return (
    <Panel
      isOpen={editpanel}
      type={PanelType.smallFixedFar}
      onDismiss={() => {
        dispatch(setSelectedItem(undefined))
        dispatch(setEditPanel(false))
      }
      }
      isLightDismiss={true}
      isFooterAtBottom={true}
      headerText='Edit ScriptLink'
      closeButtonAriaLabel='Close'
      onRenderFooterContent={_onRenderItemFooterContent}
      overlayProps={panelOverlayProps}
    >
      {selectedItem &&
        <Stack>
          <TextField
            label='Url'
            description='Url of the file to be injected.'
            placeholder='~sitecollection/Style Library/custom.js'
            multiline
            autoAdjustHeight
            value={selectedItem.Url}
            onChange={(event, newValue?: string) =>
              dispatch(setSelectedItem({ ...selectedItem, Url: newValue ? newValue : '' }))
            }
          // TODO: do proper validation
          />
          <TextField
            label='Sequence'
            description='The sequence of the scriplink'
            styles={{ fieldGroup: { width: 100 } }}
            value={selectedItem.Sequence.toString()}
            type={'number'}
            onChange={(event, newValue?: string) =>
              dispatch(setSelectedItem({ ...selectedItem, Sequence: newValue ? +newValue : selectedItem.Sequence }))
            }
          // TODO: do proper casting & validation
          />
          <Dropdown
            placeholder='Select scope'
            label='Scope'
            options={[
              { key: 2, text: 'Site Collection' },
              { key: 3, text: 'Current Web' },
            ]}
            selectedKey={selectedItem.Scope}
            onChange={(event, option?: IDropdownOption) =>
              dispatch(setSelectedItem({ ...selectedItem, Scope: option ? +option.key : selectedItem.Scope }))
            }
          // TODO: do proper casting & validation
          />
        </Stack>
      }
    </Panel>
  )
}

export default ScriptLinksEditPanel
