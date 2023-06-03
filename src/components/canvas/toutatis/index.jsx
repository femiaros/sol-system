import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Toutatis } from "./Toutatis"
import CanvasLoader from "../../Loader"
import { angleToRadians } from "../../../utils/angles"

const ToutatisVesta = () => {
  const asteroidToutatisRef = useRef(null)

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
        ref={asteroidToutatisRef}
        scale={1} 
        rotation={[angleToRadians(14),0,0]}
      >
        <Toutatis/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 2]} />
    </>
  );
};

const AsteroidToutatisCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0] canva-wrapper'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <ToutatisVesta />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default AsteroidToutatisCanvas;
