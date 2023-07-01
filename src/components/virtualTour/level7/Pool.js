import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/pool.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function Pool() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1 0.8 -1"
        rotation="270 140 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'center3'}
      />
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="0 0.8 -3"
        rotation="270 140 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'jacuzzi'}
      />
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="0.5 1.6 2"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'pool0'}
      />
   

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
