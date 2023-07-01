import React, { useEffect, useState } from 'react';

// import AFRAME from 'aframe';
import { Entity, Scene } from 'aframe-react';
import scene from '../../assets/vrtour/scene.jpg';
import iconArrow from '../../assets/vrtour/arrow.png';
import { Helmet } from 'react-helmet';

export default function Scene1({ navigateToScene }) {

  useEffect(() => {

    if (AFRAME.components["log"]) {
      delete AFRAME.components["log"];
    }

    // Custom component registration
    AFRAME.registerComponent('log', {
      schema: {
        id: {type: 'number'}
      },

      init: function () {
        console.log('Hello, World!');
        console.log(this.data);
        this.el.addEventListener("click", () => {
          alert('TEST TEST WHY IT DOES NOT WORK WHYYYYYYYYYYYYYYYYYYYYYYYYY');
        });
        // this.el.addEventListener("click", () => handleClickTravel(this.data));
        // const roomNo = this.data;
        // this.el.addEventListener('click', function () {
        //   console.log('kkk');
        //   navigateToScene(`scene${roomNo}`);
        // });
      },

      //   return () => {
      //   delete AFRAME.components['link-control'];
      // };
    })

    const handleClickTravel = (data) => {
      console.log("handleclick")
      console.log(data.id)
      // navigateToScene('scene2');
    };
    }, []);



    return (
      
      <Scene loading-screen="backgroundColor: #ffc83d" cursor="rayOrigin: mouse" raycaster="objects: .clickable">
        <Helmet>
        <script src="https://aframe.io/releases/1.4.0/aframe.min.js" async></script>
      </Helmet>
        <Entity
          id="testBox"
          position="0 1.6 -4"
          rotation="0 180 0"
          scale="2 2 2"
          geometry={{
            primitive: 'box',
          }}
          material={{
            color: 'red',
          }}

          class="clickable"
          log={`id:${2}`}

        // onClick={handleClickTravel}
        // link-control={2} 
        ></Entity>

        <Entity primitive='a-sky' src={scene} rotation="0 90 0" />
        {/* <Camera
        <Entity
          primitive="a-cursor"
          cursor={{ fuse: true }}
          raycaster={{ objects: '.clickable' }}
        />
      </Camera> */}
      </Scene>
    );
  }
