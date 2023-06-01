import { Link } from "react-router-dom"
import {GiRingedPlanet} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {HiMenuAlt3} from 'react-icons/hi'
import { navLinks } from "../contents"
import { styles } from "../styles"
import { motion } from "framer-motion"
import { navBarVariants } from "../utils/motion"
//custom hook
import usePageScrollDown from "../hooks/usePageScrollDown"


const Navbar = ({state, dispatch}) => {
  // *** required states ***
  const pageScrollDown = usePageScrollDown()

  return (

    <motion.nav 
      className={!pageScrollDown? `${styles.paddingXH
      }  text-white h-[85px] z-20 transition duration-500 ease-in-out` : `text-white h-[70px] w-full z-20 fixed top-0`} // py-5

      variants={navBarVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={!pageScrollDown? "px-6 md:max-w-6xl max-w-full mx-auto h-full flex items-center justify-between z-20 border-bottom": `${styles.paddingX
      } max-w-full h-full flex items-center justify-between z-20 bg-[rgba(255,255,255,0.1)] backdrop-blur-[20px]`}>
      
        {/* -----LOGO----- */}
        <Link
          to='/'
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => {
            dispatch({type: 'setActive', payload: ''})
            dispatch({type: 'setMenu', payload: false})
            window.scrollTo(0, 0)
          }}
        >
          <GiRingedPlanet className='text-[#193F93] text-4xl'/>
          <p className='sm:text-[18px] text-[17px] font-bold cursor-pointer italic'> Sol</p>
        </Link>

        {/* -----NAV LINKS----- */}
        <ul className='md:flex hidden flex-row gap-10 list-none'>

          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                state.active === link.title ? "text-secondary" : "text-white"
              } hover:text-secondary text-[14px] font-medium uppercase cursor-pointer`}
              onClick={() => 
                dispatch({type: 'setActive', payload: link.title})
              }
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>

        {/* show only on small screens */}
        <div className={`${styles.transition} ${state.menu? 'rotate-180':'rotate-0'} z-100 transform md:hidden block cursor-pointer`}
          onClick={() => 
            dispatch({type: 'setMenu', payload: !state.menu})
          }
        >
          {state.menu ? 
            <IoMdClose className="text-3xl" /> :
            <HiMenuAlt3 className="text-3xl" />
          }
          
        </div>

      </div>
    </motion.nav>
  )
}

export default Navbar