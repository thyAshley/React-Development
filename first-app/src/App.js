import React, { Component } from 'react';
import Pokedex from './Pokedex';

import './App.css';

class App extends Component{
  render() {
    return(
      <div>
        <Pokedex 
          id='004'
          name="charmander"
          type="fire"
          base_experience={62}
        />
      </div>
    );
  }
}
export default App;
