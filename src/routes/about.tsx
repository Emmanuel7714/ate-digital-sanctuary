import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Cross, Shield, Users, GraduationCap, Heart, Quote } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/site/layout";
import { ABOUT_TOPICS } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Adeniji Taiwo Emmanuel" },
      { name: "description", content: "Five lenses that frame who I am: Faith, Cybersecurity, Leadership, Education, Personal Growth." },
      { property: "og:title", content: "About — Adeniji Taiwo Emmanuel" },
      { property: "og:description", content: "The story behind ATE — Faith, Cybersecurity, Leadership, Education, Personal Growth." },
    ],
  }),
  component: AboutLayout,
});

const ICONS: Record<string, React.ReactNode> = {
  faith: <Cross className="h-5 w-5" />,
  cybersecurity: <Shield className="h-5 w-5" />,
  leadership: <Users className="h-5 w-5" />,
  education: <GraduationCap className="h-5 w-5" />,
  "personal-growth": <Heart className="h-5 w-5" />,
};

function AboutLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/about" || pathname === "/about/";
  if (!isIndex) return <Outlet />;
  return (
    <PageShell>
      <SectionHeader
        kicker="About"
        title="The story behind"
        accent="ATE."
        subtitle="Five lenses that, together, frame who I am and the work I do. Tap any card to read the full story."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ABOUT_TOPICS.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              to="/about/$topic"
              params={{ topic: c.slug }}
              className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-surface-elev p-6 transition hover:border-gold/40 hover:-translate-y-1"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">{ICONS[c.slug]}</div>
              <h2 className="font-display text-xl font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-electric transition group-hover:gap-3">
                Read full story <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          </motion.div>
        ))}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative overflow-hidden rounded-2xl border border-electric/30 bg-gradient-to-br from-electric/15 via-electric/5 to-transparent p-6"
        >
          <Quote className="h-6 w-6 text-gold" />
          <p className="mt-4 font-display text-lg leading-snug">
            "I am a believer whose faith in Christ defines my identity."
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">— Personal Statement</p>
        </motion.article>
      </div>
    </PageShell>
  );
}