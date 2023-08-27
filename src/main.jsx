import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import store from '../Store.js'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Contextprovider from './components/context/Contextprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Contextprovider>
  <Provider>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </Provider>
</Contextprovider>
);
