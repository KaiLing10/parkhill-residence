import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import ConceptImage from '../../assets/concept.jpg'


// Animation variants
const fadeInText = {
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
        threshold: 0.7,
    });

    return (
        <div className={`bg-gray-100 h-2/3 pt-10 `}>

            <motion.div
                className='m-auto pl-20 pb-6 text-green-800 text-xl md:text-2xl'
                variants={fadeInText}
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
                    className='pl-20 col-span-3'
                    initial={{ opacity: 0 }}
                    animate={inViewImage ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: 1.5 }}
                    ref={ref2}
                >
                    <img src={ConceptImage} alt='condo_image' />
                </motion.div>

                {/* text content */}
                <motion.div
                    className="load-screen--message col-span-2 p-10 pt-24 text-2xl md:text-3xl"
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

            </div>
        </div>


    );

}

export default Concept