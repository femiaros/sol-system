import { useRef } from "react"
import { motion } from "framer-motion"
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import StarsCanvas from './canvas/stars'
import { staggerContainer,textVariant,fadeIn } from '../utils/motion'
import useElementOnScreen from "../hooks/useElementOnScreen"

import { planetsSlideData } from '../contents'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination';



const Worlds = () => {
    // *** required state && hook***
    const targetRef = useRef(null)
    
    const isVisible = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }, targetRef)

  return (
    <main id='worlds' className='relative z-[-1] min-h-screen mb-[80px] scroll-mt-20'>
        {/* EXPLORE INTRO */}
        <motion.div variants={staggerContainer(0.4)}
            className={`${styles.paddingX} max-w-7xl mx-auto z-0`}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
        >
            <motion.div 
                variants={textVariant()}
            >
                <p className={`${styles.sectionSubText}`}>Explore</p>
                <h2 className={styles.sectionHeadText}>The nine worlds.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary mxs:text-[14px] text-[15px] max-w-3xl leading-[30px]'
            >
                There are more planets than stars in our galaxy. The current count orbiting our star: <span className=' text-tertiary font-semibold'>Eight.</span>
                <br />
                The inner, rocky planets are Mercury, Venus, Earth, and Mars. NASA's newest rover — Perseverance — landed on Mars on Feb. 18, 2021. The outer planets are gas giants Jupiter and Saturn and ice giants Uranus and Neptune.
                <br />
                Beyond Neptune, a newer class of smaller worlds called dwarf planets reign, including longtime favorite <span className=' text-tertiary font-semibold'>Pluto.</span> Thousands more planets have been discovered beyond our solar system. Scientists call them exoplanets (exo means "from outside").
            </motion.p>

        </motion.div>

        {/* WORLDS SLIDES */}

        <div // intersection observing div
            ref={targetRef}
            className="min-h-[590px] h-[calc(100vh-80px)]"
        > 

        {isVisible && (   

        <div className={`${isVisible?'':'hidden'} mt-12 relative`}>
            {/* Stars overlay background */}
            <StarsCanvas />
            {/* Main Swipe */}
            <Swiper 
                className='relative max-w-7xl mx-auto min-h-[590px] h-[calc(100vh-80px)]'
                modules={[Pagination]}
                spaceBetween={20}
                pagination={{ clickable: true }}
            >
                {   
                    planetsSlideData.map(planet=>{
                        const Model = planet.model
                        return (
                        <SwiperSlide  key={planet.id}
                            className='relative w-full h-full'
                        >
                            
                            <div className=' relative h-full flex items-center justify-start'>

                                <div  className={`${styles.transition} bg-transparent min-w-[50%] text-white mxs:pl-[20px] pl-[60px] pr-[20px]`}>

                                    <h3 id='title' className={`${styles.transition} ml-10 bg-transparent relative w-fit mxs:text-[23px] text-[36px] font-semibold text-shadow mb-14 transform translate-y-[-50px] opacity-0`}>
                                        {planet.name}
                                        <span className='mxs:text-[12px] text-[12px] mxs:font-medium font-semibold ml-[3px]'>Planet</span>
                                    </h3>

                                    <Tilt className=' w-fit rounded-tr-[20px] rounded-bl-[20px] shadow-cardi'>
                                        <p id='paragraph' className={`${styles.transition} relative max-w-[550px] text-white min-h-[150px] bg-[#1d18365f] backdrop-blur-[10px]  tracking-wide leading-[25px] mxs:text-[13px] text-[15px] text-shadow p-5 rounded-tr-[20px] rounded-bl-[20px] transform translate-x-[-80px] opacity-0`}>
                                            {planet.details}
                                        </p>
                                    </Tilt>    

                                </div>

                                <div className={` absolute right-0  min-h-full w-[60%] wbp:min-w-[768px] min-w-full  cursor-pointer z-[-1]`}>
                                
                                    <Model/>
                                
                                </div>
                            </div>
                            
                        </SwiperSlide >
                        )
                    })
                }
            </Swiper>

        </div>
        )}

        </div> 
    
    

    </main>
  )
}

export default Worlds