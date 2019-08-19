import React from "react";
import { Route, Switch } from "react-router-dom";
import PnPjsConsole from "./pages/pnpjsconsole/editorPage";
import HomePage from "./pages/home/homePage";
import "./App.css";
import { FabricNav } from "./components/navigation/navigation";
import ScriptLinks from "./pages/scriptlinks/scriptlinks";
import { Stack } from "office-ui-fabric-react";
import { IonRouterOutlet } from '@ionic/react'
const App: React.FC = () => {
  return (
    <Stack
      horizontal
      gap={2}
    >
      <Stack maxWidth={250}>
        <FabricNav />
      </Stack>
      <Stack gap={20} grow>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/scriptlinks" component={ScriptLinks} />
          <Route path="/pnpjsconsole" component={PnPjsConsole} />
        </Switch>
      </Stack>
    </Stack>
  );
};

export default App;
