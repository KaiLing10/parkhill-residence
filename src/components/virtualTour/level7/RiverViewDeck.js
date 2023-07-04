import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/river_view_deck.jpg';
import Arrow from '../ArrowEntity';


export default function RiverViewDeck() {
  return (
    < >

      <Arrow position="-1.5 1.2 -3" rotation="0 120 50" navigate={'RiverViewDeck2'}
        text="" text_rotation="-10 240 0" />
      <Arrow position="-2.5 1.1 0.4" rotation="0 190 40" navigate={'Center4'}
        text="" text_rotation="-10 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 80 0" />

    </>
  );
}
