import { styles } from "../styles"
import { staggerContainer,slideIn,fadeIn } from "../utils/motion" 

import { motion } from "framer-motion"
import astroImage from '../images/astro-removebg.png'
import issImage from '../images/iss-removebg.png'
import teamImage from '../images/team-hub-removebg.png'
import {FaFacebookF,FaTiktok} from 'react-icons/fa'
import {AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'

const Hero = () => { //#A9D3EE
  return (
    <motion.section className={`${styles.paddingX} pb-[70px] pt-[90px] hbp:relative max-w-7xl mx-auto`}

        variants={staggerContainer(0.4,2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
    >
        
        {/* INTRO */} 
        <motion.div id="intro" className="relative text-white max-w-3xl mx-auto flex flex-row items-center flex-wrap p-5 bg-[#1d183679] backdrop-blur-[20px] rounded-tl-[15px] rounded-br-[15px] shadow-card"
            variants={slideIn("right", "spring", '', 1)}
        >
            <h1 className="basis-full hbpi:text-7xl text-6xl font-bold italic mxs:text-4xl mxs:font-bold">
                Peek into the Solar <span className="md:hidden inline">System.</span>
            </h1>
            <p className=" mxs:basis-[80%] basis-[62%] font-medium hbpi:text-[15px] text-[13px] pt-5">
                The planetary system we call home orbits a star in an outer spiral arm of the vast Milky Way galaxy.
            </p>
            <h1 className="md:block hidden hbpi:text-7xl text-6xl ml-[-10px] font-bold italic">
                System
            </h1>
        </motion.div>

        <br className="hbp:hidden" /><br className="hbp:hidden"/><br className="xs:hidden" />

        {/* ASIDE */}
        <motion.div id="aside" className="hbp:absolute shadow-card bg-[#1d1836b7] backdrop-blur-[20px] left-0 top-[50px] flex hbp:flex-col flex-row flex-wrap hbp:gap-0 gap-5 p-6 items-center hbpi:justify-start justify-center rounded-3xl z-[4] before:content-[''] before:absolute before:inset-0  before:rounded-3xl"
            variants={fadeIn("", "", '', 2)}
        >
            <div className="relative w-[160px] hbp:min-h-[160px] min-h-[200px] hbp:mb-3 before:content-[''] before:absolute before:w-[70%] before:h-[1px] before:bg-alternative before:top-[100%] before:left-[50%] before:transform before:translate-x-[-50%] mxs:w-full">
                <figure className="h-[100px] w-[100px] mx-auto">
                    <img src={astroImage} alt="" className=" w-full h-full object-cover" />
                </figure>
                <p className=" text-[12px] font-semibold text-center text-white tracking-wide mxs:text-[13px]">
                    <span className="">Yuri Gagarin</span>, the first man in space and in orbit
                </p>
            </div>
            <div className="relative w-[160px] hbp:min-h-[190px] min-h-[200px] hbp:mb-3 before:content-[''] before:absolute before:w-[70%] before:h-[1px] before:bg-alternative before:top-[100%] before:left-[50%] before:transform before:translate-x-[-50%] mxs:w-full">
                <figure className="hbp:h-[70px] h-[100px] hbp:w-[80px] w-[100px] mx-auto">
                    <img src={issImage} alt="" className=" w-full h-full object-cover" />
                </figure>
                <p className=" text-[12px] font-semibold text-center text-white tracking-wide mxs:text-[13px]">
                    <span className="">The International Space Station</span> is a modular station (habitable artificial satellite) in low Earth orbit
                </p> 
            </div>
            <div className="relative w-[160px] hbp:min-h-[167px] min-h-[200px] before:content-[''] before:absolute before:w-[70%] before:h-[1px] before:bg-alternative before:top-[100%] before:left-[50%] before:transform before:translate-x-[-50%] mxs:w-full">
                <figure className=" h-[100px] w-[100px] mx-auto">
                    <img src={teamImage} alt="" className=" w-full h-full object-cover" />
                </figure>
                <p className="font-semibold text-[12px] text-center text-white tracking-wide mxs:text-[13px]">
                    <span className="">Teamwork & Collaboration</span> in Long-Duration Space Missions
                </p>
            </div>
        </motion.div>

        <br/><br/><br className="xs:hidden" />

        {/* ASTRO INFO */}
        <motion.div className="w-full"
            variants={slideIn("left", "spring", '', 1)}
        >
            <div id="astro" className={`${styles.transition} py-7 pl-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-[7px] flex flex-row flex-wrap items-center hbpi:justify-start justify-center gap-5 max-w-3xl mx-auto transform bp:translate-x-20 rounded-tr-[20px] rounded-bl-[20px] mxs:px-5`}>
                <div className="flex flex-col hbpi:w-[200px] w-[230px] text-white p-3 mxs:w-full">
                    <h3 className=" text-[14px] font-semibold mb-1">Samay Lawson</h3>
                    <span className="mb-2 text-[13px]">space traveler</span>
                    <p className="text-[12px] font-light mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elitbero tempore quas!
                    </p>
                    <div className="flex flex-row gap-2">
                        <span className={`${styles.transition} flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary`}>  
                            <FaFacebookF className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer transition duration-500 ease-in-out hover:bg-tertiary hover:border-tertiary">         
                            <AiOutlineTwitter className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer transition duration-500 ease-in-out hover:bg-tertiary hover:border-tertiary">         
                            <AiFillInstagram className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer transition duration-500 ease-in-out hover:bg-tertiary hover:border-tertiary">         
                            <FaTiktok className="text-[11px]"/>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col hbpi:w-[200px] w-[230px] text-white p-3 mxs:w-full">
                    <h3 className=" text-[14px] font-semibold mb-1">Jon Thoms</h3>
                    <span className="mb-2 text-[13px]">space traveler</span>
                    <p className="text-[12px] font-light mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elitbero tempore quas!
                    </p>
                    <div className="flex flex-row gap-2">
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary">  
                            <FaFacebookF className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary">         
                            <AiOutlineTwitter className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary">         
                            <AiFillInstagram className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary">         
                            <FaTiktok className="text-[11px]"/>
                        </span>
                    </div>
                </div>

                <div className="flex flex-col hbpi:w-[200px] w-[230px] text-white p-3 mxs:w-full">
                    <h3 className=" text-[14px] font-semibold mb-1">Steve Dohmans</h3>
                    <span className="mb-2 text-[13px]">space traveler</span>
                    <p className="text-[12px] font-light mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elitbero tempore quas!
                    </p>
                    <div className="flex flex-row gap-2">
                        <span className={`${styles.transition} flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary`}>  
                            <FaFacebookF className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary">         
                            <AiOutlineTwitter className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary">         
                            <AiFillInstagram className="text-[11px]"/>
                        </span>
                        <span className="flex items-center justify-center w-7 h-7 border-solid border-[1px] border-white rounded-full cursor-pointer hover:bg-tertiary hover:border-tertiary">         
                            <FaTiktok className="text-[11px]"/>
                        </span>
                    </div>
                </div>

            </div>
        </motion.div>
    </motion.section>
  )
}

export default Hero