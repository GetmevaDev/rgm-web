import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="visible"
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 1, scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};
