import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Mars } from "./Mars"
import { angleToRadians } from "../../../utils/angles"
import CanvasLoader from "../../Loader"

const PlanetMars = () => {
  const planetMarsRef = useRef(null)

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
        ref={planetMarsRef}
        scale={2.3} 
        position={[0,-2.8,0]}
      >
        <Mars/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 1]} />
    </>
  );
};

const PlanetMarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0]'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <PlanetMars />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default PlanetMarsCanvas;
