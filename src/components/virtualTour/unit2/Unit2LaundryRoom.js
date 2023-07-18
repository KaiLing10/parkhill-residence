import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/laundryRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2LaundryRoom() {
    return (
        < >

            <Arrow position="-0.8 1.5 1.9" rotation="0 250 60" navigate={'Unit2Kitchen'}
                text="c" text_rotation="0 340 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 350 0" />

        </>
    );
}
