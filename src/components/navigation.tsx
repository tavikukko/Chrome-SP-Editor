import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonToggle,
  IonToolbar,
} from '@ionic/react'
import { FontIcon, Nav, TooltipDelay, TooltipHost } from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { fabricDark, fabricDefault } from '../fabricThemes'
import { IRootState } from '../store'
import { setDarkMode, setLoading, setTheme } from '../store/home/actions'

export const FabricNav = withRouter(({ history }: RouteComponentProps) => {

  const dispatch = useDispatch()
  const [selectedKey, setSelectedKey] = useState('key1')
  const { isDark } = useSelector((state: IRootState) => state.home)

  const toggleDarkTheme = () => {
    document.body.classList.toggle('dark', !isDark)
    dispatch(setTheme(!isDark ? fabricDark : fabricDefault))
    dispatch(setDarkMode(!isDark))
  }

  return (
    <IonMenu contentId='main'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='end'>
            <TooltipHost content={!isDark ? 'Switch to Dark Mode' : 'Switch to Light Mode'} delay={TooltipDelay.zero} >
              <IonToggle onClick={toggleDarkTheme} color='success' checked={isDark}/>
            </TooltipHost>
            <TooltipHost content='Reload SP Editor' delay={TooltipDelay.zero} >
              <IonButton
                onClick={() =>
                  (document.location.href =
                    document.location.protocol !== 'chrome-extension:'
                      ? document.location.origin
                      : document.location.origin + '/index.html')
                }
              >
                <FontIcon iconName='Refresh' />
              </IonButton>
            </TooltipHost>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class='outer-content'>
        <Nav
          selectedKey={selectedKey}
          onLinkClick={(event, element) => {
            if (event && element) {
              const menu = document.querySelector('ion-menu') as any
              menu && menu.close()
              event.preventDefault()
              if (element.key && selectedKey !== element.key) {
                dispatch(setLoading(false))
                history.push(element.url)
                setSelectedKey(element.key)
              }
            }
          }}
          groups={[
            {
              links: [
                {
                  name: 'Home',
                  url: '/',
                  key: 'key1',
                },
                {
                  name: 'Scriptlinks',
                  url: '/scriptlinks',
                  key: 'key3',
                },
                {
                  name: 'PnP JS Console',
                  url: '/pnpjsconsole',
                  key: 'key8',
                },
                {
                  name: 'Files',
                  url: '/files',
                  key: 'key4',
                },
                {
                  name: 'Web properties',
                  url: '/webproperties',
                  key: 'key5',
                },
                {
                  name: 'List properties',
                  url: '/listproperties',
                  key: 'key6',
                },
                {
                  name: 'Webhooks',
                  url: '/webhooks',
                  key: 'key7',
                },
                {
                  name: 'Search',
                  url: '/search',
                  key: 'key9',
                },
                {
                  name: 'Page editor',
                  url: '/pageeditor',
                  key: 'key10',
                },
                {
                  name: 'File editor',
                  url: '/fileeditor',
                  key: 'key11',
                },
                {
                  name: 'Modern properties',
                  url: '/modernproperties',
                  key: 'key12',
                },
                {
                  name: 'Site designs',
                  url: '/sitedesigns',
                  key: 'key13',
                },
                {
                  name: 'Site scripts',
                  url: '/sitescripts',
                  key: 'key14',
                },
                {
                  name: 'App catalog',
                  url: '/appcatalog',
                  key: 'key15',
                },
              ],
            },
          ]}
        />
      </IonContent>
    </IonMenu>
  )
})
