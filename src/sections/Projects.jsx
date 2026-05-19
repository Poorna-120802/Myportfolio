import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/utils/cn";

function ProjectModal({ project, open, onOpenChange }) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <Section label="Problem" text={project.problem} />
          <Section label="Features" list={project.features} />
          <Section label="Challenges Solved" list={project.challenges} />
          <Section label="My Contribution" text={project.contribution} />
          <Section label="Architecture" list={project.architecture} />
          <div>
            <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <Badge key={t} variant="cyan">{t}</Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            {project.github && (
              <Button variant="secondary" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
            )}
            {project.live && (
              <Button asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ label, text, list }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-violet-200 mb-2">{label}</h4>
      {text && <p className="text-sm text-muted leading-relaxed">{text}</p>}
      {list && (
        <ul className="space-y-1">
          {list.map((item) => (
            <li key={item} className="text-sm text-muted flex gap-2">
              <span className="text-violet-400">▸</span> {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 22 } }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="glass rounded-2xl overflow-hidden h-full hover:glow-border transition-all duration-300">
        <div className={cn("h-48 bg-gradient-to-br relative overflow-hidden", project.gradient)}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-5xl project-banner-letter group-hover:scale-110 transition-transform duration-500">
              {project.title.charAt(0)}
            </span>
          </div>
          {project.featured && (
            <Badge className="absolute top-4 left-4">Featured</Badge>
          )}
          <div className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-soft transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted line-clamp-2 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((t) => (
              <Badge key={t} variant="secondary" className="text-[10px]">
                {t}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="outline" className="text-[10px]">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects that define my craft"
          description="From enterprise investment platforms to full-stack applications—deep dives into problem-solving, architecture, and delivery."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300",
                filter === cat.id ? "text-white" : "glass text-muted-foreground hover:text-foreground"
              )}
            >
              {filter === cat.id && (
                <motion.span
                  layoutId="projectFilterPill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 shadow-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectModal
          project={selected}
          open={!!selected}
          onOpenChange={(open) => !open && setSelected(null)}
        />
      </div>
    </section>
  );
}
