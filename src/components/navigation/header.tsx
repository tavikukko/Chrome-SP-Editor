import React from "react";
import { IonHeader, IonToolbar, IonMenuButton } from "@ionic/react";

const menuAction = async (event: any) => {
  const homemenu = document.querySelector("ion-menu-controller") as any;
  const enabled = await homemenu.isEnabled();
  if (!enabled) {
    homemenu.enable(true);
    await homemenu.open();
  } else {
    const toggle = await homemenu.toggle();
    if (!toggle) {
      homemenu.enable(false);
    } else {
      event.preventDefault();
    }
  }
};

function MyHeader() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonMenuButton slot="start" autoHide={true} />
      </IonToolbar>
    </IonHeader>
  );
}

export default MyHeader;
