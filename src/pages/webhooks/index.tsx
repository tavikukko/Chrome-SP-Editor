import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/header'
import WebhooksCommands from './components/commands'
import WebhooksNewPanel from './components/newpanel'
import WebHooksList from './components/webhookslist'

const Webhooks = () => {

  return (
    <IonPage>
      <Header title={'Webhooks'} />
      {/* Actions menu */}
      <WebhooksCommands />
      <IonContent>
        {/* List of webhooks */}
        <WebHooksList/>
        {/* Panel to edit webhook */}

        {/* Panel to create new webhook */}
        <WebhooksNewPanel />
      </IonContent>
    </IonPage>
  )
}

export default Webhooks
