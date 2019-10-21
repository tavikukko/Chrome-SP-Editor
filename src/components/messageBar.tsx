import { IonToast } from '@ionic/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../store'
import { setAppMessage } from '../store/home/actions'

const MessageBar = () => {

  const dispatch = useDispatch()

  const { appMessage } = useSelector((state: IRootState) => state.home)

  return (
    <IonToast
      isOpen={appMessage.showMessage}
      onDidDismiss={() => {
        dispatch(setAppMessage({ ...appMessage, showMessage: false }))
      }}
      message={appMessage.message}
      duration={8000}
      color={appMessage.color}
      position={'bottom'}
      showCloseButton={true}
    />
  )
}

export default MessageBar
