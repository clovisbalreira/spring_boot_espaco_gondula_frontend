/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DataProduct from "../dataproduct/dataproduct";

function TableProduct(){
  return ( 
    <table class="striped">
      <caption><h4>Espaço Produto</h4></caption>
      <thead>
        <tr>
            <th>Código</th>
            <th>Fornecedor</th>
            <th>Produto</th>
            <th>Porcentagem</th>
            <th>Produtos na Prateleira</th>
            <th>Produtos na Gondola</th>
        </tr>
      </thead>
      <DataProduct/>
    </table>
  );
}

export default TableProduct;