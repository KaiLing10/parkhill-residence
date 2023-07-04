import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/game_room2.jpg';
import Arrow from '../ArrowEntity';


 export default function GameRoom2() {
  return (
    < >

      <Arrow position="-2.3 1.1 2" rotation="40 180 50" navigate={'GameRoom'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="-0.5 1.3 -2.8]" rotation="0 115 50" navigate={'ClubHouseHallway2'}
        text="Hallway" text_rotation="0 0 0" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 40 0" />

    </>
  );
}
