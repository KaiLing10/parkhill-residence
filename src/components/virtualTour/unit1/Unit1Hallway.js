import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/hallway.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1Hallway() {
    return (
        < >

            <Arrow position="-2.1 1.5 -1" rotation="0 160 90" navigate={'Unit1Center'}
                text="" text_rotation="0 140 1" />
            <Arrow position="2 1.6 -1" rotation="270 30 90" navigate={'Unit1Bathroom'}
                text="Bathroom" text_rotation="0 300 0" />
            <Arrow position="2.8 1.6 0.5" rotation="270 180 90" navigate={'Unit1JuniorMedium'}
                text="Junior Medium" text_rotation="0 250 0" />
            <Arrow position="2.2 2.1 1.3" rotation="90 320 80" navigate={'Unit1MasterRoom'}
                text="Master Room" text_rotation="0 250 0" />
            <Arrow position="1.4 1.4 1.7" rotation="90 300 80" navigate={'Unit1MediumRoom'}
                text="Medium Room" text_rotation="0 240 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 300 0" />

        </>
    );
}
