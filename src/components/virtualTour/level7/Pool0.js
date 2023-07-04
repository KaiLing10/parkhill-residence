import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/pool0.jpg';
import Arrow from '../ArrowEntity';


export default function Pool0() {
  return (
    < >

      <Arrow position="-0.8 1.3 2.5" rotation="2 240 50" navigate={'Pool'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="-2 1.2 -3" rotation="6 120 60" navigate={'PoolLounge'}
        text="Pool Lounge" text_rotation="0 40 0" />
      <Arrow position="2 1 -2.5" rotation="10 50 50" navigate={'PoolCenter'}
        text="" text_rotation="-10 240 0" />
      <Arrow position="1.6 1 2.3" rotation="350 300 50" navigate={'Center1'}
        text="" text_rotation="-10 240 0" />


      <Entity primitive='a-sky' src={scene} rotation="0 10 0" />

    </>
  );
}
