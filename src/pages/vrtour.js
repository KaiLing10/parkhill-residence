import React, { useState, useEffect } from 'react';
import { Entity, Scene } from 'aframe-react';
import AFRAME from 'aframe'

import C1 from '../components/virtualTour/level7/C1';
import C2 from '../components/virtualTour/level7/C2';
import CLift from '../components/virtualTour/level7/CLift';

import Playground from '../components/virtualTour/level7/Playground';
import PlaygroundRestingArea from '../components/virtualTour/level7/PlaygroundRestingArea';
import BbqArea from '../components/virtualTour/level7/BbqArea';
import BlockD from '../components/virtualTour/level7/BlockD';
import BlockDDoor from '../components/virtualTour/level7/BlockDDoor';
import Center1 from '../components/virtualTour/level7/Center1';
import Center3 from '../components/virtualTour/level7/Center3';
import Center3Down from '../components/virtualTour/level7/Center3Down';
import Center4 from '../components/virtualTour/level7/Center4';
import ClubhouseDoor from '../components/virtualTour/level7/ClubhouseDoor';
import Jacuzzi from '../components/virtualTour/level7/Jacuzzi';
import Jacuzzi2 from '../components/virtualTour/level7/Jacuzzi2';
import MazeGarden from '../components/virtualTour/level7/MazeGarden';


function Vrtour() {
  const [currentScene, setCurrentScene] = useState('level7_blockC');

  const navigateToScene = (scene) => {
    console.log('reset');
    setCurrentScene(scene);
  };

  const renderScene = () => {
    switch (currentScene) {
      case 'level7_lift':
        return <CLift />;
      case 'level7_blockC_door':
        return <C1 />;
      case 'level7_blockC':
        return <C2 />;
      case 'playground':
        return <Playground />;
      case 'playground_resting_area':
        return <PlaygroundRestingArea />;
      case 'bbq_area':
        return <BbqArea />;
      case 'blockD':
        return <BlockD />;
      case 'blockD_door':
        return <BlockDDoor />;
      case 'center1':
        return <Center1 />;
      case 'center3':
        return <Center3 />;
      case 'center3Down':
        return <Center3Down />;
      case 'center4':
        return <Center4 />;
      case 'clubhouse_door':
        return <ClubhouseDoor />
      case 'jacuzzi':
        return <Jacuzzi />
      case 'jacuzzi_2':
        return <Jacuzzi2 />
      case 'maze_garden':
        return <MazeGarden />
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
      <Entity primitive='a-camera' look-controls="pointerLockEnabled: true" position="0 1.6 0">
        <Entity cursor="fuse: false;" position="0 0 -1" geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03" material="color: #ffc600; shader: flat"></Entity>
      </Entity>
    </Scene>
  );
}

export default Vrtour;
