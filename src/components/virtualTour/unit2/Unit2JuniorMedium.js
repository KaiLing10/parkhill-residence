import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/juniorMedium.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2JuniorMedium() {
    return (
        < >
            <Arrow position="0 1.5 2.1" rotation="0 270 70" navigate={'Unit2Hallway2'}
                text="" text_rotation="0 10 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 300 0" />

        </>
    );
}
