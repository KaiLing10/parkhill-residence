import React, { useState, useEffect } from 'react';
import C1 from '../components/virtualTour/level7/C1';
import C2 from '../components/virtualTour/level7/C2';
import { Entity, Scene } from 'aframe-react';
import AFRAME from 'aframe'


const Vrtour = () => {
  const [currentScene, setCurrentScene] = useState('level7_c1');

  const navigateToScene = (scene) => {
    console.log('reset');
    setCurrentScene(scene);
  };


  const renderScene = () => {
    switch (currentScene) {
      case 'level7_c1':
        console.log('scene1');
        return <C1 />;
      case 'level7_c2':
        console.log('scene2');
        return <C2 />;
      default:
        return null;
    }
  };
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
    </Scene>
  );
}

export default Vrtour;
