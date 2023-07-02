import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/pool0.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function Pool0() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1.5 0.8 -1"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'PoolCenter'}
      />
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-2 1 1"
        rotation="270 90 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'PoolLounge'}
      />
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="2 1 -1"
        rotation="270 90 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'Center1'}
      />
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="2 1 1"
        rotation="270 90 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'Pool'}
      />

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
