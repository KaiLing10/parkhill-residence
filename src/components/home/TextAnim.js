// import React from 'react'
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";

// const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
// };


// export default function TextAnim(customClass, content) {
//     const ref1 = useRef(null)
//     const isInView1 = useInView(ref1)

//     return (
//         <motion.div
//             className={customClass}
//             variants={fadeIn}
//             initial='hidden'
//             animate={isInView1 ? 'visible' : 'hidden'}
//             transition={{ ease: "easeInOut", duration: 1.5 }}
//             ref={ref1}>
//             {content}
//         </motion.div>
//     )
// }
