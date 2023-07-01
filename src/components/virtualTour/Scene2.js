import React from 'react';
import { Entity, Scene } from 'aframe-react';

export default function Scene2({ navigateToScene }) {
  const handleBoxClick = () => {
    navigateToScene('scene1');
  };

  return (
    <Scene>
      <Entity
        position="0 1.6 -4"
        rotation="0 180 0"
        scale="2 2 2"
        geometry={{
          primitive: 'box',
        }}
        material={{
          color: 'blue',
        }}
        class="clickable"
        onClick={handleBoxClick}
      ></Entity>

      {/* Other entities and components specific to Scene2 */}
    </Scene>
  );
}
