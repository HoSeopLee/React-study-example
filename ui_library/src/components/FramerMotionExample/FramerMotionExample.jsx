import React from 'react';
import { motion } from 'framer-motion';

export default function FramerMotionExample() {
  return (
    <>
      {/* <motion.button
        style={{ background: 'red', width: 100, height: 100 }}
        animate={{ scale: 2 }}
        transition={{ duration: 0.5 }}
      /> */}
      <motion.div
        style={{ background: 'red', width: 100, height: 100 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      />
    </>
  );
}
