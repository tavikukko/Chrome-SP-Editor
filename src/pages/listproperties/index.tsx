import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/header'
import ListPropertiesCommands from './components/commands'
import ListPropertiesList from './components/listpropertieslist'

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

        {/* Panel to create new list property */}

      </IonContent>
    </IonPage>
  )
}

export default ListProperties
