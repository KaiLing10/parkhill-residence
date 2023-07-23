import React, { useState } from 'react';
import DropdownList from './DropdownList';
import ImageModal from '../ImageModal'

// assets
import gym1 from '../../assets/facilities/gym.jpg'
import gym2 from '../../assets/facilities/gym1.png'
import gym3 from '../../assets/facilities/gym2.png'
import function1 from '../../assets/facilities/functionRoom.jpg'
import function2 from '../../assets/facilities/function1.jpeg'
import function3 from '../../assets/facilities/function2.jpeg'
import gameRoom1 from '../../assets/facilities/gameRoom3.jpg'
import gameRoom2 from '../../assets/facilities/gameRoom1.jpg'
import gameRoom3 from '../../assets/facilities/gameRoom.jpg'
import pool1 from '../../assets/facilities/pool.jpg';
import pool2 from '../../assets/facilities/pool2.jpg';
import pool3 from '../../assets/facilities/pool3.jpg';
import badminton1 from '../../assets/facilities/badminton1.jpg';
import badminton2 from '../../assets/facilities/badminton2.jpg';
import badminton3 from '../../assets/facilities/badminton3.jpg';
import playground1 from '../../assets/facilities/playground1.jpg';
import playground2 from '../../assets/facilities/playground2.jpg';
import playground3 from '../../assets/facilities/playground4.jpg';
import readingPavilion1 from '../../assets/facilities/readingPavilion1.jpg';
import readingPavilion2 from '../../assets/facilities/readingPavilion2.jpg';
import readingPavilion3 from '../../assets/facilities/readingPavilion3.jpg';
import mazeGarden1 from '../../assets/facilities/mazeGarden1.jpg';
import mazeGarden2 from '../../assets/facilities/mazeGarden3.jpg';
import mazeGarden3 from '../../assets/facilities/mazeGarden2.jpg';
import reflexologyPath1 from '../../assets/facilities/reflexologyPath1.jpg';
import reflexologyPath2 from '../../assets/facilities/reflexologyPath2.jpg';
import reflexologyPath3 from '../../assets/facilities/reflexologyPath3.jpg';
import yogaDeck1 from '../../assets/facilities/yogaDeck1.jpg';
import yogaDeck2 from '../../assets/facilities/yogaDeck2.jpg';
import yogaDeck3 from '../../assets/facilities/yogaDeck3.jpg';
import { Link } from 'react-router-dom';


// custom styles
const facilitiesImage = 'w-[30vw] cursor-pointer object-cover mx-5 my-16 border-4 border-white drop-shadow-black'


export default function FacilitiesInfo() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle option select
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(!showModal);
  };


  // Define facility details
  const facilityDetails = [
    {
      title: 'Gymnasium',
      img1: gym1,
      img2: gym2,
      img3: gym3,
      sceneName: 'Gym'
    },
    {
      title: 'Function Room',
      img1: function1,
      img2: function2,
      img3: function3,
      sceneName: 'FunctionRoom'
    },
    {
      title: 'Game Room',
      img1: gameRoom1,
      img2: gameRoom2,
      img3: gameRoom3,
      sceneName: 'GameRoom'
    },
    {
      title: 'Pool Area',
      img1: pool1,
      img2: pool2,
      img3: pool3,
      sceneName: 'PoolCenter'
    },
    {
      title: 'Badminton Court',
      img1: badminton1,
      img2: badminton2,
      img3: badminton3,
      sceneName: 'Badminton'
    },
    {
      title: 'Playground',
      img1: playground1,
      img2: playground2,
      img3: playground3,
      sceneName: 'Playground2'
    },
    {
      title: 'Reading Pavilion',
      img1: readingPavilion1,
      img2: readingPavilion2,
      img3: readingPavilion3,
      sceneName: 'RiverViewDeck2'
    },
    {
      title: 'Maze Garden',
      img1: mazeGarden1,
      img2: mazeGarden2,
      img3: mazeGarden3,
      sceneName: 'Center3Down'
    },
    {
      title: 'Reflexology Path',
      img1: reflexologyPath1,
      img2: reflexologyPath2,
      img3: reflexologyPath3,
      sceneName: 'ReflexologyPath'
    },
    {
      title: 'Yoga & Tai Chi Deck',
      img1: yogaDeck1,
      img2: yogaDeck2,
      img3: yogaDeck3,
      sceneName: 'Yoga'

    },
  ];


  // Find the selected facility option's details
  const selectedDetails = facilityDetails.find((option) => option.title === selectedOption) || facilityDetails[0];


  return (
    <div>
      {/* Facility map */}
      {/* <div className='pt-28 w-screen flex justify-center'>
                    <img src={map} alt='facilities map' className='object-cover w-3/5 ' />
                 </div> */}


      <div className='relative'>

        {/* gradient */}
        {/* <div className='absolute z-20 top-0 left-0 w-full h-28 bg-gradient-to-b from-gray-100/100 to-gray-100/0'></div> */}

        {/* overlay */}
        <div className="absolute z-10 top-0 left-0 bg-black/50 w-full h-screen"></div>

        {/* Background Image */}
        <img src={selectedDetails.img1} alt='gym' className='h-screen w-screen object-cover' />
        {/* content */}
        <div className='absolute top-0 z-40 mt-32 text-white'>
          {/* title */}
          <div className='flex items-center justify-between md:mx-20'>
            <div className='text-8xl '>{selectedDetails.title}</div>

            <DropdownList onOptionSelect={handleOptionSelect} />
          </div>

          {/* gallery*/}
          <div className='bg-white/30 mt-10 h-[50vh] w-screen flex'>
            <img src={selectedDetails.img1} alt='facilities' className={facilitiesImage} onClick={() => handleImageClick(selectedDetails.img1)} />
            <img src={selectedDetails.img2} alt='facilities' className={facilitiesImage} onClick={() => handleImageClick(selectedDetails.img2)} />
            <img src={selectedDetails.img3} alt='facilities' className={facilitiesImage} onClick={() => handleImageClick(selectedDetails.img3)} />
          </div>


          {/* 360 button */}
          <div className='flex justify-center'>
            {/* <Link to={`/vrTour/${sceneName}`}  > */}

            <Link to={`/vrTour/${selectedDetails.sceneName}`} >
              <button className=' font-content text-xl md:text-xl border-2 my-5 bg-black/40 border-white rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                360 View
              </button>
            </Link>
          </div>
        </div>

        {/* Image modal */}
        {showModal && selectedImage && (
          <ImageModal handleImageClick={handleImageClick} selectedImage={selectedImage} />)}



      </div>
    </div>
  )
}
