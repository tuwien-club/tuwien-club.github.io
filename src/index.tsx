import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store, PersistGate, persistor} from '@store/store'

import App from './pages/_app'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
)
