import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/kitchen.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1Kitchen() {
    return (
        < >
            <Arrow position="-1.5 1.5 2.0" rotation="0 230 70" navigate={'Unit1Center'}
                text="" text_rotation="0 140 1" />
            <Arrow position="2.1 1.5 0.5" rotation="0 340 70" navigate={'UnitLaundryRoom'}
                text="Laundry Room" text_rotation="-10 240 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 320 0" />

        </>
    );
}
