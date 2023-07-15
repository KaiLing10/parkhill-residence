import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit1/masterRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit1MasterRoom() {
    return (
        < >
            <Arrow position="-0.5 1.4 -2.4" rotation="0 100 70" navigate={'Unit1Hallway'}
                text="" text_rotation="0 300 0" />
            <Arrow position="2.5 1.5 0" rotation="270 10 80" navigate={'Unit1Bathroom2'}
                text="Bathroom" text_rotation="0 270 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 100 0" />

        </>
    );
}
