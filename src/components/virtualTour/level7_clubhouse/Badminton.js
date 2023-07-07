import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/badminton.jpg';
import Arrow from '../ArrowEntity';
import Info from '../InfoEntity';


 export default function Badminton() {
  return (
    < >
   
      <Arrow position="-1.8 1.3 2.3" rotation="2 230 50" navigate={'ClubHouseHallway3'}
        text="Hallway" text_rotation="0 135 0" />
      <Info position="4 2 0" rotation="0 0 90"  info={'a'} />
  
   
      <Entity primitive='a-sky' src={scene} rotation="0 100 0" />

    </>
  );
}
