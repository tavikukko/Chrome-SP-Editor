import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'

const Header = ({ title }: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton slot='start' autoHide={true} />
          <IonTitle>{title}</IonTitle>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

interface HeaderProps {
  title: string
}

export default Header
