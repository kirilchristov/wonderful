import React from 'react';
import checkmark from '../assets/checkmark.png'

function Image(props){
  const imageStyle = props.requested.includes(props.carId)
  return (
    <div className="image-container"  onClick={()=>{
      props.handleOffer(props.carId);
      }} >
      <img 
        src={checkmark} 
        alt="checkmark" 
        className={imageStyle ? 'overlay' : 'overlay-none'} 
      >
      </img>
      <img className={imageStyle ? 'image-checked' : 'image-not-checked'}
        src={props.src} 
        alt={props.alt}>
      </img>
    </div>
  );
}

export default Image;