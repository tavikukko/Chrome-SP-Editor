import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './store'

initializeIcons();

// create global connection
(window as any).port = chrome.runtime.connect();
// send message to background script to register the tab inspected
(window as any).port.postMessage({
  type: 'init',
  tabId: chrome.devtools.inspectedWindow.tabId,
})

// this is to catch chrome developertools shortcut
// add all keykeyCodes to block the shorcuts
document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 191:
      e.stopImmediatePropagation()
      break
  }
  return
}, true)

// @ts-ignore: this is the only way to make it work
window.require.config({
  paths: {
    vs: '/vs',
  },
})

// @ts-ignore: this is the only way to make it work
window.MonacoEnvironment = {
  getWorkerUrl: (workerId: any, label: any) => {
    return 'worker-loader-proxy.js'
  },
} as any

// @ts-ignore: this is the only way to make it work
window.require(['vs/editor/editor.main', 'vs/language/typescript/tsWorker'], () => {

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
