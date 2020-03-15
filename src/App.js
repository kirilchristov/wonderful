import React, { Component } from 'react';
import Header from './Header'
import Hero from './Hero/Hero'
import Dealership from './Dealership/Dealership'
import carData from './Data/carData'

import AOS from 'aos';
import 'aos/dist/aos.css';

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

  componentDidMount() {
    //AOS controls the animation 
    AOS.init({duration: 2000})
    //Here we take the native control dots from the carousel and append them to another DOM element,
    // because we are going to display them at a different place
    const controlDots = document.getElementsByClassName("control-dots")[0]
    const dotsPlaceholder =  document.getElementsByClassName("info")[0]
    dotsPlaceholder.appendChild(controlDots)
  }

  handleClick = (id) => {  
    this.setState({
      selectedCar: carData[id-1]
    })
  }

  handleChange = (id) => {
    this.setState({
      selectedCar: carData[id]
    })
  }


  render() {
    console.log('v1.9')
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Hero 
            carData={carData} 
            handleClick={this.handleClick} 
            selectedCar={this.state.selectedCar} 
            handleChange={this.handleChange}/>
          <Dealership carData={carData} />
        </div>
      </div>
    );
  }
}

export default App;
