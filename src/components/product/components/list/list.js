/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ProductService from '../../../../services/product-service'
import ProviderService from '../../../../services/provider-service'

export default function List(){
  const [product, setProduct] = useState([]);
  const [provider, setProvider] = useState([]);
  
 
  async function update() {
    const response = await ProductService.findAll();
    console.log(response.data);
    setProduct(response.data);
  }

  async function updateProvide(){
    const responseProvide = await ProviderService
    .findAll();
    console.log(responseProvide);
    setProvider(responseProvide.data)
  }

  update()
  updateProvide()

  const providerName = function pN(codigo){
    provider.filter((provide) => {
      return provide.id_provider === codigo
      } 
    )
  }

  return ( 
    <table class="striped">
      <thead>
        <tr>
          <th>Código</th>
          <th>Produto</th>
          <th>Fornecedor</th>
        </tr>
      </thead>
      <tbody>
        { product.length > 0
          ? 
          (
            product.map((product) =>
              <tr key={product.code_product}>
                <td>{product.code_product}</td>
                <td>{product.name}</td>
                <td>{}</td>
              </tr>
            )
          ) 
          : (
            <div>Não existe nenhum Produto</div>
          )
        }
      </tbody>
    </table>
  );
}