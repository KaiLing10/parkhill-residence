import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/hallway3.jpg';
import Arrow from '../ArrowEntity';


 export default function ClubHouseHallway3() {
  return (
    < >
   
      {/* <Arrow position="-0.8 1.3 2.3" rotation="2 250 50" navigate={''}
        text="Function Room" text_rotation="-10 150 1" /> */}
      <Arrow position="4 1.3 -0.5" rotation="0 20 50" navigate={'Badminton'}
        text="Badminton Court" text_rotation="0 280 0" />
      <Arrow position="-2.8 1.1 -1.5" rotation="5 140 40" navigate={'ClubHouseHallway2'}
        text="" text_rotation="-10 240 0" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 150 0" />

    </>
  );
}
