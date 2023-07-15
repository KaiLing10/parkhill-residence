import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/livingRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1LivingRoom() {
    return (
        < >
            <Arrow position="2 1.6 -1" rotation="0 40 90" navigate={'Unit1Center'}
                text="" text_rotation="0 300 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 200 0" />

        </>
    );
}
