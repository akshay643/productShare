"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const AnimatedBackground = () => {
  const [gradientColor, setGradientColor] = useState(getRandomColor());
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientColor(getRandomColor());
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(intervalId);
  }, []); // Run once on mount

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "-99999999",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `linear-gradient(90deg, ${gradientColor} 0%, rgba(248,248,249,1) 100%);`,
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
