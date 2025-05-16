"use client";

import { motion, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

const HTwoAnimateIn = ({ children }) => {
  let alreadyRun = false;
  const ref = useRef(null);
  const viewPort = alreadyRun
    ? false
    : useInView(ref, {
        amount: 0.5,
        once: true,
      });

  useEffect(() => {
    if (!alreadyRun) {
      alreadyRun = true;
    }
  }, [viewPort]);

  //   to easily reuse the animation props
  const AnimationProps = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: -2 },
  };

  return (
    <motion.h2
      ref={ref}
      arial-hidden="true"
      initial="initial"
      animate={viewPort ? "animate" : "initial"}
      transition={{ staggerChildren: 0.1 }}
    >
      {/* render words */}
      {children.split(" ").map((word, index) => (
        <React.Fragment key={index}>
          {/* split and animate individual text  characters */}
          {word.split("").map((letter, index) => (
            <motion.span
              className="inline-block"
              key={index}
              variants={AnimationProps}
            >
              {letter}
            </motion.span>
          ))}
          {/* add space between words */}
          <motion.span
            className="inline-block"
            key={index}
            variants={AnimationProps}
          >
            &nbsp;
          </motion.span>
        </React.Fragment>
      ))}
    </motion.h2>
  );
};

export default HTwoAnimateIn;
