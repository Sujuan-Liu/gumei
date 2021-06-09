import React, {useState} from 'react';
import {useSpring, useTransition, animated, config } from 'react-spring';
import ahiru from '../assets/images/ahiru.jpg';
import kangaroo from '../assets/images/kangaroo.jpg';
import risu from '../assets/images/risu.jpg';
import swan from '../assets/images/swan.jpg';
import usagi from '../assets/images/usagi.jpg';
import wani from '../assets/images/wani.jpg';
// import title from '../assets/images/title.png';

const AboutPage = () => {
  const IMG_TRANS = [
    {
      img: <img src={ahiru} alt="suzy-field-ahiru" height="38" />,
      op: {range:[0.75, 1], output:[0, 1]},
      trans: {range:[0.75, 1], output:[-5, 1]}
    },{
      img: <img src={kangaroo} alt="suzy-field-kangaroo" height="38" />,
      op: {range:[0.25, 0.5], output:[0, 1]},
      trans: {range:[0.25, 0.5], output:[-5, 1]}
    },{
      img: <img src={usagi} alt="suzy-field-usagi" height="38" />,
      op: {range:[0.25, 0.55], output:[0, 1]},
      trans: {range:[0.25, 0.55], output:[-5, 1]}
    },{
      img: <img src={risu} alt="suzy-field-risu" height="38" />,
      op: {range:[0, 0.25], output:[0, 1]},
      trans: {range:[0, 0.25], output:[-5, 1]}
    },{
      img: <img src={swan} alt="suzy-field-swan" height="38" />,
      op: {range:[0.55, 0.75], output:[0, 1]},
      trans: {range:[0.55, 0.75], output:[-5, 1]}
    },{
      img: <img src={wani} alt="suzy-field-wani" height="38" />,
      op: {range:[0.5, 0.75], output:[0, 1]},
      trans: {range:[0.5, 0.75], output:[-5, 1]}
    }
  ];
  const [title] = useState('About');
  const [logos] = useState(IMG_TRANS);
  const styles_center_circle = useSpring({
    // loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    config: config.molasses,
  });

  const transitions = useTransition(logos, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
  });

  return (
    <div>
      <header>
        {transitions(({ opacity }, item) => (
          <animated.div
            style={{
              opacity: opacity.to(item.op),
              transform: opacity
                .to(item.trans)
                .to(y => `translate3d(${y}px,0,0)`),
            }}>
            {item.img}
          </animated.div>
        ))}
      </header>
      <div className="main-logo">
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
        <p>{title}</p>
      </div>
    </div>
  );
};

export default AboutPage;
