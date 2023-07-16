import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/maze_garden.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function MazeGarden() {
  return (
    <>
      
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="1.9 1.6 2"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        className="clickable"
        navigate={'Center3Down'}
      />
      

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
