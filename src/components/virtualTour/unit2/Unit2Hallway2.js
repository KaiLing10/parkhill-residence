import React from 'react';
import { Entity } from 'aframe-react';
//assets
import scene from '../../../assets/vrtour/unit2/hallway2.jpg';
import Arrow from '../ArrowEntity';


export default function Unit2Hallway2() {
    return (
        < >

            <Arrow position="-1.5 1.6 1.3" rotation="0 220 90" navigate={'Unit2Hallway'}
                text="" text_rotation="0 140 1" />
            <Arrow position="0.2 1.6 -1.7" rotation="0 80 90" navigate={'Unit2MediumRoom'}
                text="Medium Room" text_rotation="0 0 0" />
                 <Arrow position="2 1.7 -1.3" rotation="0 30 90" navigate={'Unit2MasterRoom'}
                text="Master Room" text_rotation="0 300 0" />
            <Arrow position="2.5 1.8 -0.2" rotation="90 190 90" navigate={'Unit2JuniorMedium'}
                text="Junior Medium" text_rotation="0 250 0" />
            <Arrow position="1.4 1.4 1.7" rotation="0 300 80" navigate={'Unit2SmallRoom'}
                text="Small Room" text_rotation="-10 220 0" />

            <Entity primitive='a-sky' src={scene} rotation="0 10 0" />

        </>
    );
}
