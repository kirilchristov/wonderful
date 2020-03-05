import React from 'react';
import locationData from './locationData'

function Sidebar(props){
  const activeLocation = props.selectedLocation.name ? props.selectedLocation.name : locationData[0].name

  
  return (
   <div className="sidebar-container">
     <h2>Availability for {activeLocation}:</h2>
   </div>
  );
}

export default Sidebar;