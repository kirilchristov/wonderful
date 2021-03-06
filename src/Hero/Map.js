import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import mapStyles from './mapStyles'

import redPin from '../assets/red_pin.png'
import blackPin from '../assets/black_pin.png'

function Map(props){
  return (
      <GoogleMap 
        defaultZoom={10.34}
        defaultCenter={{lat:40.614776, lng: -74.000974}}
        defaultOptions={{styles: mapStyles}}
      >
        {props.locationData.map(location => (
          <Marker 
            key={location.id}
            position={{
              lat:location.coordinates.lat, 
              lng:location.coordinates.lon
              }}
            onClick={() => {
              props.handleClick(location);        
            }}
            icon={{url:(props.selectedLocation.id === location.id) ? redPin : blackPin, scaledSize: new window.google.maps.Size(17,24)}}
          />
        ))}
      </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;