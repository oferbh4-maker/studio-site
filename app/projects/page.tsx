'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const enc = (name: string) => `/images/${encodeURIComponent(name)}`;

const featured = [
  { id: 1, year: '2024', image: enc('libarary.png') },
  { id: 2, year: '2024', image: enc('master bed room.png') },
  { id: 3, year: '2023', image: enc('balcony.png') },
];

export default function ProjectsPage() {
  const { t, lang } = useLanguage();
  const { projects } = t;
  const viewLabel = lang === 'he' ? 'צפה בפרויקט ←' : 'View Project →';

  return (
    /* Nav is h-12 (3rem = 48px) — offset content below it */
    <div className="pt-[80px]">

      {/* ── Header ── */}
      <header className="px-4 md:px-8 pt-6 pb-5 border-b border-silk">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted mb-2">
          {projects.portfolio}
        </p>
        <h1
          className="font-sans font-light text-charcoal leading-none"
          style={{ fontSize: 'clamp(1.4rem, 1.8vw, 1.8rem)' }}
        >
          {projects.selectedWork}
        </h1>
      </header>

      {/* ── Grid ── */}
      <main className="px-4 md:px-8 py-6">

        {/* Desktop: 3 equal columns, full height */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {featured.map((meta, i) => {
            const p = projects.items[i];
            return (
              <Link key={meta.id} href={`/projects/${meta.id}`} className="group flex flex-col cursor-pointer">

                {/* Shadow lives here (outside overflow-hidden so it's visible) */}
                <div
                  className="relative aspect-[16/9] bg-silk transition-shadow duration-500 group-hover:shadow-2xl"
                  style={{ transitionTimingFunction: 'ease-out' }}
                >
                  {/* Clip wrapper */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={meta.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-end justify-center pb-7 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white border border-white/60 px-5 py-2 bg-black/20 backdrop-blur-sm">
                        {viewLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="flex-none pt-3 flex items-baseline justify-between">
                  <div>
                    <h2 className="font-sans text-[11px] font-medium tracking-wide text-charcoal">
                      {p.title}
                    </h2>
                    <p className="font-sans text-[9px] text-muted mt-0.5 tracking-wide">
                      {p.category}&thinsp;·&thinsp;{meta.year}
                    </p>
                  </div>
                  <span className="font-sans text-[10px] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {lang === 'he' ? '←' : '→'}
                  </span>
                </div>

              </Link>
            );
          })}
        </div>

        {/* Mobile: stacked with aspect-ratio images */}
        <div className="md:hidden flex flex-col gap-8 pb-4">
          {featured.map((meta, i) => {
            const p = projects.items[i];
            return (
              <Link key={meta.id} href={`/projects/${meta.id}`} className="group cursor-pointer block">
                <div className="relative aspect-[16/9] overflow-hidden bg-silk transition-shadow duration-500 group-hover:shadow-xl">
                  <img
                    src={meta.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pt-3 flex items-baseline justify-between">
                  <div>
                    <h2 className="font-sans text-[11px] font-medium tracking-wide text-charcoal">
                      {p.title}
                    </h2>
                    <p className="font-sans text-[9px] text-muted mt-0.5 tracking-wide">
                      {p.category}&thinsp;·&thinsp;{meta.year}
                    </p>
                  </div>
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted">
                    {viewLabel}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </main>
    </div>
  );
}
