import React, { useState, useEffect } from 'react';
import { Entity, Scene } from 'aframe-react';
import AFRAME from 'aframe'
import components from './fileLoader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import InfoModal from '../components/virtualTour/InfoModal'
import SwitchSceneModal from '../components/virtualTour/SwitchSceneModal';
import facilitiesImage from '../assets/facilities/center.jpg'

export default function Vrtour() {
  const [firstTour, setFirstTour] = useState(true);
  const [currentScene, setCurrentScene] = useState('BlockC');
  const [zoomIn, setZoomIn] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openSwitchScene, setOpenSwitchScene] = useState(false);

  // Navigate to other scene with animation
  const navigateToScene = (scene) => {
    setOpenSwitchScene(false)
    setOpenInfo(false)
    setZoomIn(true); // Enable zoom animation
    setTimeout(() => {
      setCurrentScene(scene);
      setZoomIn(false);
    }, 1500);
  };

  // Handle info/switchScene button click
  const handleInfoModal = () => {
    setOpenInfo(!openInfo)
  }

  const handleSwitchSceneModal = () => {
    setOpenSwitchScene(!openSwitchScene)
  }

  // Render current scene component
  const renderScene = () => {
    const SceneComponent = components[currentScene];

    if (SceneComponent) {
      return <SceneComponent />;
    } else {
      return null;
    }
  };

  // Register custom A-Frame components
  useEffect(() => {
    if (AFRAME.components["navigate"]) {
      delete AFRAME.components["navigate"];
    }
    if (AFRAME.components["info"]) {
      delete AFRAME.components["info"];
    }

    // for navigation through click event
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

    // for info modal through click event
    AFRAME.registerComponent("info", {
      schema: {
        id: { type: 'string' }
      },
      init: function () {
        const test = this.data;
        console.log(this.data)
        console.log(test)
        this.el.addEventListener("click", () => { handleInfoModal() });
      },
    });
  }, []);


  return (

    <Scene loading-screen="backgroundColor: #ffc83d" cursor="rayOrigin: mouse" raycaster="objects: .clickable">


      <div className='relative h-screen'>
        <div className='absolute flex bg-red-300 h-full w-full justify-center items-center'>
          <motion.div
            className=' z-30 bg-black/50 font-title text-white drop-shadow-black text-center text-2xl md:text-4xl'
            initial={{ opacity: 0, y: 20 }}
            animate={firstTour ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            onAnimationComplete={() => setFirstTour(false)}
          >
            <p>You are now at Level 7</p>
          </motion.div>
        </div>

        {/* modal */}
        <div className="absolute h-full w-screen overflow-y-scroll">
          {openInfo ? <InfoModal handleInfoModal={handleInfoModal} /> : ''}
          {openSwitchScene ? <SwitchSceneModal handleSwitchSceneModal={handleSwitchSceneModal} navigateToScene={navigateToScene} /> : ''}
        </div>

        {/* static toolbar */}
        <div className='flex h-full justify-center items-end'>
          <div className='bg-white/80 h-20 w-2/3 z-10 p-2 text-center'>
            <Link to="/home" className='w-4/5 mx-3'>
              <button className='font-content text-lg border-2 bg-white border-black rounded-xl my-2 py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                Home
              </button>
            </Link>

            <button onClick={handleSwitchSceneModal} className='font-content text-lg border-2 bg-white border-black rounded-xl my-2 py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
              Switch
            </button>
          </div>
        </div>

        {/* welcome text */}



      </div>



      {/* 360 scene */}
      {renderScene()}

      {/* camera */}
      <Entity
        primitive='a-camera'
        animation={zoomIn ? "property: camera.zoom; from: 1; to: 1.4; easing: easeInQuad; dur: 1300" : "property: camera.zoom; from: 0.9 ; to: 1 ; dur: 1000"}
        look-controls={openInfo ? "pointerLockEnabled: false" : "pointerLockEnabled: true"}
        // look-controls="pointerLockEnabled: true"
        position="0 1.6 0"  >
        <Entity cursor="fuse: false;" position="0 0 -1" geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03" material="color: #ffc600; shader: flat"></Entity>
      </Entity>

    </Scene>
  );
}

