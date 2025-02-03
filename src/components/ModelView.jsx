import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import * as THREE from 'three'
import React, { Suspense } from 'react'
import Lights from './Lights'
import Iphone  from './Iphone'

function ModelView({index, groupRef, setRotationState,gsapType, controlRef,setRotationSize, size, item}) {
  return (
   <View index={index}
   id={gsapType}
   className={` w-full h-full absolute ${index===2?'right-[-100%]':''}`}
   >
{/* Ambient light */}
    <ambientLight intensity={0.5} />

    <PerspectiveCamera makeDefault position={[0,0,4]} />
    <Lights />

    <OrbitControls 
      makeDefault
      ref={controlRef}
      enableZoom={false}
      enablePan={false}
      rotateSpeed={0.4}
      target={new THREE.Vector3(0,0,0)}
      onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())}
    />
    
    <group ref={groupRef} position={[0,0,0]} name={`${index===1?'small':'large'}`}>
    <Suspense fallback={null}>
    <Iphone 
      scale ={index === 1 ? [15,15,15]:[17,17,17]}
      item={item}
      size={size}
    /> 
    </Suspense>
    </group>
   </View>
  )
}

export default ModelView