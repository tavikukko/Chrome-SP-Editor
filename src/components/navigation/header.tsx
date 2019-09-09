import React from "react";
import { IonHeader, IonToolbar, IonMenuButton, IonTitle } from "@ionic/react";

const Header = ({ title }: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonMenuButton slot="start" autoHide={true} />
        <IonTitle>{ title }</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

interface HeaderProps {
  title: string
}

export default Header;
