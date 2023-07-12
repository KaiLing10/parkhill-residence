import DropdownList from './DropdownList'
import React, { useState } from 'react';

import gym1 from '../../assets/facilities/gym.jpg'
import gym2 from '../../assets/facilities/gym1.png'
import gym3 from '../../assets/facilities/gym2.png'
import function1 from '../../assets/facilities/functionRoom.jpg'
import function2 from '../../assets/facilities/function1.jpeg'
import function3 from '../../assets/facilities/function2.jpeg'

const facilitiesImage = 'w-[30vw] object-cover mx-5 my-16 border-4 border-white drop-shadow-black'


export default function FacilitiesInfo( {img1, img2, img3}) {
    const [selectedOption, setSelectedOption] = useState(null);

const handleOptionSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const renderImages = () => {
    if (!selectedOption) {
      return null;
    }

    switch (selectedOption.value) {
        case 'gymnasium':
          return (
            <div className='bg-white/30 mt-10 h-[50vh] w-screen flex'>
              <img src={gym1} alt='gymnasium' className={facilitiesImage} />
              <img src={gym2} alt='gymnasium' className={facilitiesImage} />
              <img src={gym3} alt='gymnasium' className={facilitiesImage} />
            </div>
          );
        case 'function room':
          return (
            <div className='bg-white/30 mt-10 h-[50vh] w-screen flex'>
              {/* Add the specific images for the 'function room' option */}
              <img src={function1} alt='function room' className={facilitiesImage} />
              <img src={function2} alt='function room' className={facilitiesImage} />
              <img src={function3} alt='function room' className={facilitiesImage} />
            </div>
          );
        // Add more cases for other options and their respective images here
        default:
          return null;
      }
    };

    return (
        <div>{/* map */}
            {/* <div className='pt-28 w-screen flex justify-center'>
      <img src={map} alt='facilities map' className='object-cover w-3/5 ' />
    </div> */}

            {/* <button className='mt-20 ml-20 font-content text-xl border-2 bg-white border-black rounded-xl py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
      Switch Facilities
    </button> */}

            {/* content */}
            <div className='relative'>

                {/* gradient */}
                {/* <div className='absolute z-20 top-0 left-0 w-full h-28 bg-gradient-to-b from-gray-100/100 to-gray-100/0'></div> */}
                {/* overlay */}
                <div className="absolute z-10 top-0 left-0 bg-black/40 w-full h-screen"></div>
                <img src={img1} alt='gym' className=' h-screen w-screen object-cover' />

                <div className='absolute top-0 z-40 mt-32 text-white'>
                    {/* title */}
                    <div className='flex items-center '>
                        <div className='text-8xl md:pl-20 '>Gymnasium</div>
                        <button className='text-black font-content text-xl border-2 bg-white border-black rounded-xl py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                            Switch v
                        </button>
                        <DropdownList onOptionSelect={handleOptionSelect} className='font-content text-xl border-2 bg-white border-black rounded-xl py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110' />
                    </div>

                    {/* gallery */}
                    {/* <div className='bg-white/30 mt-10 h-[50vh] w-screen flex'>
                        <img src={img1} alt='facilities' className={facilitiesImage} />
                        <img src={img2} alt='facilities' className={facilitiesImage} />
                        <img src={img3} alt='facilities' className={facilitiesImage} />
                    </div> */}
                              {renderImages()}


                    {/* 360 button */}
                    <div className='flex justify-center'>
                        <button className=' font-content text-xl md:text-xl border-2 my-5 bg-black/40 border-white rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                            360 View
                        </button>
                    </div>
                </div>



            </div></div>
    )
}
