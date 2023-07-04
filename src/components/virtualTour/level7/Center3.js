import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/center3.jpg';
import Arrow from '../ArrowEntity';


export default function Center3() {
  return (
    < >

      <Arrow position="1 1.2 3" rotation="2 280 50" navigate={'Center4'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="-1.5 1.2 2.3" rotation="2 250 50" navigate={'ReflexologyPath'}
        text="Reflexology Path" text_rotation="-10 170 1" />
      <Arrow position="-1 1.3 -3.3" rotation="0 100 50" navigate={'Pool'}
        text="" text_rotation="-10 240 0" />
      <Arrow position="2.5 1.1 -1.3" rotation="0 30 30" navigate={'Center3Down'}
        text="" text_rotation="-10 240 0" />

      <Entity primitive='a-sky' src={scene} rotation="0 300 0" />

    </>
  );
}
