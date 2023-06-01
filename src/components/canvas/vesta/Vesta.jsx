/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 scene.gltf -T --shadows
Author: uperesito (https://sketchfab.com/uperesito)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/vesta-5451f29a8ed44758916584e6860ab427
Title: Vesta
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Vesta(props) {
  const { nodes, materials } = useGLTF('/models/vesta-new-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.06, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_1.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_2.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_3.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_4.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_5.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_6.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_7.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_8.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_9.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_10.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_11.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_12.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_13.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_14.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_15.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_16.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_17.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_18.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_19.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_20.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_21.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_22.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_23.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_24.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_25.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_26.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_27.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_28.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_29.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_30.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_31.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_32.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_33.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_34.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_35.geometry} material={materials.material} />
        <mesh castShadow receiveShadow geometry={nodes.globe_whole_Mat_0_36.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/vesta-new-transformed.glb')