import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <HashRouter>
      <App /> 
    </HashRouter>
    </Provider>,
 
)
