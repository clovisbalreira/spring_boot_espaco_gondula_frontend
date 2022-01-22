/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import List from './components/list/list'
import Save from './components/save/save'
import Edit from './components/edit/edit'
import Delete from './components/delete/delete'
import { Row, Col } from 'react-materialize'

class MarketPlace extends Component{
    render(){
        return ( 
            <Row>
                <Col s={12} m={12} l={6} ><List/></Col>
                <Col s={12} m={12} l={5} offset={'l1'}>
                    <Row>
                        <Col s={12}><Save/></Col>
                        <Col s={12}><Edit/></Col>
                        <Col s={12}><Delete/></Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default MarketPlace;