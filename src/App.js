import './App.css';
import bakery from './images/bakery.jpg'

function App() {
  return (
    <div className="App">
      <h1>Sweet Bites</h1>
      <p>The Bakery of All Backeries!</p>
      <img src={bakery}></img>
    </div>
  );
}

export default App;
