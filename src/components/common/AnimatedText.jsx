import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function AnimatedText({ words, className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`relative inline-flex overflow-hidden h-[1.2em] align-bottom ${className || ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-medium"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
