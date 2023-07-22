import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/bbq_area.jpg';
import Arrow from '../ArrowEntity';

export default function BbqArea() {
  return (
    <>
       <Arrow position="-2.8 1.8 -0.5" rotation="90 180 90" navigate={'Center3Down'}
        text="" text_rotation="-10 210 1" />

      <Entity primitive='a-sky' src={scene} rotation="0 350 0" />
    </>
  );
}
