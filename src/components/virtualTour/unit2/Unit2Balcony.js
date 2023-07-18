import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/balcony.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2Balcony() {
    return (
        < >

            <Arrow position="2 1.5 1.2" rotation="0 330 60" navigate={'Unit2LivingRoom'}
                text="" text_rotation="0 340 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 0 0" />

        </>
    );
}
