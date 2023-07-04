import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/clubhouse_entrance.jpg';
import Arrow from '../ArrowEntity';


export default function ClubHouseEntrance() {
  return (
    < >

      <Arrow position="-3 1.3 -2" rotation="10 130 60" navigate={'Center1'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="1 1.2 -3" rotation="2 75 60" navigate={'PoolCenter'}
        text="Pool" text_rotation="0 0 0" />
      <Arrow position="2.6 1.3 1" rotation="10 -30 60" navigate={'ClubHouseHallway1'}
        text="Club House" text_rotation="-10 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 270 0" />

    </>
  );
}
