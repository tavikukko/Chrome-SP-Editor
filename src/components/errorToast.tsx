import { IonToast } from '@ionic/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../store'
import { setError, setErrorMessage } from '../store/home/actions'

const ErrorToast = () => {

  const dispatch = useDispatch()

  const { error, errorMessage } = useSelector((state: IRootState) => state.home)

  return (
    <IonToast
      isOpen={error}
      onDidDismiss={() => {
        dispatch(setError(false))
        dispatch(setErrorMessage(''))
      }}
      message={errorMessage}
      duration={8000}
      animated={true}
      color={'danger'}
      position={'bottom'}
      showCloseButton={true}
    />
  )
}

export default ErrorToast
