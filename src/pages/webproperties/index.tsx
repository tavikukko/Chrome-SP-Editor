import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/header'
import WebPropertiesCommands from './components/commands'

const WebProperties = () => {

  return (
    <IonPage>
      <Header title={'Web Properties'} />
      {/* Actions menu */}
      <WebPropertiesCommands />
      <IonContent>
        {/* List of web properties */}

        {/* Panel to edit web property */}

        {/* Panel to create new web property */}

      </IonContent>
    </IonPage>
  )
}

export default WebProperties
