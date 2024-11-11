import React from 'react'
import item from '../products.js';

const Product = () => {
    return (
        <div style={{ width: 200, height: 300 }}>

            <img height={200} width={150} src={(item[0].image)}></img>

            <h4>{(item[0].name)}</h4>
            <p>{(item[0].price)} KD</p>

        </div>
    )
}

export default Product
