import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Saturn } from "./Saturn"
import CanvasLoader from "../../Loader"

const PlanetSaturn = () => {
  const planetSaturnRef = useRef(null)

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

      {/* Planet Saturn */}
      <group
        ref={planetSaturnRef}
        scale={0.018}  
      >
        <Saturn/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 1]} />
    </>
  );
};

const PlanetSaturnCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0]'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <PlanetSaturn />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default PlanetSaturnCanvas;
