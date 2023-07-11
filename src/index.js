import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Crud from "../src/Components/CRUD/Crud"
import EMS from "./Components/EMS/EMS"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Crud />
    <EMS/>

  </React.StrictMode>
);

