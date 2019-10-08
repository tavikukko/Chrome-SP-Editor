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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
