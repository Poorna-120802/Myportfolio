import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile, summary } from "@/data/profile";
import { ProfileShowcase } from "@/components/hero/ProfileShowcase";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-20 sm:pt-24 pb-20 sm:pb-16 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 noise-overlay opacity-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="section-padding w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center"
        >
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.h1
              variants={fadeInUp}
              custom={0}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] mb-3 sm:mb-4"
            >
              <span className="text-gradient-subtle block">Hi, I&apos;m</span>
              <motion.span
                className="text-gradient block mt-1 break-words gradient-shimmer"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                {profile.fullName}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-lg sm:text-xl md:text-2xl text-secondary mb-4 sm:mb-6"
            >
              I&apos;m a{" "}
              <motion.span
                className="text-gradient font-medium inline-block"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Full Stack Developer
              </motion.span>
            </motion.p>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8"
            >
              {profile.tagline}. {summary.slice(0, 160)}…
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={3}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-8 sm:mb-10"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
                <a href={profile.resumeUrl} download>
                  <Download /> Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Send /> Contact Me
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={4}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl glass hover:glow-border"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            custom={1}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <ProfileShowcase />
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, delay: 1.2 },
          }}
          aria-label="Scroll to about"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
