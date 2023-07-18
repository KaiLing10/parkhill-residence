import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/laundryRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1LaundryRoom() {
    return (
        < >
            <Arrow position="-0.1 1.5 -1.8" rotation="0 90 70" navigate={'Unit1Kitchen'}
                text="" text_rotation="0 140 1" />

            <Entity primitive='a-sky' src={scene} rotation="0 100 0" />

        </>
    );
}
