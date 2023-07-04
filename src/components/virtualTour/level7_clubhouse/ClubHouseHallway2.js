import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/hallway2.jpg';
import Arrow from '../ArrowEntity';


export default function ClubHouseHallway2() {
  return (
    < >

      <Arrow position="2.5 1.2 1.5" rotation="2 330 50" navigate={'ClubHouseHallway3'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="-1 1.2 2.3" rotation="2 250 50" navigate={'GameRoom'}
        text="Games Room" text_rotation="-30 150 0" />
      <Arrow position="1 1.5 -3" rotation="0 75 70" navigate={'RoofGarden'}
        text="Roof Garden" text_rotation="0 0 -2" />
      <Arrow position="-2.8 1.1 -1.3" rotation="5 150 40" navigate={'ClubHouseHallway1'}
        text="" text_rotation="-10 240 0" />


      <Entity primitive='a-sky' src={scene} rotation="0 130 0" />

    </>
  );
}
