// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'

export default function Header () {
  return (
    <Row>
      <Navbar className="green darken-1">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/product'>Produto</NavLink></li>
      </Navbar>
    </Row> 
  )
}