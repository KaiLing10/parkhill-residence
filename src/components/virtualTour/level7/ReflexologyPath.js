import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/reflexology_path.jpg';
import Arrow from '../ArrowEntity';


export default function ReflexologyPath() {
  return (
    < >

      <Arrow position="0.7 1.1 -3" rotation="10 70 50" navigate={'Center3'}
        text="" text_rotation="0 340 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 320 0" />

    </>
  );
}

