import React from 'react';
import CarData from './CarData'
import Button from './Button'
import Image from './Image'


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
      {/* <img className="thumb" src={item.thumbUrl} alt={item.title}/> */}
      <Image className="car-container-image" src={item.thumbUrl} alt={item.title}/>
      <div className="car-container-content">
        <h1>{item.title}</h1>
        <p>STARTING AT ${item.price}</p>
        <Button  />
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
    <div className="clear-button">
{/* Add button here */}
    </div>
   </div>
  );
}

export default Sidebar;