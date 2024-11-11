import './App.css';
import bakery from './images/bakery.jpg'
import products from './products.js';
import Product from './Components/ProductItem.js'



function App() {
  return (
    <div className="App">
      <h1>Sweet Bites</h1>
      <p>The Bakery of All Backeries!</p>
      <img src={bakery}></img>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, marginTop: 20 }}>

        <Product />


        {/* {products.map((item) =>





          // <div style={{ width: 200, height: 300 }}>

          //   <img height={200} width={150} src={(item.image)}></img>

          //   <h4>{(item.name)}</h4>
          //   <p>{(item.price)} KD</p>

          // </div>

        )} */}


        {/////////////////////////////////////////////////////////////////////////////////
        }

        {/* <div style={{ width: 200, height: 300 }}>
          <img height={200} width={150} src={(products[0].image)}></img>
          <h4>{(products[0].name)}</h4>
          <p>{(products[0].price)} KD</p>
        </div>


        <div style={{ width: 200, height: 300 }}>
          <img height={200} width={150} src={(products[1].image)}></img>
          <h4>{(products[1].name.slice(0, 6))} <br /> {(products[1].name.slice(6))}</h4>
          <p>{(products[1].price)} KD</p>
        </div>

        <div style={{ width: 200, height: 300 }}>
          <img height={200} width={150} src={(products[2].image)}></img>
          <h4>{(products[2].name.slice(0, pie - 1))} <br /> {(products[2].name.slice(pie))}</h4>

          <p>{(products[2].price)} KD</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
