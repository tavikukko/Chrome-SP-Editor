import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { FontIcon, Nav } from 'office-ui-fabric-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'
import { setLoading } from '../store/home/actions'

export const FabricNav = withRouter(({ history }: RouteComponentProps) => {

  const dispatch = useDispatch()
  const [selectedKey, setSelectedKey] = useState('key1')

  return (
    <IonMenu contentId='main'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
          <IonButtons slot='end'>
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
