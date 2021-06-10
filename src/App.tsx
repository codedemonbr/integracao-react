import React, { Component} from 'react';
import Contador from './components/Contador'

import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Contador   valorInicial={9874} />
        <Contador    />
      </div>
    )
  }
}

export default App;
