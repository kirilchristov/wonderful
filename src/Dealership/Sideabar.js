import React, { useState } from 'react';
import Button from './Button'
import Image from './Image'


function Sidebar(props){
  const [requested, setRequested] = useState([])
  
  //We clean the car selection by resetting the state to initialState
  const initialState = []
  const resetState = () => {
    setRequested(initialState)
  }

  const handleOffer = (id) => {
    setRequested([...requested, id])
  }

  //By deafult the active location is always Brooklyn, so we don't have an empty component
  const activeLocation = props.selectedLocation.name ? props.selectedLocation.name : props.locationData[0].name;
  const cars = [];
  
  //Getting info about the quantities per location
  props.carData.forEach(car => {
    if (props.selectedLocation.inStock.includes(car.id)) {
      cars.push(car)
    }
  })

  //Displaying the ones that are present in the location
  const itemsToDisplay = cars.map((item,idx) => (
    <div data-aos='fade-in' key={idx} className="car-container">
      <Image className="car-container-image"
      carId={item.id}
      requested={requested}
      handleOffer={handleOffer} 
      src={item.thumbUrl} 
      alt={item.title}/>
      <div className="car-container-content">
        <h1>{item.title}</h1>
        <p>STARTING AT ${item.price}</p>
        <Button requested={requested} handleOffer={handleOffer} carTitle={item.title} carId={item.id}/>
      </div>
    </div> 
  ))

  return (
  <div className="sidebar-container">
    <div className="cars-column">
      <h2>Availability at {activeLocation}:</h2>
      <div className="car-list">
        {itemsToDisplay}
      </div>
    </div>
    <button className="clear-btn" type="reset" onClick={resetState}>
      CLEAR SELECTION
    </button>
  </div>
  );
}

export default Sidebar;