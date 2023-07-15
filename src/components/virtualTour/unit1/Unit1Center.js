import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/center.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1Center() {
  return (
    < >

      <Arrow position="-2 1.5 1.6" rotation="0 210 70" navigate={'Unit1LivingRoom'}
        text="" text_rotation="0 140 1" />
      <Arrow position="1.4 1.4 -1.8" rotation="0 50 70" navigate={'Unit1Kitchen'}
        text="" text_rotation="0 300 0" />
      <Arrow position="2 1.5 1.2" rotation="0 330 60" navigate={'Unit1Hallway'}
        text="" text_rotation="0 340 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 80 0" />

    </>
  );
}
