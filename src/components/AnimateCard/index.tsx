import React, { useRef, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import styles from './styles.module.css'

const calc = (x:number, y:number, rect:{top:number, left: number, height:number, width: number}) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4
];
const trans = (x:number, y:number, s:number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


const AnimateCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({ xys, config: config.wobbly });
  return (
    <div className={styles['ccard-main']} ref={ref}>
      <animated.div
        className={styles.ccard}
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            set(calc(e.clientX, e.clientY, rect));
          }
        }}
      />
    </div>
  )
}

export default AnimateCard;
