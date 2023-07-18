import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/masterRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2MasterRoom() {
    return (
        < >

           <Arrow position="-2.2 1.5 0.1" rotation="90 220 110" navigate={'Unit2Hallway2'}
                text="" text_rotation="0 10 1" />

            <Arrow position="1.5 1.5 -1.8" rotation="0 40 70" navigate={'Unit2MasterRoom2'}
                text="" text_rotation="0 300 0" />



            <Entity primitive='a-sky' src={scene} rotation="0 180 0" />

        </>
    );
}
