import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/jacuzzi2.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function Jacuzzi2() {
  return (
    <>

      
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="1 1 -1"
        rotation="270 140 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'jacuzzi'}
      />

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
