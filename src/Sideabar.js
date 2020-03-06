import React, { useState } from 'react';
import Button from './Button'
import Image from './Image'


function Sidebar(props){
  const [requested, setRequested] = useState([])
  
  //We clean the selection by resetting to initialState
  const initialState = []
  const resetState = () => {
    console.log('reset initiated')
    setRequested(initialState)
  }

  const handleOffer = (id) => {
    setRequested([...requested, id])
  }

  //By deafult the active location is always Brooklyn
  const activeLocation = props.selectedLocation.name ? props.selectedLocation.name : props.locationData[0].name;
  const cars = [];
  
  props.carData.forEach(car => {
    if (props.selectedLocation.inStock.includes(car.id)) {
      cars.push(car)
    }
  })

  const itemsToDisplay = cars.map((item,idx) => (
    <div key={idx} className="car-container">
      <Image className="car-container-image"
      carId={item.id}
      requested={requested} 
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
    <button className="clear-btn" onClick={resetState}>
      CLEAR SELECTION
    </button>
  </div>
  );
}

export default Sidebar;