/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 scene.gltf -T --shadows
Author: Mieke Roth (https://sketchfab.com/miekeroth)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/astroid-bennu-2926ad1b955a4d1982b88ebddba0a7be
Title: Astroid Bennu
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bennu(props) {
  const { nodes, materials } = useGLTF('/models/bennu-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.Default_OBJ} />
      <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.Default_OBJ} />
    </group>
  )
}

useGLTF.preload('/models/bennu-transformed.glb')
