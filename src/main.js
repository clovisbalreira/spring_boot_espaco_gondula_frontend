import React from "react";
import Home from './components/home/home'
import Product from './components/product/product'
import { Container } from 'react-materialize'
import { Routes, Route } from 'react-router-dom'

const Main = () => (
    <main>
        <Container>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
        </Container>
    </main>
)
export default Main;