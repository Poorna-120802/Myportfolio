import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // Email integration ready: wire to EmailJS, Formspree, or your API
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-padding">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project, role, or collaboration in mind? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-10 max-w-6xl mx-auto">
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { delay: i * 0.08 } },
                }}
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 400 } }}
                className={cn(
                  "flex items-start gap-4 p-5 glass rounded-2xl hover:glow-border transition-all",
                  !href && "pointer-events-none"
                )}
              >
                <div className="p-3 rounded-xl bg-violet-500/10">
                  <Icon className="h-5 w-5 text-accent-soft" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-medium mt-1">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2"
                  placeholder="you@email.com"
                />
                {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="mt-2"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitted}>
              {submitted ? (
                <>
                  <CheckCircle /> Message Sent!
                </>
              ) : (
                <>
                  <Send /> Send Message
                </>
              )}
            </Button>
            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-emerald-400"
                >
                  Thank you! I&apos;ll get back to you soon. (Wire to EmailJS/Formspree for production.)
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
