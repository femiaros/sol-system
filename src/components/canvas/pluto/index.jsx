import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"
import { Pluto } from "./Pluto"
import CanvasLoader from "../../Loader"

const PlanetPluto = () => {
  const planetPlutoRef = useRef(null)

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera 
        makeDefault 
        // position={[0,0,5.6]}
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
        ref={planetPlutoRef}
        scale={0.022} 
      >
        <Pluto/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#ffffff', 1]} />
    </>
  );
};

const PlanetPlutoCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0] canva-wrapper'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
    
        <PlanetPluto />

      </Suspense>
    </Canvas>
    </div>
  );
};

export default PlanetPlutoCanvas;
