import {
  Dropdown,
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
import { setNewPanel } from '../../../store/scriptlinks/actions'
import { addScriptLink } from '../../../store/scriptlinks/async-actions'
import { INewScriptLink } from '../../../store/scriptlinks/types'

const ScriptLinksNewPanel = () => {

  const { newpanel } = useSelector((state: IRootState) => state.scriptLinks)

  const dispatch = useDispatch()

  const { isDark } = useSelector((state: IRootState) => state.home)
  const panelOverlayProps: IOverlayProps = { isDarkThemed: isDark }

  const _onRenderNewFooterContent = () => {
    const payload: INewScriptLink = {
      Url: '~sitecollection/Style Library/Valo/camljs.min.js?v=1.20.6',
      Sequence: 10012,
      Scope: 2,
    }
    return (
      <PrimaryButton
        onClick={() => {
          addScriptLink(dispatch, payload)
          // setShowNewPanel(false)
        }
        }
        style={{ marginRight: '8px' }}
        text={'Add'}
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
      headerText='Add ScriptLink'
      closeButtonAriaLabel='Close'
      onRenderFooterContent={_onRenderNewFooterContent}
      overlayProps={panelOverlayProps}
    >
      {/* Panel new form */}
      < Stack >
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
          label='Select scope'
          placeholder='Select an option'
          options={[
            { key: '2', text: 'Current Web' },
            { key: '3', text: 'Site Collection' },
          ]}
        />
      </Stack >
    </Panel >
  )
}

export default ScriptLinksNewPanel
