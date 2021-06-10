import React, { Component} from 'react';
import ContadorValor from './components/ContadorValor'

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <ContadorValor contador={5} />
      </div>
    )
  }
}

export default App;
