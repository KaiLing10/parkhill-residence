import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/mediumRoom.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2MediumRoom() {
    return (
        < >

            <Arrow position="-2 1.5 1" rotation="0 200 90" navigate={'Unit2Hallway2'}
                text="" text_rotation="0 10 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 100 0" />

        </>
    );
}
