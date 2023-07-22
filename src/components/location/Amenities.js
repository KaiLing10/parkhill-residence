import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

// assets
import endah from '../../assets/location/endahParade.jpeg'
import lrtBukitJalil from '../../assets/location/bukitJalilLrt.jpeg'
import stadium from '../../assets/location/stadium.jpeg'
import apu from '../../assets/location/apu.png'
import pinnacle from '../../assets/location/pinnacle_mall.jpeg'


export default function Amenities() {
  const [car5min, isInViewCar5min] = useInView({
  });
  const [car7min, isInViewCar7min] = useInView({
    threshold: 0.5,
  });
  const [car7min2, isInViewCar7min2] = useInView({
    threshold: 0.5,
  });
  const [car9min, isInViewCar9min] = useInView({
    threshold: 0.5,
  });
  const [car9min2, isInViewCar9min2] = useInView({
    threshold: 0.5,
  });


  const [distance, setDistance] = useState('5 min');


  useEffect(() => {
    if (isInViewCar5min) {
      setDistance('5 min');
    }
    if (isInViewCar7min) {
      setDistance('7 min');
    }
    if (isInViewCar7min2) {
      setDistance('7 min');
    }
    if (isInViewCar9min) {
      setDistance('9 min');
    }
    if (isInViewCar9min2) {
      setDistance('9 min');
    }
  }, [isInViewCar5min, isInViewCar7min, isInViewCar7min2, isInViewCar9min, isInViewCar9min2]);

  // custon style
  const imageStyle = 'md:w-4/5 md:h-[50vh] object-cover mb-5';

  return (
    <div className='flex text-2xl font-title p-10 md:p-20 bg-gradient-to-b from-gray-100  to-black'>
      {/* Distance */}
      <div className=" text-yellow-500 sticky top-32 md:pl-20 w-1/3 md:w-1/2 h-[30vh]">
        <p className='font-bold mb-10'>Distance</p>
        <p className='text-4xl md:text-6xl '>{distance}</p>
      </div>

      {/* Amenities */}
      <div className='pl-5 md:pl-0md:w-1/2 text-white'>
        <div className='text-yellow-500 font-bold mb-10'>Amenities</div>
        <div ref={car5min}>
          <img src={stadium} className={imageStyle} alt='stadium' />
          <p className='pb-20'>2.1km to Bukit Jalil National Stadium</p>
        </div>

        <div ref={car7min}>
          <img src={lrtBukitJalil} className={imageStyle} alt='lrtBukitJalil' />
          <p className='pb-20'>3.2km to Bukit Jalil LRT Station</p>
        </div>
        <div ref={car7min2}>
          <img src={endah} className={imageStyle} alt='Endah Parade' />
          <p className='pb-20'>3.6km to Endah Parade</p>
        </div>

        <div ref={car9min}>
          <img src={apu} alt='APU' />
          <p className='pb-20'>3.8km to Asia Pacific University</p>
        </div>
        <div ref={car9min2}>
          <img src={pinnacle} alt='Pinnacle Mall' />
          <p className='pb-20'>4.2km to Pinnacle Sri Petaling Mall</p>
        </div>
      </div>
    </div>
  );
}
