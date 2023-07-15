import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Crud from "../src/Components/CRUD/Crud"
import EMS from "./Components/EMS/EMS"
import Todo from './Components/localStorage-todo/todo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Todo />
    <App />
    <Crud />
    <EMS />
  
  </React.StrictMode>
);

