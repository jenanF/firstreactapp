import React from 'react'
//import items from '../products.js';
import Product from './ProductItem.js';


const ProductList = ({ items }) => {
    return (
        <div style={{ display: 'flex' }}>
            {items.map((item) => (
                <Product key={item.name} product={item} />
            ))}
        </div>
    );
};


// const ProductList = (items) => {
//     return (
//         items.map((item) => {

//             <Product myItem={item} />
//         })
//     );
// }

export default ProductList
