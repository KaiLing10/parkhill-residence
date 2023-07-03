import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import ArrowIcon from '../../assets/vrtour/arrow.png';
import ArrowIconHover from '../../assets/vrtour/arrow_hover.png'

export default function Arrow({ position, rotation, navigate, text, text_rotation }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };


  return (

    <Entity position={position}>
      <Entity
        text={{
          value: text , // Text content
          font: 'https://cdn.aframe.io/fonts/Exo2Bold.fnt',
          color: 'black',
          align: 'center',
          width: 2,
          wrapCount: 20,
          // lineHeight: 0.2,
          // letterSpacing: 0.02
        }}
        rotation= {text_rotation}
        position="0 -0.4 0" // Position of the text entity
      />
      <Entity
        geometry={{ primitive: 'cylinder' }}

        rotation={rotation}
        scale="0.3 0.05 0.3"
        material={{
          src: isHovered ? ArrowIconHover : ArrowIcon, shader: 'flat'
        }}
        class="clickable"
        events={{
          mouseenter: handleHoverStart,
          mouseleave: handleHoverEnd
        }}
      navigate={navigate}
      />
    </Entity>
  );
}
