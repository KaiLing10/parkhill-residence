import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const NumberCountAnimation = ({ value }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // Duration of the animation in milliseconds
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const startValueRef = useRef(0);

  useEffect(() => {
    if (inView) {
      const endValue = parseInt(value);
      const increment = Math.ceil(endValue / (duration / 10)); // Calculate increment based on duration

      const counter = setInterval(() => {
        startValueRef.current += increment;
        setCount(startValueRef.current);
        if (startValueRef.current >= endValue) {
          clearInterval(counter);
        }
      }, 10); // Increment the count every 10 milliseconds

      return () => {
        clearInterval(counter);
      };
    }
  }, [inView, value]);

  return (
    <motion.span ref={ref}>{count}</motion.span>
  );
};

export default NumberCountAnimation;
