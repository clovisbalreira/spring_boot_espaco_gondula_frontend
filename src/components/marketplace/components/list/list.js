/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import MarketplaceService from '../../../../services/marketplace-service'

export default function List(){
  const [marketplace, setMarketplace] = useState([]);

  async function search() {
    const response = await MarketplaceService.findAll();
    console.log(response.data);
    setMarketplace(response.data);
  }

  search()
  return ( 
    <table class="striped">
      <thead>
        <tr>
            <th>Código</th>
            <th>Mercado</th>
            <th>Gondola</th>
            <th>Prateleira</th>
        </tr>
      </thead>
      <tbody>
        { marketplace.length > 0
          ? 
          (
            marketplace.map((marketplace) =>
              <tr key={marketplace.code_marketplace}>
                <td>{marketplace.code_marketplace}</td>
                <td>{marketplace.name}</td>
                <td>{marketplace.gondola}</td>
                <td>{marketplace.shelf}</td>
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