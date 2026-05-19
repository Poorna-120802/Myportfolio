import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

const stackItems = [
  { name: "Java", color: "#f97316" },
  { name: "React", color: "#22d3ee" },
  { name: "AWS", color: "#f59e0b" },
];

export function ProfileShowcase() {
  const initial = profile.fullName?.charAt(0) || "Y";
  const hasImage = profile.avatarUrl;

  return (
    <motion.div
      className="profile-showcase relative mx-auto w-full max-w-[22rem] sm:max-w-none"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow */}
      <motion.div
        className="profile-showcase-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Decorative tilted frames */}
      <motion.div
        className="profile-deco profile-deco-a"
        animate={{ rotate: [12, 16, 12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="profile-deco profile-deco-b"
        animate={{ rotate: [-8, -12, -8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      {/* Orbit ring */}
      <motion.div
        className="profile-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      {/* Main card */}
      <motion.div
        className="profile-card relative mx-auto aspect-square w-56 sm:w-72 md:w-80 lg:w-[22rem]"
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        <div className="profile-card-border" aria-hidden />
        <div className="profile-card-inner relative h-full w-full overflow-hidden rounded-[1.65rem] sm:rounded-[1.85rem]">
          <div className="profile-card-mesh absolute inset-0" aria-hidden />
          <div className="profile-card-grid absolute inset-0 opacity-[0.35]" aria-hidden />
          <div className="profile-card-shine absolute inset-0 pointer-events-none" aria-hidden />

          <div className="relative z-10 flex h-full w-full items-center justify-center p-6">
            {hasImage ? (
              <img
                src={profile.avatarUrl}
                alt={profile.fullName}
                className="h-full w-full object-cover rounded-[1.25rem]"
              />
            ) : (
              <motion.span
                className="profile-initial font-serif select-none"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 180, damping: 16 }}
              >
                {initial}
              </motion.span>
            )}
          </div>

          <div className="profile-card-vignette absolute inset-0 pointer-events-none" aria-hidden />
        </div>
      </motion.div>

      {/* Stack badge */}
      <motion.div
        className="profile-badge profile-badge-stack"
        initial={{ opacity: 0, y: -12, x: 12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/15">
              <Code2 className="h-3.5 w-3.5 text-[var(--color-accent-text-2)]" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {stackItems.map((tech) => (
              <span key={tech.name} className="profile-tech-chip">
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: tech.color }} />
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Company badge */}
      <motion.div
        className="profile-badge profile-badge-work"
        initial={{ opacity: 0, y: 12, x: -12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15">
              <Briefcase className="h-3.5 w-3.5 text-accent-soft" />
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground">Currently at</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold leading-snug text-foreground pl-0 sm:pl-9">
            Innomax IT Solutions
          </p>
        </motion.div>
      </motion.div>

      {/* Status under card — mobile-friendly anchor */}
      <motion.div
        className="profile-status-pill mx-auto mt-5 sm:mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
      >
        <span className="profile-status-dot" />
        <span>{profile.availability}</span>
      </motion.div>
    </motion.div>
  );
}
