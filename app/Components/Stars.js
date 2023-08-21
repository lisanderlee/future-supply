import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars, Bounds, Edges  } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel } from 'lamina'




export default function StarsBackground(props) {
  return (
    <>
      <Canvas id='thecanvasstar'>
        <Suspense fallback={null}>
        <OrbitControls autoRotate autoRotateSpeed={0.1} rotateSpeed={0.05} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Stars radius={10} depth={100}  count={2500} factor={10} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}




