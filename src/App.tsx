import React from 'react';
import { Route, Switch } from 'react-router-dom'
import EditorPage from './components/editor/editorPage';
import HomePage from './components/home/homePage'
import './App.css';
import Header from './components/header/header';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/editor' component={EditorPage} />
      </Switch>
    </div>
  );
}

export default App;
