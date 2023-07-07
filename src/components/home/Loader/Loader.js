import React, { useEffect, useState } from 'react'
import ImageBlock from "./ImageBlock";
import { motion } from "framer-motion"

//Variants
const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

//Animation props - initial, animate, exit
const item = {
    hidden: { opacity: 0, y: 100 },

    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0, 0.95],
            duration: 1.4,
        },
    },

    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            ease: [0.6, 0.01, 0, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

const Loader = ({ setLoading }) => {

    // Scaling animation for main image
    const [scaleValue, setScaleValue] = useState(2.55);

    useEffect(() => {
      const handleScale = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 480) {
          setScaleValue(5.4);
        } else if (screenWidth < 1024) {
          setScaleValue(4.5);
        } else {
          setScaleValue(2.55);
        }
      };
  
      window.addEventListener('resize', handleScale);
      handleScale(); // Initial scale value based on current screen size
  
      return () => {
        window.removeEventListener('resize', handleScale);
      };
    }, []);
  
    itemMain.exit.scale = scaleValue;

    return (
        <div className="loader">
            <motion.div
                className='h-screen flex justify-center items-center'
                variants={container}
                initial='hidden' animate='show' exit='exit'
                onAnimationComplete={() => setLoading(false)}>
                <motion.div variants={itemMain} className="transition-image p-2 w-2/3 md:w-2/5 object-cover">
                    <motion.img
                        src={process.env.PUBLIC_URL + `/loader/loader2.jpeg`}
                        alt='main_image'
                    />
                </motion.div>
                <ImageBlock variants={item} id='loader1' />
                <ImageBlock variants={item} id='loader3' />
                <ImageBlock variants={item} id='loader4' />
                <ImageBlock variants={item} id='loader5' />
            </motion.div>
        </div>
    );
};


export default Loader;
