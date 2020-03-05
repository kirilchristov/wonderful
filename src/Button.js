import React, { useState } from 'react';

function Button (props){
  const [buttonStyle, setButtonStyle] = useState(false)
  const [buttonStatus, setButtonStatus] = useState(false)
  
  return (
    <button 
      className={ buttonStyle ? 'btn-clicked' : 'btn-non-clicked'}
      onClick={()=>{
        setButtonStyle(true);
        setButtonStatus(true);
        }}
      >{!buttonStatus ? 'REQUEST QUOTE' : 'REQUESTED!' }
    </button>
  );
}

export default Button;