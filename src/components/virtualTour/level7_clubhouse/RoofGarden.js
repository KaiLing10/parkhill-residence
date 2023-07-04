import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/roof.jpg';
import Arrow from '../ArrowEntity';


 export default function RoofGarden() {
  return (
    < >

      <Arrow position="-2.5 1.3 1.5" rotation="2 190 50" navigate={'ClubHouseHallway2'}
        text="Hallway" text_rotation="-20 100 1" />
      <Arrow position="1 1.3 -3" rotation="20 70 50" navigate={'RoofGarden2'}
        text="" text_rotation="0 0 355" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 200 0" />

    </>
  );
}
