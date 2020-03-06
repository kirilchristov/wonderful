import React from 'react';

function Button (props){
  const buttonStyle = props.requested.includes(props.carId)
  
  return (
    <button 
      className={ buttonStyle ? 'btn-clicked' : 'btn-non-clicked'}
      onClick={()=>{
        // console.log('idx in button',props.carId, props.carTitle)
        // window.alert(`The dealer will be alerted about you inquiry for ${props.carTitle}`)
        props.handleOffer(props.carId);
        }}
      >{!buttonStyle ? 'REQUEST QUOTE' : 'REQUESTED!' }
    </button>
  );
}

export default Button;