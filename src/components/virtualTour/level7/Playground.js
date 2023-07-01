import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/playground.jpg';

import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function Playground() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1.5 0.8 0"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'playground_resting_area'}
      />

<Entity
        geometry={{ primitive: 'cylinder' }}
        position="3 0.8 -1"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'level7_blockC'}

      />
      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
