import SolarSystemCanvas from "./canvas/solarsys"
import StarsCanvas from "./canvas/stars"
import useElementOnScreen from "../hooks/useElementOnScreen"

const PlanetBG = ({headerRef}) => {
  // *** required hook***
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }, headerRef)

  return (
    // *** remove canva from DOM if element not visibles ***  
    isVisible && ( 
      <div className={`${isVisible? '':'hidden'} absolute z-[-1] top-0 left-0 w-full h-full`} 
      >   
          
        <SolarSystemCanvas />
        <StarsCanvas />
          
      </div>
    )
  )
}

export default PlanetBG