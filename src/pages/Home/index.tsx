import React from 'react';
import AnimateCard from '../../components/AnimateCard';
import RotateCircle from '../../components/RotateCircle';
import ChainPolygon from '../../components/ChainPolygon';
import ahiru from '../../assets/images/ahiru.jpg';
import {useSpring, animated, config } from 'react-spring';

import './index.less';

const Home = () => {

  const transitions = useSpring({
    from: { opacity: 0.2, justifyContent: 'center' },
    to: { opacity: 1, justifyContent: 'space-between' },
    delay: 1500,
    config: config.slow,
  });
  return (
    <div>
      <animated.header style={transitions}>
        <h3><img src={ahiru} alt="logo" width="20" /><span>橘域</span></h3>
        <div className="slogan">
          If the day and the night make one joyful, one is successful.
        </div>
      </animated.header>
      <div className="main-logo">
        <AnimateCard />
        <RotateCircle />
        <ChainPolygon />
      </div>
    </div>
  );
};

export default Home;
