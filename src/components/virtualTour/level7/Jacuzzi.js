import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/jacuzzi.jpg';
import Arrow from '../ArrowEntity';


export default function Jacuzzi() {
  return (
    < >

      <Arrow position="-2 1.3 1.5" rotation="2 210 50" navigate={'Jacuzzi2'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="3 1 -1" rotation="10 2 50" navigate={'Center3'}
        text="" text_rotation="-10 240 0" />
       <Arrow position="1.6 1 -2.5" rotation="345 52 50" navigate={'Pool'}
        text="" text_rotation="-10 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 130 0" />

    </>
  );
}
