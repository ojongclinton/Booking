import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css'
import LocationContextProvider from './Hooks/LocationContextProvider';
import { store } from './store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Provider store={store}>
          <LocationContextProvider>
            <App/>
          </LocationContextProvider>
      </Provider>
  </BrowserRouter>
);

