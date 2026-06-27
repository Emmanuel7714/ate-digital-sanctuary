import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, SectionHeader } from "@/components/site/layout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Adeniji Taiwo Emmanuel" },
      { name: "description", content: "Technical and professional capabilities — cybersecurity, geomatics, leadership, communication." },
      { property: "og:title", content: "Skills — Adeniji Taiwo Emmanuel" },
      { property: "og:description", content: "Technical and professional capabilities." },
    ],
  }),
  component: SkillsPage,
});

const GROUPS = [
  { title: "Cybersecurity", items: ["Threat analysis", "Security fundamentals", "Network basics", "Risk awareness", "OSINT mindset"] },
  { title: "Geomatics & Tech", items: ["GIS concepts", "Surveying basics", "Data analysis", "Spatial reasoning", "Problem solving"] },
  { title: "Tools", items: ["Git & GitHub", "Linux basics", "Markdown", "Office suite", "Notion / docs"] },
  { title: "Leadership", items: ["Team building", "Public speaking", "Mentorship", "Intercession", "Vision casting"] },
  { title: "Communication", items: ["Writing", "Teaching", "Active listening", "Storytelling", "Empathy"] },
  { title: "Character", items: ["Integrity", "Discipline", "Faithfulness", "Humility", "Consistency"] },
];

function SkillsPage() {
  return (
    <PageShell>
      <SectionHeader kicker="Skills" title="What I bring to" accent="the table." subtitle="A blend of technical capability and the human skills that make any team stronger." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl border border-white/10 bg-surface-elev p-6"
          >
            <h3 className="font-display text-lg font-semibold text-gold">{g.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {g.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-electric" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}