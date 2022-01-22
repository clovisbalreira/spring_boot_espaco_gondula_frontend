/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Row } from 'react';
import DataProvider from '../dataprovider/dataprovider'

function TableProvider(){
  return ( 
    <table class="striped">
      <caption><h4>Espaço Fornecedor</h4></caption>
        <thead>
          <tr>
            <th>Código</th>
            <th>Fornecedor</th>
            <th>Porcentagem</th>
            <th>Produtos na Prateleira</th>
            <th>Produtos na Gondola</th>
          </tr>
        </thead>
      <DataProvider/>
    </table>
    );
}

export default TableProvider;