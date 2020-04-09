import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/header'
import ListPropertiesCommands from './components/commands'
import ListPropertiesEditPanel from './components/editpanel'
import ListPropertiesList from './components/listpropertieslist'
import ListPropertiesNewPanel from './components/newpanel'

const ListProperties = () => {

  return (
    <IonPage>
      <Header title={'List Properties'} />
      {/* Actions menu */}
      <ListPropertiesCommands />
      <IonContent>
        {/* List of list properties */}
        <ListPropertiesList/>
        {/* Panel to edit list property */}
        <ListPropertiesEditPanel />
        {/* Panel to create new list property */}
        <ListPropertiesNewPanel />
      </IonContent>
    </IonPage>
  )
}

export default ListProperties
