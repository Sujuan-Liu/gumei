import React, { useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import styles from './styles.module.css';

type RotateTitleProps = {
  title: {cn: string, en: string},
};

const RotateTitle = (props: RotateTitleProps) => {
  const {cn, en} = props.title;
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <a.div
        className={styles.c}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >
        {cn}
      </a.div>
      <a.div
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
        {en}
      </a.div>
    </div>
  );
};

export default RotateTitle;
