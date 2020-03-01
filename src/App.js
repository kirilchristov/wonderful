import React, { Component } from 'react';
import Header from './Header'
import Hero from './Hero'
import Dealership from './Dealership'


import './bootstrap.min.css'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Hero />
          <Dealership />
        </div>
      </div>
    );
  }
}

export default App;
