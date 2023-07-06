import React from 'react'
import Image from './Image'
import { motion } from "framer-motion"


const ImageBlock = ({ id, variants }) => {
    console.log("ImageBlock rendered with id:", id , "+ variants: ", variants);
    return (
        <motion.div className={`absolute ${id}`}
            variants={variants}>

            <Image
                src={process.env.PUBLIC_URL + `/loader/${id}.jpg`}
                fallback={process.env.PUBLIC_URL + `/loader/${id}.jpg`}
                alt={id}
            />

        </motion.div>
    )

}

export default ImageBlock


