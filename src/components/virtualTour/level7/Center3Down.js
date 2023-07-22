import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/center3_down.jpg';
import Arrow from '../ArrowEntity';
import Info from '../InfoEntity';

export default function Center3Down() {
  return (
    <>

      <Arrow position="-2.3 1.5 1" rotation="180 30 270" navigate={'Center3'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="-0.2 1.5 -2.5" rotation="0 80 90" navigate={'MazeGarden'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="1.8 1.4 1.5" rotation="0 320 90" navigate={'BbqArea'}
        text="" text_rotation="-10 210 1" />

      <Info position="2.8 2 -1.5" rotation="0 30 90" info={''} />

      <Entity primitive='a-sky' src={scene} rotation="0 340 0" />
    </>
  );
}
