import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/blockD.jpg';
import Arrow from '../ArrowEntity';


export default function BlockD() {
  return (
    < >

      <Arrow position="1.5 1.2 3.5" rotation="0 290 40" navigate={'Yoga'}
        text="" text_rotation="0 200 0" />
      <Arrow position="-2.2 1.4 2.7" rotation="2 220 60" navigate={'BlockDDoor'}
        text="Block D" text_rotation="0 120 0" />
      <Arrow position="0 1.3 -3" rotation="0 90 50" navigate={'Center4'}
        text="" text_rotation="-10 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 260 0" />

    </>
  );
}
