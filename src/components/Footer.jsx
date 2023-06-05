import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { staggerContainer,textVariant,fadeIn } from "../utils/motion"
import { styles } from "../styles"
import {GiRingedPlanet} from 'react-icons/gi'
import {FiPhoneCall} from 'react-icons/fi'
import {BiMailSend} from 'react-icons/bi'
import {BsSend} from 'react-icons/bs'

import IssPosition from "./IssPosition"
import { footerLinks,footerSocials } from "../contents"

const Footer = ({state}) => {
  // required states
  const [email,setEmail] = useState('')

  // handle submission for email
  const handleRegisterEmail = (e)=>{
    e.preventDefault();
    window.alert(`🙂Thanks for registering: Email sent☑️`)

    setEmail('') // clear out input
  }

  return (
    <footer id="footer" className=" pt-[20px] scroll-mt-5"
    >

      <motion.div variants={staggerContainer(0.4)}
        className={`${styles.paddingX} max-w-7xl mx-auto z-0`}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      > 
      
        <motion.div variants={textVariant()} >
          <p className={`${styles.sectionSubText} text-center`}>
            Where the ISS at
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            International space station.
          </h2>
        </motion.div>
      
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 mb-8 text-secondary mxs:text-[13px] text-[14px] max-w-3xl leading-[30px]'
        >
          <p className=""><span className=" w-3 h-3 bg-alternative inline-block mr-1"></span>Earth map rendered in 2[dimension]</p>
          <p className=""><span className=" w-3 h-3 bg-alternative inline-block mr-1"></span>image close to detailed true-color of the entire Earth</p>
          <p className=""><span className=" w-3 h-3 bg-alternative inline-block mr-1"></span>Map Tracks the currect position of ISS</p>
            
        </motion.div>

      </motion.div>

      {/* ISS tracking map */}
      <div className={`px-5 mxs:px-2 max-w-7xl mx-auto mb-[100px]`}>
        <IssPosition/>
      </div>

      {/* Main footer */}
      <div className=" bg-secondary max-w-7xl mx-auto">

        <div className="flex gap-[2px]"> {/* Empty divs for design */}
          <div className="hidden fbp:block h-[20px] bg-primary px-4 basis-[28%] rounded-br-[20px]">
          </div>

          <div className="bg-primary basis-[72%] flex rounded-bl-[20px]">
          </div>
        </div> {/* Empty divs for design */}

        <div className="flex fbp:flex-row flex-col gap-[1px] text-secondary border-[1px] border-secondary">
          <div className="bg-primary fbp:order-1 order-2 fbp:basis-[28%] basis-[100%] fbp:py-10 py-6 fbp:px-4 px-6 flex fbp:flex-col flex-row items-center justify-between fbp:rounded-tr-[20px] fbp:min-h-[280px]">
            <Link
              to='/'
              className=' mxs:w-fit w-[240px]'
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <p className='text-secondary fbp:text-[24px] text-[21px] font-bold cursor-pointer italic'> SOL</p>
            </Link>

            <div className="w-[240px] flex gap-3 items-center fbp:justify-stretch justify-end">
              <GiRingedPlanet className='text-[#193F93] text-4xl fbp:text-5xl'/>
              <div className="flex w-fit flex-col gap-2 text-[13px] fbp:text-[14px]">
                <span> 2023 Femi Aros.</span>
                <span> All rights reserved</span>
              </div>
            </div>
          </div>

          <div className="fbp:order-2 order-1 fbp:basis-[72%] basis-[100%] flex fbpi:flex-row flex-col">
            <div className="bg-primary min-h-[230px] fbpi:min-h-[280px] basis-[100%] fbpi:basis-[50%] fbp:basis-[45%] py-6 fbp:py-10 mxs:pt-7 fbp:px-4 px-6 flex flex-col fbp:items-center justify-between fbp:rounded-tl-[20px]">
              <nav className={`${styles.transition} fbpi:w-[300px] fbp:w-[260px] flex justify-between`}>
                <ul>
                  {footerLinks.map((hyperlink,i)=> i<2 ?(

                    <li key={hyperlink.id} className={`${styles.transition} hover:text-white text-[14px] font-medium uppercase cursor-pointer mb-2`}><a href={`#${hyperlink.id}`}>{hyperlink.title}</a></li>

                  ):null)} 
                </ul>
                <ul>
                  {footerLinks.map((hyperlink,i)=> i===2 ?(

                    <li key={hyperlink.id} className={`${styles.transition} hover:text-white text-[14px] font-medium uppercase cursor-pointer mb-2`}><a href={`#${hyperlink.id}`}>{hyperlink.title}</a></li>

                  ): i === 3 ? (
                    <li key={hyperlink.id} 
                      className={`${styles.transition} hover:text-white text-[14px] font-medium uppercase cursor-pointer mb-2`}
                      onClick={()=>window.open(hyperlink.link, '_blank')}
                    >
                      {hyperlink.title}
                    </li>
                  ) : null )} 
                </ul>
              </nav>
                    
              <div className={`${styles.transition} fbpi:w-[300px] fbp:w-[260px]`}>
                <span className="w-fit mx-auto fbpi:mx-0 flex gap-2 items-center mb-2">
                  <span className="flex text-[15px] items-center justify-center w-8 h-8 border-solid border-[1px] border-secondary rounded-full"><FiPhoneCall/></span>
                  <a 
                    className={`${styles.transition} hover:text-white text-[13px] fbp:text-[14px]`}
                    href="tel:+2348131296481"
                  >
                    NG: (+234) 813-1246-481
                  </a>
                </span>

                <span className="w-fit mx-auto fbpi:mx-0 flex gap-2 items-center">
                  <span className="flex text-[15px] items-center justify-center w-8 h-8 border-solid border-[1px] border-secondary rounded-full"><BiMailSend/></span>
                  <a 
                    className={`${styles.transition} hover:text-white text-[13px] fbp:text-[14px]`}
                    href = "mailto:femiaros19@gmail.com"
                  >femiaros19@gmail.com
                  </a>
                </span>
              </div>      
            </div>

            <div className="bg-primary min-h-[230px] fbpi:min-h-[280px] fbp:basis-[55%] basis-[50%] py-6 fbp:py-10 mxs:pb-7 fbp:px-4 px-6 flex flex-col items-center fbpi:items-end justify-between">
              <p className={`${styles.transition} w-[320px] fbpi:w-[300px] fbp:w-[280px] fbp:text-[22px] text-[20px]`}>NEWSLETTER</p>
              {/* NEWSLETTER INPUT */}
              <form className={`${styles.transition} ${state.menu && 'hidden'} relative overflow-hidden h-[35px] w-[320px] fbpi:w-[300px] fbp:w-[280px] pr-[13%] flex justify-between before:content-[''] before:absolute before:w-[86%] before:h-[1px] before:bg-secondary before:bottom-0 hover:before:bg-[#f1e2e2]`} onSubmit={handleRegisterEmail}>
                <label 
                  htmlFor="email"
                  className="absolute top-[-200px]"
                >Search
                </label>
                <input 
                  id="email"
                  type="email" 
                  className=" h-full w-[87%] pl-1 bg-transparent md:text-[14px] text-[#cfcbcb] tracking-wider fbpi:text-[15px] placeholder:text-[15px] placeholder:tracking-wide focus:outline-none"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <button className={`${styles.transition} h-full w-fit text-[16px] hover:text-white`}><BsSend/></button>
              </form>{/* NEWSLETTER INPUT END*/}
              
              <div className={`${styles.transition} w-[320px] fbpi:w-[300px] fbp:w-[280px] flex items-end justify-between`}>
                {
                  footerSocials.map(social =>(
                      <span 
                        key={social.id}
                        className={`flex text-[16px] items-center justify-center w-8 h-8 border-solid border-[1px] border-secondary rounded-full cursor-pointer hover:text-white hover:border-white`}
                        onClick={()=>window.open(social.link, '_blank')}
                      > <social.icon/>
                      </span>
                    ))
                }
              </div>
            </div>

          </div>
        </div>
        
      </div>
       {/* Extra Spacing */}
      <div className="h-[80px]"></div>
    </footer>
  )
}

export default Footer