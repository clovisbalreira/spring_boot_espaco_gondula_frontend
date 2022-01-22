/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import TableProvider from './provider/tableprovider/tableprovider'
import TableProduct from './product/tableproduct/tableproduct'
import { Row, Col} from 'react-materialize'

class Produto extends Component{
    render(){
        return ( 
            <Row>
                <Col s={12} m={12} l={5} offset={'l1'}><TableProvider/></Col>
                <Col s={12} m={12} l={6} ><TableProduct/></Col>
            </Row>
        );
    }
}

export default Produto;