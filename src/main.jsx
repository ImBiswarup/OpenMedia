import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as BR } from "react-router-dom";
import { AppContext_Provider } from './components/Context/AppContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext_Provider>
    <BR>
      <App />
    </BR>
  </AppContext_Provider>
);
