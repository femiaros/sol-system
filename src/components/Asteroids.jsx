import { useRef,useState } from "react"
import { motion } from "framer-motion"
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import StarsCanvas from './canvas/stars'
import { staggerContainer,textVariant,fadeIn } from '../utils/motion'
import { asteroidsSlideData } from "../contents"

import useElementOnScreen from "../hooks/useElementOnScreen"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination,Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Asteroids = () => {
    // *** required state && hook && func***
    const targetRef = useRef(null)
    const [currentModelIndex,setCurrentModelIndex] = useState(0)
    
    const isVisible = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }, targetRef)

    const handleSlideChange = (swiper)=>{
        // set active CurrentModelIndex 
        setCurrentModelIndex(swiper.activeIndex)
    }

  return (
    <section id='asteroids' className='relative z-[-1] mb-[80px] scroll-mt-20'>

        {/* EXPLORE ASTEROIDS */}
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
                <h2 className={styles.sectionHeadText}>The remnant worlds.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary mxs:text-[14px] text-[15px] max-w-3xl leading-[30px]'
            >
                Asteroids, sometimes called minor planets, are rocky, airless remnants left over from the early formation of our solar system about 4.6 billion years ago. The current known asteroid count is: <span className=' text-tertiary font-semibold'>1,282,888.</span>
                <br />
                Most of this ancient space rubble can be found orbiting the Sun between Mars and Jupiter within the main asteroid belt. Asteroids range in size from <span className=' text-tertiary font-semibold'>Vesta</span> – the largest at about 329 miles (530 kilometers) in diameter – to bodies that are less than 33 feet (10 meters) across. Here are some Key Science Targets
                <br />
                
            </motion.p>

        </motion.div>

        {/* ASTEROIDS SLIDE */}
        <div // intersection observing div
            ref={targetRef}
            className="min-h-[590px] h-[calc(100vh-80px)]"
        > 

        {isVisible && ( 

        <div className={`${isVisible?'':'hidden'} mt-12 relative`}>
            {/* Stars overlay background */}
            <StarsCanvas />
            {/* Swiper slide */}
            <Swiper 
                className='relative max-w-7xl mx-auto min-h-[590px] h-[calc(100vh-80px)]'
                modules={[Pagination,Navigation]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                navigation
                onSlideChange={handleSlideChange}
            >
                {   
                    asteroidsSlideData.map((asteroid,index)=>{
                        const Model = asteroid.model
                        return (
                        <SwiperSlide  key={asteroid.id}
                            className='relative w-full h-full'
                        >

                            <div className='relative h-full flex items-center justify-start'>

                                <div  className={`${styles.transition} bg-transparent min-w-[50%] text-white mxs:pl-[20px] pl-[60px] pr-[20px]`}>

                                    <h3 id='title' className={`${styles.transition} ml-10 bg-transparent relative w-fit mxs:text-[23px] text-[36px] font-semibold text-shadow mb-14 transform translate-y-[-50px] opacity-0`}>
                                        {asteroid.name}
                                        <span className='mxs:text-[12px] text-[12px] mxs:font-medium font-semibold ml-[3px]'>Asteroid</span>
                                    </h3>

                                    <Tilt className=' w-fit rounded-tr-[20px] rounded-bl-[20px] shadow-cardi'>
                                        <p id='paragraph' className={`${styles.transition} relative max-w-[550px] text-white min-h-[150px] bg-[#1d18365f] backdrop-blur-[10px]  tracking-wide leading-[25px] mxs:text-[13px] text-[15px] text-shadow p-5 rounded-tr-[20px] rounded-bl-[20px] transform translate-x-[-80px] opacity-0`}>
                                            {asteroid.details}
                                        </p>
                                    </Tilt>    

                                </div>

                                <div className=' absolute right-0  min-h-full w-[60%] wbp:min-w-[768px] min-w-full  cursor-pointer z-[-1]'>
                                    {(index === currentModelIndex)&&<Model/>}
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


    </section>
  )
}

export default Asteroids