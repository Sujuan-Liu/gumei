import React from 'react';
import {useSpring, animated, config } from 'react-spring';

const RotateCircle = () => {
  const styles_center_circle = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    config: config.molasses,
  });
  return (
    <animated.svg
      style={{ margin: 20, width: 180, height: 180, overflow: 'hidden', ...styles_center_circle }}
      viewBox="0 0 200 200"
    >
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f6d365"/>
          <stop offset="100%" stop-color="#fda085"/>
        </linearGradient>
      </defs>
        <path d="M 0, 74 C 0, 25.9 25.9, 0 74, 0 S 148, 25.9 148, 74 122.1, 148 74, 148 0, 122.1 0, 74" fill="url(#linear)" transform="rotate(-32,100,100) translate(26 26)"></path>
    </animated.svg>

  );
}

export default RotateCircle;
