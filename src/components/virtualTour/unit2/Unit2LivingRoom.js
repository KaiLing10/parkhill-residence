import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/livingRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2LivingRoom() {
    return (
        < >
            <Arrow position="2 1.6 -1.5" rotation="0 40 90" navigate={'Unit2Hallway'}
                text="" text_rotation="0 300 0" />
            <Arrow position="-1.1 1.5 2" rotation="0 240 70" navigate={'Unit2Center'}
                text="" text_rotation="0 140 1" />
                  <Arrow position="-2.4 1.4 -1.8" rotation="0 140 70" navigate={'Unit2Balcony'}
                text="" text_rotation="0 10 0" />


            <Entity primitive='a-sky' src={scene} rotation="0 230 0" />

        </>
    );
}
