import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/playground.jpg';
import Arrow from '../ArrowEntity';

// PlaygroundRestingArea
export default function Playground() {
  return (
    <Entity>

      <Arrow position="-2.5 1.4 -0.7" rotation="0 160 70" navigate={'BlockC'}
        text="Level 7 Entrance" text_rotation="0 80 0" />
      <Arrow position="2.3 1.3 1.1" rotation="0 -20 70" navigate={'Playground2'}
        text="" text_rotation="0 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 270 0" />

    </Entity>
  );
}

