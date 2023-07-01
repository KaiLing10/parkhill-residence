import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/center4.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function Center4() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1.5 1 -1"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'center3'}
      />
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="1.9 1.6 3"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'blockD'}
      />
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="1 1 -2"
        rotation="270 145 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'river_view_deck'}
      />

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
