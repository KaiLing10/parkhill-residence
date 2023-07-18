import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/center.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2Center() {
  return (
    < >
      <Arrow position="0.2 1.5 -2.1" rotation="0 80 70" navigate={'Unit2LivingRoom'}
        text="" text_rotation="0 300 0" />
      <Arrow position="1.9 1.5 1.9" rotation="0 320 60" navigate={'Unit2Entrance'}
        text="" text_rotation="0 340 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 200 0" />

    </>
  );
}
