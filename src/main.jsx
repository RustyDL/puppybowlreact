import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App'
import '../src/index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.cRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </React.StrictMode>
);