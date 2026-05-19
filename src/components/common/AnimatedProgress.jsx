import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

export function AnimatedProgress({ value, className, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn("ui-progress-track relative h-2 w-full overflow-hidden rounded-full", className)}
    >
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
        initial={{ width: reduceMotion ? `${value}%` : "0%" }}
        animate={{ width: isInView || reduceMotion ? `${value}%` : "0%" }}
        transition={{
          duration: reduceMotion ? 0 : 1.1,
          delay: reduceMotion ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}
