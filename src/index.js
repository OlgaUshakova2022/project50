import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './Redux/state.js';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
     
          <App a={state} />
 
        
  </React.StrictMode>
);



