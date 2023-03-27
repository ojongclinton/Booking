import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css'
import LocationContextProvider from './Hooks/LocationContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LocationContextProvider>
      <App/>
    </LocationContextProvider>
  </BrowserRouter>
);

