import { useLocale } from '../i18n/context.jsx';
import profileData from '../data/profile.json';

const STACK = [
  { src: '/img/icon-vite.svg',     alt: 'Vite' },
  { src: '/img/icon-react.svg',    alt: 'React' },
  { src: '/img/icon-tailwind.svg', alt: 'Tailwind CSS' },
];

function Footer({ text1, text2, text3 }) {
  const { t } = useLocale();

  return (
    <footer className="bg-gray-900 border-t border-white/5">

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-100 tracking-wide leading-tight">
              {t(text1)}
            </p>
            <p className="text-3xl md:text-4xl font-extrabold text-indigo-400 tracking-wide leading-tight">
              {t(text2)}
            </p>
          </div>
          <a href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500
              text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm
              whitespace-nowrap group flex-shrink-0">
            {profileData.email}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-5
          flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 tracking-wider font-medium">
            {t(text3)}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600">{t('footer.builtWith')}</span>
            {STACK.map(s => (
              <img key={s.alt} src={s.src} alt={s.alt}
                className="h-4 w-4 opacity-40 hover:opacity-75 transition-opacity" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
