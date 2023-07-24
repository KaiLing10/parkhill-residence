import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AFRAME from 'aframe';
import { Entity, Scene } from 'aframe-react';
import { motion } from 'framer-motion';

//icons
import { TbMusic, TbMusicOff } from "react-icons/tb";
import { HiSwitchHorizontal } from "react-icons/hi";
import { ImExit } from "react-icons/im";

// components
import components from './fileLoader';
import InfoModal from '../components/virtualTour/InfoModal'
import SwitchSceneModal from '../components/virtualTour/SwitchSceneModal';

// assets
import badmintonImage from '../assets/facilities/badminton2.jpg'
import poolImage from '../assets/facilities/pool4.jpg'
import playgroundImage from '../assets/facilities/playground3.jpg'
import gameRoomImage from '../assets/facilities/gameRoom4.jpg'
import functionRoomImage from '../assets/facilities/functionRoom.jpg'
import gymnasiumImage from '../assets/facilities/gym3.jpg'
import reflexologyPathImage from '../assets/facilities/reflexologyPath2.jpg'
import readingPavilionImage from '../assets/facilities/readingPavilion2.jpg'
import yogaTaiChiDeckImage from '../assets/facilities/yogaDeck1.jpg'
import jacuzziImage from '../assets/facilities/pool3.jpg'
import outdoorLoungeImage from '../assets/facilities/mazeGarden4.jpg'
import music from '../assets/music.mp3'

// Define scene info
const defaultSceneInfo = {
  title: '',
  content: '',
  sceneNameMessage: 'Level 7 Outdoor',
};

const sceneInfo = {
  Badminton: {
    title: 'Badminton Court',
    content: 'Enjoy a competitive game or engage in friendly matches with fellow residents!',
    facilitiesImage: badmintonImage,
    sceneNameMessage: 'Level 7 Clubhouse',
  },
  PoolCenter: {
    title: 'Swimming Pool',
    content: 'Take a refreshing dip and relax in our spacious swimming pool!',
    facilitiesImage: poolImage,
    sceneNameMessage: 'Level 7 Outdoor',
  },
  Playground2:
  {
    title: 'Playground',
    content: 'Unleash your inner child and have a blast in our vibrant playground!',
    facilitiesImage: playgroundImage,
    sceneNameMessage: 'Level 7 Outdoor',
  },
  GameRoom:
  {
    title: 'Game Room',
    content: 'Indulge in a variety of fun games and activities in our well-equipped game room!',
    facilitiesImage: gameRoomImage,
    sceneNameMessage: 'Level 7 Clubhouse'
  },
  FunctionRoom:
  {
    title: 'Function Room',
    content: 'Host your events and gatherings in our spacious and versatile function room!',
    facilitiesImage: functionRoomImage,
    sceneNameMessage: 'Level 7 Clubhouse'
  },
  Gym:
  {
    title: 'Gymnasium',
    content: 'Stay fit and active in our fully-equipped gymnasium, offering a wide range of exercise options!',
    facilitiesImage: gymnasiumImage,
    sceneNameMessage: 'Level 7 Clubhouse'
  },
  ReflexologyPath:
  {
    title: 'Reflexology Path',
    content: 'Relieve stress and improve your well-being as you walk along our soothing reflexology path!',
    facilitiesImage: reflexologyPathImage,
    sceneNameMessage: 'Level 7 Outdoor',
  },
  RiverViewDeck2:
  {
    title: 'Reading Pavilion',
    content: 'Escape into the world of books and enjoy a tranquil reading experience in our beautiful pavilion!',
    facilitiesImage: readingPavilionImage,
    sceneNameMessage: 'Level 7 Outdoor',
  },
  Jacuzzi:
  {
    title: 'Jacuzzi',
    content: 'Relax and unwind in our luxurious Jacuzzi, perfect for soothing your muscles and relieving stress.',
    facilitiesImage: jacuzziImage,
    sceneNameMessage: 'Level 7 Outdoor',
  },
  Center3Down:
  {
    title: 'Outdoor Lounge',
    content: 'Enjoy quality time with friends and family in outdoor lounge. It’s the perfect place to gather and socialize.',
    facilitiesImage: outdoorLoungeImage,
    sceneNameMessage: 'Level 7 Outdoor',
  },
  Yoga:
  {
    title: 'Yoga & Tai Chi Deck',
    content: 'Find your inner peace and improve your physical well-being on our dedicated Yoga & Tai Chi deck.',
    facilitiesImage: yogaTaiChiDeckImage,
    sceneNameMessage: 'Level 7 Outdoor',
  },
  BlockC:
  {
    sceneNameMessage: 'Level 7 Block C Entrance'
  },
  Unit1Center:
  {
    sceneNameMessage: 'Block D Level 12'
  },
  Unit2Entrance:
  {
    sceneNameMessage: 'Block C Level 31'
  },

};

//custom style
const toolButtonStyle = 'bg-white w-14 h-14 mx-2 text-2xl flex justify-center items-center rounded hover:bg-gray-100'

export default function Vrtour() {
  const { virtualId } = useParams(); //Used for switching the start scene based on where user enter the tour
  const [firstScene, setFirstScene] = useState(true); // Used for prompt message
  const [currentScene, setCurrentScene] = useState(virtualId || 'BlockC');
  const [zoomIn, setZoomIn] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openSwitchScene, setOpenSwitchScene] = useState(false);
  const [musicMuted, setMusicMuted] = useState(true);
  const navigate = useNavigate();
  const [sceneNameMessage, setSceneNameMessage] = useState('');

  // Toggle music state
  const toggleMusic = () => {
    setMusicMuted(!musicMuted);
  };

  // Get scene info based on current scene
  const getSceneInfo = (currentScene) => sceneInfo[currentScene] || defaultSceneInfo;

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
    return SceneComponent ? <SceneComponent /> : null;
  };

  // Handle info/switchScene button click
  const handleInfoModal = () => {
    setOpenInfo(!openInfo)
  }
  const handleSwitchSceneModal = () => {
    setOpenSwitchScene(!openSwitchScene)
  }

  // == Custom A-Frame components ==
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
      this.el.addEventListener("click", () => {
        handleInfoModal();
      });
    },
  });


  //Used for the location prompt when users enter the tour
  useEffect(() => {
    const scene = getSceneInfo(currentScene);
    setSceneNameMessage(scene.sceneNameMessage);
  }, [currentScene]);


  return (
    <>
      <div className="relative h-screen ">
        <div className='absolute flex h-full w-full justify-center items-center'>
          {/* Location prompt when users enter */}
          <motion.div
            className=' z-30 bg-black/50 font-title text-white drop-shadow-black text-center text-2xl md:text-4xl'
            initial={{ opacity: 0, y: 20 }}
            animate={firstScene ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            onAnimationComplete={() => setFirstScene(false)}>
            <p>You are now at {sceneNameMessage}</p>
          </motion.div>
        </div>

        {/* Modal - info, switch scene*/}
        <div className="absolute h-full w-screen ">
          {openInfo && (<InfoModal handleInfoModal={handleInfoModal} {...getSceneInfo(currentScene)} />)}
          {openSwitchScene && (<SwitchSceneModal handleSwitchSceneModal={handleSwitchSceneModal} navigateToScene={navigateToScene} />)}
        </div>

        {/* Static tool panel */}
        <div className='flex h-full justify-center items-end'>
          <div className='relative bg-white/80 h-20 z-10 flex items-center justify-center rounded-md'>

            {/* Exit button */}
            <button onClick={() => navigate(-1)}>
              <div className={toolButtonStyle}>
                <ImExit />
              </div>
            </button>

            {/* Switch scene button */}
            <button onClick={handleSwitchSceneModal} >
              <div className={toolButtonStyle}>
                <HiSwitchHorizontal />
              </div>
            </button>

            {/* Toggle music button */}
            <button onClick={toggleMusic} >
              <div className={toolButtonStyle}>
                {musicMuted ? < TbMusicOff /> : < TbMusic />}
              </div>
            </button>

          </div>
        </div>
      </div>

      {/* VR scene */}
      <Scene loading-screen="backgroundColor: #ffc83d" cursor="rayOrigin: mouse" raycaster="objects: .clickable">
        {/* 360 scene */}
        {renderScene()}

        {/* bg music */}
        {!musicMuted && (<Entity sound={`src: ${music}; autoplay: true; loop: true`} />)}

        {/* camera */}
        <Entity
          primitive='a-camera'
          animation={zoomIn ? "property: camera.zoom; from: 1; to: 1.4; easing: easeInQuad; dur: 1300" : "property: camera.zoom; from: 0.9 ; to: 1 ; dur: 1000"}
          look-controls="pointerLockEnabled: true"
          position="0 1.6 0" >
          <Entity
            cursor="fuse: false;" position="0 0 -1" geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: #ffc600; shader: flat">

          </Entity>
        </Entity>

      </Scene>
    </>

  );
}

