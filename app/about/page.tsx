'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const { about } = t;

  return (
    <div className="pt-[80px]">

      {/* ── 1. Hero: Heading + Image ── */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 border-b border-silk" style={{ minHeight: 'calc(100vh - 80px)' }}>

        {/* Left: text — second on mobile */}
        <div className="order-2 md:order-1 flex flex-col justify-center px-10 md:px-16 pt-10 md:pt-14 pb-16 md:pb-20 border-t border-silk md:border-t-0 md:border-e md:border-silk">
          <p className="font-sans text-[13px] font-medium tracking-[0.45em] uppercase text-muted mb-8">
            {about.theStudio}
          </p>
          <h1
            className="font-sans font-light text-charcoal leading-[1.08] mb-10"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.2rem)' }}
          >
            {about.headline}
          </h1>

          <div className="border-t border-silk pt-6">
            <p className="font-sans text-[11px] font-bold tracking-[0.35em] uppercase text-charcoal/60 mb-1">
              {lang === 'he' ? 'מומחיות' : 'Expertise'}
            </p>
            <div className="border-b border-silk/60 mb-4" />
            <ul className="space-y-2">
              {(lang === 'he'
                ? ['עיצוב פנים', 'תכנון מרחבי', 'מגורים וחינוך', 'ייעוץ']
                : ['Interior Design', 'Spatial Planning', 'Residential & Educational', 'Consultation']
              ).map((item) => (
                <li key={item} className="font-sans text-[13px] text-charcoal/40 tracking-wide flex items-center gap-2">
                  {lang === 'he' ? (
                    <>{item}<span className="inline-block w-3 border-t border-charcoal/20 flex-shrink-0" /></>
                  ) : (
                    <><span className="inline-block w-3 border-t border-charcoal/20 flex-shrink-0" />{item}</>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: photo — About Me solo portrait, chest-up crop */}
        <div className="order-1 md:order-2 flex items-center justify-center p-4">
          <div className="relative w-full h-full min-h-[50vh] bg-white p-1 rounded-sm shadow-lg overflow-hidden">
            <img
              src="/images/ofer-solo.png"
              alt="Ofer Ben Horin - Interior Designer"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', transform: 'scale(1.4)', transformOrigin: 'center 20%' }}
            />
          </div>
        </div>
      </div>

     {/* Section 2: My Story - High-End Studio Layout (Aligned Top) */}<section className="flex flex-col md:flex-row min-h-screen md:h-screen w-full bg-[#FAF9F6] overflow-hidden">
        
        {/* צד שמאל: טקסט מוסט למעלה */}
        <div className="w-full md:w-1/2 flex flex-col pt-12 md:pt-20 px-6 md:px-16" style={{
          marginTop: language === 'he' ? '0' : '0'
        }}>
    <span style={{ 
      fontSize: '10px', 
      letterSpacing: '0.6em', 
      textTransform: 'uppercase', 
      color: '#B2B2B2', 
      marginBottom: '2rem',
      display: 'block'
    }}>
      {lang === 'he' ? 'הסיפור שלי' : 'My Story'}
    </span>
    
    <div style={{ maxWidth: '520px' }}>
      <h2 style={{
        fontWeight: 200, 
        fontSize: 'clamp(1.5rem, 2.5vw, 2.8rem)', 
        lineHeight: 1.2, 
        color: '#1A1A1A',
        marginBottom: '2.5rem',
        letterSpacing: '-0.02em'
      }}>
        Educational & Human-Centered Environments
      </h2>
      
      <div style={{ 
        height: '1px', 
        width: '40px', 
        backgroundColor: '#000', 
        marginBottom: '2.5rem',
        opacity: 0.2
      }} />
      
      <div style={{ 
        fontWeight: 300,
        fontSize: '1.1rem', 
        lineHeight: 1.8, 
        color: '#555'
      }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Many years of thought and action in the educational field led me to understand how spatial design affects human relationships, learning, and the sense of security.
        </p>
        <p>
          In recent years, I have been translating this thinking into the world of design — with the goal of creating educational and residential spaces that allow a person to breathe, grow, and feel at home.
        </p>
      </div>
    </div>
  </div>

  {/* צד ימין: תמונה */}
  <div className="max-md:w-full max-md:h-[60vw]" style={{ 
    width: '50%', 
    height: '100%', 
    position: 'relative',
    overflow: 'hidden'
  }}>
    <img 
      src="/images/MyFamily.png" 
      alt="Family"
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
        objectPosition: 'center 15%'
      }} 
    />
  </div>
</section>

 {/* Section 3: My Approach - Smooth Exit Transition */}
<section style={{ 
  position: 'relative',
  width: '100vw', 
  height: '100vh', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  overflow: 'hidden',
  backgroundColor: '#000'
}}>
  
  {/* תמונת הרקע - חדות משופרת */}
  <div style={{ 
    position: 'absolute',
    inset: 0,
    zIndex: 1
  }}>
    <img 
      src="/images/Approach.png" 
      alt="Approach"
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover',
        objectPosition: 'center',
        filter: 'brightness(0.8)' 
      }} 
    />
    
    {/* שכבות גרדיאנט למעבר חלק */}
    {/* 1. כניסה מלמעלה (מהסקשן הקודם) */}
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, height: '20vh',
      background: 'linear-gradient(to bottom, #FAF9F6 0%, transparent 100%)',
      zIndex: 2
    }} />

    {/* 2. יציאה מלמטה (אל עבר "התהליך שלי") */}
    <div style={{
      position: 'absolute',
      bottom: 0, left: 0, right: 0, height: '25vh',
      background: 'linear-gradient(to top, #FFFFFF 0%, transparent 100%)',
      zIndex: 2
    }} />
  </div>

  {/* תוכן הטקסט - לבן וקריא */}
  <div style={{ 
    position: 'relative',
    zIndex: 3,
    width: '100%',
    padding: '0 10%',
    direction: lang === 'he' ? 'rtl' : 'ltr',
    color: '#FFFFFF' 
  }}>
    <span style={{ 
      fontSize: '10px', 
      letterSpacing: '0.6em', 
      textTransform: 'uppercase', 
      color: 'rgba(255, 255, 255, 0.6)', 
      display: 'block',
      marginBottom: '2rem'
    }}>
      {lang === 'he' ? 'הגישה שלי' : 'My Approach'}
    </span>

    <h2 style={{
      fontWeight: 200,
      fontSize: 'clamp(1.5rem, 2.2vw, 2.5rem)',
      lineHeight: 1.3,
      maxWidth: '800px',
      fontStyle: 'italic',
      marginBottom: '3rem',
      textShadow: '0 2px 15px rgba(0,0,0,0.4)' 
    }}>
      "People need a space that listens to them."
    </h2>

    <div style={{ 
      maxWidth: '700px', 
      fontWeight: 300, 
      fontSize: '1.1rem', 
      lineHeight: 1.8, 
      color: 'rgba(255, 255, 255, 0.9)'
    }}>
      <p style={{ marginBottom: '1.8rem' }}>
        My work rests on a living, evolutionary dialogue between two poles: freedom and structure. I see spaces as a field of movement — movements of light, air, perspective. Of human growth.
      </p>
      <p>
        When a space allows free movement within it, yet also offers a spatial anchor — it transforms from a physical surface into a beneficial existential experience.
      </p>
    </div>
  </div>
</section>

      {/* ── 3. Philosophy — mobile ── */}
      <div className="md:hidden border-b border-silk">
        <div className="px-10 py-12 flex flex-col justify-center bg-[#FAF9F6]">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted mb-10">{about.ourPhilosophy}</p>
          <blockquote
            className="font-sans font-light text-charcoal leading-snug mb-12"
            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.55rem)' }}
          >
            {about.philosophyQuote}
          </blockquote>
          <div className="space-y-6 font-sans text-[12px] text-muted leading-[1.75]">
            {about.phil.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </div>

     {/* Section 4: My Process - Horizontal Layout with Smooth Exit */}
<section style={{ 
  width: '100vw', 
  height: '100vh', 
  backgroundColor: '#FAF9F6', 
  padding: '0 5%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden'
}}>
  
  {/* גרדיאנט יציאה בתחתית המעבר לעמוד הבא */}
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '15vh',
    background: 'linear-gradient(to top, rgba(255,255,255,0) 0%, #FAF9F6 100%)',
    zIndex: 2,
    pointerEvents: 'none'
  }} />

  <h2 style={{
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    fontWeight: 300,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    marginBottom: '10vh',
    textAlign: 'center',
    color: '#1A1A1A'
  }}>
    {lang === 'he' ? 'תהליך העבודה' : 'My Process'}
  </h2>

  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(4, 1fr)', 
    gap: '1.5rem', 
    width: '100%',
    maxWidth: '1200px',
    position: 'relative'
  }}>
    
    <div style={{
      position: 'absolute',
      top: '35px',
      left: '12.5%',
      right: '12.5%',
      height: '1px',
      backgroundColor: '#E5E2DD',
      zIndex: 0
    }} />

    {[
      { id: '01', title: lang === 'he' ? 'השראה' : 'Inspiration', text: lang === 'he' ? 'חיפוש אחר מקור הפלא — הניצוץ שמנחה את כל מסע העיצוב.' : 'Searching for the source of wonder — the spark.', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707' },
      { id: '02', title: lang === 'he' ? 'ניתוח' : 'Analysis', text: lang === 'he' ? 'חקירה עמוקה של מושגים ורעיונות — הבנת המהות לפני השרטוט.' : 'Deep exploration of concepts and ideas.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
      { id: '03', title: lang === 'he' ? 'קונספט' : 'Concept', text: lang === 'he' ? 'גיבוש שפה פרויקטלית קונקרטית — המסגרת שהופכת הכל למלוכד.' : 'Forming a concrete project language.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
      { id: '04', title: lang === 'he' ? 'עיצוב' : 'Design', text: lang === 'he' ? 'תרגום לארגז כלים מרחבי — ממודלים תכנוניים לחללים מעשיים.' : 'Translating into a spatial toolbox.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' }
    ].map((step, index) => (
      <div key={index} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{
          width: '70px',
          height: '70px',
          margin: '0 auto 2rem',
          backgroundColor: '#FFF', 
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #E5E2DD',
          color: '#D47E53', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={step.icon} />
          </svg>
        </div>

        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#C5B4A2', letterSpacing: '0.2em', display: 'block', marginBottom: '0.8rem' }}>
          {step.id}
        </span>

        <h3 style={{ fontSize: '0.9rem', letterSpacing: '0.1em', fontWeight: 500, marginBottom: '1rem', color: '#1A1A1A', textTransform: 'uppercase' }}>
          {step.title}
        </h3>

        <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#666', fontWeight: 300, padding: '0 10%', direction: lang === 'he' ? 'rtl' : 'ltr' }}>
          {step.text}
        </p>
      </div>
    ))}
  </div>
</section>
      {/* ── 5. The Designer ── */}
      <div className="px-6 py-8 md:px-16 mt-0 max-md:h-auto">
        <p className="font-sans text-[13px] tracking-[0.55em] uppercase text-muted mb-8">
          {about.theTeam}
        </p>
        <div className="flex flex-row items-stretch gap-8 md:gap-10 max-md:flex-col">

          {/* Text */}
          <div className="w-1/2 flex flex-col justify-start max-md:w-full">
            <h3 className="font-sans text-[1.65rem] font-medium text-charcoal mb-0">
              {about.team[0]?.name}
            </h3>
<p className="font-sans text-[11px] tracking-[0.2em] uppercase mb-8" style={{ color: '#D47E53', fontWeight: 600 }}>
  {lang === 'he' ? 'מייסד, מנכ"ל ומעצב ראשי' : 'Founder, CEO & Lead Designer'}
</p>

<div className="space-y-3 flex flex-col items-start">

  {/* Education */}
  <div className="flex flex-row items-start justify-start gap-4 w-full text-left">
    <span className="mt-1 flex-shrink-0 opacity-70" style={{ color: '#D47E53' }}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" strokeWidth="1.5" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="1.5" />
      </svg>
    </span>
    <div className="max-w-[480px]">
      <p className="font-sans text-[15px] leading-relaxed text-charcoal opacity-90">
        {lang === 'he'
          ? <>בעל תואר <span className="font-medium text-charcoal">M.A מחקרי בפילוסופיה של החינוך</span> מהאוניברסיטה העברית (בהצטיינות).</>
          : <>Holds a research <span className="font-medium text-charcoal">M.A. in Philosophy of Education</span> from the Hebrew University (With Distinction).</>}
      </p>
      <p className="font-sans text-[13px] leading-relaxed text-charcoal opacity-70 mt-1">
        {lang === 'he'
          ? 'התזה עסקה ביחסי אנוש ואנושיות בלמידה במרחבים פיזיים ודיגיטליים.'
          : 'The thesis examined human-humanity relations in learning across physical and digital spaces.'}
      </p>
    </div>
  </div>

  {/* Interior Design */}
  <div className="flex flex-row items-start justify-start gap-4 w-full text-left">
    <span className="mt-1 flex-shrink-0 opacity-70" style={{ color: '#D47E53' }}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
        <line x1="18" y1="6" x2="6" y2="18" strokeWidth="1.5" />
        <polyline points="8 6 18 6 18 16" strokeWidth="1.5" />
      </svg>
    </span>
    <p className="font-sans text-[15px] leading-relaxed text-charcoal opacity-90 max-w-[480px]">
      {lang === 'he'
        ? <>בוגר <span className="font-medium text-charcoal">לימודי עיצוב פנים</span> בסטודיו 6B.</>
        : <>Graduate of <span className="font-medium text-charcoal">Interior Design studies</span> at Studio 6B Haifa.</>}
    </p>
  </div>

  {/* Project Management */}
  <div className="flex flex-row items-start justify-start gap-4 w-full text-left">
    <span className="mt-1 flex-shrink-0 opacity-70" style={{ color: '#D47E53' }}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
        <rect x="8" y="2" width="8" height="4" rx="1" strokeWidth="1.5" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" strokeWidth="1.5" />
        <line x1="9" y1="12" x2="15" y2="12" strokeWidth="1.5" />
        <line x1="9" y1="16" x2="13" y2="16" strokeWidth="1.5" />
      </svg>
    </span>
    <p className="font-sans text-[15px] leading-relaxed text-charcoal opacity-90 max-w-[480px]">
      {lang === 'he'
        ? <><span className="font-medium text-charcoal">מנהל פרויקטים</span>, בוגר קורס &quot;גישות חדשות לניהול פרויקטים&quot; של המכון הישראלי לפריון העבודה (מיפ&quot;א).</>
        : <><span className="font-medium text-charcoal">Project Manager</span>, graduate of the &quot;New Approaches to Project Management&quot; course by The Israel Management Center (IMC).</>}
    </p>
  </div>

  {/* Family */}
  <div className="flex flex-row items-start justify-start gap-4 w-full text-left">
    <span className="mt-1 flex-shrink-0 opacity-70" style={{ color: '#D47E53' }}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeWidth="1.5" />
      </svg>
    </span>
    <p className="font-sans text-[15px] leading-relaxed text-charcoal opacity-90 max-w-[480px]">
      {lang === 'he'
        ? 'נשוי באושר לענת ואבא גאה לנבו ושי.'
        : 'Happily married to Anat and proud father of Nevo and Shay.'}
    </p>
  </div>

</div>
          </div>

          {/* Image — The Designer: Ofer with son */}
          <div className="w-1/2 flex-shrink-0 bg-white p-1 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden self-stretch mt-4 max-md:w-full max-md:overflow-visible max-md:h-auto max-md:mt-0">
            {/* Mobile only: full uncropped photo, no zoom, object-contain */}
            <img
              src="/images/fatherhood.jpg"
              alt={about.team[0]?.name}
              className="w-full h-auto object-contain hidden max-md:block"
            />
            {/* Desktop: cover crop top — DO NOT MODIFY */}
            <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-sm hidden md:block">
              <img
                src="/images/fatherhood.jpg"
                alt={about.team[0]?.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}