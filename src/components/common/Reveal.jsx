import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

const directions = {
  up: { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -36 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 36 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 16 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  margin = "-60px",
  as = "motion.div",
}) {
  const reduceMotion = useReducedMotion();
  const variants = directions[direction] || directions.up;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const Comp = motion.div;

  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Comp>
  );
}
