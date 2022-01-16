/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ProductService from '../../../../services/product-service'

export default function List(){
  const [product, setProduct] = useState([]);
  
 
  async function tableList() {
    const response = await ProductService.findAll();
    console.log(response.data);
    setProduct(response.data);
  }  

  useEffect (() => {
    tableList()
  },[])

  return ( 
    <table class="striped">
      <thead>
        <tr>
          <th>Código</th>
          <th>Produto</th>
          <th>Preço</th>
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
                <td>{product.price}</td>
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