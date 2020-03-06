import React from 'react';

//Here we are catching the data for which car we are making request so we can send this back to a backend API

function Button (props){
  const buttonStyle = props.requested.includes(props.carId)
  
  return (
    <button 
      className={ buttonStyle ? 'btn-clicked' : 'btn-non-clicked'}
      onClick={()=>{
        props.handleOffer(props.carId);
        }}
      >{!buttonStyle ? 'REQUEST QUOTE' : 'REQUESTED!' }
    </button>
  );
}

export default Button;