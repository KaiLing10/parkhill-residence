import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/blockC_door.jpg';
import Arrow from '../ArrowEntity';


export default function BlockCDoor() {
  return (
    < >

      {/* <Arrow position="-1.5 1.5 2" rotation="0 230 70" navigate={''}
        text="Lift" text_rotation="0 140 1" /> */}
      <Arrow position="2 1 -2" rotation="0 40 40" navigate={'BlockC'}
        text="" text_rotation="0 0 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 330 2" />

    </>
  );
}
