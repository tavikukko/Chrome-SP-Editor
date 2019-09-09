import React from "react";
import { Route, Switch } from "react-router-dom";
import PnPjsConsole from "./pages/pnpjsconsole/pnpjsconsole";

import HomePage from "./pages/home/homePage";
import "./App.css";
import { FabricNav } from "./components/navigation/navigation";
import ScriptLinks from "./pages/scriptlinks/scriptlinks";
import {
  IonSplitPane,
  IonPage,
  IonApp
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import "./theme/variables.css";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <FabricNav />
          <IonPage id="main">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/scriptlinks" component={ScriptLinks} />
              <Route path="/pnpjsconsole" component={PnPjsConsole} />
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
