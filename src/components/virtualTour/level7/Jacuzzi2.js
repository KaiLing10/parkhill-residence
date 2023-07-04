import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/jacuzzi2.jpg';
import Arrow from '../ArrowEntity';


export default function Jacuzzi2() {
  return (
    < >

       <Arrow position="2 1 -1.5" rotation="360 45 40" navigate={'Jacuzzi'}
        text="" text_rotation="-10 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />

    </>
  );
}
