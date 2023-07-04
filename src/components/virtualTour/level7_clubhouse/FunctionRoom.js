import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7_clubhouse/function_room.jpg';
import Arrow from '../ArrowEntity';


 export default function FunctionRoom() {
  return (
    < >

      <Arrow position="0.2 1.2 2.6" rotation="2 270 50" navigate={'FunctionRoom2'}
        text="" text_rotation="0 180 -5" />
      <Arrow position="0.7 1.1 -2" rotation="5 70 40" navigate={'ClubHouseHallway1'}
        text="Hallway" text_rotation="-10 -20 0" />
   
      <Entity primitive='a-sky' src={scene} rotation="0 165 0" />

    </>
  );
}
