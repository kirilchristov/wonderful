import React, { useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import locationData from './locationData'
import mapStyles from './mapStyles'


function Map(props){


  return (
    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{lat:40.712776, lng: -74.005974}}
      defaultOptions={{styles: mapStyles}}
    >
      {locationData.map(location => (
        <Marker 
          key={location.id}
          position={{
            lat:location.coordinates.lat, 
            lng:location.coordinates.lon
            }}
          onClick={() => {
            props.handleClick(location);
          }}
          icon={{
            url: '/images/black_pin.png',
            scaledSize: new window.google.maps.Size(17,24)
          }}
        />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;