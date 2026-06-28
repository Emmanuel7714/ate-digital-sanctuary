import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUp, ExternalLink, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import emblemAsset from "@/assets/ate-emblem.png.asset.json";
import { NAV } from "./data";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll top on route change
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);

  return (
    <>
      <LoadingOverlay show={!loaded} />
      <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden flex flex-col">
        <Navbar pathname={pathname} />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop show={showTop} />
      </div>
    </>
  );
}

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

function Navbar({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const isActive = (to: string) => to === "/" ? pathname === "/" : pathname.startsWith(to);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="ATE Home">
          <img src={emblemAsset.url} alt="" width={40} height={40} className="h-10 w-10" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-wide">
              ADENIJI <span className="text-gradient-gold">TAIWO</span> EMMANUEL
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Faith · Technology · Purpose
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`relative px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                isActive(n.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {isActive(n.to) && (
                <motion.span layoutId="navdot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
              )}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/5 bg-background/95"
          >
            <div className="flex flex-col p-4">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-white/5 py-3 text-sm uppercase tracking-wider ${
                    isActive(n.to) ? "text-gold" : "text-foreground/80"
                  }`}
                >
                  <span>{n.label}</span>
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={emblemAsset.url} alt="ATE" width={44} height={44} className="h-11 w-11" />
              <div className="leading-tight">
                <div className="font-display text-sm font-semibold tracking-wide">
                  ADENIJI <span className="text-gradient-gold">TAIWO</span> EMMANUEL
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Faith · Technology · Purpose
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              A personal digital headquarters — built to reflect faith in Christ, a love for technology,
              and a commitment to leadership and meaningful impact.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Navigate</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="text-muted-foreground transition hover:text-foreground">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Connect</div>
            <div className="mt-4 flex gap-2">
              {[
                { i: <ExternalLink className="h-4 w-4" />, href: "https://www.facebook.com/HisnameisEmmanuel", label: "Facebook" },
                { i: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/emmanuel-taiwo-7a74b6394", label: "LinkedIn" },
                { i: <ExternalLink className="h-4 w-4" />, href: "https://x.com/G3n1us_m1nd3d", label: "X / Twitter" },
                { i: <Mail className="h-4 w-4" />, href: "mailto:emmanueltaiwo920@gmail.com", label: "Email" },
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

export function SectionHeader({ kicker, title, accent, subtitle }: { kicker: string; title: string; accent?: string; subtitle?: string }) {
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
      <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
        {title} {accent && <span className="text-gradient-gold">{accent}</span>}
      </h1>
      {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`px-5 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}