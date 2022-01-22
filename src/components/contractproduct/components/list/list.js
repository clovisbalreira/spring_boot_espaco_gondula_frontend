/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ContractProductService from '../../../../services/contractproduct-service'

export default function List(){
  const [contractProduct, setContractProduct] = useState([]);

  async function search() {
    const response = await ContractProductService.findAll();
    console.log(response.data);
    setContractProduct(response.data);
  }

  search()

  return ( 
    <table class="striped">
      <thead>
        <tr>
          <th>Código</th>
          <th>Contrato</th>
          <th>Percentual</th>
          <th>Produto</th>
          <th>Contrato Fornecedor</th>
        </tr>
      </thead>
      <tbody>
        { contractProduct.length > 0
          ? 
          (
            contractProduct.map((contractProduct) =>
              <tr key={contractProduct.code_contractproduct}>
                <td>{contractProduct.code_contractproduct}</td>
                <td>{contractProduct.name}</td>
                <td>{contractProduct.percentage}</td>
                <td>{contractProduct.id_product}</td>
                <td>{contractProduct.id_contractprovider}</td>
              </tr>
            )
          ) 
          : (
            <div>Não existe nenhum Fornecer</div>
          )
        }
      </tbody>
    </table>
  );
}