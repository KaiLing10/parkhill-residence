import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/pool.jpg';
import Arrow from '../ArrowEntity';


export default function Pool() {
  return (
    < >

      <Arrow position="-1 1.3 2.5" rotation="30 230 65" navigate={'Jacuzzi'}
        text="Jacuzzi" text_rotation="0 170 0" />
      <Arrow position="-2 1.2 -3" rotation="6 120 60" navigate={'Pool0'}
        text="Pool" text_rotation="0 40 0" />
      <Arrow position="0 1.3 2.5" rotation="355 270 55" navigate={'Center3'}
        text="" text_rotation="-10 210 1" />

      <Entity primitive='a-sky' src={scene} rotation="0 250 0" />

    </>
  );
}

