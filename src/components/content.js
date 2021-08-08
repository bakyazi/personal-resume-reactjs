import React from 'react';
import Particles from 'react-particles-js';
function Content({ children }) {
  return (
    <div className="Content">
      <div className="content-container">
      {children}
      </div>
      <div className="content-bg">
      </div>
      <div className="content-bg-particles">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 15,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "line_linked": {
                "enable": false
              },
              "move": {
                "speed": 1,
                "out_mode": "out"
              },
              "shape": {
                "type": [
                  "image",
                ],
                "image": [
                  {
                    "src": "imgs/svg/java.svg",
                    "height": 20,
                    "width": 23
                  },
                  {
                    "src": "imgs/svg/javascript.svg",
                    "height": 20,
                    "width": 20
                  },
                  {
                    "src": "imgs/svg/python.svg",
                    "height": 20,
                    "width": 20
                  },
                  {
                    "src": "imgs/svg/atomic-structure.svg",
                    "height": 20,
                    "width": 20,
                  }
                ],
              },
              opacity: {
                value: 0.1
              },
              "color": {
                "value": "#CCC"
              },
              "size": {
                "value": 30,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 4,
                  "size_min": 10,
                  "sync": false
                }
              }
            },
            interactivity: {
              detect_on: 'window',
              events: {
                onHover: {
                  mode: ['grab', 'bubble'],
                  enable: true
                }
              },
              modes: {
                grab: {
                  distance: 200
                },
                bubble: {
                  size: 10
                }
              }
            },
            // "fullScreen":{
            //   enable: true,
            //   zIndex: 1
            // },
            "retina_detect": false,
            preset: 'basic',
            "background": {
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            }
          }}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
  );
}

export default Content;
