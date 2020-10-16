import React from 'react'
import { Component } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import BestProduct from './BestProduct/BestProduct';
import Footer from './Footer/Footer';

class Home extends Component{
    render(){
     return (
        <div className>
            <Header />
            <Content />
            <BestProduct />
            <Footer />
        </div> 
        );
    }
}

export default Home;