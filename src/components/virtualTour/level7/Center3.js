import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/center3.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function Center3() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1.5 1 0"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'center3_down'}
      />
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1 1.6 3"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'pool'}
      />
        <Entity
        geometry={{ primitive: 'cylinder' }}
        position="1.5 1.3 -2"
        rotation="270 140 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'reflexology_path'}
      />
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="0 1.3 -3"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'center4'}
      />

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
