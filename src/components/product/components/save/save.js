/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from "react";
import { Row, Col, Card, Input, Button} from 'react-materialize';
import ProductService from '../../../../services/product-service';


export default function Save(){
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  
  function handleNameChange(evt){
    setName(evt.target.value)
  }

  function handlePriceChange(evt){
    setPrice(evt.target.value)
  }

  function clearFields(){
    setName('')
    setPrice('')
  }

  async function saveProduct(){
    let product = {
      name: name,
      price: price
    }
    
    if(product.name === '' || price === ''|| price <= 0){
      alert('Valores invalidos')      
    }else{
      const response = await ProductService.save(product);
      
      if (response.status === 200) {
        alert('Produto Cadastrado com sucesso !')
        clearFields();
      } else {
        alert('Erro ao cadastrar...')
      }
    }
  }

  return ( 
    <table class="striped">
      <Card>
        <span class="blue-text text-darken-2">Adicionar Produto</span>
      </Card>

      <Col s={12}>
        <Row class="input-field">
          <Input
            placeholder="Digite o nome produto"
            label="Produto"
            s={12}
            value={name}
            onChange={handleNameChange} 
          />
        </Row>
      </Col>

      <Col s={9}>
        <Row class="input-field">
          <Input
            placeholder="Digite o nome preço"
            label="Preço"
            s={12}
            value={price}
            onChange={handlePriceChange} 
          />
        </Row>
      </Col>

      <Col s={3}>
        <Button class="waves-effect waves-light btn" onClick={saveProduct}>Salvar</Button>
      </Col>
    </table>          
  );
}