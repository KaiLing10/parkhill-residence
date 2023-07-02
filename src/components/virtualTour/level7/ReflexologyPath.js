import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/reflexology_path.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function ReflexologyPath() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-2 1 1"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'Center4'}
      />
      

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
