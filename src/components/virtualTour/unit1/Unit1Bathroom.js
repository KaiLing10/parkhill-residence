import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/bathRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1Bathroom() {
    return (
        < >

            <Arrow position="-1.6 1.5 1.6" rotation="0 210 70" navigate={'Unit1Hallway'}
                text="" text_rotation="0 140 1" />

            <Entity primitive='a-sky' src={scene} rotation="0 140 0" />

        </>
    );
}
