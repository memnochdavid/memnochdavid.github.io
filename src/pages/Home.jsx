import { useLocale } from '../i18n/context.jsx';
import Header from '../includes/Header';
import Profile from '../components/Profile.jsx';
import Footer from "../includes/Footer.jsx";
import Separator from "../components/Separator.jsx";
import Item from "../components/Item.jsx";
import profileData from '../data/profile.json';
import educationData from '../data/education.json';
import experienceData from '../data/experience.json';
import languagesData from '../data/languages.json';
import skillsData from '../data/skills.json';

function EducationEntry({ entry }) {
  const { t } = useLocale();
  return (
    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
      <p className="text-xl font-bold text-gray-900">{t(entry.titleKey)}</p>
      <p>{t(entry.centerKey)}</p>
      <p>{entry.startDate} - {entry.endDate}</p>
      <p>{entry.location}</p>
      <h4 className="text-large font-bold text-gray-900">{t(entry.levelKey)}</h4>
    </div>
  );
}

function ExperienceEntry({ entry }) {
  const { t } = useLocale();
  return (
    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
      <p className="text-xl font-bold text-gray-900">{t(entry.titleKey)}</p>
      {entry.companyKey && t(entry.companyKey) && <p>{t(entry.companyKey)}</p>}
      <p>{t(entry.descriptionKey)}</p>
      <p>{entry.startDate} - {entry.endDate}</p>
      <p>{entry.location}</p>
    </div>
  );
}

function LanguageSection({ languages, categories }) {
  const { t } = useLocale();
  return (
    <div className="flex flex-col md:flex-row w-full md:columns-2 align-start md:items-start gap-8 md:gap-15 justify-start px-4 md:px-10">
      {categories.map((cat) => (
        <div key={cat.key}>
          <p className="text-xl font-bold text-gray-900">{t(cat.key)}</p>
          <div className={`flex gap-3 ${cat.key === 'languages.mother' ? 'pt-3' : 'pt-3'}`}>
            {languages.filter((l) => l.categoryKey === cat.key).map((lang) => (
              <Item
                key={lang.id}
                text={t(lang.nameKey)}
                urlImgFlag={lang.urlImgFlag}
                color="indigo"
                bgColor={lang.bgColor || 'transparent'}
                principal={cat.key === 'languages.proficient' ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-stone-100">
      <Header textLogo1="header.logo1" textLogo2="header.logo2" color1="white" color2="indigo" />

      <main className="py-8 min-h-[92vh] flex flex-col justify-start gap-8 items-center w-full">

        <section className="text-center flex flex-col md:flex-row gap-6 md:gap-2 justify-between items-center bg-sky-700/50
          w-full pt-25 pb-10 px-6 md:px-15 border-b border-slate-950 shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          <Profile avatarUrl={profileData.avatarUrl} />
          <div className="flex flex-col justify-center items-center gap-5 md:justify-start md:items-start">
            <a className="text-xl underline font-bold text-gray-900" href={"mailto:" + profileData.email}>{profileData.email}</a>
            <a className="text-xl underline font-bold text-gray-900" href={"tel:" + profileData.phone.replace(/[\s()]/g, '')}>{profileData.phone}</a>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-3xl font-bold text-slate-950">{t('profile.name')}</h2>
            <h3 className="text-xl font-bold text-gray-900">{t('profile.title')}</h3>
          </div>
        </section>

        <section className="flex flex-col px-6 md:px-15 justify-start items-start gap-5 w-full">
          <Separator text={t('sections.education')} color="indigo" />
          {educationData.map((entry) => (
            <EducationEntry key={entry.id} entry={entry} />
          ))}
        </section>

        <section className="flex flex-col px-6 md:px-15 justify-start items-start gap-5 w-full">
          <Separator text={t('sections.experience')} color="indigo" />
          {experienceData.map((entry) => (
            <ExperienceEntry key={entry.id} entry={entry} />
          ))}
        </section>

        <section className="flex flex-col px-6 md:px-15 justify-start items-start gap-5 w-full">
          <Separator text={t('sections.languages')} color="indigo" />
          <LanguageSection
            languages={languagesData}
            categories={[
              { key: 'languages.mother' },
              { key: 'languages.proficient' }
            ]}
          />
        </section>

        <section className="flex flex-col px-6 md:px-15 justify-start items-start gap-5 w-full">
          <Separator text={t('sections.skills')} color="indigo" />
          <div className="flex flex-wrap w-full gap-4 md:gap-5 md:columns-3 items-center justify-start px-4 md:px-10">
            {skillsData.map((skill) => (
              <Item
                key={skill.id}
                text={skill.name}
                urlImgFlag={skill.urlImgFlag}
                color="indigo"
                principal="false"
              />
            ))}
          </div>
        </section>

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
