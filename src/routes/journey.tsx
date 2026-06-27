import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, SectionHeader } from "@/components/site/layout";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — Adeniji Taiwo Emmanuel" },
      { name: "description", content: "Milestones from salvation, university, leadership, and projects that shape who I am." },
      { property: "og:title", content: "Journey — Adeniji Taiwo Emmanuel" },
      { property: "og:description", content: "A timeline of spiritual, academic, and professional milestones." },
    ],
  }),
  component: JourneyPage,
});

const ITEMS = [
  { tag: "Faith", year: "2024", title: "Salvation — surrendered my life to Christ", body: "The defining moment — identity, purpose, and direction redefined by grace at a Methodist campus vigil." },
  { tag: "Ministry", year: "2024", title: "Started \"IN GOD WE TRUST\" fellowship", body: "Online night meetings studying Scripture with former classmates while waiting for university admission." },
  { tag: "Education", year: "Nov 2024", title: "Admission to University of Benin — Geomatics Engineering", body: "Began studying geospatial science, GIS, surveying, and mapping technologies." },
  { tag: "Fellowship", year: "2025", title: "Joined Anglican Students' Fellowship (ASF)", body: "Devoted myself to prayer, fasting, Bible study, and evangelism on campus." },
  { tag: "Intercession", year: "2025", title: "Built a 70+ member prayer community", body: "Nightly intercession with believers across Africa, hungry for God's Word." },
  { tag: "Leadership", year: "2025", title: "Appointed A.I.M. Leader of ASF", body: "Entrusted with the Anglican Intercessory Ministry — standing in the place of prayer for others." },
  { tag: "Tech", year: "Ongoing", title: "Pursuing cybersecurity & continuous learning", body: "Threat analysis, security fundamentals, and the discipline of always learning." },
];

function JourneyPage() {
  return (
    <PageShell>
      <SectionHeader kicker="Journey" title="Milestones along" accent="the path." subtitle="A timeline of moments — spiritual, academic, and professional — that shape the work I'm called to do." />
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold/60 via-electric/40 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
        <ol className="space-y-10">
          {ITEMS.map((it, i) => {
            const right = i % 2 === 1;
            return (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`relative grid grid-cols-[2rem_1fr] gap-4 lg:grid-cols-2 lg:gap-12 ${right ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`hidden lg:block ${right ? "" : "text-right"}`}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{it.tag}</div>
                  <div className="mt-2 font-display text-2xl font-semibold">{it.title}</div>
                  <div className="mt-2 max-w-md text-sm text-muted-foreground lg:inline-block">{it.body}</div>
                </div>
                <div className="flex items-start gap-4 lg:hidden">
                  <div className="relative mt-1">
                    <span className="absolute -inset-1 rounded-full bg-gold/20 blur" />
                    <span className="relative block h-4 w-4 rounded-full border-2 border-gold bg-background" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{it.tag} · {it.year}</div>
                    <div className="mt-1 font-display text-xl font-semibold">{it.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{it.body}</div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-center">
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full bg-electric/20 blur-md" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-surface-elev">
                      <span className="font-display text-[11px] font-semibold uppercase tracking-widest text-gold text-center px-1">{it.year}</span>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </PageShell>
  );
}