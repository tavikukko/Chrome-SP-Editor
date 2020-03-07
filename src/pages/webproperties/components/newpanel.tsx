import {
   IOverlayProps,
   Panel,
   PanelType,
   PrimaryButton,
   Stack,
   TextField,
} from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { addScriptLink } from '../../../store/scriptlinks/async-actions'
import { INewScriptLink } from '../../../store/scriptlinks/types'
import { setNewPanel } from '../../../store/webproperties/actions'
import { IWebProperty } from '../../../store/webproperties/types'

const WebPropertiesNewPanel = () => {

  const { newpanel } = useSelector((state: IRootState) => state.webProperties)

  const dispatch = useDispatch()

  const [ newItem, setNewItem ] = useState<IWebProperty>({
    key: '',
    value: '',
  })

  const { isDark } = useSelector((state: IRootState) => state.home)
  const panelOverlayProps: IOverlayProps = { isDarkThemed: isDark }

  const _onRenderNewFooterContent = () => {

    return (
      <PrimaryButton
        onClick={() => {
          if (newItem && newItem.key && newItem.key.length > 0) {
            // addScriptLink(dispatch, newItem)
          }
        }
        }
        style={{ marginRight: '8px' }}
        text={'Add'}
        // disabled={!valid}
      />
    )
  }

  return (
    <Panel
      isOpen={newpanel}
      type={PanelType.smallFixedFar}
      onDismiss={() => { dispatch(setNewPanel(false))}}
      isLightDismiss={true}
      isFooterAtBottom={true}
      headerText='Add Web Property'
      closeButtonAriaLabel='Close'
      onRenderFooterContent={_onRenderNewFooterContent}
      overlayProps={panelOverlayProps}
    >
      {/* Panel new form */}
      < Stack >
        <TextField
          label='Property Key'
          description='The key of the property'
          value={newItem.key}
          onChange={(event, newValue?: string) =>
            setNewItem({ ...newItem, key: newValue ? newValue : '' })
          }
        />
        <TextField
          label='Property Value'
          description='The value of the property'
          value={newItem.value}
          multiline
          rows={5}
          autoAdjustHeight={true}
          onChange={(event, newValue?: string) =>
            setNewItem({ ...newItem, value: newValue ? newValue : '' })
          }
        />
      </Stack >
    </Panel >
  )
}

export default WebPropertiesNewPanel
