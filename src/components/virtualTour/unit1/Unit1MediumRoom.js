import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/mediumRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1MediumRoom() {
    return (
        < >
            <Arrow position="-0.2 1.4 -2.5" rotation="0 100 70" navigate={'Unit1Hallway'}
                text="" text_rotation="0 300 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 180 0" />

        </>
    );
}
