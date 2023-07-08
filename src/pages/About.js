import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// assets
import bg from '../assets/condo.jpeg'
import logoPic from '../assets/logo.png'
import typeD from '../assets/about/typeD.jpeg'
import typeE from '../assets/about/typeE.jpeg'



const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};


const About = () => {

    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)

    return (
        <div className='bg-gray-100 font-title'>

            <Navbar />
            <div className='flex justify-center pt-20 pb-10'>
                <img src={logoPic} alt='logo' className=' w-1/3'></img>
            </div>
            <div className=''>


                <div className=' relative h-screen w-screen'>
                    {/* gradient */}
                    <div className='absolute z-20 top-0 left-0 w-full h-28 bg-gradient-to-t from-gray-100/0 to-gray-100/100'></div>
                    <div className='absolute z-20 bottom-0 left-0 w-full h-28 bg-gradient-to-b from-gray-100/0 to-gray-100/100'></div>

                    {/* overlay */}
                    {/* <div className="absolute z-10 top-0 left-0 bg-white/10 w-full h-full"></div>  */}
                    <img src={bg} alt='condo_image' className='object-cover h-full w-full' />

                    <div className='absolute z-40 top-1/3 flex justify-center items-center text-lg md:text-2xl font-semibold text-center'>

                        <motion.div
                            className='bg-white/60 w-2/3 p-5 md:p-10'
                            variants={fadeIn}
                            initial='hidden'
                            animate={isInView1 ? 'visible' : 'hidden'}
                            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
                            ref={ref1}>
                            <p>Parkhill Residence is a residential development built over a rolling 13-acre parcel close to the Technology Park end of the Bukit Jalil highway.</p>
                            <p>There are in total four condominium towers built on 5.65 acres out of the 13-acre site but only two of the towers (Blocks C and D) are open to the public. </p>
                        </motion.div>
                    </div>
                </div>

                {/* info content */}
                <div className=' font-light'>
                    <div className=' w-[50vw] m-auto text-center text-3xl p-10'>
                        <span>2 towers </span>
                        <span>43 storeys</span>
                        <p>1062 units in total</p>
                    </div>
                    <div className='p-10 md:px-20 text-xl md:text-2xl' >
                        <p>Project Name: Parkhill Residence</p>

                        <p> Address:  Technology Park Malaysia, Lebuhraya Puchong-Sungai Besi, Bukit Jalil, 57000, Kuala Lumpur</p>

                        <p>Developer:  Aset Kayamas Sdn Bhd (929423-V)</p>

                        <p>Property Type: Condominium</p>

                        <p>  Land Title: Residential</p>

                        <p>Tenure: Leasehold</p>

                        <p> Land Area: 5.65 acres (condo alone)</p>

                        <p>Units Per Floor and No of Lifts: 14 units per floor, served by 7 lifts</p>

                        <p>Unit Types and Built Up: Only 2 types available</p>
                        <div className='grid'>
                            <div className=''>Type D: 1,100sq ft (3R2B)</div>
                            <img src={typeD} alt='type D unit' className='w-1/2' />
                            
                            <div>Type E:  1,300sq ft (4R2B)</div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
        
    )
}

export default About



