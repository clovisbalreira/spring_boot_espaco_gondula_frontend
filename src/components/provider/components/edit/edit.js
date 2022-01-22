/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import { Row, Col, Card, Input, Button} from 'react-materialize';
import ProviderService from '../../../../services/provider-service';

export default function Edit(){
  const [codigo, setCodigo] = useState('');
  const [name, setName] = useState('');
  const [provider, setProvider] = useState([]);

  function handleNameChange(evt){
    setName(evt.target.value)
  }

  function handleCodigoChange(evt){
    setCodigo(evt.target.value)
  }

  function clearFields(){
    setName('')
  }

  async function listProvider() {
    const response = await ProviderService.findById();
    console.log(response.data);
    setProvider(response.data);
  }  

  useEffect (() => {
    listProvider()
  },[])

  return ( 
    <Row>
   </Row>          
  );
}
/**
 *       <Card>
        <span class="blue-text text-darken-2">Editar Fornecedor</span>
      </Card>

      <Col s={9}>
        <Row class="input-field ">
        <Input 
            placeholder="Digite o código" 
            label="Código" 
            s={12}
            value={name}
            onChange={handleNameChange}
          />
        </Row>
      </Col>
      <Col s={3}>
        <Button class="waves-effect waves-light btn">Editar</Button>
      </Col>

      <Col s={12}>
        <Row class="input-field row">
          <Input 
            placeholder="Digite o fornecedor" 
            label="Fornecedor" 
            s={12}
            //value={name}
            //onChange={handleNameChange}
          />
        </Row>
      </Col>
 
 */