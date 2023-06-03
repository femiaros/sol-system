import { useReducer,useRef } from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MobileNav from './components/MobileNav'
import Worlds from './components/Worlds'
import Asteroids from "./components/Asteroids"
import Missions from "./components/Missions"
import Footer from './components/Footer'
import PlanetBG from './components/PlanetBG'

// *** reducer function ***
const reducer = (state,action)=>{
  switch(action.type){
    case 'setActive':
      return { ...state,active: action.payload};
    case 'setMenu':
      return { ...state, menu: action.payload };
    default:
      throw new Error();
  }
}

function App() {
  // *** required states ***
  const [state,dispatch] = useReducer(reducer,{
    active: '',
    menu: false,
  })
  const headerRef = useRef(null)

  return (
    <div className='relative z-0 bg-primary'>
      <header ref={headerRef} id='header' className='relative w-full min-h-screen bg-transparent mb-[100px]'>
        <Navbar state={state} dispatch={dispatch}/>
        <Hero />
        <PlanetBG headerRef={headerRef}/> 
      </header>
      <MobileNav state={state} dispatch={dispatch}/>  
      <Worlds/>
      <Asteroids/>
      <Missions/>
      <Footer state={state}/> 
    </div> 
  )
}

export default App
