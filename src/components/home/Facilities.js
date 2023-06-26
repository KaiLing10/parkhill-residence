import React from 'react'


const Facilities = () => {
  return (

    <div className='bg-gradient-to-b from-gray-800 to-gray-200 h-screen p-10 relative'>

      {/* <p className=' absolute w-1/5  bg-green-200 text-center text-xl md:text-2xl'> */}
      <p className='absolute w-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl md:text-3xl'>
        PARKHILL RESIDENCE has just the facility for your enjoyment.
      </p>

      <div className='absolute w-96 right:12 top-12 md:right-36 md:top-28'>
        < img src={process.env.PUBLIC_URL + `/facilities/center.jpg`} alt='facility' />
      </div>
 
      <div className='absolute w-60 left-16 bottom-14 md:left-0 md:top-16'>
        < img src={process.env.PUBLIC_URL + `/facilities/game.jpg`} alt='facility' />
      </div>
      <div className='absolute w-80 left-16 bottom-14 md:left-32 md:bottom-20'>
        < img src={process.env.PUBLIC_URL + `/facilities/roof.jpg`} alt='facility' />
      </div>
      <div className='absolute w-60 right-16 bottom-14 md:right-0 md:bottom-22'>
        < img src={process.env.PUBLIC_URL + `/facilities/night.jpg`} alt='facility' />
      </div>
      <div className='absolute w-60 right-16 bottom-14 md:right-36 md:bottom-60'>
        < img src={process.env.PUBLIC_URL + `/facilities/playground.jpg`} alt='facility' />
      </div>
      <div className='absolute w-80 left-16 top-50 md:left-80 md:top-38'>
        < img src={process.env.PUBLIC_URL + `/facilities/gym.jpg`} alt='facility' />
      </div>


    </div>
  )
}

export default Facilities



// .loader3 {
//   width: 200px;
//   right: 12%;
//   top: 8%;

//   @media (max-width: 480px) {
//     top: 16%;
//     right: 4%;
//   }
// }

