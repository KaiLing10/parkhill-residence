import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/blockD_door.jpg';
import Arrow from '../ArrowEntity';


export default function BlockDDoor() {
  return (
    < >

      <Arrow position="1 0.8 -4" rotation="0 80 30" navigate={'BlockD'}
        text="" text_rotation="0 330 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 260 0" />

    </>
  );
}
