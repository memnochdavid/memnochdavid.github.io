import { useState, useEffect, useRef } from 'react';
import { useLocale } from '../i18n/context.jsx';
import Header from '../includes/Header';
import Footer from '../includes/Footer.jsx';
import projectsData from '../data/projects.json';

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
      transform: inView ? 'none' : 'translateY(22px)',
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

function Pills({ text, accentClass }) {
  if (!text) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {text.split(' · ').map((item, i) => (
        <span key={i} className={`text-xs font-medium px-3 py-1 rounded-full
          bg-gray-100 border border-gray-200
          dark:bg-white/5 dark:border-white/10
          ${accentClass}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

const STACK_CONFIGS_LANDSCAPE = [
  { z: 1, tx: 128, ty: 64, rot: 8,   opacity: 0.25, delay: 0 },
  { z: 2, tx: 96,  ty: 48, rot: 6,   opacity: 0.35, delay: 150 },
  { z: 3, tx: 64,  ty: 32, rot: 5,   opacity: 0.55, delay: 300 },
  { z: 4, tx: 32,  ty: 16, rot: 2.5, opacity: 0.75, delay: 450 },
  { z: 5, tx: 0,   ty: 0,  rot: 0,   opacity: 1,    delay: 600 },
];

const STACK_CONFIGS_PORTRAIT = [
  { z: 1, tx: 160, ty: 20, rot: 8,   opacity: 0.25, delay: 0 },
  { z: 2, tx: 120, ty: 15, rot: 6,   opacity: 0.35, delay: 150 },
  { z: 3, tx: 80,  ty: 10, rot: 4,   opacity: 0.55, delay: 300 },
  { z: 4, tx: 40,  ty: 5,  rot: 2,   opacity: 0.75, delay: 450 },
  { z: 5, tx: 0,   ty: 0,  rot: 0,   opacity: 1,    delay: 600 },
];

function StackedScreenshots({ images, inView, interactive = false, portrait = false }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  const paddingTop = portrait ? '222%' : '62%';
  const wrapStyle = portrait ? { maxWidth: 260, margin: '0 auto' } : {};
  const CONFIGS = portrait ? STACK_CONFIGS_PORTRAIT : STACK_CONFIGS_LANDSCAPE;

  // Once the entry stagger completes, remove delays so cycling is instant
  useEffect(() => {
    if (!inView || hasEntered) return;
    const maxDelay = CONFIGS[CONFIGS.length - 1].delay;
    const t = setTimeout(() => setHasEntered(true), maxDelay + 800);
    return () => clearTimeout(t);
  }, [inView]); // eslint-disable-line

  if (!images?.length) {
    return (
      <div style={wrapStyle}>
        <div className="relative w-full rounded-2xl bg-gray-200 dark:bg-gray-800/40 border border-gray-200 dark:border-white/5"
          style={{ paddingTop }} />
      </div>
    );
  }

  const total = images.length;
  const showCount = Math.min(total, CONFIGS.length);

  return (
    <div className="relative select-none" style={wrapStyle}>
      <div className="relative w-full" style={{ paddingTop }}>
        {images.map((src, imgIdx) => {
          // Each image has a stable key → its card persists and animates between positions
          const stackSlot = (imgIdx - activeIdx + total) % total;
          const isVisible = stackSlot < showCount;
          const cfg = isVisible ? CONFIGS[CONFIGS.length - 1 - stackSlot] : null;
          const isFront = stackSlot === 0;

          const tx      = isVisible ? cfg.tx  : CONFIGS[0].tx + 80;
          const ty      = isVisible ? cfg.ty  : CONFIGS[0].ty;
          const rot     = isVisible ? cfg.rot : CONFIGS[0].rot + 2;
          const opacity = isVisible ? cfg.opacity : 0;
          const zIndex  = isVisible ? cfg.z : 0;
          const delay   = !hasEntered && isVisible ? cfg.delay : 0;

          return (
            <div
              key={imgIdx}
              onClick={isFront && interactive && total > 1
                ? () => setActiveIdx(p => (p + 1) % total)
                : undefined}
              className={`absolute inset-0 rounded-2xl overflow-hidden ${
                isFront && interactive && total > 1 ? 'cursor-pointer' : ''
              }`}
              style={{
                zIndex,
                boxShadow: isVisible ? '0 24px 64px -12px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)' : 'none',
                transform: !inView
                  ? `translate(${tx + 120}px, ${ty}px) rotate(${rot}deg)`
                  : `translate(${tx}px, ${ty}px) rotate(${rot}deg)`,
                opacity: !inView ? 0 : opacity,
                transition: `transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.45s ease ${delay}ms`,
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
              {isFront && interactive && total > 1 && (
                <div className="absolute inset-0 bg-black/0 hover:bg-black/8 transition-colors" />
              )}
            </div>
          );
        })}
      </div>

      {interactive && total > 1 && (
        <div className="flex justify-center gap-3 mt-8" style={{ position: 'relative', zIndex: 10 }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => setActiveIdx(i)}
              className={`transition-all duration-300 cursor-pointer ${
                i === activeIdx
                  ? 'bg-white w-6 h-2 rounded-full'
                  : 'bg-white/30 w-2 h-2 rounded-full hover:bg-white/60'
              }`} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectSection({ project, onSelect }) {
  const { t } = useLocale();
  const c = project.color || 'gray';
  const [ref, inView] = useInView(0.08);

  return (
    <section ref={ref} className="py-16 md:py-24 border-b border-gray-200 dark:border-white/5 last:border-b-0">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Text */}
        <div className="space-y-5 order-2 md:order-1" style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateX(-20px)',
          transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 80ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) 80ms',
        }}>
          <div className="flex items-center gap-4">
            {project.logoUrl && (
              <img src={project.logoUrl} alt="" className="h-12 w-12 rounded-xl object-contain flex-shrink-0
                bg-gray-100 dark:bg-white/10 p-1.5" />
            )}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                {t(project.titleKey)}
              </h2>
              <p className={`text-sm mt-0.5 text-${c}-600 dark:text-${c}-300`}>
                {t(project.subtitleKey)}
              </p>
            </div>
          </div>

          <span className={`inline-block bg-${c}-500 text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
            TFG · {project.tfg} {project.year}
          </span>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            {t(project.descriptionKey)}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map(tech => (
              <span key={tech.name}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs
                  bg-gray-100 border border-gray-200 text-gray-700
                  dark:bg-white/5 dark:border-white/10 dark:text-gray-300">
                <img src={tech.icon} alt="" className="w-3.5 h-3.5 object-contain" />
                {tech.name}
              </span>
            ))}
          </div>

          <button onClick={onSelect}
            className={`inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer group
              bg-${c}-600 hover:bg-${c}-500`}>
            {t('projects.viewProject')}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Screenshots */}
        <div className="order-1 md:order-2" style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.5s ease 0ms',
        }}>
          <StackedScreenshots images={project.screenshots || []} inView={inView} interactive={true}
            portrait={project.screenshotAspect === 'portrait'} />
        </div>
      </div>
    </section>
  );
}

function ProjectDetail({ project, onBack }) {
  const { t } = useLocale();
  const c = project.color || 'gray';
  const [heroRef, heroInView] = useInView(0.08);

  return (
    <div className="text-gray-900 dark:text-white space-y-8 md:space-y-12">

      <button onClick={onBack}
        className="flex items-center gap-2 text-sm transition-colors cursor-pointer
          text-gray-500 hover:text-gray-900
          dark:text-gray-400 dark:hover:text-white">
        ← {t('projects.back')}
      </button>

      {/* Hero */}
      <div ref={heroRef} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-4 order-2 md:order-1" style={{
          opacity: heroInView ? 1 : 0,
          transform: heroInView ? 'none' : 'translateX(-20px)',
          transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 80ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) 80ms',
        }}>
          <div className="flex items-center gap-4">
            {project.logoUrl && (
              <img src={project.logoUrl} alt="" className="h-14 w-14 rounded-xl object-contain flex-shrink-0
                bg-gray-100 dark:bg-white/10 p-1.5" />
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                {t(project.titleKey)}
              </h1>
              <p className={`text-sm mt-1 text-${c}-600 dark:text-${c}-300`}>
                {t(project.subtitleKey)}
              </p>
            </div>
          </div>
          <span className={`inline-block bg-${c}-500 text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
            TFG · {project.tfg} {project.year}
          </span>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            {t(project.descriptionKey)}
          </p>
        </div>

        <div className="order-1 md:order-2" style={{
          opacity: heroInView ? 1 : 0,
          transition: 'opacity 0.5s ease 0ms',
        }}>
          <StackedScreenshots images={project.screenshots || []} inView={heroInView} interactive={true}
            portrait={project.screenshotAspect === 'portrait'} />
        </div>
      </div>

      {project.screenshotAspect === 'portrait' && project.videoUrl ? (
        /* Portrait layout: highlights + stack on the left, vertical video on the right */
        <Reveal>
          <div className="flex flex-col md:flex-row gap-6 items-start">

            <div className="flex-1 flex flex-col gap-6">
              <div className="rounded-2xl p-6
                bg-white border border-gray-200
                dark:bg-white/[0.03] dark:border-white/5">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-4
                  text-gray-400 dark:text-white/50">
                  {t('projects.labels.highlights')}
                </h3>
                <Pills text={t(project.highlightsKey)} accentClass={`text-${c}-700 dark:text-${c}-300`} />
              </div>

              <div className="rounded-2xl p-6
                bg-white border border-gray-200
                dark:bg-white/[0.03] dark:border-white/5">
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-4
                  text-gray-400 dark:text-white/50">
                  {t('projects.labels.stack')}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map(tech => (
                    <div key={tech.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                        bg-gray-100 border border-gray-200 hover:bg-gray-200
                        dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10">
                      <img className="w-5 h-5 object-contain" src={tech.icon} alt={tech.name} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-64 shrink-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 aspect-[9/16]">
              <iframe src={project.videoUrl} className="w-full h-full block"
                title={`Demo · ${t(project.titleKey)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen />
            </div>

          </div>
        </Reveal>
      ) : (
        /* Default layout: stacked sections */
        <>
          <Reveal>
            <div className="rounded-2xl p-6
              bg-white border border-gray-200
              dark:bg-white/[0.03] dark:border-white/5">
              <h3 className="text-xs uppercase tracking-wider font-semibold mb-4
                text-gray-400 dark:text-white/50">
                {t('projects.labels.highlights')}
              </h3>
              <Pills text={t(project.highlightsKey)} accentClass={`text-${c}-700 dark:text-${c}-300`} />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="rounded-2xl p-6
              bg-white border border-gray-200
              dark:bg-white/[0.03] dark:border-white/5">
              <h3 className="text-xs uppercase tracking-wider font-semibold mb-4
                text-gray-400 dark:text-white/50">
                {t('projects.labels.stack')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.stack.map(tech => (
                  <div key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                      bg-gray-100 border border-gray-200 hover:bg-gray-200
                      dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10">
                    <img className="w-5 h-5 object-contain" src={tech.icon} alt={tech.name} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {project.videoUrl && (
            <Reveal delay={120}>
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5">
                <div className="aspect-video w-full">
                  <iframe src={project.videoUrl} className="w-full h-full"
                    title={`Demo · ${t(project.titleKey)}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen />
                </div>
              </div>
            </Reveal>
          )}
        </>
      )}

      {/* Modules — always full width */}
      {project.modulesKey && (
        <Reveal delay={60}>
          <div className="rounded-2xl p-6
            bg-white border border-gray-200
            dark:bg-white/[0.03] dark:border-white/5">
            <h3 className={`text-xs uppercase tracking-wider font-semibold mb-4 text-${c}-600 dark:text-${c}-400`}>
              {t('projects.labels.modules')}
            </h3>
            <Pills text={t(project.modulesKey)} accentClass={`text-${c}-700 dark:text-${c}-200`} />
          </div>
        </Reveal>
      )}

      {/* Repo */}
      {project.repoUrl && (
        <Reveal delay={200}>
          <div className="text-center pt-2">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-block text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200
                bg-${c}-600 hover:bg-${c}-500`}>
              {t('projects.labels.viewOnGithub')}
            </a>
          </div>
        </Reveal>
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useLocale();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selected]);

  if (selected) {
    const project = projectsData.find(p => p.id === selected);
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-gray-950">
        <Header textLogo1="header.logo1" textLogo2="header.logo2" />
        <main className="pt-[10vh] pb-16 overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {project && <ProjectDetail project={project} onBack={() => setSelected(null)} />}
          </div>
        </main>
        <Footer text1="footer.cta1" text2="footer.cta2" text3="footer.copyright" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950">
      <Header textLogo1="header.logo1" textLogo2="header.logo2" />
      <main className="pt-[10vh] pb-16 overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          <Reveal className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest font-medium mb-4
              text-gray-400 dark:text-gray-500">
              {t('projects.eyebrow')}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4
              text-gray-900 dark:text-white">
              {t('projects.pageTitle')}
            </h1>
            <p className="max-w-xl mx-auto text-sm md:text-base
              text-gray-500 dark:text-gray-400">
              {t('projects.subtitle')}
            </p>
          </Reveal>

          {projectsData.map(project => (
            <ProjectSection key={project.id} project={project} onSelect={() => setSelected(project.id)} />
          ))}
        </div>
      </main>
      <Footer text1="footer.cta1" text2="footer.cta2" text3="footer.copyright" />
    </div>
  );
}
