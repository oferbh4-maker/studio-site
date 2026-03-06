'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProject } from '@/lib/projects';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const project = getProject(id);

  const isRtl = lang === 'he';
  const backLabel = isRtl ? '← חזרה לעבודות' : '← Back to Work';

  if (!project) {
    return (
      <div className="pt-[80px] px-8 py-20 text-center">
        <p className="font-sans text-muted text-sm">Project not found.</p>
        <Link href="/projects" className="font-sans text-xs tracking-[0.2em] uppercase text-charcoal underline mt-4 inline-block">
          {backLabel}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[80px]" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* ── Back link ── */}
      <div className="px-6 md:px-10 py-4 border-b border-silk flex items-center justify-between">
        <Link
          href="/projects"
          className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted hover:text-charcoal transition-colors duration-200"
        >
          {backLabel}
        </Link>
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted/50">
          {project.category[lang]}
        </p>
      </div>

      {/* ── Hero image ── */}
      <div className="w-full overflow-hidden bg-silk" style={{ maxHeight: '72vh' }}>
        <img
          src={project.hero}
          alt={project.title[lang]}
          className="w-full object-cover"
          style={{ maxHeight: '72vh', width: '100%' }}
        />
      </div>

      {/* ── Meta bar ── */}
      <div className="px-6 md:px-10 py-5 border-b border-silk grid grid-cols-3 gap-6">
        {[
          { label: isRtl ? 'שנה'     : 'Year',     value: project.year },
          { label: isRtl ? 'מיקום'   : 'Location', value: project.location[lang] },
          { label: isRtl ? 'קטגוריה' : 'Category', value: project.category[lang] },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-charcoal/40 mb-1">{label}</p>
            <p className="font-sans text-sm text-charcoal">{value}</p>
          </div>
        ))}
      </div>

      {/* ── Title + Description ── */}
      <div className="px-6 md:px-10 py-10 md:py-16 max-w-3xl">
        <h1
          className="font-sans font-light text-charcoal leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          {project.title[lang]}
        </h1>
        <p className="font-sans text-[15px] text-muted leading-[1.85]">
          {project.description[lang]}
        </p>
      </div>

      {/* ── Gallery ── */}
      {project.gallery.length > 0 && (
        <div className="px-6 md:px-10 pb-10">
          <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-charcoal/40 mb-6">
            {isRtl ? 'גלריה' : 'Gallery'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((src, i) => (
              <div key={i} className="overflow-hidden bg-silk">
                <img
                  src={src}
                  alt={`${project.title[lang]} — ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Bottom back link ── */}
      <div className="px-6 md:px-10 py-14 border-t border-silk">
        <Link
          href="/projects"
          className="font-sans text-[10px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-muted hover:border-muted transition-colors duration-200"
        >
          {backLabel}
        </Link>
      </div>

    </div>
  );
}
