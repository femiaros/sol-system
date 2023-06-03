import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Uranus } from "./Uranus"
import CanvasLoader from "../../Loader"

const PlanetUranus = () => {
  const planetUranusRef = useRef(null)

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera 
        makeDefault 
        position={[0,0,7]}
      />
      <OrbitControls   
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false}
        autoRotate
      />

      {/* SolarSystem */}
      <group
        ref={planetUranusRef}
        scale={0.02} 
      >
        <Uranus/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#9bbdc8', 1]} />
    </>
  );
};

const PlanetUranusCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0] canva-wrapper'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <PlanetUranus />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default PlanetUranusCanvas;
