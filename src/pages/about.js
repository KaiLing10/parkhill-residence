import React, { useState } from 'react'
import { motion } from 'framer-motion'

// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NumberCountAnimation from '../components/about/NumberCounting'

// assets
import bg from '../assets/condo.jpeg'
import logoPic from '../assets/logo.png'
import typeD from '../assets/about/typeD.jpg'
import typeE from '../assets/about/typeE.jpg'
import ImageModal from '../components/ImageModal'

// Animation variants
const onScreenAnim = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, },
}


const About = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // custom style
    const infoStyle = 'col-span-3 text-xl md:text-2xl flex items-end mb-5'
    const infoTitleStyle = 'col-span-1 text-lg md:px-10 text-yellow-600 md:mb-5'

    // Handle image click
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowModal(!showModal);
    };

    return (
        <div className='bg-gray-100 font-title text-black'>

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
                            variants={onScreenAnim}
                            initial="offscreen"
                            whileInView="onscreen"
                            exit="offscreen"
                            viewport={{ once: false, amount: 0.9 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Parkhill Residence is a residential development built over a rolling 13-acre parcel close to the Technology Park end of the Bukit Jalil highway.</p>
                            <p>There are in total four condominium towers built on 5.65 acres out of the 13-acre site but only two of the towers (Blocks C and D) are open to the public. </p>
                        </motion.div>
                    </div>
                </div>

                {/* info content */}
                <div className='font-light'>
                    <motion.div className=' md:w-[50vw] m-auto text-center text-3xl md:text-4xl p-10'
                        variants={{
                            offscreen: { // Outside Screen
                                scale: 0,
                                opacity: 0,
                            },
                            onscreen: { // Inside Screen
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    type: "spring",
                                    bounce: 0.5,
                                },
                            },
                        }}
                        initial="offscreen"
                        whileInView="onscreen"
                        exit="offscreen"
                        viewport={{ once: false, amount: 0.9 }}>

                        <span><NumberCountAnimation value={2} /> towers </span>
                        <span><NumberCountAnimation value={43} /> storeys</span>
                        <div className='mt-5'>
                            <span className='text-5xl  text-yellow-500'><NumberCountAnimation value={1062} /></span>
                            <span > units in total</span>
                        </div>
                    </motion.div>
                    <div className=' md:grid md:grid-cols-4 p-10 md:px-20 text-xl md:text-2xl' >
                        <p className={infoTitleStyle}>Project Name </p>
                        <p className={infoStyle}> Parkhill Residence</p>

                        <p className={infoTitleStyle}> Address  </p>
                        <p className={infoStyle}> Technology Park Malaysia, Lebuhraya Puchong-Sungai Besi, Bukit Jalil, 57000, Kuala Lumpur</p>

                        <p className={infoTitleStyle}>Developer  </p>
                        <p className={infoStyle}>Aset Kayamas Sdn Bhd (929423-V)</p>

                        <p className={infoTitleStyle}>Property Type</p>
                        <p className={infoStyle}>Condominium</p>

                        <p className={infoTitleStyle}> Land Title </p>
                        <p className={infoStyle}>  Residential</p>

                        <p className={infoTitleStyle}>Tenure </p>
                        <p className={infoStyle}>Leasehold</p>

                        <p className={infoTitleStyle}> Land Area </p>
                        <p className={infoStyle}> 5.65 acres (condo alone)</p>

                        <p className={infoTitleStyle}>Units and Lifts Per Floor</p>
                        <p className={infoStyle}>14 units per floor, served by 7 lifts</p>

                        <p className={infoTitleStyle}>Unit Types and Built Up</p>
                        <div className='md:col-span-1 w-[80vw] md:w-[50vw]'>
                            2 types available
                            <div className=' md:flex'>
                                <div className='mb-10 md:mr-10'>
                                    <p className='font-bold text-3xl text-yellow-500 '>Type D</p>
                                    <p>1,100sq ft (3R2B)</p>
                                    <img src={typeD} alt='type D unit' onClick={() => handleImageClick(typeD)} className='w-full cursor-pointer' />
                                </div>

                                <div>
                                    <p className='font-bold text-3xl text-yellow-500 '>Type E</p>
                                    <p>1,300sq ft (4R2B)</p>

                                    <img src={typeE} alt='type E unit' onClick={() => handleImageClick(typeE)} className='w-full cursor-pointer' />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Image modal */}
            {showModal && selectedImage && (
                <ImageModal  handleImageClick={handleImageClick} selectedImage={selectedImage}/>)}
            <Footer />
        </div>

    )
}

export default About



