import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/center1.jpg';
import Arrow from '../ArrowEntity';


export default function Center1() {
  return (
    < >

      <Arrow position="1.2 1.3 2" rotation="2 300 50" navigate={'BlockC'}
        text="Block C Entrance" text_rotation="-10 210 1" />
      <Arrow position="-0.5 1.2 -3" rotation="12 75 70" navigate={'Pool0'}
        text="" text_rotation="0 0 0" />
      <Arrow position="2.6 1.3 0.6" rotation="0 -20 50" navigate={'ClubHouseEntrance'}
        text="Club House" text_rotation="-10 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 180 0" />

    </>
  );
}
