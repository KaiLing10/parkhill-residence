import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/lift.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function CLift() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="0.7 0.8 -3"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        className="clickable"
        navigate={'BlockC'}

      />
      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
