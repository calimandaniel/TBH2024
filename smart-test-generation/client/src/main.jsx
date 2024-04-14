import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import APIService from './API/APIService.js'
import { Provider } from 'react-redux';
import store from './API/store.js';

// eslint-disable-next-line no-unused-vars
const api = new APIService();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
