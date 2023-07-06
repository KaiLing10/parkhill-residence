import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import ConceptImage from '../../assets/condo.jpeg'
import { Link } from "react-router-dom";


// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
}

const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

// Text Animation Component
const AnimatedText = ({ text }) => (
    <>
        {text.split("").map((char, index) => (
            <motion.span key={char + "_" + index} variants={letter}>
                {char}
            </motion.span>
        ))}
    </>
);

// Main component
const Concept = () => {

    // Track element visibility
    // https://www.react-spring.dev/docs/utilities/use-in-view#usage
    const [ref, inViewText] = useInView({
        threshold: 1,
    });
    const [ref2, inViewImage] = useInView({
        triggerOnce: true,
        threshold: 0.7,
    });

    return (
        <div className={`bg-gray-100 flex-col h-auto py-20 font-title `}>

            <motion.div
                className='m-auto pl-20 pb-6 text-xl md:text-2xl'
                variants={fadeIn}
                initial='hidden'
                animate={inViewText ? 'visible' : 'hidden'}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                ref={ref}
            >
                <p>Situated within the lush greenery of the surrounding hillsides</p>
            </motion.div>


            <div className='grid grid-cols-5 '>
                {/* image */}
                <motion.div
                    className='pl-20 col-span-3 mt-10 pr-10'
                    variants={fadeIn}
                    initial='hidden'
                    animate={inViewImage ? 'visible' : 'hidden'}
                    transition={{ ease: "easeInOut", duration: 1.5 }}
                    ref={ref2}
                >
                    <img src={ConceptImage} alt='condo_image' />
                </motion.div>

                {/* text content */}
                <div className="col-span-2 flex flex-col justify-center"
                >
                    <motion.div
                        className="text-xl md:text-3xl lg:text-4xl"
                        variants={sentence}
                        initial="hidden"
                        animate={inViewImage ? 'visible' : 'hidden'}
                    >
                        <AnimatedText text="' It is an excellent heaven" variants={letter} />
                        <br />
                        <AnimatedText text="from the hustle and bustle" variants={letter} />
                        <br />
                        <AnimatedText text="of the city '" variants={letter} />


                    </motion.div>
                    {/* button */}

                    <Link to="/vrtour" >
                        <button className='font-content text-xl border-2 bg-white border-black rounded-xl mt-5 py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                            About
                        </button>
                    </Link>
                </div>

            </div>

        </div>


    );

}

export default Concept