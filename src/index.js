import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Crud from "../src/Components/CRUD/Crud"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
     <Crud/>
  </React.StrictMode>
);

