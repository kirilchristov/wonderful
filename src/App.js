import React, { Component } from 'react';
import Header from './Header'
import Hero from './Hero'
import Dealership from './Dealership'

import carData from './CarData'

import './bootstrap.min.css'

import './App.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCar : carData[1]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = (id) => {  
    this.setState({
      selectedCar: carData[id-1]
    })
    console.log('Current selected car',this.state.selectedCar.title);
  }

  handleChange = (id) => {
    this.setState({
      selectedCar: carData[id]
    })
  }

  render() {
    // console.log('Deploy version 1')
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Hero 
            carData={carData} 
            handleClick={this.handleClick} 
            selectedCar={this.state.selectedCar} 
            handleChange={this.handleChange}/>
          <Dealership />
        </div>
      </div>
    );
  }
}

export default App;
