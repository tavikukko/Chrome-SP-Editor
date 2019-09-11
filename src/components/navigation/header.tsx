import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonTitle,
  IonButton,
  IonButtons,
} from "@ionic/react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";

const Header = ({ title }: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton slot="start" autoHide={true} />
          <IonTitle>{title}</IonTitle>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton
            onClick={() =>
              (document.location.href =
                document.location.protocol !== "chrome-extension:"
                  ? document.location.origin
                  : document.location.origin + "/index.html")
            }
          >
            <FontIcon iconName="Refresh" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

interface HeaderProps {
  title: string;
}

export default Header;
