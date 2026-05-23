import { useLocale } from '../i18n/context.jsx';
import Boton from '../components/Button.jsx';
import { coloresText } from "../assets/lib.js";

const LOCALES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'ca', label: 'CA' },
];

function Header({ textLogo1, textLogo2, color1 = "white", color2 = "indigo" }) {
  const { t, locale, changeLocale } = useLocale();

  return (
    <header
      className="flex justify-between items-center p-4 border-b border-slate-950 bg-sky-950 h-[8vh]
      fixed z-10 w-full shadow-[0_10px_10px_rgba(0,0,0,0.5)] select-none">
      <div className="flex items-center gap-4">
        <a href="#/" className={`text-xl font-bold ${coloresText[color1]?.secundario || "text-white"}`}>
          {t(textLogo1)}{" "}
          <span className={coloresText[color2]?.secundario}>
            {t(textLogo2)}
          </span>
        </a>
        <div className="flex gap-1 ml-2">
          {LOCALES.map((loc) => (
            <button
              key={loc.code}
              onClick={() => changeLocale(loc.code)}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors duration-200 cursor-pointer ${
                locale === loc.code
                  ? 'bg-indigo-500 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-indigo-800'
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>
      </div>

      <nav className="flex gap-2">
        <Boton texto={t('header.tfg')} url="#/tfg" color="indigo" />
        <Boton texto={t('header.cv')} url="resources/CV - David Duque Díaz.pdf" color="indigo" principal={true} download="CV - David Duque Díaz.pdf" />
      </nav>
    </header>
  );
}

export default Header;
