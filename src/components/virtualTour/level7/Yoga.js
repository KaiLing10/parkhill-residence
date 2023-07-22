import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/yoga.jpg';
import Arrow from '../ArrowEntity';
import Info from '../InfoEntity';


export default function Yoga() {
  return (
    < >

      <Arrow position="-1 1.3 -2.5" rotation="0 120 50" navigate={'BlockD'}
        text="Block D Entrance" text_rotation="0 20 0" />
      <Info position="2.5 2 -1" rotation="0 10 90" info={''} />

      <Entity primitive='a-sky' src={scene} rotation="0 40 0" />

    </>
  );
}
