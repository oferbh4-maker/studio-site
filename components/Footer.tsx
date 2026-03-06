'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-silk px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted">
        © {new Date().getFullYear()} Studio Ben Horin
      </p>
      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted">
        {t.footer.locations}
      </p>
    </footer>
  );
}
