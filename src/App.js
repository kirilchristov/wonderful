import React, { Component } from 'react';
import Header from './Header'
import Hero from './Hero'
import Dealership from './Dealership'

import carData from './CarData'

import './bootstrap.min.css'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Hero carData={carData}/>
          <Dealership />
        </div>
      </div>
    );
  }
}

export default App;
