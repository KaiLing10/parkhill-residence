import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/game_room.jpg';
import Arrow from '../ArrowEntity';
import Info from '../InfoEntity'


export default function GameRoom() {
  return (
    < >

      <Arrow position="0.9 1.1 2.2" rotation="320 310 50" navigate={'GameRoom2'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="1.9 1.3 -2.8" rotation="0 60 50" navigate={'ClubHouseHallway2'}
        text="Hallway" text_rotation="0 0 355" />
      <Info position="-1.5 2 2.4" rotation="0 240 90" info={''}/>

      <Entity primitive='a-sky' src={scene} rotation="0 8 0" />

    </>
  );
}
