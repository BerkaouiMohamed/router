import logo from './logo.svg';
import './App.css';

import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <div className="App">

      <Navbar/>

     
    </div>
  );
}

export default App;
