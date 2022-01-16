// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

const Home = () => (
  <Row>
    <Col m={8} s={12} offset={'m2'}>
      <h2 className="subtitle">Cadastro de produto.</h2>
      <Card>
        <div>
        <p>Cadastro de produtos e seus respectativos preços.</p>
        <p>Para o seu controle da loja.</p>
        </div>
      </Card>      
    </Col>
  </Row>
);

export default Home;