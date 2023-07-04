import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/center4.jpg';
import Arrow from '../ArrowEntity';


export default function Center4() {
  return (
    < >

      <Arrow position="-0.3 1.2 4" rotation="0 250 50" navigate={'BlockD'}
        text="Block D Entrance" text_rotation="0 180 0" />
      <Arrow position="-1.5 1.3 -3" rotation="0 120 50" navigate={'Center3'}
        text="" text_rotation="-10 240 0" />
      <Arrow position="2.5 1.1 -0.6" rotation="0 10 30" navigate={'RiverViewDeck'}
        text="" text_rotation="-10 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 70 0" />

    </>
  );
}
