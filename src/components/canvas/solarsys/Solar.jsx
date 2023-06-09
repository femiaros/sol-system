/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 scene.gltf -T --shadows
Author: valmirt (https://sketchfab.com/valmirt)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/solar-system-d3f058bbe20e4f70b2b52277ff8e109a
Title: Solar System
*/

import React, { useRef} from 'react'
import { useGLTF } from '@react-three/drei'

export function Solar(props) {
  const { nodes, materials } = useGLTF('/models/solar-transformed.glb')

  return (

    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert2_0.geometry} material={materials.lambert2} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert3_0.geometry} material={materials.lambert3} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert4_0.geometry} material={materials.lambert4} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert5_0.geometry} material={materials.lambert5} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert6_0.geometry} material={materials.lambert6} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert7_0.geometry} material={materials.lambert7} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert10_0.geometry} material={materials.lambert10} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert11_0.geometry} material={materials.lambert11} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert12_0.geometry} material={materials.lambert12} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert13_0.geometry} material={materials.lambert13} />
      <mesh castShadow receiveShadow geometry={nodes.Sol1_lambert9_0.geometry} material={materials.lambert9} />
    </group>
  )
}

useGLTF.preload('/models/solar-transformed.glb')
