import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/blockC.jpg';
import Arrow from '../ArrowEntity';


export default function BlockC() {
  return (
    <Entity>

      <Arrow position="-1.5 1.5 2" rotation="0 230 70" navigate={'BlockCDoor'}
        text="Block C Entrance" text_rotation="0 140 1" />
      <Arrow position="-1.2 1.3 -3" rotation="0 108 70" navigate={'Center1'}
        text="" text_rotation="0 0 0" />
      <Arrow position="2.3 1.3 1.1" rotation="0 -20 60" navigate={'Playground'}
        text="Playground" text_rotation="0 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 70 0" />

    </Entity>
  );
}
