import { useState } from 'react';
import { useLocale } from '../i18n/context.jsx';
import Header from '../includes/Header';
import Footer from "../includes/Footer.jsx";
import projectsData from '../data/projects.json';

function ImageShowcase({ images, alt, className = '' }) {
  const [active, setActive] = useState(0);

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full h-full overflow-hidden bg-gray-800">
        {images.map((src, i) => (
          <img
            key={i}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            src={src}
            alt={`${alt} ${i + 1}`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 cursor-pointer ${
                i === active
                  ? 'bg-white w-8 h-2 rounded-full'
                  : 'bg-white/40 w-2 h-2 rounded-full hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  const { t } = useLocale();
  const c = project.color || 'gray';
  const allImgs = project.screenshots || [];

  return (
    <button
      onClick={onSelect}
      className="group relative w-full text-left rounded-2xl overflow-hidden border border-white/5 bg-gray-900 cursor-pointer
        transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 animate-fadeIn"
    >
      <div className="relative h-64 md:h-80">
        {allImgs.length > 0 ? (
          <ImageShowcase images={allImgs} alt={t(project.titleKey)} className="h-full" />
        ) : (
          <div className="w-full h-full bg-gray-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent pointer-events-none" />

        <div className="absolute top-4 right-4 pointer-events-none">
          <span className={`bg-${c}-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}>
            TFG - {project.tfg} {project.year}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 pointer-events-none">
          <div className="flex items-center gap-3 mb-3">
            {project.logoUrl && (
              <img
                className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-white/20 p-1 object-contain"
                src={project.logoUrl}
                alt={t(project.titleKey)}
              />
            )}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold drop-shadow-lg">
                {t(project.titleKey)}
              </h2>
              <p className={`text-sm text-${c}-200 drop-shadow`}>
                {t(project.subtitleKey)}
              </p>
            </div>
          </div>

          <div className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold text-${c}-300
            transition-all duration-300 group-hover:gap-3`}>
            Ver proyecto
            <span className="text-lg">→</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function ProjectDetail({ project, onBack }) {
  const { t } = useLocale();
  const c = project.color || 'gray';
  const allImgs = project.screenshots || [];

  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-2xl overflow-hidden border border-white/5 animate-fadeIn">

      <button
        onClick={onBack}
        className="flex items-center gap-2 px-6 pt-6 pb-0 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-lg">←</span> Volver
      </button>

      {allImgs.length > 0 && (
        <div className="relative h-56 md:h-96">
          <ImageShowcase images={allImgs} alt={t(project.titleKey)} className="h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 pointer-events-none">
            <div className="flex items-center gap-4">
              {project.logoUrl && (
                <img
                  className="h-14 w-14 md:h-18 md:w-18 rounded-xl bg-white/20 p-1 object-contain"
                  src={project.logoUrl}
                  alt={t(project.titleKey)}
                />
              )}
              <div>
                <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-lg">
                  {t(project.titleKey)}
                </h1>
                <p className={`text-sm md:text-base text-${c}-200 mt-1 drop-shadow`}>
                  {t(project.subtitleKey)}
                </p>
              </div>
            </div>
            <span className={`inline-block mt-3 bg-${c}-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}>
              TFG - {project.tfg} {project.year}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 md:p-10 space-y-10">

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className={`text-lg font-bold text-${c}-400 mb-3 uppercase tracking-wider text-sm`}>
              {t('projects.pageTitle')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {t(project.descriptionKey)}
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 backdrop-blur-sm">
            <h3 className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-3">Highlights</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{t(project.highlightsKey)}</p>
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 backdrop-blur-sm">
          <h3 className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-4">Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5 hover:bg-white/10 transition-colors"
              >
                <img className="w-5 h-5 object-contain" src={tech.icon} alt={tech.name} />
                <span className="text-sm text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {project.modulesKey && (
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 backdrop-blur-sm">
            <h3 className={`text-${c}-400 text-xs uppercase tracking-wider font-semibold mb-3`}>Módulos</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{t(project.modulesKey)}</p>
          </div>
        )}

        {project.videoUrl && (
          <div className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="aspect-video w-full">
              <iframe
                src={project.videoUrl}
                className="w-full h-full"
                title={`Video Demo - ${t(project.titleKey)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {project.repoUrl && (
          <div className="text-center pt-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block bg-${c}-600 hover:bg-${c}-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-${c}-500/25`}
            >
              Ver en GitHub →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    const project = projectsData.find((p) => p.id === selected);
    return (
      <div className="min-h-screen bg-stone-100">
        <Header textLogo1="header.logo1" textLogo2="header.logo2" color1="white" color2="indigo" />
        <main className="flex justify-center items-start w-full pt-[10vh] pb-10 bg-gray-950 min-h-screen">
          <div className="w-full md:w-[95vw] max-w-7xl px-4 md:px-0">
            {project && (
              <ProjectDetail project={project} onBack={() => setSelected(null)} />
            )}
          </div>
        </main>
        <Footer text1="footer.cta1" text2="footer.cta2" text3="footer.copyright" color1="gray" color2="indigo" color3="gray" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <Header textLogo1="header.logo1" textLogo2="header.logo2" color1="white" color2="indigo" />

      <main className="flex justify-center items-start w-full pt-[10vh] pb-10 bg-gray-950 min-h-screen">
        <div className="w-full md:w-[95vw] max-w-7xl px-4 md:px-0">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">Proyectos</h1>
            <p className="text-gray-400 mt-2">Toca un proyecto para ver los detalles</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelected(project.id)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer
        text1="footer.cta1"
        text2="footer.cta2"
        text3="footer.copyright"
        color1="gray"
        color2="indigo"
        color3="gray"
      />
    </div>
  );
}
