import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Product from './Components/Product/Product';
import Slider from './Components/Slider/Slider';
import TryOn from './Components/TryOn/TryOn';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <TryOn/>
      <Product/>
    </div>
  );
}

export default App;
