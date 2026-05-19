import { motion } from "framer-motion";
import { Target, Zap, Compass } from "lucide-react";
import { about, stats, education } from "@/data/profile";
import { timeline } from "@/data/experience";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StatCounter } from "@/components/common/StatCounter";
import { Reveal } from "@/components/common/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, listItem } from "@/animations/variants";

export function About() {
  const cards = [
    { icon: Compass, title: "What I Do", text: about.whatIDo },
    { icon: Target, title: "Mission", text: about.mission },
    { icon: Zap, title: "Strengths", text: about.strengths.join(" • ") },
  ];

  return (
    <section id="about" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting software with purpose"
          description={about.journey}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {stats.map((s, i) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              index={i}
            />
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {cards.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
                <Card className="h-full hover:glow-border group">
                  <CardContent className="p-6 pt-6">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-accent-soft" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal direction="left">
            <h3 className="font-serif text-2xl mb-4">Career Goals</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{about.goals}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{about.passion}</p>
            <h3 className="font-serif text-2xl mb-4">Interests</h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2.5"
            >
              {about.interests.map((interest, i) => (
                <motion.li
                  key={interest}
                  variants={listItem}
                  custom={i}
                  className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="text-accent-soft shrink-0 mt-0.5">•</span>
                  <span>{interest}</span>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <h3 className="font-serif text-2xl mb-6">Journey Timeline</h3>
            <div className="relative pl-6 border-l border-violet-500/30 space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year + item.event}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <motion.span
                    className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 ring-4 ring-background"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 300 }}
                  />
                  <span className="text-xs font-mono text-accent-soft">{item.year}</span>
                  <p className="text-sm mt-1">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.1} className="mt-16">
          <h3 className="font-serif text-2xl mb-6 text-center">Education</h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            {education.map((edu, i) => (
              <motion.div key={edu.degree} variants={fadeInUp} custom={i}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Card className="h-full hover:glow-border transition-shadow">
                    <CardContent className="p-6">
                      <p className="text-xs font-mono text-accent-soft mb-2">{edu.period}</p>
                      <h4 className="font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
                      <p className="text-sm text-[var(--color-accent-text-2)]">GPA: {edu.gpa}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
