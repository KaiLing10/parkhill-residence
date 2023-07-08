import React, {useRef} from 'react'
import { motion, useInView } from "framer-motion";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import { Link } from "react-router-dom";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

// https://www.youtube.com/watch?v=jD6813wGdBA&t=6s

// create custom icon
const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    //   iconUrl: require("../../assets/concept.jpg"),

    iconSize: [48, 48] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
    return new divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true)
    });
};

// markers
const markers = [
    {
        geocode: [3.05530,101.695780],
        popUp: "Parkhill Residence"
    },
];

const Location = () => {
    // const [ref1, inView1] = useInView({
    //     threshold: 1,
    //   });

    // https://www.framer.com/motion/use-in-view/

    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)

    const ref2 = useRef(null)
    const isInView2 = useInView(ref2)

    const ref3 = useRef(null)
    const isInView3 = useInView(ref3)

    const ref4 = useRef(null)
    const isInView4 = useInView(ref4)


    return (
        <div className=" h-screen bg-gradient-to-b from-gray-300  to-white md:flex p-10 md:p-20 pt-40">
            <div className="w-full md:w-1/2 grid grid-cols-5 text-base md:text-xl font-title">
                <motion.div
                    className="col-span-5 flex items-end pb-10 "
                    variants={fadeIn}
                    initial='hidden'
                    animate={isInView1 ? 'visible' : 'hidden'}
                    transition={{ ease: "easeInOut", duration: 1.5 }}
                    ref={ref1}>
                    <span className="text-2xl md:text-4xl">Located in</span>
                    <span className="ml-3 text-4xl md:text-5xl text-yellow-500">Bukit Jalil,</span>
                </motion.div>

                <div className="col-start-2 col-end-6 mb-10 md:mb-0">
                    <motion.div className=" my-5" variants={fadeIn}
                        initial='hidden' animate={isInView2 ? 'visible' : 'hidden'}
                        transition={{ ease: "easeInOut", duration: 1.5 }} ref={ref2}>
                        easy access to transportation, shopping, entertainment
                    </motion.div>
                    <motion.div variants={fadeIn} initial='hidden' animate={isInView4 ? 'visible' : 'hidden'}
                        transition={{ ease: "easeInOut", duration: 1.5 }} ref={ref4}>
                        under 20 km from the city center
                    </motion.div>
                </div>

                <motion.div
                    className="col-span-5 text-2xl md:text-4xl "
                    variants={fadeIn}
                    initial='hidden'
                    animate={isInView3 ? 'visible' : 'hidden'}
                    transition={{ ease: "easeInOut", duration: 1.5 }}
                    ref={ref3}>
                    It's the perfect location for modern living.
                </motion.div>

                <Link to="/vrtour" className="col-span-5">
                        <button className='font-content text-xl border-2 bg-white border-black rounded-xl mt-5 py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                            View Location
                        </button>
                    </Link>

            </div>

            {/* Map */}
            <div className="md:w-1/2 h-full overflow-hidden flex justify-center">
                <MapContainer center={[3.05530,101.695780]} zoom={12}  >
       
                    <TileLayer
                        attribution="Google Maps"
                        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
                        maxZoom={20}
                        subdomains={["mt0", "mt1", "mt2", "mt3"]}
                    />

                    <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon} >
                        {/* Mapping through the markers */}
                        {markers.map((marker) => (
                            <Marker position={marker.geocode} icon={customIcon}>
                                <Popup>{marker.popUp}</Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </div>
    );
}


export default Location
