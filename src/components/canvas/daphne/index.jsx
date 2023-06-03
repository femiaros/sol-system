import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Daphne } from "./Daphne"
import CanvasLoader from "../../Loader"

const AsteroidDaphne = () => {
  const asteroidDaphneRef = useRef(null)

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

      {/* Asteroid */}
      <group
        ref={asteroidDaphneRef}
        scale={0.022} 
      >
        <Daphne/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 1.5]} />
    </>
  );
};

const AsteroidDaphneCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0] canva-wrapper'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <AsteroidDaphne />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default AsteroidDaphneCanvas;
