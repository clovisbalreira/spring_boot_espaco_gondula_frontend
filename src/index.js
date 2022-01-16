// importando o react
import React from 'react';
// Importando o react Dom para injetar o <APP />
import ReactDOM from 'react-dom';
// Importando o component APP
import App from './App';
// Importando o component Produto
//Importando a nossa Lib de rotas
import { BrowserRouter } from 'react-router-dom';
// Importando o css
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
