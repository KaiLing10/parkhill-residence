import React, { useState, useEffect } from 'react';
import Scene1 from '../components/virtualTour/Scene1';
import Scene2 from '../components/virtualTour/Scene2';
import { Entity, Scene } from 'aframe-react';
import AFRAME from 'aframe'


const Vrtour = () => {
  const [currentScene, setCurrentScene] = useState('scene1');

  const navigateToScene = (scene) => {
    console.log("i am in vrtour.js")
    setCurrentScene(scene);
  };

 
  const renderScene = () => {
    switch (currentScene) {
      case 'scene1':
        return <Scene1  />;
        case 'scene2':
        return <Scene2  />;
      default:
        return null;
    }
  };
  useEffect(() => {

    if (AFRAME.components["log"]) {
      delete AFRAME.components["log"];
    }

    // Custom component registration
    AFRAME.registerComponent('log', {
      schema: {
        id: {type: 'number'}
      },

      init: function () {
        console.log('Hello, World!');
        console.log(this.data);
        const roomNo = this.data;
        
        this.el.addEventListener('click', () => {
          console.log('kkk');
         
            navigateToScene(`scene${roomNo}`);
   
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
