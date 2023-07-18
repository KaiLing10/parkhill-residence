import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/hallway.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2Hallway() {
    return (
        < >

            <Arrow position="-1.6 1.5 1.4" rotation="0 220 90" navigate={'Unit2LivingRoom'}
                text="" text_rotation="0 10 1" />
            <Arrow position="2.1 1.6 -1.5" rotation="0 30 90" navigate={'Unit2Hallway2'}
                text="" text_rotation="0 300 0" />
            <Arrow position="1.4 1.4 1.7" rotation="0 300 80" navigate={'Unit2Bathroom'}
                text="Bathroom" text_rotation="-10 210 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 0 0" />

        </>
    );
}
