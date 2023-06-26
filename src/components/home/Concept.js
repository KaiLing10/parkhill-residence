import React from 'react'
import ConceptImage from '../../assets/concept.jpg'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

export default function Concept() {
    // https://www.react-spring.dev/docs/utilities/use-in-view#usage
    const [ref, inView] = useInView({
        threshold: 1,
    });

    const [ref2, inView2] = useInView({
        threshold: 0.8,
    });

    const fadeInVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },

    };

    return (

        <div className={`bg-gray-100 h-2/3 pt-10 `}>

            <motion.div
                className='m-auto pl-20 pb-6 text-green-800 text-xl md:text-2xl'
                variants={fadeInVariant}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                ref={ref}
            >
                <p>Situated within the lush greenery of the surrounding hillsides</p>

            </motion.div>
            <div className='grid grid-cols-5 '>

                <motion.div
                    className='pl-20 col-span-3'
                    variants={fadeInVariant}
                    initial='hidden'
                    animate={inView2 ? 'visible' : 'hidden'}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    ref={ref2}>
                    <img src={ConceptImage} alt='condo_image' />
                </motion.div>
                <div className='col-span-2 p-10 pt-24 text-2xl md:text-3xl'>
                    <p>It is an excellent heaven from the hustle and bustle of the city.</p>
                </div>
            </div>
        </div>


    );
}