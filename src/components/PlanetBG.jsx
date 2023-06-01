import SolarSystemCanvas from "./canvas/solarsys"
// import StarsCanvas from "./canvas/stars"

const PlanetBG = () => {

  return (
    <div className='absolute z-[-1] top-0 left-0 w-full h-full' 
    >   
        
      <SolarSystemCanvas />
        
    </div>
  )
}

export default PlanetBG