import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/blockD.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function BlockD() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-2 0.8 -1"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'yoga'}
      />
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="0.5 1.6 3"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'center4'}
      />
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="0.5 1.3 -2"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'blockD_door'}
      />

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
