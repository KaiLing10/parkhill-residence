import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/playground2.jpg';
import Arrow from '../ArrowEntity';
import Info from '../InfoEntity'

export default function Playground2() {
  return (
    <Entity>

      <Arrow position="-2.5 1.4x -0.7" rotation="0 160 70" navigate={'Playground'}
        text="" text_rotation="0 80 0" />
      <Arrow position="2.3 1.3 1.1" rotation="0 -20 70" navigate={'PlaygroundRestingArea'}
        text="" text_rotation="0 240 0" />
      <Info position="1.4 2 -2.5" rotation="0 60 90" info={''} />

      <Entity primitive='a-sky' src={scene} rotation="0 300 0" />

    </Entity>
  );
}

