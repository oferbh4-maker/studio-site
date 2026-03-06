'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const featuredMeta = [
  { id: 1, year: '2024', image: '/images/outdoor%20.jpg' },
  { id: 2, year: '2024', image: '/images/living%20room.jpg' },
  { id: 3, year: '2023', image: '/images/kitchen.png' },
];

export default function Home() {
  const { t, lang } = useLanguage();
  const { home } = t;

  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-end px-8 pb-20 pt-32 border-b border-silk">
        <div className="max-w-4xl">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted mb-6">
            {home.heroLabel}
          </p>
          <h1
            className="font-sans font-light leading-[1.08] tracking-tight text-charcoal mb-8"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            {home.heroHeadline1}<br />{home.heroHeadline2}
          </h1>
          <p className="font-sans text-[15px] text-muted max-w-[600px] leading-[1.85] mb-12">
            {home.heroDesc}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/projects"
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-muted hover:border-muted transition-colors duration-300"
            >
              {home.viewWork}
            </Link>
            <Link
              href="/contact"
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted hover:text-charcoal transition-colors duration-300"
            >
              {home.startProject}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="px-8 py-20 mt-20">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-charcoal">{home.selectedWork}</h2>
          <Link
            href="/projects"
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted hover:text-charcoal transition-colors"
          >
            {home.allProjects}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMeta.map((meta, i) => {
            const p = home.featuredProjects[i];
            return (
              <article key={meta.id} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-silk mb-4">
                  <img
                    src={meta.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted mb-1">{p.category}</p>
                <h3 className="font-sans text-sm font-medium text-charcoal">{p.title}</h3>
                <p className="font-sans text-[11px] text-muted">{p.location} — {meta.year}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="px-8 py-24 border-t border-silk">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted mb-8">
            {home.philosophy}
          </p>
          <blockquote
            className="font-sans font-light leading-snug text-charcoal mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {home.philosophyQuote}
          </blockquote>
          <Link
            href="/about"
            className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted border-b border-muted/40 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-200"
          >
            {home.aboutStudio}
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 py-20 bg-charcoal">
        <div className="max-w-xl">
          <h2
            className="font-sans font-light text-cream mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {home.ctaHeadline} {home.ctaHeadline2}
          </h2>
          <p className="font-sans text-sm text-cream/50 leading-relaxed mb-10 max-w-sm">
            {home.ctaDesc}
          </p>
          <Link
            href="/contact"
            className="inline-block font-sans text-[11px] tracking-[0.2em] uppercase text-cream border border-cream/30 px-8 py-3 hover:bg-cream hover:text-charcoal transition-colors duration-300"
          >
            {home.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
