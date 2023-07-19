import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/bathRoom2.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2Bathroom2() {
  return (
    < >

      <Arrow position="-1.1 1.5 1.6" rotation="0 240 70" navigate={'Unit2MasterRoom'}
        text="a" text_rotation="0 10 0" />
    

      <Entity primitive='a-sky' src={scene} rotation="0 80 0" />

    </>
  );
}
