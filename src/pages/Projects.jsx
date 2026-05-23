import { useState } from 'react';
import { useLocale } from '../i18n/context.jsx';
import Header from '../includes/Header';
import Footer from "../includes/Footer.jsx";
import projectsData from '../data/projects.json';

function ProjectCard({ project }) {
  const { t } = useLocale();
  const c = project.color || 'gray';
  const border = `border-${c}-500`;

  return (
    <div className={`bg-gray-800 text-white rounded-xl shadow-2xl overflow-hidden border-t-4 ${border}`}>
      <header className={`p-6 bg-${c}-700`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4">
            {project.logoUrl && (
              <img
                className="max-h-18 max-w-36 w-auto h-auto rounded-xl bg-white/20 p-1 object-contain"
                src={project.logoUrl}
                alt={t(project.titleKey)}
              />
            )}
            <div>
              <h1 className="text-3xl font-extrabold">{t(project.titleKey)}</h1>
              <p className={`text-${c}-100 mt-1`}>{t(project.subtitleKey)}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className={`bg-${c}-500 text-white text-sm font-bold px-3 py-1 rounded-full`}>
              TFG - {project.tfg} {project.year}
            </span>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8">
        <section>
          <h2 className={`text-xl font-bold border-b ${border} pb-2 mb-4 text-${c}-400`}>
            {t('projects.pageTitle')}
          </h2>
          <p className="text-gray-200 leading-relaxed">{t(project.descriptionKey)}</p>
        </section>

        <section className="bg-gray-700 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-white">Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-gray-600 px-3 py-2 rounded-lg"
              >
                <img className="w-5 h-5 object-contain" src={tech.icon} alt={tech.name} />
                <span className="text-sm text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-700 p-5 rounded-lg">
          <h3 className={`text-lg font-semibold mb-3 text-${c}-400`}>Highlights</h3>
          <p className="text-gray-200 text-sm leading-relaxed">{t(project.highlightsKey)}</p>
        </section>

        {project.modulesKey && (
          <section className="bg-gray-700 p-5 rounded-lg">
            <h3 className={`text-lg font-semibold mb-3 text-${c}-400`}>Módulos</h3>
            <p className="text-gray-200 text-sm leading-relaxed">{t(project.modulesKey)}</p>
          </section>
        )}

        {project.videoUrl && (
          <section className="bg-gray-700 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-white">Video Demo</h3>
            <div className="aspect-video w-full">
              <iframe
                src={project.videoUrl}
                className="w-full h-full rounded-lg border-2 border-slate-500"
                title={`Video Demo - ${t(project.titleKey)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {project.repoUrl && (
          <div className="text-center">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block bg-${c}-600 hover:bg-${c}-500 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200`}
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
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState(projectsData[0]?.id || null);

  const activeProject = projectsData.find((p) => p.id === activeTab) || projectsData[0];

  return (
    <div className="min-h-screen bg-stone-100">
      <Header textLogo1="header.logo1" textLogo2="header.logo2" color1="white" color2="indigo" />

      <main className="flex justify-center items-start w-full pt-[10vh] pb-10 bg-gray-950 min-h-screen">
        <div className="w-full md:w-[95vw] max-w-7xl px-4 md:px-0">
          <div className="flex gap-1 mb-6 border-b border-gray-600">
            {projectsData.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(project.id)}
                className={`px-5 py-3 text-sm font-bold rounded-t-lg transition-colors duration-200 cursor-pointer ${
                  activeTab === project.id
                    ? `bg-${project.color}-700 text-white`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {t(project.titleKey)}
              </button>
            ))}
          </div>

          {activeProject && <ProjectCard key={activeProject.id} project={activeProject} />}
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
