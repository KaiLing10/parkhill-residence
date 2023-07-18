import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/entrance.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2Entrance() {
    return (
        < >
            <Arrow position="-1.2 1.6 -1.9" rotation="0 110 90" navigate={'Unit2Center'}
                text="" text_rotation="0 140 1" />
            <Arrow position="2.1 1.5 -0.3" rotation="0 0 70" navigate={'Unit2Kitchen'}
                text="" text_rotation="0 300 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 10 0" />

        </>
    );
}
