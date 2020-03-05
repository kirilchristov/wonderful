import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

import mapStyles from './mapStyles'

const redPin = '/images/red_pin.png';
const blackPin = '/images/black_pin.png';


function Map(props){

  return (
      <GoogleMap 
        defaultZoom={11}
        defaultCenter={{lat:40.712776, lng: -74.005974}}
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