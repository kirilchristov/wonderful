import React, { useState } from 'react';
import CarData from './CarData'
import Button from './Button'


function Sidebar(props){
  
  //By deafult the active location is always Brooklyn
  const activeLocation = props.selectedLocation.name ? props.selectedLocation.name : props.locationData[0].name;
  const cars = [];
  
  CarData.forEach(car => {
    if (props.selectedLocation.inStock.includes(car.id)) {
      cars.push(car)
    }
  })

  const itemsToDisplay = cars.map((item,idx) => (
    <div key={idx} className="car-container">
    <img className="thumb" src={item.thumbUrl} alt={item.title}/>
      <h1>{item.title}</h1>
      <p>STARTING AT ${item.price}</p>
      <Button onClick={()=>console.log('A client requested information about: ', )}/>
    </div> 
  ))


  return (
   <div className="sidebar-container">
     <h2>Availability for {activeLocation}:</h2>
     <div className="car-list">
       {itemsToDisplay}
     </div>
   </div>
  );
}

export default Sidebar;