import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/hallway1.jpg';
import Arrow from '../ArrowEntity';


 export default function ClubHouseHallway1() {
  return (
    < >

      <Arrow position="2.5 1.2 1.5" rotation="2 330 50" navigate={'ClubHouseHallway2'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="-0.8 1.3 2.3" rotation="2 250 50" navigate={'FunctionRoom'}
        text="Function Room" text_rotation="-10 150 1" />
      <Arrow position="-0.3 1.3 -3.3" rotation="0 100 50" navigate={'Gym'}
        text="Gymnasium" text_rotation="0 0 355" />
      <Arrow position="-2.8 1.1 -1.5" rotation="5 140 40" navigate={'ClubHouseEntrance'}
        text="" text_rotation="-10 240 0" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 90 0" />

    </>
  );
}
