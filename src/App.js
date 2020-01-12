import React from 'react';
import './App.css';
import CCShop from './components/CCShop';
import {item , itemsList} from './item.js';

var itemsInCart =[];

function App() {
  return (
    <div className="App">
      <CCShop itemsList={itemsList} itemsInCart={itemsInCart}/>
      
    </div>
  );
}

export default App;
