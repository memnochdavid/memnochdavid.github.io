import { useLocale } from '../i18n/context.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const LOCALES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'ca', label: 'CA' },
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

function Header({ textLogo1, textLogo2 }) {
  const { t, locale, changeLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed z-10 w-full h-[60px]
      bg-stone-50/90 dark:bg-gray-950/90
      backdrop-blur-md
      border-b border-gray-200 dark:border-white/8
      flex items-center justify-between px-4 md:px-8 select-none">

      {/* Left — logo + locale */}
      <div className="flex items-center gap-4">
        <a href="#/" className="text-lg font-extrabold tracking-tight
          text-gray-900 dark:text-white">
          {t(textLogo1)}{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            {t(textLogo2)}
          </span>
        </a>

        <div className="flex gap-0.5">
          {LOCALES.map(loc => (
            <button key={loc.code} onClick={() => changeLocale(loc.code)}
              className={`text-xs font-semibold px-2 py-1 rounded-lg transition-all duration-150 cursor-pointer ${
                locale === loc.code
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/8'
              }`}>
              {loc.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right — theme toggle + nav */}
      <div className="flex items-center gap-1">

        <button onClick={toggleTheme} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          className="p-2 rounded-lg transition-all duration-200 cursor-pointer
            text-gray-500 dark:text-gray-400
            hover:text-gray-900 dark:hover:text-white
            hover:bg-gray-100 dark:hover:bg-white/8">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <a href="#/projects"
          className="text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200
            text-gray-600 dark:text-gray-300
            hover:text-gray-900 dark:hover:text-white
            hover:bg-gray-100 dark:hover:bg-white/8">
          {t('header.projects')}
        </a>

        <a href="resources/CV - David Duque Díaz.pdf"
          download="CV - David Duque Díaz.pdf"
          className="text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200
            bg-indigo-600 hover:bg-indigo-500 text-white">
          {t('header.cv')} ↓
        </a>
      </div>
    </header>
  );
}

export default Header;
