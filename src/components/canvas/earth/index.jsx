import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls} from "@react-three/drei"
import { Earth } from "./Earth"
import CanvasLoader from "../../Loader"

const PlanetEarth = () => {
  const planetEarthRef = useRef(null)

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
        ref={planetEarthRef}
        scale={0.023} 
      >
        <Earth/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 1]} />
    </>
  );
};

const PlanetEarthCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0]'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <PlanetEarth />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default PlanetEarthCanvas;
