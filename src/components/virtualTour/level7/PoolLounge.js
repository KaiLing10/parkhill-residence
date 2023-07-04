import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/pool_lounge.jpg';
import Arrow from '../ArrowEntity';


export default function PoolLounge() {
  return (
    < >

      <Arrow position="2.5 1.3 2" rotation="12 320 60" navigate={'Pool0'}
        text="" text_rotation="-10 210 1" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 200 0" />

    </>
  );
}
