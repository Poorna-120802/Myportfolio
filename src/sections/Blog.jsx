import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const placeholderPosts = [
  {
    id: 1,
    title: "Building Role-Based Dashboards at Scale",
    excerpt: "Lessons from shipping 10+ dashboards on an investment platform with React and Spring Boot.",
    date: "Coming Soon",
    tag: "Engineering",
  },
  {
    id: 2,
    title: "AWS Deployment Playbook for Full-Stack Apps",
    excerpt: "S3, CloudFront, EC2, and RDS — a practical guide from production redeployments.",
    date: "Coming Soon",
    tag: "Cloud",
  },
  {
    id: 3,
    title: "From ECE to Full-Stack Development",
    excerpt: "My transition journey, certifications, and what helped me break into software engineering.",
    date: "Coming Soon",
    tag: "Career",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Blog"
          title="Thoughts & insights"
          description="Articles on engineering, cloud, and career growth — publishing soon."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {placeholderPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full opacity-80 hover:opacity-100 hover:glow-border transition-all cursor-default">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4">{post.tag}</Badge>
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-accent-soft" />
                  </div>
                  <h3 className="font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>
                  <p className="flex items-center gap-1 text-xs text-muted">
                    <Clock className="h-3 w-3" /> {post.date}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
