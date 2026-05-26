import { useRef, useState, useEffect } from 'react';
import { useLocale } from '../i18n/context.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const LOCALES = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'ca', label: 'Català' },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] flex-shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
      className="w-[11px] h-[11px] flex-shrink-0 transition-transform duration-200"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function LocaleDropdown() {
  const { locale, changeLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const current = LOCALES.find(l => l.code === locale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg
          transition-all duration-150 cursor-pointer select-none
          text-gray-500 dark:text-gray-400
          hover:text-gray-900 dark:hover:text-white
          hover:bg-gray-100 dark:hover:bg-white/8">
        <GlobeIcon />
        <span>{current.code.toUpperCase()}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-32 rounded-xl overflow-hidden
          shadow-lg shadow-black/10 dark:shadow-black/40
          border border-gray-200 dark:border-white/10
          bg-white dark:bg-gray-900
          z-50">
          {LOCALES.map(loc => (
            <button
              key={loc.code}
              onClick={() => { changeLocale(loc.code); setOpen(false); }}
              className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold
                transition-colors duration-100 cursor-pointer
                ${locale === loc.code
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                }`}>
              {loc.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header({ textLogo1, textLogo2 }) {
  const { t } = useLocale();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed z-10 w-full h-[60px]
      bg-stone-50/90 dark:bg-gray-950/90
      backdrop-blur-md
      border-b border-gray-200 dark:border-white/8
      flex items-center justify-between px-4 md:px-8 select-none">

      {/* Left — logo */}
      <a href="#/" className="text-lg font-extrabold tracking-tight
        text-gray-900 dark:text-white">
        {t(textLogo1)}{' '}
        <span className="text-indigo-600 dark:text-indigo-400">
          {t(textLogo2)}
        </span>
      </a>

      {/* Right — controls */}
      <div className="flex items-center gap-1">

        <button onClick={toggleTheme} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          className="p-2 rounded-lg transition-all duration-200 cursor-pointer
            text-gray-500 dark:text-gray-400
            hover:text-gray-900 dark:hover:text-white
            hover:bg-gray-100 dark:hover:bg-white/8">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <LocaleDropdown />

        <a href="#/projects"
          className="hidden sm:inline-flex text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200
            text-gray-600 dark:text-gray-300
            hover:text-gray-900 dark:hover:text-white
            hover:bg-gray-100 dark:hover:bg-white/8">
          {t('header.projects')}
        </a>

        <a href="resources/CV - David Duque Díaz.pdf"
          download="CV - David Duque Díaz.pdf"
          className="text-sm font-semibold px-3 sm:px-4 py-2 rounded-xl transition-all duration-200
            bg-indigo-600 hover:bg-indigo-500 text-white">
          <span className="sm:hidden">CV ↓</span>
          <span className="hidden sm:inline">{t('header.cv')} ↓</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
