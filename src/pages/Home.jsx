import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../i18n/context.jsx';
import Header from '../includes/Header';
import Footer from '../includes/Footer.jsx';
import profileData from '../data/profile.json';
import educationData from '../data/education.json';
import experienceData from '../data/experience.json';
import languagesData from '../data/languages.json';
import skillsData from '../data/skills.json';

function useInView(threshold = 0.12) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(20px)',
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.98-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 flex-shrink-0">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-widest font-semibold mb-2
        text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold
        text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-4 h-px bg-gradient-to-r from-indigo-500/40 dark:from-indigo-500/60 to-transparent" />
    </div>
  );
}

const SKILL_CATEGORIES = [
  { id: 'frontend', label: 'Frontend', accent: 'text-sky-600 dark:text-sky-400' },
  { id: 'backend',  label: 'Backend',  accent: 'text-violet-600 dark:text-violet-400' },
  { id: 'mobile',   label: 'Mobile',   accent: 'text-emerald-600 dark:text-emerald-400' },
  { id: 'database', label: 'Database', accent: 'text-amber-600 dark:text-amber-400' },
  { id: 'devops',   label: 'DevOps',   accent: 'text-cyan-600 dark:text-cyan-400' },
];

function SkillChip({ skill }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-default
      bg-gray-100 border border-gray-200 hover:border-gray-300 hover:bg-gray-200
      dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/8">
      <img src={skill.urlImgFlag} alt={skill.name} className="w-5 h-5 object-contain flex-shrink-0" />
      <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
    </div>
  );
}

function TimelineEntry({ title, subtitle, description, years, location, badge, recommendationUrl, recommendationLabel, delay = 0 }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} className="relative pl-8" style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateX(-16px)',
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      <span className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full z-10
        border-2 border-indigo-500
        bg-stone-50 dark:bg-gray-950" />

      <div className="rounded-xl p-5 transition-colors
        bg-white border border-gray-200 hover:border-gray-300
        dark:bg-white/[0.03] dark:border-white/5 dark:hover:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="font-bold text-base leading-snug
            text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-xs font-medium shrink-0
            text-indigo-600 dark:text-indigo-400">
            {years}
          </span>
        </div>
        {subtitle && (
          <p className="text-sm font-medium mb-1
            text-gray-700 dark:text-gray-300">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-sm leading-relaxed
            text-gray-500 dark:text-gray-500">
            {description}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          {location && (
            <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
              <PinIcon /> {location}
            </span>
          )}
          {badge && (
            <span className="text-xs px-2 py-0.5 rounded-full
              bg-indigo-50 text-indigo-700 border border-indigo-200
              dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20">
              {badge}
            </span>
          )}
          {recommendationUrl && (
            <a href={recommendationUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium
                text-indigo-600 dark:text-indigo-400 hover:underline">
              <FileIcon /> {recommendationLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { t, locale } = useLocale();

  const skillsByCategory = SKILL_CATEGORIES
    .map(cat => ({ ...cat, skills: skillsData.filter(s => s.category === cat.id) }))
    .filter(cat => cat.skills.length > 0);

  const yearOf = (dateStr) => dateStr?.split('/')?.[2] ?? '';

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header textLogo1="header.logo1" textLogo2="header.logo2" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-white/5">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, var(--hero-glow) 0%, transparent 100%)' }} />

        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

            {/* Avatar */}
            <Reveal className="flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden
                  ring-2 ring-indigo-500/50 dark:ring-indigo-500/60
                  ring-offset-4 ring-offset-stone-50 dark:ring-offset-gray-950">
                  <img src={profileData.avatarUrl} alt="David Duque Díaz"
                    className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 rounded-full
                  shadow-[0_0_50px_rgba(99,102,241,0.15)] dark:shadow-[0_0_50px_rgba(99,102,241,0.25)]" />
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={100} className="flex-1 text-center md:text-left space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-3
                  text-indigo-600 dark:text-indigo-400">
                  {t('profile.role')}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none
                  text-gray-900 dark:text-white">
                  {t('profile.name')}
                </h1>
                <p className="text-base md:text-lg font-medium mt-3
                  text-gray-500 dark:text-gray-400">
                  {t('profile.title')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center md:items-start justify-center md:justify-start">
                <a href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-1.5 text-sm transition-colors
                    text-gray-500 hover:text-indigo-600
                    dark:text-gray-400 dark:hover:text-indigo-300">
                  <MailIcon /> {profileData.email}
                </a>
                <span className="hidden sm:block text-gray-300 dark:text-white/10">·</span>
                <a href={`tel:${profileData.phone.replace(/[\s()]/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-sm transition-colors
                    text-gray-500 hover:text-indigo-600
                    dark:text-gray-400 dark:hover:text-indigo-300">
                  <PhoneIcon /> {profileData.phone}
                </a>
              </div>

              <div className="flex gap-3 justify-center md:justify-start">
                <a href="resources/CV - David Duque Díaz.pdf" download
                  className="inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm
                    bg-indigo-600 hover:bg-indigo-500">
                  {t('header.cv')} ↓
                </a>
                <a href="#/projects"
                  className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm group
                    bg-gray-100 border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-200
                    dark:bg-white/5 dark:border-white/10 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10">
                  {t('header.projects')}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-20 md:space-y-28 py-16 md:py-24">

        {/* ── SKILLS ── */}
        <section>
          <Reveal>
            <SectionHeader eyebrow={t('sections.eyebrow.techStack')} title={t('sections.skills')} />
          </Reveal>
          <div className="space-y-8">
            {skillsByCategory.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 60}>
                <div>
                  <p className={`text-xs uppercase tracking-wider font-semibold mb-3 ${cat.accent}`}>
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <SkillChip key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section>
          <Reveal>
            <SectionHeader eyebrow={t('sections.eyebrow.education')} title={t('sections.education')} />
          </Reveal>
          <div className="relative border-l-2 border-indigo-500/20 dark:border-indigo-500/15 ml-2 space-y-5">
            {educationData.map((entry, i) => (
              <TimelineEntry
                key={entry.id}
                title={t(entry.titleKey)}
                subtitle={t(entry.centerKey)}
                years={`${yearOf(entry.startDate)} – ${yearOf(entry.endDate) || t('sections.present')}`}
                location={entry.location}
                badge={t(entry.levelKey)}
                delay={i * 80}
              />
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section>
          <Reveal>
            <SectionHeader eyebrow={t('sections.eyebrow.experience')} title={t('sections.experience')} />
          </Reveal>
          <div className="relative border-l-2 border-indigo-500/20 dark:border-indigo-500/15 ml-2 space-y-5">
            {experienceData.map((entry, i) => (
              <TimelineEntry
                key={entry.id}
                title={t(entry.titleKey)}
                subtitle={entry.companyKey && t(entry.companyKey) ? t(entry.companyKey) : null}
                description={t(entry.descriptionKey)}
                years={`${yearOf(entry.startDate)} – ${yearOf(entry.endDate) || t('sections.present')}`}
                location={entry.location}
                recommendationUrl={entry.recommendation?.[locale]}
                recommendationLabel={t('sections.recommendation')}
                delay={i * 80}
              />
            ))}
          </div>
        </section>

        {/* ── LANGUAGES ── */}
        <section>
          <Reveal>
            <SectionHeader eyebrow={t('sections.eyebrow.languages')} title={t('sections.languages')} />
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap gap-4">
              {languagesData.map(lang => (
                <div key={lang.id}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl transition-colors cursor-default
                    bg-white border border-gray-200 hover:border-gray-300
                    dark:bg-white/[0.03] dark:border-white/5 dark:hover:border-white/10">
                  <img src={lang.urlImgFlag} alt={t(lang.nameKey)}
                    className="w-9 h-6 object-cover rounded shadow-sm flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                      {t(lang.nameKey)}
                    </p>
                    <p className="text-xs mt-0.5 text-gray-400 dark:text-gray-500">
                      {t(lang.categoryKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

      </div>

      <Footer
        text1="footer.cta1"
        text2="footer.cta2"
        text3="footer.copyright"
      />
    </div>
  );
}
