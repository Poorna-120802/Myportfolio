import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

export function GitHubActivity() {
  const username =
    profile.github.replace(/https?:\/\/(www\.)?github\.com\/?/, "").replace(/\/$/, "") ||
    "yourusername";

  return (
    <section id="github" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub Activity"
          description="Consistent contributions and project work. Connect with me on GitHub."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[var(--color-surface)] border theme-border-subtle">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">@{username || "yourusername"}</p>
                <p className="text-sm text-muted-foreground">Contribution graph</p>
              </div>
            </div>
            <Button variant="secondary" className="w-full sm:w-auto" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                View Profile <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden border theme-border theme-panel p-3 sm:p-4 min-h-[120px] sm:min-h-[140px] flex items-center justify-center">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt="GitHub contribution chart"
              className="w-full max-w-3xl opacity-90 dark:opacity-90"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <p className="hidden text-sm text-muted-foreground text-center px-4">
              Update <code className="text-accent-soft">profile.github</code> in{" "}
              <code className="text-accent-soft">src/data/profile.js</code> with your GitHub URL.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
