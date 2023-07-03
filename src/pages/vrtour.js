import React, { useState, useEffect } from 'react';
import { Entity, Scene } from 'aframe-react';
import AFRAME from 'aframe'
import components from './fileLoader';

export default function Vrtour() {
  const [currentScene, setCurrentScene] = useState('BlockC');
  

  // Navigate to different scene
  const navigateToScene = (scene) => {
    setCurrentScene(scene);
  };

  // Render the current scene component
  const renderScene = () => {
    const SceneComponent = components[currentScene];

    if (SceneComponent) {
      return <SceneComponent />;
    } else {
      return null;
    }
  };

  // Register custom A-Frame component for navigation through click
  useEffect(() => {
    if (AFRAME.components["navigate"]) {
      delete AFRAME.components["navigate"];
    }

    AFRAME.registerComponent('navigate', {
      schema: {
        id: { type: 'string' }
      },

      init: function () {
        const scene = this.data;
        this.el.addEventListener('click', () => {
          navigateToScene(scene);
        });
      },
    });

  }, []);


  return (
    <Scene loading-screen="backgroundColor: #ffc83d" cursor="rayOrigin: mouse" raycaster="objects: .clickable">
      {renderScene()}

      <Entity primitive='a-camera' look-controls="pointerLockEnabled: true" position="0 1.6 0"  >
        <Entity 
        cursor="fuse: false;" 
        position="0 0 -1" 
        geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03" 
        material="color: #ffc600; shader: flat"></Entity>
      </Entity>

    </Scene>
  );
}

