import React from 'react';
import './styles/filler.css';

const filler = ( {bgColor, text, image } ) => {
    var textColor = '';

    if(bgColor != 'white'){
        textColor = 'white';
    }

  return (
    
    <div className='filler' style={{ backgroundColor: bgColor }}>
      <div>
        <h1 style={{ color: textColor }}>{text}</h1>
        <img className='image' src={image} alt="" />
      </div>
    </div>
  )
}

export default filler