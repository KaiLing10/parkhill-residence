import React from 'react'
import ConceptImage from '../../assets/concept.jpg'
import { useInView } from 'react-intersection-observer';


export default function Concept() {
    // https://www.react-spring.dev/docs/utilities/use-in-view#usage
    const [ref, inView] = useInView({
        // triggerOnce: true, // Only trigger the fade-in once
        threshold: 0.5, // Adjust as per your needs
    });

    return (
        <div >
            <div ref={ref} className={` md:flex opacity-0 transition-opacity duration-1000 ${inView ? 'opacity-100' : ''}`}>

                <div className='m-auto pl-20 md:text-2xl'>
                    <p>Situated within the lush greenery of the surrounding hillsides</p>
                    <p>it is an excellent haven from the hustle and bustle of the city.</p>
                </div>


                <div className='p-20'>
                    <img src={ConceptImage} alt='condo_image' />
                </div>
            </div>
        </div>
    )
}
