import React from 'react';

// import AFRAME from 'aframe';
import { Entity } from 'aframe-react';
import scene from '../../../assets/vrtour/level7/C2.jpg';


export default function C2() {

  return (
    <>
      <Entity
        id="testBox"
        position="0 1.6 -4"
        rotation="0 180 0"
        scale="2 2 2"
        geometry={{
          primitive: 'box',
        }}
        material={{
          color: 'blue',
        }}
        class="clickable"
        navigate={'level7_c1'}
      ></Entity>

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
     
    </>
  );
}
