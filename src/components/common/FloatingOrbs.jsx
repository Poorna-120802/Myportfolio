import { motion } from "framer-motion";

const orbs = [
  { size: 320, x: "10%", y: "20%", color: "rgba(167,139,250,0.15)", colorLight: "rgba(124,58,237,0.12)", duration: 22 },
  { size: 240, x: "80%", y: "15%", color: "rgba(34,211,238,0.12)", colorLight: "rgba(8,145,178,0.1)", duration: 18 },
  { size: 200, x: "70%", y: "70%", color: "rgba(244,114,182,0.1)", colorLight: "rgba(219,39,119,0.08)", duration: 25 },
  { size: 160, x: "15%", y: "75%", color: "rgba(129,140,248,0.12)", colorLight: "rgba(99,102,241,0.1)", duration: 20 },
];

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl orb-blob"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            ["--orb-dark"]: orb.color,
            ["--orb-light"]: orb.colorLight,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
