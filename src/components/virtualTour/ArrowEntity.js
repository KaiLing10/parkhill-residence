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
      {/* location text */}
      <Entity
        text={{
          value: text,
          font: 'https://cdn.aframe.io/fonts/Exo2Bold.fnt',
          color: 'black',
          align: 'center',
          width: 2,
          wrapCount: 20,
        }}
        rotation={text_rotation}
        position="0 -0.4 0"
      />

      {/* arrow icon */}
      <Entity
        geometry={{ primitive: 'cylinder' }} rotation={rotation} scale="0.28 0.03 0.28"
        material={{
          src: isHovered ? ArrowIconHover : ArrowIcon,
          shader: 'flat',
          opacity: '0.8',
        }}
        className="clickable"
        events={{
          mouseenter: handleHoverStart,
          mouseleave: handleHoverEnd
        }}
        navigate={navigate}
      />
    </Entity>
  );
}

