import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/function_room2.jpg';
import Arrow from '../ArrowEntity';


 export default function FunctionRoom2() {
  return (
    < >

      <Arrow position="-0.3 1.1 -2.5" rotation="350 90 40" navigate={'FunctionRoom'}
        text="" text_rotation="0 0 0" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 220 0" />

    </>
  );
}
