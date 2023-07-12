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
  const [car9min, isInViewCar9min] = useInView({
    threshold: 0.7,
  });
  const [car9min2, isInViewCar9min2] = useInView({
    threshold: 0.7,
  });


  const [distance, setDistance] = useState('5 min');

  useEffect(() => {
    if (isInViewCar5min) {
      setDistance('5 min');
    } else if (isInViewCar9min) {
      setDistance('9 min');
    } else if (isInViewCar9min2) {
      setDistance('9 min');
    } else {
      setDistance('7 min');
    }
  }, [isInViewCar5min, isInViewCar9min, isInViewCar9min2]);

  // css style
  const amenities = '';
  const imageStyle = 'w-4/5 h-[50vh] object-cover mb-5';

  return (
    <div className='flex text-2xl font-title p-10 md:p-20'>
      <div className=" text-yellow-500 drop-shadow-black sticky top-32 pl-20 w-1/2 h-[30vh]">
        <p className='font-bold mb-10'>Distance</p>
        <p className='text-6xl '>{distance}</p>

      </div>

      <div className='w-1/2'>
        <div className='text-yellow-500 drop-shadow-black font-bold mb-10'>Amenities</div>
        <div className={amenities} ref={car5min}>
          <img src={stadium} className={imageStyle} alt='stadium' />
          <p className='pb-20'>2.1km to Bukit Jalil National Stadium</p>
        </div>

        <div className={amenities}>
          <img src={lrtBukitJalil} className={imageStyle} alt='lrtBukitJalil' />
          <p className='pb-20'>3.2km to Bukit Jalil LRT Station</p>
        </div>
        <div className={amenities} >
          <img src={endah} className={imageStyle} alt='Endah Parade' />
          <p className='pb-20'>3.6km to Endah Parade</p>
        </div>

        <div className={amenities} ref={car9min}>
          <img src={apu} alt='APU' />
          <p className='pb-20'>3.8km to Asia Pacific University</p>
        </div>
        <div className={amenities} ref={car9min2}>
          <img src={pinnacle} alt='Pinnacle Mall' />
          <p className='pb-20'>4.2km to Pinnacle Sri Petaling Mall</p>
        </div>
      </div>
    </div>
  );
}
