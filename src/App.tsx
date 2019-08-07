import React from 'react';
import { Route, Switch } from 'react-router-dom'
import EditorPage from './components/editor/editorPage';
import HomePage from './components/home/homePage'
import './App.css';
import { FabricNav } from './components/navigation/navigation';

const App: React.FC = () => {

  return (
    <div className='container'>
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
            <FabricNav className=""/>
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/editor' component={EditorPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
