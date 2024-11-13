import React from 'react'
import item from '../products.js';


const Product = ({ product }) => {
    return (
        <div style={{ width: 200, height: 300, margin: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <img height={200} width={150} src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price.toFixed(3)} KD</p>
        </div>
    );
};

// const Product = (myItem) => {
//     return (
//         <div style={{ width: 200, height: 300 }}>

//             <img height={200} width={150} src={(myItem.image)}></img>

//             <h4>{(myItem.name)}</h4>
//             <p>{(myItem.price)} KD</p>

//         </div>
//     )
// }

export default Product
