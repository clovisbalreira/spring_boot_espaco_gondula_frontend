/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ProviderService from '../../../../services/provider-service'

export default function List(){
  const [provider, setProvider] = useState([]);

  async function listProvider() {
    const response = await ProviderService.findAll();
    console.log(response.data);
    setProvider(response.data);
  }

  useEffect (() => {
    listProvider()
  },[])

  return (
    <table class="striped">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fornecedor</th>
        </tr>
      </thead>
      <tbody>
        { provider.length > 0
          ? 
          (
            provider.map((provider) =>
              <tr key={provider.code_provider}>
                <td>{provider.code_provider}</td>
                <td>{provider.name}</td>
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