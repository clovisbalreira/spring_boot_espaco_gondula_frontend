/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Card, Input, Button} from 'react-materialize';
import ProviderService from '../../../../services/provider-service';

export default function Save(){
  const [name, setName] = useState('');

  function handleNameChange(evt){
    setName(evt.target.value)
  }

  function clearFields(){
    setName('')
  }

  async function saveProvider(){
    let provider = {
      name: name
    }

    const response = await ProviderService.save(provider);

    if (response.status === 200) {
      alert('Cadastrado com sucesso !')
      clearFields();
    } else {
      alert('Erro ao cadastrar...')
    }
  }

  return ( 
    <Row>
   </Row>          
  );
}
/**
 *       <Card>
        <span class="blue-text text-darken-2">Adicionar Fornecedor</span>
      </Card>

      <Col s={9}>
        <Row class="input-field">
          <Input 
            placeholder="Digite o fornecedor" 
            label="Fornecedor" 
            s={12}
            value={name}
            onChange={handleNameChange}
          />
        </Row>
      </Col>
      <Col s={2}>
        <Button  className="waves-effect waves-light btn" onClick={saveProvider}>Salvar</Button>
      </Col>
 
 */