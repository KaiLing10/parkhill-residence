import React, { useState } from 'react';
import DropdownList from './DropdownList';

// assets
import gym1 from '../../assets/facilities/gym.jpg'
import gym2 from '../../assets/facilities/gym1.png'
import gym3 from '../../assets/facilities/gym2.png'
import function1 from '../../assets/facilities/functionRoom.jpg'
import function2 from '../../assets/facilities/function1.jpeg'
import function3 from '../../assets/facilities/function2.jpeg'
import gameRoom1 from '../../assets/facilities/gameRoom2.jpg'
import gameRoom2 from '../../assets/facilities/gameRoom.jpg'
import gameRoom3 from '../../assets/facilities/gameRoom.jpg'
import pool1 from '../../assets/facilities/pool1.jpg';
import pool2 from '../../assets/facilities/pool1.jpg';
import pool3 from '../../assets/facilities/pool1.jpg';
import badminton1 from '../../assets/facilities/badminton1.jpg';
import badminton2 from '../../assets/facilities/badminton2.jpg';
import badminton3 from '../../assets/facilities/badminton2.jpg';
import playground1 from '../../assets/facilities/playground.jpg';
import playground2 from '../../assets/facilities/playground.jpg';
import playground3 from '../../assets/facilities/playground3.jpg';
import readingPavilion1 from '../../assets/facilities/readingPavilion1.jpg';
import readingPavilion2 from '../../assets/facilities/readingPavilion2.jpg';
import readingPavilion3 from '../../assets/facilities/readingPavilion1.jpg';
import mazeGarden1 from '../../assets/facilities/mazeGarden1.jpg';
import mazeGarden2 from '../../assets/facilities/mazeGarden2.jpg';
import mazeGarden3 from '../../assets/facilities/mazeGarden3.jpg';
import reflexologyPath1 from '../../assets/facilities/mazeGarden1.jpg';
import reflexologyPath2 from '../../assets/facilities/mazeGarden1.jpg';
import reflexologyPath3 from '../../assets/facilities/mazeGarden1.jpg';
import yogaDeck1 from '../../assets/facilities/yogaDeck1.jpg';
import yogaDeck2 from '../../assets/facilities/yogaDeck1.jpg';
import yogaDeck3 from '../../assets/facilities/yogaDeck1.jpg';

// custom styles
const facilitiesImage = 'w-[30vw] object-cover mx-5 my-16 border-4 border-white drop-shadow-black'


export default function FacilitiesInfo() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    // Define corresponding images for each facility
    const facilityDetails = [
        {
          title: 'Gymnasium',
          img1: gym1,
          img2: gym2,
          img3: gym3,
        },
        {
          title: 'Function Room',
          img1: function1,
          img2: function2,
          img3: function3,
        },
        {
          title: 'Game Room',
          img1: gameRoom1,
          img2: gameRoom2,
          img3: gameRoom3,
        },
        {
          title: 'Pool area',
          img1: pool1,
          img2: pool2,
          img3: pool3,
        },
        {
          title: 'Badminton Court',
          img1: badminton1,
          img2: badminton2,
          img3: badminton3,
        },
        {
          title: 'Playground',
          img1: playground1,
          img2: playground2,
          img3: playground3,
        },
        {
          title: 'Reading Pavilion',
          img1: readingPavilion1,
          img2: readingPavilion2,
          img3: readingPavilion3,
        },
        {
          title: 'Maze Garden',
          img1: mazeGarden1,
          img2: mazeGarden2,
          img3: mazeGarden3,
        },
        {
          title: 'Reflexology Path',
          img1: reflexologyPath1,
          img2: reflexologyPath2,
          img3: reflexologyPath3,
        },
        {
          title: 'Yoga & Tai Chi Deck',
          img1: yogaDeck1,
          img2: yogaDeck2,
          img3: yogaDeck3,
        },
      ];
      

    // Find the selected option's images
    const selectedDetails = facilityDetails.find((option) => option.title === selectedOption) || facilityDetails[0];


    return (
        <div>
            {/* Facility map */}
            {/* <div className='pt-28 w-screen flex justify-center'>
                    <img src={map} alt='facilities map' className='object-cover w-3/5 ' />
                 </div> */}

            {/* <button className='mt-20 ml-20 font-content text-xl border-2 bg-white border-black rounded-xl py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                    Switch Facilities
             </button> */}


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
              
                        <DropdownList onOptionSelect={handleOptionSelect}/>
                    </div>

                    {/* gallery*/}
                    <div className='bg-white/30 mt-10 h-[50vh] w-screen flex'>
                        <img src={selectedDetails.img1} alt='facilities' className={facilitiesImage} />
                        <img src={selectedDetails.img2} alt='facilities' className={facilitiesImage} />
                        <img src={selectedDetails.img3} alt='facilities' className={facilitiesImage} />
                    </div>


                    {/* 360 button */}
                    <div className='flex justify-center'>
                        <button className=' font-content text-xl md:text-xl border-2 my-5 bg-black/40 border-white rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                            360 View
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}
