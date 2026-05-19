import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AnimatedProgress } from "@/components/common/AnimatedProgress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainerFast } from "@/animations/variants";

function SkillBar({ skill, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ x: 4 }}
      className="group"
    >
      <div className="flex justify-between text-sm mb-2">
        <motion.span
          animate={{ color: hovered ? "var(--color-accent-text)" : "var(--color-foreground)" }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
        </motion.span>
        <span className="text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <AnimatedProgress value={skill.level} delay={delay * 0.5} />
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Technologies"
          description="A comprehensive toolkit spanning full-stack development, cloud deployment, and collaborative delivery."
        />

        <Tabs defaultValue={skillCategories[0].id} className="w-full">
          <TabsList className="flex flex-nowrap sm:flex-wrap overflow-x-auto scrollbar-hide gap-1 w-full justify-start mb-6 sm:mb-8 pb-1">
            {skillCategories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="text-xs sm:text-sm">
                {cat.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid md:grid-cols-2 gap-6 sm:gap-8 glass rounded-2xl p-4 sm:p-6 md:p-8"
                >
                  <motion.div
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-5"
                  >
                    {cat.skills.slice(0, Math.ceil(cat.skills.length / 2)).map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} delay={i} />
                    ))}
                  </motion.div>
                  <motion.div
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-5"
                  >
                    {cat.skills.slice(Math.ceil(cat.skills.length / 2)).map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} delay={i} />
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
