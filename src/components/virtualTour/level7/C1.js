import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/blockC_door.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function C1() {
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
      {/* <Entity id="sphere" geometry="primitive: sphere"
                material="color: #EFEFEF; shader: flat"
                position="0 0.15 -5"
                light="type: point; intensity: 5"
                animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"></a-entity>

      <Entity */}

      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="1.8 1.5 -2"
        rotation="0 45 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'level7_lift'}

      />

      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1.5 0.8 0"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'level7_blockC'}

      />
      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
