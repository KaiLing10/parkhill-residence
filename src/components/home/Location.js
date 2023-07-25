import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants
const onScreenAnim = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, },
}

const Location = () => {

    return (
        <div className="  bg-gradient-to-b from-gray-300  to-white md:flex px-10 py-20 md:p-20 md:pt-40">
            {/* text content */}
            <div className="w-full md:w-1/2 grid grid-cols-5 text-base md:text-xl font-title">
                <motion.div
                    className="col-span-5 flex items-end pb-10 "
                    variants={onScreenAnim}
                    initial="offscreen"
                    whileInView="onscreen"
                    exit="offscreen"
                    viewport={{ once: false, amount: 0.9 }}
                    transition={{ duration: 1 }}>
                    <span className="text-2xl md:text-4xl">Located in</span>
                    <span className="ml-3 text-4xl md:text-5xl text-yellow-500">Bukit Jalil,</span>
                </motion.div>

                <div className="col-start-2 col-end-6 mb-10 md:mb-0">
                    <motion.div className=" my-5"
                        variants={onScreenAnim}
                        initial="offscreen"
                        whileInView="onscreen"
                        exit="offscreen"
                        viewport={{ once: false, amount: 0.9 }}
                        transition={{ duration: 1 }}>
                        easy access to transportation, shopping, entertainment
                    </motion.div>
                    <motion.div
                        variants={onScreenAnim}
                        initial="offscreen"
                        whileInView="onscreen"
                        exit="offscreen"
                        viewport={{ once: false, amount: 0.9 }}
                        transition={{ duration: 1 }}>
                        under 20 km from the city center
                    </motion.div>
                </div>

                <motion.div
                    className="col-span-5 text-2xl md:text-4xl "
                    variants={onScreenAnim}
                    initial="offscreen"
                    whileInView="onscreen"
                    exit="offscreen"
                    viewport={{ once: false, amount: 0.9 }}
                    transition={{ duration: 1 }}>
                    It's the perfect location for modern living.
                </motion.div>

                <Link to="/location" className="col-span-5 my-5 md:my-0  ">
                    <button className='font-content text-xl border-2 bg-white border-black rounded-xl mt-5 py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                        View Location
                    </button>
                </Link>

            </div>

            {/* Map */}
            <div className=" h-full md:w-1/2 overflow-hidden flex justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15936.593019609965!2d101.6958083!3d3.0549672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b07526fa23d%3A0xdec6a36b8e45cc14!2sParkhill%20Residence!5e0!3m2!1sen!2smy!4v1689923962707!5m2!1sen!2smy"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>

            </div>
        </div>
    );
}


export default Location
