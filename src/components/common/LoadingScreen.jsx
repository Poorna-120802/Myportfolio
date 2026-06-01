import { motion } from "framer-motion";
import { BrandLogo } from "@/components/common/BrandLogo";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <BrandLogo variant="mark" size="lg" className="mx-auto mb-6 drop-shadow-[0_8px_24px_rgba(167,139,250,0.35)]" />
        <motion.p
          className="text-sm font-mono text-muted uppercase tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading portfolio
        </motion.p>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
