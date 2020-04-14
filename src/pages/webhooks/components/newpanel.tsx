import {
  DatePicker,
   DayOfWeek,
   Dropdown,
   IDatePickerStrings,
   IDropdownOption,
   IOverlayProps,
   mergeStyleSets,
   Panel,
   PanelType,
   PrimaryButton,
   Stack,
   TextField,
} from 'office-ui-fabric-react'
// import { addScriptLink } from '../chrome/chrome-actions'
import { addMonths, addYears } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store'
// import { INewScriptLink } from '../../../store/scriptlinks/types'
import { setNewPanel } from '../../../store/webhooks/actions'

const WebhooksNewPanel = () => {

  const { newpanel } = useSelector((state: IRootState) => state.webHooks)

  const dispatch = useDispatch()
/*
  const [ newItem, setNewItem ] = useState<INewScriptLink>({
    Url: '',
    Sequence: 0,
    Scope: 2,
  })
*/
  const { isDark } = useSelector((state: IRootState) => state.home)
  const panelOverlayProps: IOverlayProps = { isDarkThemed: isDark }

  const _onRenderNewFooterContent = () => {

    return (
      <PrimaryButton
        onClick={() => {
         /* if (newItem && newItem.Url && newItem.Sequence && newItem.Scope) {
            // addScriptLink(dispatch, newItem)
          }*/
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

  const today: Date = new Date(Date.now())
  const minDate: Date = addMonths(today, -1)
  const maxDate: Date = addMonths(today, 6)
  const description = `When date boundaries are set (via minDate and maxDate props) the DatePicker will not allow
  out-of-bounds dates to be picked or entered. In this example, the allowed dates are
  ${minDate.toLocaleDateString()}-${maxDate.toLocaleDateString()}`

  const DayPickerStrings: IDatePickerStrings = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',

    isRequiredErrorMessage: 'Field is required.',

    invalidInputErrorMessage: 'Invalid date format.',

    isOutOfBoundsErrorMessage: `Date must be between ${minDate.toLocaleDateString()}-${maxDate.toLocaleDateString()}`,
  }

  const controlClass = mergeStyleSets({
    control: {
      margin: '0 0 15px 0',
      maxWidth: '300px',
    },
  })

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
        <DatePicker
          label='Expiration date'
          className={controlClass.control}
          isRequired={false}
          firstDayOfWeek={DayOfWeek.Monday}
          strings={DayPickerStrings}
          placeholder='Select a date...'
          ariaLabel='Select a date'
          minDate={today}
          maxDate={maxDate}
          allowTextInput={true}
        />
        <TextField
          label='Url'
          description='Url of the file to be injected.'
          placeholder='~sitecollection/Style Library/custom.js'
          multiline
          autoAdjustHeight
         // value={newItem.Url}
         /* onChange={(event, newValue?: string) =>
            setNewItem({ ...newItem, Url: newValue ? newValue : '' })
          }*/
        />
        <TextField
          label='Sequence'
          description='The sequence of the scriplink'
          styles={{ fieldGroup: { width: 100 } }}
          type={'number'}
         // value={newItem.Sequence.toString()}
         /* onChange={(event, newValue?: string) =>
            setNewItem({ ...newItem, Sequence: newValue ? +newValue : 0 })
          }*/
          onGetErrorMessage={sequenceValidator}
        />
        <Dropdown
          label='Select scope'
          placeholder='Select an option'
          options={[
            { key: 2, text: 'Site Collection' },
            { key: 3, text: 'Current Web' },
          ]}
         /* selectedKey={newItem.Scope}
          onChange={(event, option?: IDropdownOption) =>
            setNewItem({ ...newItem, Scope: option ? +option.key : newItem.Scope })
          }*/
        />
      </Stack >
    </Panel >
  )
}

export default WebhooksNewPanel
