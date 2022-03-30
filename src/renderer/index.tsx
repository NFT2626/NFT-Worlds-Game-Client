import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Provider } from './components/Store'
import './assets/fonts/OpenSans.css'

if (module.hot) {
  module.hot.accept()
}

const container = document.querySelector('#app')
const root = createRoot(container!)

root.render(
  <Provider>
    <App />
  </Provider>
)
