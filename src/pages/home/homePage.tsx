import { IonContent, IonPage } from '@ionic/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Header from '../../components/header'
import logo from './logo.png'
const HomePage = () => {

  const content = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(content.current, { top: '-270%', duration: 100 })
  }, [])

  return (
    <IonPage>
      <Header title={''} />
      <IonContent>
        <section className='warning-text'>
          <div className='content' ref={content}>
            <img src={logo} alt={'Warning!'} className='logo'/>
            <p>
              Use of this tool exposes you to potential security threats
              which can result in others gaining access to your personal
              Office 365 data (documents, emails, conversations and more).
            </p>
            <p>
              Make sure you trust the person or organization that asked you
              to access this tool before proceeding.
            </p>
            <p>
              Learn more here:
              https://technet.microsoft.com/en-us/library/bb794823.aspx
            </p>
            <p className='darkside'>
            The dark side of this tool is a pathway to many
            abilities some consider to be...
            </p>
            <h1 className='warning-title'>
            UNNATURAL
            </h1>
          </div>
        </section>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
