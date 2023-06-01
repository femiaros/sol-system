import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Vesta } from "./Vesta"
import CanvasLoader from "../../Loader"
import { angleToRadians } from "../../../utils/angles"

const AsteroidVesta = () => {
  const asteroidVestaRef = useRef(null)

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
        ref={asteroidVestaRef}
        scale={0.00134} 
        rotation={[angleToRadians(10),0,0]}
      >
        <Vesta/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 1.5]} />
    </>
  );
};

const AsteroidVestaCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0]'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <AsteroidVesta />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default AsteroidVestaCanvas;
