import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/header'
import WebPropertiesCommands from './components/commands'
import WebPropertiesEditPanel from './components/editpanel'
import WebPropertiesNewPanel from './components/newpanel'
import WebPropertiesList from './components/webpropertieslist'

const WebProperties = () => {

  return (
    <IonPage>
      <Header title={'Web Properties'} />
      {/* Actions menu */}
      <WebPropertiesCommands />
      <IonContent>
        {/* List of web properties */}
        <WebPropertiesList />
        {/* Panel to edit web property */}
        <WebPropertiesEditPanel />
        {/* Panel to create new web property */}
        <WebPropertiesNewPanel />
      </IonContent>
    </IonPage>
  )
}

export default WebProperties
