import React from 'react'


const Facilities = () => {
  return (
    <div className='bg-gray-100 h-screen p-10 relative'>

      <div className='absolute w-60 right:12 top-12 md:right-4 md:top-28'>
        < img src={process.env.PUBLIC_URL + `/loader/loader2.jpeg`} alt='facility2' />
      </div>
      <div className='absolute w-80 left-16 bottom-14 md:left-4 md:bottom-28'>
        < img src={process.env.PUBLIC_URL + `/loader/loader1.jpg`} alt='facility' />
      </div>

      <p className=' absolute top-1/2 right-1/2 w-1/4 bg-green-200 text-center text-xl md:text-2xl'>

        PARKHILL RESIDENCE has just the facility for your enjoyment.
      </p>
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

