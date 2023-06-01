/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 scene.gltf -T --shadows
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mercury-planet-ccb6c6a9ac3742109cc67c0f16032b49
Title: Mercury (planet)
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mercury(props) {
  const mercuryRef = useRef(null)
  useEffect(()=>{
    if(!!mercuryRef){
    console.log(mercuryRef.current) 
    }
  },[mercuryRef.current])

  const { nodes, materials } = useGLTF('/models/mercury-transformed.glb')
  return (
    <group {...props} dispose={null} ref={mercuryRef}>
      <mesh castShadow receiveShadow geometry={nodes['Sphere001_Material_#50_0'].geometry} material={materials.Material_50} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/mercury-transformed.glb')