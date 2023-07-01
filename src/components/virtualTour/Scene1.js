import React, { useEffect, useState } from 'react';

// import AFRAME from 'aframe';
import { Entity } from 'aframe-react';
import scene from '../../assets/vrtour/scene.jpg';


export default function Scene1({ navigateToScene }) {



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
          color: 'red',
        }}
        class="clickable"
        log={'2'}
      ></Entity>

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
      {/* <Camera
        <Entity
          primitive="a-cursor"
          cursor={{ fuse: true }}
          raycaster={{ objects: '.clickable' }}
        />
      </Camera> */}
    </>
  );
}
