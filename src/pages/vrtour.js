import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Entity, Scene } from 'aframe-react';
import AFRAME from 'aframe';
import { motion } from 'framer-motion';
import components from './fileLoader';

//icon
import { TbMusic, TbMusicOff } from "react-icons/tb";
import { HiSwitchHorizontal } from "react-icons/hi";
import { ImExit } from "react-icons/im";

// components
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

// Get info modal's content & scene name message based on current scene
const getTitleAndContent = (currentScene) => {
  switch (currentScene) {
    case 'Badminton':
      return {
        title: 'Badminton Court',
        content: 'Enjoy a competitive game or engage in friendly matches with fellow residents!',
        facilitiesImage: badmintonImage,
        sceneNameMessage: 'Level 7 Clubhouse'
      };
    case 'PoolCenter':
      return {
        title: 'Swimming Pool',
        content: 'Take a refreshing dip and relax in our spacious swimming pool!',
        facilitiesImage: poolImage,
      };
    case 'Playground2':
      return {
        title: 'Playground',
        content: 'Unleash your inner child and have a blast in our vibrant playground!',
        facilitiesImage: playgroundImage,
      };
    case 'GameRoom':
      return {
        title: 'Game Room',
        content: 'Indulge in a variety of fun games and activities in our well-equipped game room!',
        facilitiesImage: gameRoomImage,
        sceneNameMessage: 'Level 7 Clubhouse'
      };
    case 'FunctionRoom':
      return {
        title: 'Function Room',
        content: 'Host your events and gatherings in our spacious and versatile function room!',
        facilitiesImage: functionRoomImage,
        sceneNameMessage: 'Level 7 Clubhouse'
      };
    case 'Gym':
      return {
        title: 'Gymnasium',
        content: 'Stay fit and active in our fully-equipped gymnasium, offering a wide range of exercise options!',
        facilitiesImage: gymnasiumImage,
        sceneNameMessage: 'Level 7 Clubhouse'
      };
    case 'ReflexologyPath':
      return {
        title: 'Reflexology Path',
        content: 'Relieve stress and improve your well-being as you walk along our soothing reflexology path!',
        facilitiesImage: reflexologyPathImage,
      };
    case 'RiverViewDeck2':
      return {
        title: 'Reading Pavilion',
        content: 'Escape into the world of books and enjoy a tranquil reading experience in our beautiful pavilion!',
        facilitiesImage: readingPavilionImage,
      };
    case 'Jacuzzi':
      return {
        title: 'Jacuzzi',
        content: 'Relax and unwind in our luxurious Jacuzzi, perfect for soothing your muscles and relieving stress.',
        facilitiesImage: jacuzziImage,
      };

    case 'Center3Down':
      return {
        title: 'Outdoor Lounge',
        content: 'Enjoy quality time with friends and family in outdoor lounge. It’s the perfect place to gather and socialize.',
        facilitiesImage: outdoorLoungeImage,
      };

    case 'Yoga':
      return {
        title: 'Yoga & Tai Chi Deck',
        content: 'Find your inner peace and improve your physical well-being on our dedicated Yoga & Tai Chi deck.',
        facilitiesImage: yogaTaiChiDeckImage,
      };
    case 'BlockC':
      return {
        sceneNameMessage: 'Level 7 Block C Entrance'
      };

    case 'Unit1Center':
      return {
        sceneNameMessage: 'Block D Level 12'
      };

    case 'Unit2Entrance':
      return {
        sceneNameMessage: 'Block C Level 31'
      };


    default:
      return {
        title: '',
        content: '',
        sceneNameMessage: 'Level 7 Outdoor',
      };
  }
};


export default function Vrtour() {
  const { virtualId } = useParams(); //used when navigate from Facilities page
  const [firstScene, setFirstScene] = useState(true);
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
    console.log("set open info")
    console.log("current scene" + currentScene)
    setOpenInfo(!openInfo)

  }
  const handleSwitchSceneModal = () => {
    setOpenSwitchScene(!openSwitchScene)
  }

  // Register custom A-Frame components

    console.log("use effect")
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
        console.log(" navigate registered")
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
        console.log("info component registered");
        this.el.addEventListener("click", () => {
          console.log("info element clicked");
          handleInfoModal();
        });
      },
    });



  //Used for the mesaage when users enter vr tour
  // Get the scene name message based on the current scene
  useEffect(() => {
    const scene = getTitleAndContent(currentScene);
    setSceneNameMessage(scene.sceneNameMessage);
  }, [currentScene]);

  console.log("now at")
  console.log(currentScene)

  return (
    <div>

      <div className="relative h-screen ">
        <div className='absolute flex h-full w-full justify-center items-center'>
          {/* welcome text */}
          <motion.div
            className=' z-30 bg-black/50 font-title text-white drop-shadow-black text-center text-2xl md:text-4xl'
            initial={{ opacity: 0, y: 20 }}
            animate={firstScene ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            onAnimationComplete={() => setFirstScene(false)}>
            <p>You are now at {sceneNameMessage}</p>
          </motion.div>

        </div>

        {/* modal */}
        <div className="absolute h-full w-screen ">
          {openInfo && (<InfoModal handleInfoModal={handleInfoModal} {...getTitleAndContent(currentScene)} />)}
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

