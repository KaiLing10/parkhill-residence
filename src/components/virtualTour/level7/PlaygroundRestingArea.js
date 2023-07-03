import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/playground_resting_area.jpg';
import Arrow from '../ArrowEntity';

export default function PlaygroundRestingArea() {
  return (
    <Entity>

      <Arrow position="-2.5 1.4 -0.7" rotation="0 160 70" navigate={'Playground2'}
        text="" text_rotation="0 80 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 70 0" />

    </Entity>
  );
}

