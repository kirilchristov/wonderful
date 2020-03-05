import React, { useState }  from 'react';
import WrappedMap from './Map'
import Sidebar from './Sideabar'
import config from './config.js'

import locationData from './locationData'

function Dealership(){
  const [selectedLocation, setSelectedLocation] = useState(locationData[0])


  const handleClick = (location) => {
    setSelectedLocation(location)
  }

  return (
    <div className="dealership">
      <div className="headline-container">
        <div className="headline">
          <div className="crosshair">
            <img src="/images/crosshair.png" alt="crosshair-icon"></img>
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
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            handleClick={handleClick} 
            selectedLocation={selectedLocation}
            locationData={locationData}
          />
        </div>
        <Sidebar className="sidebar" selectedLocation={selectedLocation} />
      </div>
    </div>
  );
}

export default Dealership;