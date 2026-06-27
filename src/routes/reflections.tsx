import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, SectionHeader } from "@/components/site/layout";

export const Route = createFileRoute("/reflections")({
  head: () => ({
    meta: [
      { title: "Reflections — Adeniji Taiwo Emmanuel" },
      { name: "description", content: "Short reflections on faith, work, leadership, and the journey of becoming." },
      { property: "og:title", content: "Reflections — Adeniji Taiwo Emmanuel" },
      { property: "og:description", content: "Short reflections on faith, work, and the journey of becoming." },
    ],
  }),
  component: ReflectionsPage,
});

const REFLECTIONS = [
  { date: "2025", title: "Faithfulness over numbers", body: "There were nights when I would schedule a meeting for over thirty people, yet only two would join. God taught me ministry is never measured by numbers — only by faithfulness." },
  { date: "2025", title: "A life without Christ is a life in crisis", body: "I lived in fear and anxiety before I met Him. Looking back, I see how He was quietly arranging every detail of my life, drawing me to Himself." },
  { date: "2025", title: "Loneliness as an advantage", body: "After salvation, loneliness lost its weight. I was no longer truly alone — I had become conscious of God's presence." },
  { date: "2025", title: "Sanctification is the long work", body: "Salvation happened in a moment. Sanctification has been a lifelong unfolding — old desires falling away, new desires taking root." },
  { date: "2025", title: "Progress, not perfection", body: "I aim for progress. To grow into a man of integrity, wisdom, competence, and compassion — one obedient day at a time." },
];

function ReflectionsPage() {
  return (
    <PageShell>
      <SectionHeader kicker="Reflections" title="Notes from" accent="the journey." subtitle="Short, honest reflections — lessons the Lord is teaching me along the way." />
      <div className="space-y-5">
        {REFLECTIONS.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-surface-elev p-6"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{r.date}</div>
            <h3 className="mt-2 font-display text-xl font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{r.body}</p>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}