import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Quote } from "lucide-react";
import { PageShell } from "@/components/site/layout";
import { ABOUT_CONTENT, type AboutContent } from "@/components/site/about-content";
import type { AboutSlug } from "@/components/site/data";

export const Route = createFileRoute("/about/$topic")({
  loader: ({ params }) => {
    const content: AboutContent | undefined = ABOUT_CONTENT[params.topic as AboutSlug];
    if (!content) throw notFound();
    return { content: content as AboutContent };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.content.title} — Adeniji Taiwo Emmanuel` },
      { name: "description", content: loaderData.content.intro },
      { property: "og:title", content: `${loaderData.content.title} — Adeniji Taiwo Emmanuel` },
      { property: "og:description", content: loaderData.content.intro },
    ] : [],
  }),
  component: TopicPage,
  notFoundComponent: () => (
    <PageShell><p className="text-muted-foreground">Topic not found.</p></PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell><p role="alert" className="text-destructive">{error.message}</p></PageShell>
  ),
});

function TopicPage() {
  const { content } = Route.useLoaderData();
  return (
    <PageShell>
      <Link to="/about" className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition hover:text-gold">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to About
      </Link>
      <article className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            {content.kicker}
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 border-l-2 border-gold/60 pl-5 font-display text-xl italic leading-snug text-foreground/90">
            "{content.intro}"
          </p>
        </motion.div>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85 sm:text-[17px]">
          {content.paragraphs.map((p, i) => {
            if (typeof p === "string") {
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35 }}
                >
                  {p}
                </motion.p>
              );
            }
            return (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35 }}
                className="relative rounded-2xl border border-electric/30 bg-electric/5 p-6"
              >
                <Quote className="h-5 w-5 text-gold" />
                <p className="mt-3 font-display text-lg leading-snug">{p.quote}</p>
              </motion.blockquote>
            );
          })}
        </div>
        {content.closing && (
          <div className="mt-12 border-t border-white/10 pt-8 text-center font-mono text-xs uppercase tracking-[0.25em] text-gold whitespace-pre-line">
            {content.closing}
          </div>
        )}
      </article>
    </PageShell>
  );
}