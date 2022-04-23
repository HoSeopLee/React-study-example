import React, { useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
export default function Text() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1, color: 'red' },
    from: { opacity: 0.5, color: 'blue' },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.h1 style={props}>hello</animated.h1>;
}
