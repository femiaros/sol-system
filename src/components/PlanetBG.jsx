import { motion } from "framer-motion"
import { staggerContainer } from '../utils/motion'
import { EarthCanvas,StarsCanvas } from "./canvas"

const PlanetBG = () => {
  return (
    <motion.div className='absolute z-[-1] top-0 left-0 w-full h-full' //
      variants={staggerContainer()}
    >
        <EarthCanvas />
        <StarsCanvas />
    </motion.div>
  )
}

export default PlanetBG