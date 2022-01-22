/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ContractProviderService from '../../../../services/contractprovider-service';

export default function List(){
  const [contractprovider, setContractProvider] = useState([]);

  async function search() {
    const response = await ContractProviderService.findAll();
    console.log(response.data);
    setContractProvider(response.data);
  }

  search()

  return ( 
    <table class="striped">
      <thead>
        <tr>
          <th>Código</th>
          <th>Contrato</th>
          <th>Porcentagem</th>
          <th>Fornecedor</th>
          <th>Mercado</th>
        </tr>
      </thead>
      <tbody>
        { contractprovider.length > 0
          ? 
          (
            contractprovider.map((contractprovider) =>
              <tr key={contractprovider.code_contractprovider}>
                <td>{contractprovider.code_contractprovider}</td>
                <td>{contractprovider.name}</td>
                <td>{contractprovider.percentage}</td>
                <td>{contractprovider.id_provider}</td>
                <td>{contractprovider.id_marketplace}</td>
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