import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/gym2.jpg';
import Arrow from '../ArrowEntity';


 export default function Gym2() {
  return (
    < >

     <Arrow position="-3.2 1.5 2" rotation="290 90 200" navigate={'Gym'}
        text="Gymnasium" text_rotation="0 140 0" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 15 0" />

    </>
  );
}
