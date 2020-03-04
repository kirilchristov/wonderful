import React, { useState }  from 'react';
import WrappedMap from './Map'
import config from './config.js'


function Dealership(){
  const [selectedLocation, setSelectedLocation] = useState(0)

  const handleClick = (location) => {
    setSelectedLocation(location)
  }

  return (
    <div className="dealership">
      <h1>I am Dealership - {selectedLocation.name}</h1>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.googleAPIKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        handleClick={handleClick}
        // withStateHandlers={withStateHandlers}
      />
    </div>
  );
}

export default Dealership;