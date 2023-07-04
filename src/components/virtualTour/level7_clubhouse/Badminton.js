import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/badminton.jpg';
import Arrow from '../ArrowEntity';


 export default function Badminton() {
  return (
    < >
   
      <Arrow position="-1.8 1.3 2.3" rotation="2 230 50" navigate={'ClubHouseHallway3'}
        text="Hallway" text_rotation="0 135 0" />
  
   
      <Entity primitive='a-sky' src={scene} rotation="0 100 0" />

    </>
  );
}
