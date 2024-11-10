import './App.css';
import bakery from './images/bakery.jpg'

function App() {
  return (
    <div className="App">
      <h1>Sweet Bites</h1>
      <p>The Bakery of All Backeries!</p>
      <img src={bakery}></img>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, marginTop: 20 }}>

        <div style={{ width: 200, height: 300 }}>
          <img height={200} width={150} src='https://www.rainbownourishments.com/wp-content/uploads/2023/01/vegan-chocolate-chip-muffins-1..jpg'></img>
          <h4>Vegan Chocolate Chip Muffins</h4>
          <p>1.000 KD</p>
        </div>


        <div style={{ width: 200, height: 300 }}>
          <img height={200} width={150} src='https://cravingsjournal.com/wp-content/uploads/2023/08/croissants-4.jpg'></img>
          <h4>Butter <br /> Croissant</h4>
          <p>0.800 KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
