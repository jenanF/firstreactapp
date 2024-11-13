import React from 'react'
import '../App.css';
import bakery from '../images/bakery.jpg'
import products from '../products.js';
import Product from './ProductItem.js'
import ProductList from './ProductList.js';

const Home = () => {
    return (
        <header>
            <div className="App">
                <h1>Sweet Bites</h1>
                <p>The Bakery of All Bakeries!</p>
                <img src={bakery}></img>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, marginTop: 20 }}>

                    <ProductList items={products} />

                </div>
            </div>

        </header>
    )
}

export default Home
