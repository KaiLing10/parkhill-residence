import React from 'react'
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import scene from '../../assets/scene.jpg'

// https://www.npmjs.com/package/aframe-react

export default function Scene1() {
  return (
    <Scene>
    <Entity
      primitive="a-sky"
      src={scene}
      alt='vr'>
    </Entity>
     

    <Entity
      text={{
        value: 'Hello, World!',
        align: 'center',
        color: 'black',
        width: 5,
      }}
      position={{ x: 0, y: 2, z: -5 }}
    />

  </Scene>
  )
}
