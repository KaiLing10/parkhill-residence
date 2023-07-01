import React from 'react';
import { Entity } from 'aframe-react';
import scene from '../../../assets/vrtour/level7/C1.jpg';

//assets
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function C1() {
  console.log('in scene1');
  return (
    <>
      {/* <Entity
        id="testBox"
        position="0 1.6 -4"
        rotation="0 180 0"
        scale="2 2 2"
        geometry={{
          primitive: 'box',
        }}
        material={{
          color: 'red',
        }}
        class="clickable"
        navigate={'level7_c2'} 
      />  */}
      <Entity
        id="arrow01"
        geometry={{ primitive: 'cylinder' }}
        position="1.8 1.5 -2"
        rotation="0 45 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'level7_c2'}

      />
    <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
      

      {/* <Camera>
        <Entity
          primitive="a-cursor"
          cursor={{ fuse: true }}
          raycaster={{ objects: '.clickable' }}
        />
      </Camera> */}
    </>
  );
}
