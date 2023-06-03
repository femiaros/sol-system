import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Neptune } from "./Neptune"
import CanvasLoader from "../../Loader"

const PlanetNeptune = () => {
  const planetNeptuneRef = useRef(null)

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
        ref={planetNeptuneRef}
        scale={0.024} 
      >
        <Neptune/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#b4c0d7', 1]} />
    </>
  );
};

const PlanetNeptuneCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0] canva-wrapper'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <PlanetNeptune />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default PlanetNeptuneCanvas;
