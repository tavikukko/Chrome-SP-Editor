import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import PnPjsConsole from './pages/pnpjsconsole/pnpjsconsole'

import { IonApp, IonPage, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import './App.css'
import { FabricNav } from './components/navigation/navigation'
import HomePage from './pages/home/homePage'
import ScriptLinks from './pages/scriptlinks/scriptlinks'

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
  ICustomizations,
} from 'office-ui-fabric-react/lib/Utilities'

import { createTheme } from 'office-ui-fabric-react/lib/Styling'

const fabricDark: ICustomizations = {
  settings: {
    theme: createTheme({
      palette: {
        neutralLighterAlt: '#282828',
        neutralLighter: '#313131',
        neutralLight: '#3f3f3f',
        neutralQuaternaryAlt: '#484848',
        neutralQuaternary: '#4f4f4f',
        neutralTertiaryAlt: '#6d6d6d',
        neutralTertiary: '#c8c8c8',
        neutralSecondary: '#d0d0d0',
        neutralPrimaryAlt: '#dadada',
        neutralPrimary: '#ffffff',
        neutralDark: '#f4f4f4',
        black: '#f8f8f8',
        white: '#1f1f1f',
        themePrimary: '#3a96dd',
        themeLighterAlt: '#020609',
        themeLighter: '#091823',
        themeLight: '#112d43',
        themeTertiary: '#235a85',
        themeSecondary: '#3385c3',
        themeDarkAlt: '#4ba0e1',
        themeDark: '#65aee6',
        themeDarker: '#8ac2ec',
        accent: '#3a96dd',
      },
    }),
  },
  scopedSettings: {},
}

const fabricDefault: ICustomizations = {
  settings: {
    theme: createTheme({
      palette: {
        themePrimary: '#0078d4',
        themeLighterAlt: '#eff6fc',
        themeLighter: '#deecf9',
        themeLight: '#c7e0f4',
        themeTertiary: '#71afe5',
        themeSecondary: '#2b88d8',
        themeDarkAlt: '#106ebe',
        themeDark: '#005a9e',
        themeDarker: '#004578',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#c2c2c2',
        neutralSecondary: '#858585',
        neutralPrimaryAlt: '#4b4b4b',
        neutralPrimary: '#333333',
        neutralDark: '#272727',
        black: '#1d1d1d',
        white: '#ffffff',
      },
    }),
  },
  scopedSettings: {},
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

const App = () => {

  const [fabricTheme, setFabricTheme] = useState()

  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd)
    setFabricTheme(shouldAdd ? fabricDark : fabricDefault)
  }

  useEffect(() => {
    toggleDarkTheme(prefersDark.matches)
    prefersDark.addListener(mediaQuery => toggleDarkTheme(mediaQuery.matches))
  }, [])

  return (
    <IonApp>
      <Fabric>
        <Customizer {...fabricTheme}>
          <IonReactRouter>
            <IonSplitPane contentId='main'>
              <FabricNav />
              <IonPage id='main'>
                <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/index.html' component={HomePage} />
                  <Route path='/scriptlinks' component={ScriptLinks} />
                  <Route path='/pnpjsconsole' component={PnPjsConsole} />
                </Switch>
              </IonPage>
            </IonSplitPane>
          </IonReactRouter>
        </Customizer>
      </Fabric>
    </IonApp>
  )
}

export default App
