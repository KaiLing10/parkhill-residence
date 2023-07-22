import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/roof2.jpg';
import Arrow from '../ArrowEntity';


 export default function RoofGarden2() {
  return (
    < >

      <Arrow position="-1 1.2 1.8" rotation="90 250 90" navigate={'RoofGarden'}
        text="" text_rotation="-20 100 1" />

      <Entity primitive='a-sky' src={scene} rotation="0 300 0" />

    </>
  );
}
