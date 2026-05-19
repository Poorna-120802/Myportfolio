import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { springPop } from "@/animations/variants";

export function StatCounter({ value, suffix = "", label, index = 0 }) {
  const { ref, count } = useCounter(value);

  return (
    <motion.div
      ref={ref}
      variants={springPop}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }}
      className="text-center p-4 sm:p-6 glass rounded-2xl hover:glow-border transition-shadow cursor-default"
    >
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient tabular-nums"
        key={count}
        initial={{ opacity: 0.6, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {count}
        {suffix}
      </motion.div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}
