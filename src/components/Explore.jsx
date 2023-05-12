import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { staggerContainer,textVariant,fadeIn } from '../utils/motion'
import { slideData } from '../contents'
import {BsRocketTakeoffFill} from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import { Thumbs,FreeMode } from 'swiper'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'



const Explore = () => {
    // store thumbs swiper instance
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <main id='explore' className='relative z-[-1] min-h-screen scroll-mt-40'>
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
                <p className={styles.sectionSubText}>Explore</p>
                <h2 className={styles.sectionHeadText}>The nine worlds.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary mxs:text-[14px] text-[15px] max-w-3xl leading-[30px]'
            >
                There are more planets than stars in our galaxy. The current count orbiting our star: <span className=' text-tertiary font-semibold'>eight.</span>
                <br />
                The inner, rocky planets are Mercury, Venus, Earth, and Mars. NASA's newest rover — Perseverance — landed on Mars on Feb. 18, 2021. The outer planets are gas giants Jupiter and Saturn and ice giants Uranus and Neptune.
                <br />
                Beyond Neptune, a newer class of smaller worlds called dwarf planets reign, including longtime favorite Pluto. Thousands more planets have been discovered beyond our solar system. Scientists call them exoplanets (exo means "from outside").
            </motion.p>

        </motion.div>

        {/* EXPLORE SLIDES */}

        <div className='mt-12 relative max-w-7xl mx-auto'>
            {/* Main Swipe */}
            <Swiper 
                className='relative w-full min-h-[590px] h-[calc(100vh-80px)]'
                modules={[FreeMode,Thumbs]} 
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                spaceBetween={0}
            >
                {
                    slideData.map(planet=>(
                        <SwiperSlide  key={planet.id}
                            className='relative w-full h-full dark-layer'
                        >
                            <img src={planet.src} 
                                className='w-full h-full object-cover object-center pointer-events-none'
                                alt={planet.name} 
                            />

                            <div  className={`${styles.transition} absolute mxs:top-[8%] top-[13%] text-white sm:mx-[50px] md:mx-[100px] hbpi:mx-[200px] mx-[20px]`}>

                                <h3 id='title' className={`${styles.transition} mxs:text-[26px] text-[38px] font-bold text-shadow mb-5 transform translate-y-[-50px] opacity-0`}>
                                    {planet.name}
                                    <span className='mxs:text-[12px] text-sm mxs:font-medium font-semibold ml-[3px]'>Planet</span>
                                </h3>

                                <p id='paragraph' className={`${styles.transition} max-w-[700px] text-white min-h-[150px] bg-[#1d183679] backdrop-blur-[10px] font-semibold mxs:text-[15px] text-shadow p-5 rounded-[10px] transform translate-x-[-80px] opacity-0`}>
                                    {planet.details}
                                </p>

                                <Tilt className='mt-9 w-fit p-[1px] green-pink-gradient rounded-[10px] shadow-card'>
                                <div id='distance' className={`${styles.transition} px-[25px] py-[12px] w-fit bg-primary backdrop-blur-[11px] rounded-[10px] text-white flex items-center gap-3 cursor-pointer transform translate-x-[50px] opacity-0]`}>

                                    <span className='text-[white] text-2xl w-11 h-11 flex items-center justify-center rounded-full bg-[#193F93]'>
                                        <BsRocketTakeoffFill/>
                                    </span>
                                    <span>
                                        <p className=' text-secondary mb-2 font-light text-[14px] mxs:text-[12px]'>Sun/{planet.name}</p>
                                        <h3 className='text-[16px] mxs:text-[14px]'>{planet.distance}</h3>
                                    </span>

                                </div>
                                </Tilt>

                            </div>
                        </SwiperSlide >
                    ))
                }
            </Swiper>
                {/* Thumbs Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs,FreeMode]}
                watchSlidesProgress={true}
                freeMode={true}
                loop={true}
                slidesPerView={0}
                spaceBetween={0}
                id='aside'
                className='absolute left-[50%] bottom-12 transform translate-x-[-50%] bg-[#1d183679] backdrop-blur-[10px] py-[10px] px-[3px] rounded-[10px]'
            >
                {
                    slideData.map(planet=>(
                        <SwiperSlide key={planet.id} className=' max-w-[50px] h-[35px] mx-[5px] rounded-[5px] cursor-pointer overflow-hidden'>
                            <img src={planet.src} 
                                className='w-full h-full object-cover object-center'
                                alt={planet.name} 
                            />
                        </SwiperSlide >
                    ))
                }
            </Swiper>

        </div>
    
    

    </main>
  )
}

export default Explore