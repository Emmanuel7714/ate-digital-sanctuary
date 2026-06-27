import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, SectionHeader } from "@/components/site/layout";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Adeniji Taiwo Emmanuel" },
      { name: "description", content: "Selected projects across faith communities, technology, and leadership." },
      { property: "og:title", content: "Projects — Adeniji Taiwo Emmanuel" },
      { property: "og:description", content: "Selected projects across faith, technology, and leadership." },
    ],
  }),
  component: ProjectsPage,
});

const ITEMS = [
  { tag: "Ministry", title: "IN GOD WE TRUST Fellowship", body: "Co-founded an online community for pre-university believers — Scripture study, prayer, and discipleship across WhatsApp." },
  { tag: "Intercession", title: "Nightly Prayer Community (70+)", body: "Built and lead a continent-wide WhatsApp prayer group with believers from across Africa." },
  { tag: "Leadership", title: "A.I.M. — Anglican Intercessory Ministry", body: "Serving as Intercessory Leader within the Anglican Students' Fellowship at the University of Benin." },
  { tag: "Tech", title: "Personal Digital HQ", body: "This very site — a place that reflects faith, profession, leadership, and journey. Built with React, TanStack Router, Tailwind." },
];

function ProjectsPage() {
  return (
    <PageShell>
      <SectionHeader kicker="Projects" title="Things I'm" accent="building." subtitle="A mix of ministry, leadership, and technology initiatives — works of faith and works of craft." />
      <div className="grid gap-5 md:grid-cols-2">
        {ITEMS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elev p-6 transition hover:border-gold/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{p.tag}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-gold" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}