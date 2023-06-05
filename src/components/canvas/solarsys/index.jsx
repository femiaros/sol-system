import { Suspense,useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera,OrbitControls } from "@react-three/drei"

import { Solar } from "./Solar"
import { angleToRadians } from "../../../utils/angles"
import CanvasLoader from "../../Loader"

const SolarSystem = () => {
  const solarSystemRef = useRef(null)

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera 
        makeDefault 
        position={[6,0,9]}
      />
        
      <OrbitControls   
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false}
        autoRotate
      />

      {/* SolarSystem */}
      <group
        ref={solarSystemRef}
        scale={0.008}
        rotation={[0,angleToRadians(-42),0]}
      >
        <Solar/>
      </group>

    </>
  );
};

const SolarSystemCanvas = () => {
  return (
    <Canvas shadows>
        <Suspense fallback={<CanvasLoader />}>
          <SolarSystem/>
        </Suspense>
    </Canvas>
  )
}

export default SolarSystemCanvas