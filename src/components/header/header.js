/* eslint-disable no-undef */
// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'

export default function Header () {

  return (
    <nav>
      <div className="nav-wrapper green darken-1">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/provider'>Fornecedor</NavLink></li>
          <li><NavLink to='/product'>Produto</NavLink></li>
          <li><NavLink to='/marketplace'>Mercado</NavLink></li>
          <li><NavLink to='/contractprovider'>Contrato Fornecedor</NavLink></li>
          <li><NavLink to='/contractproduct'>Contrato Produto</NavLink></li>
          <li><NavLink to='/space'>Espaço no Mercado</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}