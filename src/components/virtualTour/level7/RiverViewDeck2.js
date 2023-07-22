import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/river_view_deck2.jpg';
import Arrow from '../ArrowEntity';
import Info from '../InfoEntity';


export default function RiverViewDeck2() {
  return (
    < >
    
      <Arrow position="0.4 1.1 2.2" rotation="0 270 40" navigate={'RiverViewDeck'}
        text="" text_rotation="-10 240 0" />
         <Info position="0 2 -2.5" rotation="0 90 90"  info={''}  />

      <Entity primitive='a-sky' src={scene} rotation="0 240 0" />

    </>
  );
}

