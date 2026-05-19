import { motion } from "framer-motion";
import { profile } from "@/data/profile";

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
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-violet-500/30">
          {profile.fullName.charAt(0)}
        </div>
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
