import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/kitchen.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2Kitchen() {
    return (
        < >
            <Arrow position="-2.2 1.5 0.5" rotation="0 200 70" navigate={'Unit2Entrance'}
                text="" text_rotation="0 140 1" />
            <Arrow position="2 1.5 -1.3" rotation="0 25 70" navigate={'Unit2LaundryRoom'}
                text="" text_rotation="-10 240 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 320 0" />

        </>
    );
}
