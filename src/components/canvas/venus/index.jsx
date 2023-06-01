import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Venus } from "./Venus"
import CanvasLoader from "../../Loader"

const PlanetVenus = () => {
  const planetVenusRef = useRef(null)

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
        ref={planetVenusRef}
        scale={0.0238} 
      >
        <Venus/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 1]} />
    </>
  );
};

const PlanetVenusCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0]'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <PlanetVenus />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default PlanetVenusCanvas;
