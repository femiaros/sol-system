
import { useState } from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MobileNav from './components/MobileNav'
import Explore from './components/Explore'
import Missions from "./components/Missions"
import Footer from './components/Footer'
import PlanetBG from './components/PlanetBG'

function App() {
  // *** required states ***
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='relative z-0 bg-primary'>
      <header id='header' className='relative w-full min-h-screen bg-transparent mb-20'>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} active={active} setActive={setActive}/>
        <Hero />
        <PlanetBG />  
      </header>
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} active={active} setActive={setActive}/>  
      <Explore/>
      <div id='missions' className=" black-blue-gradient mxs:h-[60px] h-[100px] mb-[40px]"></div>
      <Missions/>
      <Footer/> 
    </div> 
  )
}

export default App

{/* <div className="w-screen h-screen bg-red-300">

    </div> */}
