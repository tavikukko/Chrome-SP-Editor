import { IonContent, IonPage } from '@ionic/react'
import React from 'react'

import Header from '../../components/header'
import PnPjsEditor from './components/pnpjseditor'

const PnPjsConsole = () => {

  return (
      <IonPage>
        <Header title={'PnPjs Console'} />
        <IonContent>
          <PnPjsEditor />
        </IonContent>
      </IonPage>
  )
}

export default PnPjsConsole
