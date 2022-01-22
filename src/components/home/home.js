// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      {/* <UserProfile /> */}
    </Col>
    <Col m={8} s={12}>
      <h2 className="subtitle ">Espaço de Gondola</h2>
      <Card>
        <div>
        <p>Os mercados vendem seus espaços para os fornecedore que decidem onde colocam a quantidade de seus produtos na gondula dos mercados.
          </p>
        </div>
      </Card>      
    </Col>
  </Row>
);

export default Home;