import React from "react";
import Home from './components/home/home'
import Provider from './components/provider/provider'
import Product from './components/product/product'
import Marketplace from './components/marketplace/marketplace'
import ContractProvider from './components/contractprovider/contractprovider'
import ContractProduct from './components/contractproduct/contractproduct'
import Space from './components/space/space'
import { Container } from 'react-materialize'
import { Routes, Route } from 'react-router-dom'

const Main = () => (
    <main>
        <Container>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/provider' element={<Provider/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/marketplace' element={<Marketplace/>}/>
                <Route path='/contractprovider' element={<ContractProvider/>}/>
                <Route path='/contractproduct' element={<ContractProduct/>}/>
                <Route path='/space' element={<Space/>}/>
            </Routes>
        </Container>
    </main>
)
export default Main;