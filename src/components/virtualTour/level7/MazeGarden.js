import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/maze_garden.jpg';
import Arrow from '../ArrowEntity';


export default function MazeGarden() {
  return (
    <>
       <Arrow position="0.6 1.3 2.5" rotation="180 90 270" navigate={'Center3Down'}
        text="" text_rotation="-10 210 1" />

      <Entity primitive='a-sky' src={scene} rotation="0 320 0" />
    </>
  );
}
