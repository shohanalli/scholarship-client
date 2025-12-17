import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CountNumber = ({ value, duration = 2 }) => {
  const { ref, inView } = useInView();
  
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, latest => Math.floor(latest));

  React.useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration, ease: "easeOut" });
      return controls.stop;
    } else {
      motionValue.set(0);
    }
  }, [inView, value, duration, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default CountNumber;