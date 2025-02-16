import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:3000'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}> 
    <App/>
    </Provider>
  </React.StrictMode>,
)
