import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, SectionHeader } from "@/components/site/layout";
import portraitAsset from "@/assets/ate-portrait.jpg.asset.json";
import casualAsset from "@/assets/ate-casual.jpg.asset.json";
import emblemAsset from "@/assets/ate-emblem.png.asset.json";

const portrait = portraitAsset.url;
const casual = casualAsset.url;
const emblem = emblemAsset.url;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Adeniji Taiwo Emmanuel" },
      { name: "description", content: "Moments and visuals from the journey of Adeniji Taiwo Emmanuel." },
      { property: "og:title", content: "Gallery — Adeniji Taiwo Emmanuel" },
      { property: "og:description", content: "Visual moments from the journey." },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { src: portrait, label: "Portrait", span: "md:col-span-2 md:row-span-2" },
  { src: casual, label: "Off duty", span: "" },
  { src: emblem, label: "ATE Emblem", span: "" },
];

function GalleryPage() {
  return (
    <PageShell>
      <SectionHeader kicker="Gallery" title="Faces and" accent="frames." subtitle="A small visual archive — portraits, brand marks, and moments." />
      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3">
        {ITEMS.map((it, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elev ${it.span}`}
          >
            <img src={it.src} alt={it.label} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{it.label}</figcaption>
          </motion.figure>
        ))}
      </div>
    </PageShell>
  );
}