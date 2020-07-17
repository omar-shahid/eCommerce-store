import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { CartContextProvider } from "./CartContext"
import { CartCountContextProvider } from "./CartCountContext"

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <CartCountContextProvider>
        <App />
      </CartCountContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

