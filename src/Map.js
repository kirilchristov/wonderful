import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import locationData from './locationData'

function Map(props){
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  return (
    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{lat:40.712776, lng: -74.005974}}
    >
      {locationData.map(location => (
        <Marker 
          key={location.id}
          position={{
            lat:location.coordinates.lat, 
            lng:location.coordinates.lon
            }}
          onClick={() => {
            setSelectedLocation(location)
            console.log(selectedLocation)
          }}

        />
      ))}

      
      
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;