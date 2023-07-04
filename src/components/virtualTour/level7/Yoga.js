import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/yoga.jpg';
import Arrow from '../ArrowEntity';


export default function Yoga() {
  return (
    < >

      <Arrow position="-1.3 1.3 -4" rotation="0 120 50" navigate={'BlockD'}
        text="Block D Entrance" text_rotation="0 20 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 40 0" />

    </>
  );
}
