import React, { useState }  from 'react';
import WrappedMap from './Map'
import config from './config.js'


function Dealership(){
  
  return (
    <div className="dealership">
      <h1>I am Dealership</h1>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.googleAPIKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}

      />
    </div>
  );
}

export default Dealership;