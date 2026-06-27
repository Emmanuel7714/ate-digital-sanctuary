import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Compass, Cpu, Cross, Shield, Sparkles } from "lucide-react";
import emblemAsset from "@/assets/ate-emblem.png.asset.json";
import { IDENTITY } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adeniji Taiwo Emmanuel — Faith. Technology. Purpose." },
      { name: "description", content: "ATE — Believer, Cybersecurity Analyst, Technology Enthusiast, Leader, Geomatics Student." },
      { property: "og:title", content: "Adeniji Taiwo Emmanuel — Faith. Technology. Purpose." },
      { property: "og:description", content: "Personal digital headquarters of Adeniji Taiwo Emmanuel." },
      { property: "og:image", content: emblemAsset.url },
      { name: "twitter:image", content: emblemAsset.url },
    ],
  }),
  component: Home,
});

function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % IDENTITY.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--color-electric)_25%,transparent),_transparent_60%)]" />
      <div className="absolute right-[-10%] top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute left-[-10%] bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-electric/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-gold"
            >
              <Sparkles className="h-3 w-3" /> Faith · Technology · Purpose
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              ADENIJI<br />
              <span className="text-gradient-gold">TAIWO</span><br />
              EMMANUEL
            </motion.h1>

            <div className="mt-6 flex h-9 items-center gap-3 font-mono text-base text-muted-foreground sm:text-lg">
              <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_10px] shadow-electric" />
              <span className="text-foreground/60">I am a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={IDENTITY[idx]}
                  initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-gradient-blue font-semibold"
                >
                  {IDENTITY[idx]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I am a believer first. My faith in Christ shapes my values, purpose, and approach to life.
              I work at the intersection of technology, cybersecurity, and leadership while pursuing
              excellence and meaningful impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link to="/about" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-[color-mix(in_oklab,var(--color-electric)_70%,white)] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                Explore My World <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10">
                View My Projects
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10">
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-electric/30 via-transparent to-gold/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-surface-elev p-6 shadow-glow">
              <div className="relative mx-auto h-72 w-72">
                <span className="absolute inset-0 rounded-full border border-electric/30 animate-pulse-ring" />
                <span className="absolute inset-0 rounded-full border border-gold/30 animate-pulse-ring" style={{ animationDelay: "0.8s" }} />
                <img src={emblemAsset.url} alt="ATE Emblem" width={512} height={512} className="relative h-full w-full object-contain animate-float" />
              </div>
              <div className="mt-6 grid grid-cols-4 gap-2 text-center">
                {[
                  { i: <Cross className="h-4 w-4" />, l: "Faith" },
                  { i: <Cpu className="h-4 w-4" />, l: "Tech" },
                  { i: <Shield className="h-4 w-4" />, l: "Cyber" },
                  { i: <Compass className="h-4 w-4" />, l: "Purpose" },
                ].map((b) => (
                  <div key={b.l} className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-md bg-gold/10 text-gold">{b.i}</div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{b.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}