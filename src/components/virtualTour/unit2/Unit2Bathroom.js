import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/bathRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2Bathroom() {
    return (
        < >

            <Arrow position="-1.4 1.7 -0.7" rotation="0 150 70" navigate={'Unit2Hallway'}
                text="Hallway" text_rotation="0 70 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 340 0" />

        </>
    );
}
