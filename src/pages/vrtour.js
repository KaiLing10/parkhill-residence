import React, { useState, useEffect } from 'react';
import { Entity, Scene } from 'aframe-react';
import AFRAME from 'aframe'
import components from './fileLoader';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


//icon
import { TbMusic, TbMusicOff } from "react-icons/tb";
import { HiSwitchHorizontal } from "react-icons/hi";
import { ImExit } from "react-icons/im";
// import { BiChevronDownCircle } from "react-icons/bi";

// components
import InfoModal from '../components/virtualTour/InfoModal'
import SwitchSceneModal from '../components/virtualTour/SwitchSceneModal';

// assets
import badmintonImage from '../assets/facilities/badminton2.jpg'
import poolImage from '../assets/facilities/pool4.jpg'
import playgroundImage from '../assets/facilities/playground3.jpg'
import gameRoomImage from '../assets/facilities/gameRoom1.jpg'
import functionRoomImage from '../assets/facilities/functionRoom.jpg'
import gymnasiumImage from '../assets/facilities/gym1.png'
import reflexologyPathImage from '../assets/facilities/badminton2.jpg'
import readingPavilionImage from '../assets/facilities/readingPavilion2.jpg'
import music from '../assets/music.mp3'

export default function Vrtour() {
  const { virtualId } = useParams(); //used when navigate from Facilities page
  const [firstTour, setFirstTour] = useState(true);
  const [currentScene, setCurrentScene] = useState(virtualId ||'BlockC');
  const [zoomIn, setZoomIn] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openSwitchScene, setOpenSwitchScene] = useState(false);
  const [musicMuted, setMusicMuted] = useState(true);
  const navigate = useNavigate();


  // Toggle music state
  const toggleMusic = () => {
    setMusicMuted(!musicMuted);
  };

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


  // Render current scene component
  const renderScene = () => {
    const SceneComponent = components[currentScene];

    if (SceneComponent) {
      return <SceneComponent />;
    } else {
      return null;
    }
  };

    // Handle info/switchScene button click
  const handleInfoModal = () => {
    setOpenInfo(!openInfo)
  }
  const handleSwitchSceneModal = () => {
    setOpenSwitchScene(!openSwitchScene)
  }

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
    return () => {
      // Cleanup A-Frame components when the component unmounts
      delete AFRAME.components["navigate"];
      delete AFRAME.components["info"];
    };

  });

  // Get info modal's content based on current scene
  const getTitleAndContent = () => {
    switch (currentScene) {
      case 'Badminton':
        return {
          title: 'Badminton Court',
          content: 'Enjoy a competitive game or engage in friendly matches with fellow residents!',
          facilitiesImage: badmintonImage
        };
      case 'PoolCenter':
        return {
          title: 'Swimming Pool',
          content: 'Take a refreshing dip and relax in our spacious swimming pool!',
          facilitiesImage: poolImage
        };
      case 'Playground2':
        return {
          title: 'Playground',
          content: 'Unleash your inner child and have a blast in our vibrant playground!',
          facilitiesImage: playgroundImage
        };
      case 'GameRoom':
        return {
          title: 'Game Room',
          content: 'Indulge in a variety of fun games and activities in our well-equipped game room!',
          facilitiesImage: gameRoomImage
        };
      case 'FunctionRoom':
        return {
          title: 'Function Room',
          content: 'Host your events and gatherings in our spacious and versatile function room!',
          facilitiesImage: functionRoomImage
        };
      case 'Gym':
        return {
          title: 'Gymnasium',
          content: 'Stay fit and active in our fully-equipped gymnasium, offering a wide range of exercise options!',
          facilitiesImage: gymnasiumImage
        };
      case 'ReflexologyPath':
        return {
          title: 'Reflexology Path',
          content: 'Relieve stress and improve your well-being as you walk along our soothing reflexology path!',
          facilitiesImage: reflexologyPathImage
        };
      case 'RiverViewDeck2':
        return {
          title: 'Reading Pavilion',
          content: 'Escape into the world of books and enjoy a tranquil reading experience in our beautiful pavilion!',
          facilitiesImage: readingPavilionImage
        };

      default:
        return {
          title: '',
          content: '',
        };
    }
  };

  return (
    <div>

      <div className="relative h-screen ">
        <div className='absolute flex h-full w-full justify-center items-center'>
          {/* welcome text */}

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
        <div className="absolute h-full w-screen ">
          {openInfo && (<InfoModal handleInfoModal={handleInfoModal} {...getTitleAndContent()} />)}
          {openSwitchScene && (<SwitchSceneModal handleSwitchSceneModal={handleSwitchSceneModal} navigateToScene={navigateToScene} />)}
        </div>

        {/* static navbar */}
        <div className='flex h-full justify-center items-end'>
          <div className='relative bg-white/80 h-20 w-1/3 z-10 flex items-center justify-center rounded-md'>
            
            {/* <button> */}
            <button onClick={() => navigate(-1)}>

              {/* <Link to="/home"> */}
              {/* Exit button */}
              <div className='bg-white w-14 h-14 mx-2 text-2xl flex justify-center items-center rounded hover:bg-gray-100'>
                <ImExit />
              </div>
            {/* </Link> */}
            </button>

            {/* Switch scene button */}
            <button onClick={handleSwitchSceneModal} >
              <div className='bg-white w-14 h-14 mx-2 text-3xl flex justify-center items-center rounded hover:bg-gray-100'>
                <HiSwitchHorizontal />
              </div>
            </button>

            {/* Toggle Music Button */}
            <button onClick={toggleMusic} >
              <div className='bg-white w-14 h-14 mx-2 text-3xl flex justify-center items-center rounded hover:bg-gray-100'>
                {musicMuted ? < TbMusicOff /> : < TbMusic />}
              </div>
            </button>

            {/* <div className='aboulute text-3xl right-0 z-20 '>
              < BiChevronDownCircle/> 
            </div> */}
          </div>
        </div>
      </div>

      <Scene loading-screen="backgroundColor: #ffc83d" cursor="rayOrigin: mouse" raycaster="objects: .clickable">
        {/* 360 scene */}
        {renderScene()}

        {/* bg music */}
        {!musicMuted && (<Entity sound={`src: ${music}; autoplay: true; loop: true`} />)}

        {/* camera */}
        <Entity
          primitive='a-camera'
          animation={zoomIn ? "property: camera.zoom; from: 1; to: 1.4; easing: easeInQuad; dur: 1300" : "property: camera.zoom; from: 0.9 ; to: 1 ; dur: 1000"}
          look-controls={openInfo ? "pointerLockEnabled: false" : "pointerLockEnabled: true"}
          // look-controls="pointerLockEnabled: true"
          position="0 1.6 0" >
          <Entity cursor="fuse: false;" position="0 0 -1" geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03" material="color: #ffc600; shader: flat"></Entity>
        </Entity>

      </Scene>
    </div>

  );
}

