import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/header'
import ScriptLinkCommands from './components/commands'
import ScriptLinksEditPanel from './components/editpanel'
import ScriptLinksNewPanel from './components/newpanel'
import ScriptLinkList from './scriptlinklist'

const ScriptLinks = () => {

  return (
    <IonPage>
      <Header title={'ScriptLinks'} />
      <IonContent>
        {/* Actions menu */}
        <ScriptLinkCommands />
        {/* List of scriptLinks */}
        <ScriptLinkList />
        {/* Panel to edit scriptlinks */}
        <ScriptLinksEditPanel />
        {/* Panel to create new scriptlink */}
        <ScriptLinksNewPanel />
      </IonContent>
    </IonPage>
  )
}

export default ScriptLinks
