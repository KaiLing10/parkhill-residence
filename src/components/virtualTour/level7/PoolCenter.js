import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/level7/pool_center.jpg';
import Arrow from '../ArrowEntity';
import Info from '../InfoEntity';


export default function PoolCenter() {
  return (
    < >

      <Arrow position="1.2 1.3 2.5" rotation="2 290 50" navigate={'ClubHouseEntrance'}
        text="" text_rotation="-10 210 1" />
      <Arrow position="-2 1.2 -3" rotation="6 120 60" navigate={'Pool0'}
        text="" text_rotation="0 40 0" />
      <Info position="1.4 2 -2.5" rotation="0 60 90" info={''} />

      <Entity primitive='a-sky' src={scene} rotation="0 220 0" />

    </>
  );
}
