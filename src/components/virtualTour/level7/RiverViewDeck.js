import React from 'react';
import { Entity } from 'aframe-react';

//assets
import scene from '../../../assets/vrtour/level7/river_view_deck.jpg';
import ArrowIcon from '../../../assets/vrtour/arrow.png';


export default function RiverViewDeck() {
  return (
    <>
      <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1.5 0.8 0"
        rotation="270 180 90"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'Center4'}
      />
       <Entity
        geometry={{ primitive: 'cylinder' }}
        position="-1 1.6 -3"
        rotation="270 180 0"
        scale="0.2 0.05 0.2"
        material={{ src: ArrowIcon, shader: 'flat' }}
        class="clickable"
        navigate={'RiverViewDeck2'}
      />
      

      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
    </>
  );
}
