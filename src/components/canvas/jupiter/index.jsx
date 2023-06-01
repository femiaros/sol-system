import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls} from "@react-three/drei"
import { Jupiter } from "./Jupiter"
import CanvasLoader from "../../Loader"

const PlanetJupiter = () => {
  const planetJupiterRef = useRef(null)

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
        ref={planetJupiterRef}
        scale={0.024} 
      >
        <Jupiter/>
      </group>

      {/* ambient Light */}
      <ambientLight args={['#f3e9d4', 1]} /> 
    </>
  );
};

const PlanetJupiterCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[0]'>
    <Canvas
      className='w-full h-full '
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <PlanetJupiter />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default PlanetJupiterCanvas;
