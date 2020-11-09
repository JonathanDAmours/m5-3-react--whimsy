import React from "react";
import { useSpring, animated } from "react-spring";

export const ScaleIn = ({ children }) => {
  const style = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 170,
      friction: 10,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};
