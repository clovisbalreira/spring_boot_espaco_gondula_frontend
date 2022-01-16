/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import List from './components/list/list'
import Save from './components/save/save'
import { Row, Col} from 'react-materialize'

class Product extends Component{
    render(){
        return ( 
            <Row>
                <Col s={12} m={12} l={6} ><List/></Col>
                <Col s={12} m={12} l={5} offset={'l1'}><Save/></Col>
            </Row>
        );
    }
}

export default Product;