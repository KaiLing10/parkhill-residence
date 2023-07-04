import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/gym.jpg';
import Arrow from '../ArrowEntity';


 export default function Gym() {
  return (
    < >

      <Arrow position="1.8 1.7 -1.6" rotation="2 30 90" navigate={'Gym2'}
        text="Dance Studio" text_rotation="-10 210 1" />
     <Arrow position="1.4 1.4 3" rotation="2 280 50" navigate={'ClubHouseHallway1'}
        text="Hallway" text_rotation="0 190 0" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 160 0" />

    </>
  );
}
