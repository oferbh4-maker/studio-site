'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const featuredMeta = [
  { id: 1, year: '2024', image: '/images/outdoor%20.jpg', slug: 'project-1' },
  { id: 2, year: '2024', image: '/images/living%20room.jpg', slug: 'project-2' },
  { id: 3, year: '2023', image: '/images/kitchen.png', slug: 'project-3' },
];

export default function Home() {
  const { t, lang } = useLanguage();
  const { home } = t;

  // פונקציית עזר למשיכת נתוני הפרויקט מהתרגומים
  const getProjectData = (id: number) => {
    return t.projects?.items?.find((p: any) => p.id === id) || { 
      title: "Project", 
      category: "Interior Design", 
      location: "Israel" 
    };
  };

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-8 pb-16 md:pb-20 pt-28 md:pt-32 border-b border-[#f0ede8]">
        <div className="max-w-4xl">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted mb-6">
            {home.heroLabel}
          </p>
          <h1
            className="font-sans font-light leading-[1.08] tracking-tight text-charcoal mb-6 md:mb-8"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
          >
            {home.heroHeadline1}<br />{home.heroHeadline2}
          </h1>
          <p className="font-sans text-[14px] md:text-[15px] text-muted max-w-[600px] leading-[1.85] mb-10 md:mb-12">
            {home.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
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
      <section className="px-6 md:px-8 py-16 md:py-20 mt-0 md:mt-20">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-charcoal">{home.selectedWork}</h2>
          <Link
            href="/projects"
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted hover:text-charcoal transition-colors"
          >
            {home.allProjects}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {featuredMeta.map((meta) => {
            const projectInfo = getProjectData(meta.id);
            return (
              <Link 
                key={meta.id} 
                href={`/projects/${meta.slug}`} 
                className="group block cursor-pointer"
              >
                <div className="aspect-[16/9] md:aspect-[4/5] overflow-hidden bg-[#f0ede8] mb-4 relative">
                  <Image
                    src={meta.image}
                    alt={projectInfo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted mb-1">
                  {projectInfo.category}
                </p>
                <h3 className="font-sans text-sm font-medium text-charcoal">
                  {projectInfo.title}
                </h3>
                <p className="font-sans text-[11px] text-muted">
                  {projectInfo.location} — {meta.year}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="px-6 md:px-8 py-20 md:py-24 border-t border-[#f0ede8]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted mb-8">
            {home.philosophy}
          </p>
          <blockquote
            className="font-sans font-light leading-snug text-charcoal mb-8"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.5rem)' }}
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
      <section className="px-6 md:px-8 py-16 md:py-20 bg-charcoal">
        <div className="max-w-xl">
          <h2
            className="font-sans font-light text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
          >
            {home.ctaHeadline} {home.ctaHeadline2}
          </h2>
          <p className="font-sans text-sm text-white/50 leading-relaxed mb-10 max-w-sm">
            {home.ctaDesc}
          </p>
          <Link
            href="/contact"
            className="inline-block font-sans text-[11px] tracking-[0.2em] uppercase text-white border border-white/30 px-8 py-3 hover:bg-white hover:text-charcoal transition-colors duration-300"
          >
            {home.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}