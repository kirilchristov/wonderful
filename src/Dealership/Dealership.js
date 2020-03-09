import React, { useState }  from 'react';
import WrappedMap from '../Hero/Map'
import Sidebar from './Sideabar'
import config from '../config.js'

import locationData from '../Data/locationData'
import crosshair from '../assets/crosshair.png'

function Dealership(props){
  const [selectedLocation, setSelectedLocation] = useState(locationData[0])
  const handleClick = (location) => {
    setSelectedLocation(location)
  }

  return (
    <div className="dealership-container">
      <div className="headline-container"  data-aos='fade-in'>
        <div className="headline">
          <div className="crosshair">
            <img src={crosshair} alt="crosshair-icon"></img>
          </div>
          <h1 className="section-title">SELECT YOUR DEALERSHIP</h1>
        </div>
        <p>Using the map, below, click on the map marker that represents the nearest dealership to see all available LS trims.</p>
      </div>
      <div className="map-sidebar-container">
        <div className="custom-google-map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.googleAPIKey}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            handleClick={handleClick} 
            selectedLocation={selectedLocation}
            locationData={locationData}
          />
        </div>
        <Sidebar 
        className="sidebar" 
        selectedLocation={selectedLocation} 
        locationData={locationData} 
        carData={props.carData} />
      </div>
    </div>
  );
}

export default Dealership;