import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Bennu } from "./Bennu"
import CanvasLoader from "../../Loader"

const AsteroidBennu = () => {
  const asteroidBennuRef = useRef(null)

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
        ref={asteroidBennuRef}
        scale={7} 
      >
        <Bennu/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 1]} />
    </>
  );
};

const AsteroidBenneCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0]'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <AsteroidBennu />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default AsteroidBenneCanvas;
