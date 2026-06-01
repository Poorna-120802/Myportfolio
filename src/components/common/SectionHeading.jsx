import { motion, useReducedMotion } from "framer-motion";
import { headingStagger, headingItem } from "@/animations/variants";
import { cn } from "@/utils/cn";

export function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reduceMotion ? undefined : headingStagger}
      className={cn(
        "mb-8 sm:mb-10 md:mb-12",
        align === "center" && "text-center mx-auto max-w-2xl",
        align === "left" && "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={reduceMotion ? undefined : headingItem}
          className="inline-block mb-3 text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent-soft"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={reduceMotion ? undefined : headingItem}
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient-subtle mb-3 sm:mb-4 leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={reduceMotion ? undefined : headingItem}
          className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
