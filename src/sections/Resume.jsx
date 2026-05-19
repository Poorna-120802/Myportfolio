import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Resume"
          title="Professional snapshot"
          description="Download my full resume or preview key highlights from my career journey."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass rounded-2xl overflow-hidden glow-border"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="w-14 h-14 rounded-2xl bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] flex items-center justify-center mb-6">
                <FileText className="h-7 w-7 text-accent-soft" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">{profile.fullName}</h3>
              <p className="text-muted-foreground mb-2">{profile.title}</p>
              <p className="text-sm text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Java Full Stack Developer with experience at Innomax IT Solutions and Amazon.
                Specialized in React, Spring Boot, REST APIs, and AWS deployment.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href={profile.resumeUrl} download>
                    <Download /> Download PDF
                  </a>
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Eye /> Preview
                  </a>
                </Button>
              </div>
            </div>
            <div className="resume-panel p-6 sm:p-8 md:p-10 border-t md:border-t-0 md:border-l theme-border-subtle">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                Highlights
              </p>
              <ul className="space-y-4">
                {[
                  "Ongole Bulls Investment Platform — 10 role dashboards",
                  "AWS S3, CloudFront, EC2, RDS deployments",
                  "BSE integration & Spring Boot REST APIs",
                  "Java Full Stack & Oracle SQL certifications",
                  "HackerRank Gold (Java) & Silver (C)",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="text-accent-soft shrink-0">✓</span>
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 sm:mt-8 text-xs text-muted-foreground">
                Place your resume PDF at{" "}
                <code className="text-accent-soft">public/resume.pdf</code>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
