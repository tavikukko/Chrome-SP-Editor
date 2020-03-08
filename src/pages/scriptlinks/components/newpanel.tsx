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
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
import { setNewPanel } from '../../../store/scriptlinks/actions'
import { INewScriptLink } from '../../../store/scriptlinks/types'
import { addScriptLink } from '../chrome/chrome-actions'

const ScriptLinksNewPanel = () => {

  const { newpanel } = useSelector((state: IRootState) => state.scriptLinks)

  const dispatch = useDispatch()

  const [ newItem, setNewItem ] = useState<INewScriptLink>({
    Url: '',
    Sequence: 0,
    Scope: 2,
  })

  const { isDark } = useSelector((state: IRootState) => state.home)
  const panelOverlayProps: IOverlayProps = { isDarkThemed: isDark }

  const _onRenderNewFooterContent = () => {

    return (
      <PrimaryButton
        onClick={() => {
          if (newItem && newItem.Url && newItem.Sequence && newItem.Scope) {
            addScriptLink(dispatch, newItem)
          }
        }
        }
        style={{ marginRight: '8px' }}
        text={'Add'}
        // disabled={!valid}
      />
    )
  }

  const sequenceValidator = (value: string): string => {
    return +value > -1 && +value < 65537 ? '' : `The value specified must be between 0 and 65536 inclusively.`
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
          value={newItem.Url}
          onChange={(event, newValue?: string) =>
            setNewItem({ ...newItem, Url: newValue ? newValue : '' })
          }
        />
        <TextField
          label='Sequence'
          description='The sequence of the scriplink'
          styles={{ fieldGroup: { width: 100 } }}
          type={'number'}
          value={newItem.Sequence.toString()}
          onChange={(event, newValue?: string) =>
            setNewItem({ ...newItem, Sequence: newValue ? +newValue : 0 })
          }
          onGetErrorMessage={sequenceValidator}
        />
        <Dropdown
          label='Select scope'
          placeholder='Select an option'
          options={[
            { key: 2, text: 'Site Collection' },
            { key: 3, text: 'Current Web' },
          ]}
          selectedKey={newItem.Scope}
          onChange={(event, option?: IDropdownOption) =>
            setNewItem({ ...newItem, Scope: option ? +option.key : newItem.Scope })
          }
        />
      </Stack >
    </Panel >
  )
}

export default ScriptLinksNewPanel
