import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, PenLine } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/site/layout";
import { WRITINGS } from "@/components/site/writings-content";

export const Route = createFileRoute("/writings")({
  head: () => ({
    meta: [
      { title: "Writings — Adeniji Taiwo Emmanuel" },
      { name: "description", content: "Long-form essays on faith, cybersecurity, personal growth, and ambition." },
      { property: "og:title", content: "Writings — Adeniji Taiwo Emmanuel" },
      { property: "og:description", content: "Long-form essays on faith, cybersecurity, personal growth, and ambition." },
    ],
  }),
  component: WritingsLayout,
});

function WritingsLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = pathname === "/writings" || pathname === "/writings/";
  if (!isIndex) return <Outlet />;
  return (
    <PageShell>
      <SectionHeader
        kicker="Writings"
        title="Essays from"
        accent="my desk."
        subtitle="I'm a writer at heart. These are the longer pieces — thoughts on faith, cybersecurity, growth, and ambition."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {WRITINGS.map((w, i) => (
          <motion.div
            key={w.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              to="/writings/$slug"
              params={{ slug: w.slug }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-elev transition hover:border-gold/40 hover:-translate-y-1"
            >
              {w.image && (
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img src={w.image.url} alt={w.image.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  <PenLine className="h-3 w-3" /> {w.kicker} · {w.date}
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold leading-snug">{w.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-electric transition group-hover:gap-3">
                  Read essay <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}