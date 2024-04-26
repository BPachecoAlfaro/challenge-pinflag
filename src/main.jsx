import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { PokedexApp } from './PokedexApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <PokedexApp />
    </BrowserRouter>
  // </React.StrictMode>
);
