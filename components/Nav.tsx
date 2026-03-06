'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Nav() {
  const pathname = usePathname();
  const { lang, t, toggle } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const links = [
    { href: '/projects', label: t.nav.work },
    { href: '/about',    label: t.nav.studio },
    { href: '/contact',  label: t.nav.contact },
  ];

  const linkBaseCls = [
    'relative font-sans text-[10px] font-medium tracking-[0.28em] uppercase transition-colors duration-200',
    'after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-full after:bg-current',
    'after:origin-left after:transition-transform after:duration-300',
  ].join(' ');

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-[80px] px-6 md:px-8 flex items-center justify-between border-b border-[#dedede]"
        style={{ backgroundColor: '#f7f7f7', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Ófer Ben Horín — Home" className="flex items-center pt-[30px]">
          <img
            src="/images/logo.png"
            alt="Ófer Ben Horín — Interior Design Studio"
            className="w-[110px] md:w-[120px] h-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[
                linkBaseCls,
                pathname === href
                  ? 'text-charcoal after:scale-x-100'
                  : 'text-[#555555] hover:text-charcoal after:scale-x-0 hover:after:scale-x-100',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="font-sans text-[8px] tracking-[0.2em] uppercase text-muted/70 hover:text-charcoal transition-colors duration-200"
          >
            <span className={lang === 'en' ? 'text-charcoal' : ''}>EN</span>
            <span className="mx-2 opacity-30">|</span>
            <span className={lang === 'he' ? 'text-charcoal' : ''}>HE</span>
          </button>
        </nav>

        {/* Mobile: language + hamburger */}
        <div className="md:hidden flex items-center gap-5">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="font-sans text-[8px] tracking-[0.2em] uppercase text-muted/70"
          >
            <span className={lang === 'en' ? 'text-charcoal' : ''}>EN</span>
            <span className="mx-1.5 opacity-30">|</span>
            <span className={lang === 'he' ? 'text-charcoal' : ''}>HE</span>
          </button>

          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 flex-shrink-0"
          >
            <span className={`block w-5 h-px bg-charcoal origin-center transition-transform duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block w-5 h-px bg-charcoal transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-charcoal origin-center transition-transform duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: '#f7f7f7', paddingTop: '80px' }}
      >
        <nav className="flex flex-col items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={[
                'font-sans text-[13px] font-medium tracking-[0.35em] uppercase transition-colors duration-200',
                pathname === href ? 'text-charcoal' : 'text-[#888] hover:text-charcoal',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
