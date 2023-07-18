import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/smallRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2SmallRoom() {
  return (
    < >

          <Arrow position="1 1.4 -2.5" rotation="0 65 70" navigate={'Unit2Hallway2'}
                text="" text_rotation="0 300 0" />
           
    
      <Entity primitive='a-sky' src={scene} rotation="0 0 0" />

    </>
  );
}
