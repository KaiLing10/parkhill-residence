import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/pool_lounge.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function PoolLounge() {
  return (
    <>
     
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1 1.6 1.5"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'Pool0'}
      />

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
