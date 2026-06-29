import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Quote } from "lucide-react";
import { PageShell } from "@/components/site/layout";
import { getWriting, type Writing } from "@/components/site/writings-content";

export const Route = createFileRoute("/writings/$slug")({
  loader: ({ params }) => {
    const writing = getWriting(params.slug);
    if (!writing) throw notFound();
    return { writing };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.writing.title} — ATE` },
          { name: "description", content: loaderData.writing.excerpt },
          { property: "og:title", content: `${loaderData.writing.title} — ATE` },
          { property: "og:description", content: loaderData.writing.excerpt },
          ...(loaderData.writing.image ? [{ property: "og:image", content: loaderData.writing.image.url }] : []),
        ]
      : [],
  }),
  component: WritingPage,
  notFoundComponent: () => (
    <PageShell><p className="text-muted-foreground">Essay not found.</p></PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell><p role="alert" className="text-destructive">{error.message}</p></PageShell>
  ),
});

function WritingPage() {
  const { writing } = Route.useLoaderData();
  return (
    <PageShell>
      <Link to="/writings" className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition hover:text-gold">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Writings
      </Link>
      <article className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
            {writing.kicker} · {writing.date}
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
            {writing.title}
          </h1>
          <p className="mt-6 border-l-2 border-gold/60 pl-5 font-display text-lg italic leading-snug text-foreground/90">
            {writing.excerpt}
          </p>
        </motion.div>
        {writing.image && (
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 overflow-hidden rounded-2xl border border-white/10"
          >
            <img src={writing.image.url} alt={writing.image.alt} className="w-full" loading="eager" />
          </motion.figure>
        )}
        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85 sm:text-[17px]">
          {writing.paragraphs.map((p: Writing["paragraphs"][number], i: number) => {
            if (typeof p === "string") {
              return (
                <motion.p key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.35 }}>
                  {p}
                </motion.p>
              );
            }
            if ("heading" in p) {
              return (
                <motion.h2 key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.35 }} className="!mt-10 font-display text-2xl font-semibold text-gold">
                  {p.heading}
                </motion.h2>
              );
            }
            return (
              <motion.blockquote key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.35 }} className="relative rounded-2xl border border-electric/30 bg-electric/5 p-6">
                <Quote className="h-5 w-5 text-gold" />
                <p className="mt-3 font-display text-lg leading-snug">{p.quote}</p>
              </motion.blockquote>
            );
          })}
        </div>
        {writing.closing && (
          <div className="mt-12 border-t border-white/10 pt-8 text-center font-display text-lg italic text-gold">
            {writing.closing}
          </div>
        )}
      </article>
    </PageShell>
  );
}