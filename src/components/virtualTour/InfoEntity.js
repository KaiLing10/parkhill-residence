import React, { useState } from 'react';
import { Entity } from 'aframe-react';
import InfoIcon from '../../assets/vrtour/info.png';
import InfoIconHover from '../../assets/vrtour/info_hover.png'

export default function Info({ position, rotation, info }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverStart = () => {
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };

    return (

        <Entity
            geometry={{ primitive: 'cylinder' }}
            position={position}
            rotation={rotation}
            scale="0.4 0.03 0.4"
            material={{
                src: isHovered ? InfoIconHover : InfoIcon,
                shader: 'flat',
                opacity: '0.8',
            }}
            class="clickable"
            events={{
                mouseenter: handleHoverStart,
                mouseleave: handleHoverEnd
            }}
            info={info}
        />

    );
}
