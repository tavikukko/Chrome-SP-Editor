import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import PnPjsConsole from './pages/pnpjsconsole'

import { IonApp, IonPage, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import './App.css'
import { FabricNav } from './components/navigation'
import HomePage from './pages/home/homePage'
import ScriptLinks from './pages/scriptlinks'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'

/* Theme variables */
import './theme/variables.css'

import { Fabric } from 'office-ui-fabric-react'
import {
  Customizer,
} from 'office-ui-fabric-react/lib/Utilities'

import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from './components/loadingSpinner'
import MessageBar from './components/messageBar'
import { fabricDark, fabricDefault } from './fabricThemes'
import ListProperties from './pages/listproperties'
import Webhooks from './pages/webhooks'
import WebProperties from './pages/webproperties'
import { IRootState } from './store'
import { setDarkMode, setTheme } from './store/home/actions'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

const App = () => {

  const { theme } = useSelector((state: IRootState) => state.home)

  const dispatch = useDispatch()

  useEffect(() => {

    const toggleDarkTheme = (shouldAdd: boolean) => {
      document.body.classList.toggle('dark', shouldAdd)
      dispatch(setTheme(shouldAdd ? fabricDark : fabricDefault))
      dispatch(setDarkMode(shouldAdd))
    }

    // toggleDarkTheme(prefersDark.matches)
    // this will set the theme according the system preferences
    // now we default to dark (true)
    toggleDarkTheme(true)
    prefersDark.addListener(mediaQuery => toggleDarkTheme(mediaQuery.matches))
  }, [dispatch])

  return (
    <IonApp>
      <Fabric>
        <Customizer {...theme}>
          <IonReactRouter>
            <IonSplitPane contentId='main'>
              <FabricNav />
              <IonPage id='main'>
                <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/index.html' component={HomePage} />
                  <Route path='/scriptlinks' component={ScriptLinks} />
                  <Route path='/pnpjsconsole' component={PnPjsConsole} />
                  <Route path='/webproperties' component={WebProperties} />
                  <Route path='/listproperties' component={ListProperties} />
                  <Route path='/webhooks' component={Webhooks} />
                </Switch>
                <LoadingSpinner />
                <MessageBar />
              </IonPage>
            </IonSplitPane>
          </IonReactRouter>
        </Customizer>
      </Fabric>
    </IonApp>
  )
}

export default App
