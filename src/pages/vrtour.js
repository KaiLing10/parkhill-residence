import React, { useState } from 'react';
import Scene1 from '../components/virtualTour/Scene1';
import Scene2 from '../components/virtualTour/Scene2';
import { Entity, Scene } from 'aframe-react';

const Vrtour = () => {
  const [currentScene, setCurrentScene] = useState('scene1');

  const navigateToScene = (scene) => {
    console.log("i am in vrtour.js")
    setCurrentScene(scene);
  };

  const renderScene = () => {
    switch (currentScene) {
      case 'scene1':
        console.log("scene1 first ")
        return <Scene1 navigateToScene={navigateToScene} />;
      case 'scene2':
        return <Scene2 navigateToScene={navigateToScene} />;
      default:
        return null;
    }
  };

  return (
    <Scene>
      <Entity>
        {renderScene()}
      </Entity>
    </Scene>
  );
}

export default Vrtour;
