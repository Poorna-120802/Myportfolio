import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { footerLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { BrandLogo } from "@/components/common/BrandLogo";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t theme-border-subtle mt-8">
      <div className="section-padding pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <BrandLogo variant="full" size="lg" className="mb-4" />
            <p className="font-serif text-xl text-gradient-subtle mb-1">{profile.fullName}</p>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              {profile.title} crafting scalable web applications with Java, React & AWS.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent-soft transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass ui-ghost-hover hover:text-accent-soft transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t theme-border-subtle text-sm text-muted-foreground">
          <p>© {year} {profile.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400" /> React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
