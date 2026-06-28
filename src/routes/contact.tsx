import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/site/layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Adeniji Taiwo Emmanuel" },
      { name: "description", content: "Get in touch with Adeniji Taiwo Emmanuel for collaboration, ministry, or speaking." },
      { property: "og:title", content: "Contact — Adeniji Taiwo Emmanuel" },
      { property: "og:description", content: "Reach out for collaboration, ministry, or conversation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <SectionHeader kicker="Contact" title="Let's start a" accent="conversation." subtitle="Open to collaboration, ministry, mentorship, and the occasional good idea." />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 rounded-2xl border border-white/10 bg-surface-elev p-6"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Email</div>
            <a href="mailto:adenijitaiwoemmanuel@gmail.com" className="mt-1 flex items-center gap-2 font-display text-lg hover:text-gold">
              <Mail className="h-4 w-4" /> adenijitaiwoemmanuel@gmail.com
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Location</div>
            <div className="mt-1 flex items-center gap-2 font-display text-lg">
              <MapPin className="h-4 w-4" /> Benin City, Nigeria
            </div>
          </div>
          <div className="rounded-xl border border-electric/20 bg-electric/5 p-4 text-sm text-foreground/80">
            "Whatever your hand finds to do, do it with all your might." — Ecclesiastes 9:10
          </div>
        </motion.aside>
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")}`);
            const subject = encodeURIComponent(`From ATE site: ${f.get("name")}`);
            window.location.href = `mailto:adenijitaiwoemmanuel@gmail.com?subject=${subject}&body=${body}`;
          }}
          className="space-y-4 rounded-2xl border border-white/10 bg-surface-elev p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Name</span>
              <input required name="name" className="mt-2 w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2 text-sm outline-none focus:border-gold/60" />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</span>
              <input required type="email" name="email" className="mt-2 w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2 text-sm outline-none focus:border-gold/60" />
            </label>
          </div>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</span>
            <textarea required name="message" rows={6} className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-background/60 px-3 py-2 text-sm outline-none focus:border-gold/60" />
          </label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background transition hover:shadow-[0_0_24px_-4px_rgb(212,175,55,0.6)]">
            Send message <Send className="h-3.5 w-3.5" />
          </button>
        </motion.form>
      </div>
    </PageShell>
  );
}