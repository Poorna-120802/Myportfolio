import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";

function ExperienceCard({ item, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      <span className="absolute left-0 md:left-2 top-6 w-4 h-4 rounded-full border-2 border-violet-500 bg-background z-10" />
      <div className="absolute left-[7px] md:left-[15px] top-10 bottom-0 w-px bg-gradient-to-b from-violet-500/50 to-transparent last:hidden" />

      <div
        className={cn(
          "glass rounded-2xl overflow-hidden transition-all duration-300",
          expanded && "glow-border"
        )}
      >
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-4 theme-surface-hover hover:bg-[var(--color-surface)] transition-colors"
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge>{item.type}</Badge>
              <span className="text-xs text-muted font-mono">{item.period}</span>
            </div>
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="text-accent-soft font-medium">{item.company}</p>
            <p className="flex items-center gap-1 text-sm text-muted mt-1">
              <MapPin className="h-3.5 w-3.5" /> {item.location}
            </p>
            <p className="flex items-center gap-1 text-sm text-[var(--color-accent-text-2)] mt-2">
              <Briefcase className="h-3.5 w-3.5" /> {item.project}
            </p>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-muted shrink-0 transition-transform duration-300",
              expanded && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-6 pb-6 pt-0 space-y-6 border-t theme-border-subtle">
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>

                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent-soft">Responsibilities</h4>
                  <ul className="space-y-1.5">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-muted flex gap-2">
                        <span className="text-violet-400 mt-1.5">▸</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 text-[var(--color-accent-text-2)]">Achievements</h4>
                  <ul className="space-y-1.5">
                    {item.achievements.map((a) => (
                      <li key={a} className="text-sm text-muted flex gap-2">
                        <span className="text-cyan-400">★</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {item.deployment?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Deployment</h4>
                    <ul className="space-y-1">
                      {item.deployment.map((d) => (
                        <li key={d} className="text-sm text-muted">• {d}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built impact"
          description="From Amazon operations automation to production fintech platforms—real-world delivery across the stack."
        />
        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
