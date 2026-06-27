import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield, Code2, Cross, Compass, Sparkles, ArrowUp, ArrowRight,
  Github, Linkedin, Mail, Instagram, ExternalLink, Menu, X,
  Cpu, Lock, Users, GraduationCap, Heart, Quote, MapPin,
} from "lucide-react";
import emblemAsset from "@/assets/ate-emblem.png.asset.json";
import portraitAsset from "@/assets/ate-portrait.jpg.asset.json";
import casualAsset from "@/assets/ate-casual.jpg.asset.json";
import logoFullAsset from "@/assets/ate-logo-full.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adeniji Taiwo Emmanuel — Faith. Technology. Purpose." },
      { name: "description", content: "ATE — Believer, Cybersecurity Analyst, Technology Enthusiast, Leader, Geomatics Student. Faith. Technology. Purpose." },
      { property: "og:title", content: "Adeniji Taiwo Emmanuel — Faith. Technology. Purpose." },
      { property: "og:description", content: "ATE — Believer, Cybersecurity Analyst, Technology Enthusiast, Leader, Geomatics Student." },
      { property: "og:image", content: emblemAsset.url },
      { name: "twitter:image", content: emblemAsset.url },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "reflections", label: "Reflections" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const IDENTITY = [
  "Believer.",
  "Cybersecurity Analyst.",
  "Technology Enthusiast.",
  "Leader.",
  "Geomatics Student.",
];

function Index() {
  const [loaded, setLoaded] = useState(false);
  const [identityIdx, setIdentityIdx] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 750);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIdentityIdx((i) => (i + 1) % IDENTITY.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      const sections = NAV.map((n) => document.getElementById(n.id));
      const y = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= y) { setActive(NAV[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <LoadingOverlay show={!loaded} />
      <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <Navbar active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <Hero identityIdx={identityIdx} />
          <About />
          <Journey />
          <Skills />
          <Projects />
          <Reflections />
          <Mission />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <BackToTop show={showTop} />
      </div>
    </>
  );
}

/* ---------------- Loading ---------------- */
function LoadingOverlay({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full border border-electric/50 animate-pulse-ring" />
            <span className="absolute inset-0 rounded-full border border-gold/40 animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
            <img src={emblemAsset.url} alt="ATE" width={88} height={88} className="relative h-22 w-22 animate-float" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar({ active, menuOpen, setMenuOpen }: { active: string; menuOpen: boolean; setMenuOpen: (b: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="ATE Home">
          <img src={emblemAsset.url} alt="" width={40} height={40} className="h-10 w-10" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-wide">
              ADENIJI <span className="text-gradient-gold">TAIWO</span> EMMANUEL
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Faith · Technology · Purpose
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.id && (
                <motion.span layoutId="navdot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
              )}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/5 bg-background/95"
          >
            <div className="flex flex-col p-4">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-white/5 py-3 text-sm uppercase tracking-wider ${
                    active === n.id ? "text-gold" : "text-foreground/80"
                  }`}
                >
                  <span>{n.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- Section helpers ---------------- */
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeader({ kicker, title, accent, subtitle }: { kicker: string; title: string; accent?: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 max-w-3xl"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-gold" /> {kicker}
      </div>
      <h2 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
        {title} {accent && <span className="text-gradient-gold">{accent}</span>}
      </h2>
      {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ identityIdx }: { identityIdx: number }) {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 lg:pt-40">
      {/* Background grid + glows */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--color-electric)_25%,transparent),_transparent_60%)]" />
      <div className="absolute right-[-10%] top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute left-[-10%] bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-electric/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-gold"
            >
              <Sparkles className="h-3 w-3" /> Faith · Technology · Purpose
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
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
                  key={IDENTITY[identityIdx]}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-gradient-blue font-semibold"
                >
                  {IDENTITY[identityIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I am a believer first. My faith in Christ shapes my values, purpose, and approach to life.
              I work at the intersection of technology, cybersecurity, and leadership while pursuing
              excellence and meaningful impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#about" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-[color-mix(in_oklab,var(--color-electric)_70%,white)] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                Explore My World <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10">
                View My Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10">
                Contact Me
              </a>
            </motion.div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <Stat n="5+" label="Identities" />
              <Stat n="∞" label="Purpose" />
              <Stat n="1" label="Savior" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
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

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-gradient-gold">{n}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- About ---------------- */
function About() {
  const cards = [
    { icon: <Cross className="h-5 w-5" />, title: "Faith", body: "My identity in Christ comes first. Every value, decision, and relationship is rooted in the gospel." },
    { icon: <Shield className="h-5 w-5" />, title: "Cybersecurity", body: "I protect what matters — analyzing threats, hardening systems, and pursuing security as stewardship." },
    { icon: <Users className="h-5 w-5" />, title: "Leadership", body: "I lead by serving — building people up, communicating clearly, and modeling integrity in every room." },
    { icon: <GraduationCap className="h-5 w-5" />, title: "Education", body: "Studying Geomatics — mastering geospatial science, mapping technologies, and the data behind decisions." },
    { icon: <Heart className="h-5 w-5" />, title: "Personal Growth", body: "I pursue continuous learning, character formation, and the long, patient work of becoming." },
  ];
  return (
    <Section id="about" className="relative">
      <SectionHeader
        kicker="About"
        title="The story behind"
        accent="ATE."
        subtitle="Five lenses that, together, frame who I am and the work I do."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elev p-6 transition hover:border-gold/40 hover:-translate-y-1"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">{c.icon}</div>
            <h3 className="font-display text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </motion.article>
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
    </Section>
  );
}

/* ---------------- Journey ---------------- */
function Journey() {
  const items = [
    { tag: "Faith", year: "Salvation", title: "Surrendered my life to Christ", body: "The defining moment — identity, purpose, and direction redefined by grace." },
    { tag: "Education", year: "Geomatics", title: "Began studying Geomatics Engineering", body: "Diving into geospatial science, GIS, surveying, and mapping technologies." },
    { tag: "Leadership", year: "Service", title: "Stepped into leadership roles", body: "Serving on teams, communicating vision, and developing people around me." },
    { tag: "Cybersecurity", year: "Focus", title: "Pursued cybersecurity analysis", body: "Threat analysis, security fundamentals, and a posture of vigilance and stewardship." },
    { tag: "Growth", year: "Certifications", title: "Continuous learning & certifications", body: "Building the discipline of always learning — formally and informally." },
    { tag: "Projects", year: "Build", title: "Shipping projects that matter", body: "Bringing faith, technology, and purpose together in real, useful work." },
  ];
  return (
    <Section id="journey" className="relative">
      <SectionHeader
        kicker="Journey"
        title="Milestones along"
        accent="the path."
        subtitle="A timeline of moments — spiritual, academic, and professional — that shape the work I'm called to do."
      />
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold/60 via-electric/40 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
        <ol className="space-y-10">
          {items.map((it, i) => {
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
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-surface-elev">
                      <span className="font-display text-xs font-semibold uppercase tracking-widest text-gold">{it.year}</span>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

/* ---------------- Skills ---------------- */
function Skills() {
  const tech = [
    { name: "Cybersecurity", level: 88, icon: <Lock className="h-4 w-4" /> },
    { name: "Python", level: 78, icon: <Code2 className="h-4 w-4" /> },
    { name: "JavaScript", level: 75, icon: <Code2 className="h-4 w-4" /> },
    { name: "HTML / CSS", level: 90, icon: <Code2 className="h-4 w-4" /> },
    { name: "GIS & Mapping", level: 82, icon: <MapPin className="h-4 w-4" /> },
  ];
  const pro = ["Leadership", "Communication", "Public Speaking", "Teamwork", "Problem Solving"];
  return (
    <Section id="skills" className="relative">
      <SectionHeader
        kicker="Skills"
        title="Tools of the"
        accent="craft."
        subtitle="Technical depth paired with the human skills that turn knowledge into impact."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-surface-elev p-6 lg:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-xl font-semibold">Technical</h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/01</span>
          </div>
          <ul className="space-y-5">
            {tech.map((s, i) => (
              <li key={s.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-2"><span className="text-gold">{s.icon}</span>{s.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-electric to-gold"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-surface-elev p-6 lg:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-xl font-semibold">Professional</h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/02</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {pro.map((p) => (
              <span key={p} className="rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-sm text-foreground">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-electric/30 bg-electric/5 p-5">
            <Quote className="h-5 w-5 text-gold" />
            <p className="mt-3 font-display text-base leading-snug">
              "Excellence is not an event — it's a discipline practiced quietly, daily, faithfully."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  const projects = [
    {
      title: "Threat Intelligence Dashboard",
      desc: "A monitoring dashboard aggregating threat feeds and visualizing risk posture for small teams.",
      tech: ["Python", "JavaScript", "Security APIs"],
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Geospatial Mapping Tool",
      desc: "Interactive GIS web app to explore spatial datasets — built with Geomatics fundamentals.",
      tech: ["JavaScript", "Leaflet", "GIS"],
      img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Faith & Devotional Portal",
      desc: "A clean daily devotional reader with Scripture highlighting and journaling.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Phishing Awareness Kit",
      desc: "An educational toolkit teaching teams how to detect and respond to phishing attempts.",
      tech: ["Python", "Cybersecurity"],
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  return (
    <Section id="projects">
      <SectionHeader
        kicker="Projects"
        title="Work that"
        accent="ships."
        subtitle="A selection of projects across cybersecurity, geomatics, and web — built to be useful, not just impressive."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elev"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-xs font-semibold text-white transition hover:bg-electric/90">
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold transition hover:bg-white/10">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Reflections ---------------- */
function Reflections() {
  const posts = [
    { tag: "Faith", title: "Identity Before Achievement", excerpt: "Before any title — analyst, student, leader — I am a child of God. That order changes everything." },
    { tag: "Technology", title: "Building Securely by Default", excerpt: "Security is not a feature you bolt on. It is a posture you build everything from." },
    { tag: "Leadership", title: "The Servant Who Leads", excerpt: "Real leadership is measured by how much smaller you make yourself so others can grow." },
    { tag: "University", title: "Geomatics: Seeing the World as Data", excerpt: "Learning to map the earth taught me that even what looks chaotic has hidden structure." },
    { tag: "Growth", title: "The Discipline of Daily 1%", excerpt: "I no longer chase breakthroughs. I show up consistently, and the breakthroughs find me." },
  ];
  return (
    <Section id="reflections" className="relative">
      <SectionHeader
        kicker="Reflections"
        title="Notes on faith,"
        accent="tech & growth."
        subtitle="Short reflections from the journey — written to remember, and to share what's worth sharing."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface-elev p-6 transition hover:border-gold/40"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{p.tag}</span>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-electric transition group-hover:gap-3">
              Read reflection <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Mission ---------------- */
function Mission() {
  const values = ["Faith.", "Integrity.", "Excellence.", "Growth.", "Service."];
  return (
    <Section id="mission" className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-electric/10 via-surface-elev to-gold/10 p-8 lg:p-16">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute right-[-10%] top-[-30%] -z-10 h-[400px] w-[400px] rounded-full bg-gold/20 blur-[120px]" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3 w-3" /> Mission
          </div>
          <p className="font-display text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
            To <span className="text-gradient-gold">glorify God</span>, pursue excellence in cybersecurity
            and technology, and positively influence lives through{" "}
            <span className="text-gradient-blue">faith, service, and leadership.</span>
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {values.map((v) => (
              <span key={v} className="rounded-full border border-white/10 bg-background/50 px-5 py-2 font-display text-sm font-medium tracking-wide backdrop-blur">
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const items = [
    { src: portraitAsset.url, label: "Portrait", h: "row-span-2" },
    { src: casualAsset.url, label: "Off-duty", h: "" },
    { src: logoFullAsset.url, label: "Brand Identity", h: "" },
  ];
  return (
    <Section id="gallery">
      <SectionHeader
        kicker="Gallery"
        title="Frames from"
        accent="the journey."
        subtitle="A few personal moments and brand references."
      />
      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elev ${it.h}`}
          >
            <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Section id="contact" className="relative">
      <SectionHeader
        kicker="Contact"
        title="Let's build"
        accent="something."
        subtitle="Whether it's a project, a conversation, or an opportunity to serve — reach out."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-white/10 bg-surface-elev p-6 lg:p-8">
          <h3 className="font-display text-xl font-semibold">Reach me directly</h3>
          <p className="mt-2 text-sm text-muted-foreground">I respond to thoughtful messages.</p>
          <ul className="mt-6 space-y-3">
            {[
              { i: <Mail className="h-4 w-4" />, label: "Email", value: "adeniji.taiwo@example.com", href: "mailto:adeniji.taiwo@example.com" },
              { i: <Linkedin className="h-4 w-4" />, label: "LinkedIn", value: "/in/adeniji-taiwo-emmanuel", href: "#" },
              { i: <Github className="h-4 w-4" />, label: "GitHub", value: "@adeniji-taiwo", href: "#" },
              { i: <Instagram className="h-4 w-4" />, label: "Instagram", value: "@ate.purpose", href: "#" },
            ].map((c) => (
              <li key={c.label}>
                <a href={c.href} className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition hover:border-gold/30 hover:bg-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">{c.i}</span>
                  <span className="flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</span>
                    <span className="block text-sm font-medium">{c.value}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-2xl border border-white/10 bg-surface-elev p-6 lg:p-8"
        >
          <h3 className="font-display text-xl font-semibold">Send a message</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Your name" id="name"><input id="name" required className="ate-input" placeholder="Full name" /></Field>
            <Field label="Email" id="email"><input id="email" type="email" required className="ate-input" placeholder="you@example.com" /></Field>
          </div>
          <Field label="Subject" id="subject" className="mt-4"><input id="subject" className="ate-input" placeholder="What's this about?" /></Field>
          <Field label="Message" id="message" className="mt-4">
            <textarea id="message" required rows={5} className="ate-input resize-none" placeholder="Tell me a bit..." />
          </Field>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-[color-mix(in_oklab,var(--color-electric)_70%,white)] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
            Send message <ArrowRight className="h-4 w-4" />
          </button>
          {submitted && (
            <p className="mt-4 rounded-lg border border-gold/30 bg-gold/10 p-3 text-sm text-gold">
              Thank you — your message has been received. I'll get back to you soon.
            </p>
          )}
          <style>{`.ate-input{width:100%;border-radius:0.75rem;border:1px solid color-mix(in oklab,white 12%,transparent);background:color-mix(in oklab,white 4%,transparent);padding:0.75rem 1rem;font-size:0.875rem;color:inherit;outline:none;transition:border-color .2s, box-shadow .2s}.ate-input:focus{border-color:color-mix(in oklab,var(--color-electric) 60%, transparent);box-shadow:0 0 0 3px color-mix(in oklab,var(--color-electric) 20%, transparent)}`}</style>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, id, children, className = "" }: { label: string; id: string; children: React.ReactNode; className?: string }) {
  return (
    <label htmlFor={id} className={`block ${className}`}>
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img src={emblemAsset.url} alt="ATE" width={44} height={44} className="h-11 w-11" />
              <div className="leading-tight">
                <div className="font-display text-sm font-semibold tracking-wide">
                  ADENIJI <span className="text-gradient-gold">TAIWO</span> EMMANUEL
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Faith · Technology · Purpose
                </div>
              </div>
            </a>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              A personal digital headquarters — built to reflect faith in Christ, a love for technology,
              and a commitment to leadership and meaningful impact.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Navigate</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV.map((n) => (
                <li key={n.id}><a href={`#${n.id}`} className="text-muted-foreground transition hover:text-foreground">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Connect</div>
            <div className="mt-4 flex gap-2">
              {[
                { i: <Github className="h-4 w-4" />, href: "#", label: "GitHub" },
                { i: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn" },
                { i: <Instagram className="h-4 w-4" />, href: "#", label: "Instagram" },
                { i: <Mail className="h-4 w-4" />, href: "mailto:adeniji.taiwo@example.com", label: "Email" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-gold/40 hover:text-gold">
                  {s.i}
                </a>
              ))}
            </div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              "Soli Deo Gloria"
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Adeniji Taiwo Emmanuel. All rights reserved.</span>
          <span className="font-mono uppercase tracking-[0.3em]">ATE · Faith · Technology · Purpose</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Back to top ---------------- */
function BackToTop({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-background/80 text-gold backdrop-blur shadow-gold-glow"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
