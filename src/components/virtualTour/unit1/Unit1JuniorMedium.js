import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/juniorMedium.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1JuniorMedium() {
    return (
        < >

            <Arrow position="-1.8 1.5 1" rotation="0 210 70" navigate={'Unit1Hallway'}
                text="" text_rotation="0 10 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 280 0" />

        </>
    );
}
