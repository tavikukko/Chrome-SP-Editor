import { IonContent, IonPage } from '@ionic/react'
import React from 'react'

import Header from '../../components/header'
import PnPjsEditor from './components/pnpjseditor'

const PnPjsConsole = () => {

  return (
    <>
      <IonPage>
        <IonContent>
          <Header title={'PnPjs Console'} />
          <PnPjsEditor />
        </IonContent>
      </IonPage>
    </>
  )
}

export default PnPjsConsole
