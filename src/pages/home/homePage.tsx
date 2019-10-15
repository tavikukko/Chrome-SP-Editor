import React, { useState } from 'react'

/* redux imports */
import { useDispatch, useSelector } from 'react-redux'
import { addItemAsync } from '../../store/home/async-actions'
import { IRootState } from '../../store/index'

/* UI imports */
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import { PrimaryButton, TextField } from 'office-ui-fabric-react'
import Header from '../../components/header'

const HomePage = () => {
  /* component state */
  const [inputText, setInputText] = useState()

  /* redux */
  const dispatch = useDispatch()
  const { list, loading } = useSelector((state: IRootState) => state.home)
  const { isDark } = useSelector((state: IRootState) => state.home)

  /* compoent methods */
  const onInputChange = (newValue?: string) => {
    setInputText(newValue)
  }
  const onAddClick = () => {
    addItemAsync(dispatch, inputText)
    setInputText('')
  }

  /* render */
  return (
    <>
      <IonPage>
        <Header title={'Home'} />
        <IonContent>
          <IonGrid color='primary'>
            <IonRow class='ion-no-padding'>
              <IonCol class='ion-no-padding'>
                <TextField
                  label='Standard'
                  value={inputText}
                  onChange={(e, v) => onInputChange(v)}
                />
                <PrimaryButton text='Add item' onClick={onAddClick} />
                <ul>
                  {list.map(l => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                {loading && <div>Loading...</div>}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default HomePage
