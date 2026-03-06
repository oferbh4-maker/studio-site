'use client';

import { useState } from 'react';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const { contact } = t;

  const [name, setName]               = useState('');
  const [email, setEmail]             = useState('');
  const [phone, setPhone]             = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage]         = useState('');
  const [status, setStatus]           = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^[\d\s\-+()]{7,}$/.test(phone);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!emailValid || !phoneValid || status === 'submitting') return;
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '0b96e036-6189-4cc0-880e-df4b20c4ca1c',
          name, email, phone, project_type: projectType, message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setName(''); setEmail(''); setPhone(''); setProjectType(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const isDisabled = !emailValid || !phoneValid || status === 'submitting';
  const inputCls = 'w-full bg-transparent font-sans font-light text-sm text-charcoal/80 py-0.5 outline-none transition-colors placeholder:text-charcoal/20 placeholder:font-light';
  const labelCls     = 'block font-sans text-[9px] tracking-[0.3em] uppercase text-muted mb-0.5';
  const infoLabelCls = 'block font-sans text-[8px] font-normal tracking-[0.3em] uppercase text-charcoal/40 mb-3';

  return (
    <div
      className="pt-[80px] flex flex-col"
      style={{ minHeight: '100vh' }}
      dir={lang === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col flex-1 md:justify-center overflow-y-auto">

        {/* Header */}
        <div className="px-6 md:px-14 pt-6 pb-4 border-b border-silk">
          <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-muted mb-0.5">
            {contact.getInTouch}
          </p>
          <h1
            className="font-sans font-light text-charcoal leading-tight mt-4 md:mt-10"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)' }}
          >
            {contact.headline}
          </h1>
        </div>

        {/* Two-column on desktop, single column on mobile (info first, form second) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-silk">

          {/* Info panel — first on mobile (order-1), right on desktop (order-2) */}
          <div className="order-1 md:order-2 px-6 md:px-14 py-8 md:py-6 space-y-8 md:space-y-10 bg-[#F9F9F9] border-b md:border-b-0 border-silk">
            <div>
              <p className={infoLabelCls}>{contact.studioLabel}</p>
              <div className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.5} className="flex-shrink-0 text-charcoal/50" />
                <address className="not-italic font-sans text-sm text-charcoal leading-snug">{contact.studioAddress}</address>
              </div>
            </div>
            <div>
              <p className={infoLabelCls}>{contact.contactLabel}</p>
              <div className="space-y-2 font-sans text-sm text-charcoal">
                <a href={`https://mail.google.com/mail/?view=cm&to=${contact.email}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-muted transition-colors duration-200">
                  <Mail size={14} strokeWidth={1.5} className="flex-shrink-0 text-charcoal/50" />
                  <span>{contact.email}</span>
                </a>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:text-muted transition-colors duration-200">
                  <Phone size={14} strokeWidth={1.5} className="flex-shrink-0 text-charcoal/50" />
                  <span>{contact.phone}</span>
                </a>
              </div>
            </div>
            <div>
              <p className={infoLabelCls}>{contact.hoursLabel}</p>
              <div className="space-y-0.5 font-sans text-sm text-charcoal">
                <p>{contact.hoursWeekdays}</p>
                <p className="text-muted">{contact.hoursNote}</p>
              </div>
            </div>
            <div>
              <p className={infoLabelCls}>{contact.followLabel}</p>
              <div className="flex flex-wrap gap-5">
                {[
                  { label: 'Instagram', Icon: Instagram, href: 'https://www.instagram.com/oferbenhorin/' },
                  { label: 'Facebook',  Icon: Facebook,  href: 'https://www.facebook.com/profile.php?id=61584449289296' },
                  { label: 'WhatsApp',  Icon: MessageCircle, href: 'https://wa.me/972549044435' },
                ].map(({ label, Icon, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 font-sans text-[10px] tracking-wider uppercase text-charcoal/60 hover:text-charcoal transition-colors duration-200">
                    <Icon size={15} strokeWidth={1.5} className="flex-shrink-0" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form — second on mobile (order-2), left on desktop (order-1) */}
          <div className="order-2 md:order-1 px-6 md:px-14 py-8 md:py-6 md:border-e border-silk">
            {status === 'success' ? (
              <div className="flex flex-col justify-center py-6">
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-muted mb-3">
                  {lang === 'he' ? 'ההודעה נשלחה' : 'Message received'}
                </p>
                <h2
                  className="font-sans font-light text-charcoal leading-snug mb-2"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}
                >
                  {lang === 'he' ? 'תודה רבה!' : 'Thank you!'}
                </h2>
                <p className="font-sans text-sm text-muted">
                  {lang === 'he'
                    ? 'קיבלתי את הפנייה שלך ואחזור אליך בקרוב.'
                    : 'I will get back to you soon.'}
                </p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label className={labelCls}>{contact.formName}</label>
                  <input type="text" name="name" dir="auto"
                    placeholder={contact.formNamePlaceholder} value={name}
                    onChange={e => setName(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{contact.formEmail}</label>
                  <input type="email" name="email" dir="auto"
                    placeholder={contact.formEmailPlaceholder} value={email}
                    onChange={e => setEmail(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{contact.formPhone}</label>
                  <input type="tel" name="phone" dir="auto"
                    placeholder={contact.formPhonePlaceholder} value={phone}
                    onChange={e => setPhone(e.target.value.replace(/[^\d\s\-+()]/g, ''))}
                    className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{contact.formProjectType}</label>
                  <select name="project_type" dir="auto" value={projectType}
                    onChange={e => setProjectType(e.target.value)}
                    className={inputCls + ' cursor-pointer appearance-none'}>
                    <option value="">{contact.formSelectOne}</option>
                    <option value="residential">{contact.formResidential}</option>
                    <option value="commercial">{contact.formCommercial}</option>
                    <option value="hospitality">{contact.formHospitality}</option>
                    <option value="other">{contact.formOther}</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{contact.formMessage}</label>
                  <textarea name="message" rows={3} dir="auto"
                    placeholder={contact.formMessagePlaceholder} value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={inputCls + ' resize-none'} />
                </div>
                {status === 'error' && (
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted pt-1">
                    {lang === 'he' ? 'שגיאה בשליחה. נסה שוב.' : 'Something went wrong. Please try again.'}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Submit Button */}
        {status !== 'success' && (
          <div className="mt-6 md:mt-12 pb-8 md:pb-4 px-6 md:px-0 flex items-center justify-center">
            <button
              type="submit"
              form="contact-form"
              disabled={isDisabled}
              className={[
                'font-sans text-[11px] tracking-[0.2em] uppercase w-full md:w-auto md:px-10 py-3 md:py-2.5 border transition-all duration-300',
                isDisabled
                  ? 'text-muted bg-transparent border-silk cursor-not-allowed'
                  : 'text-white bg-black border-black hover:scale-105',
              ].join(' ')}
            >
              {status === 'submitting'
                ? (lang === 'he' ? 'שולח...' : 'Sending...')
                : contact.formSubmit}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}