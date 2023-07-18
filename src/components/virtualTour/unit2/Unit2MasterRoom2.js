import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/masterRoom2.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2MasterRoom2() {
    return (
        < >

            <Arrow position="-1.3 1.5 1.6" rotation="0 220 90" navigate={'Unit2MasterRoom'}
                text="" text_rotation="0 10 1" />

            <Entity primitive='a-sky' src={scene} rotation="0 60 0" />

        </>
    );
}
