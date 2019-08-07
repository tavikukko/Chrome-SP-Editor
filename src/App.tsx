import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PnPjsConsole from './pages/pnpjsconsole/editorPage';
import HomePage from './pages/home/homePage'
import './App.css';
import { FabricNav } from './components/navigation/navigation';
import  ScriptLinks from './pages/scriptlinks/scriptlinks';

const App: React.FC = () => {

  return (
    <div className='container'>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
            <FabricNav />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/scriptlinks' component={ScriptLinks} />
              <Route path='/pnpjsconsole' component={PnPjsConsole} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
