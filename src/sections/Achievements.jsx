import { motion } from "framer-motion";
import { Award, Trophy, Medal, Rocket, Briefcase } from "lucide-react";
import { certifications, achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  rocket: Rocket,
  briefcase: Briefcase,
  award: Award,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & Certifications"
          description="Validated skills through certifications and competitive programming excellence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 mb-12"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400 } }}
            >
              <Card className="h-full hover:glow-border group">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="h-7 w-7 text-accent-soft" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-accent-soft mb-1">{cert.year}</p>
                    <h3 className="font-semibold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted">{cert.issuer}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 22 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:glow-border transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl glass flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[var(--color-accent-text-2)]" />
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
