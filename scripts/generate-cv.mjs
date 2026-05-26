import { chromium } from '/home/david/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname  = dirname(fileURLToPath(import.meta.url));
const htmlTpl    = readFileSync(resolve(__dirname, 'cv.html'), 'utf8');
const avatarB64  = 'data:image/jpeg;base64,' +
  readFileSync(resolve(__dirname, '../public/img/avatar.jpg')).toString('base64');
const outDir     = resolve(__dirname, '../public/resources');

const LOCALES = {
  es: {
    lang: 'es',
    filename: 'CV - David Duque Díaz.pdf',
    T_INFRA:            'Infraestructura',
    T_OTHER:            'IA / Otros',
    T_LANGUAGES:        'Idiomas',
    T_SPANISH:          'Español',       T_NATIVE:     'Nativo',
    T_ENGLISH:          'Inglés',        T_PROFICIENT: 'Profesional',
    T_CATALAN:          'Catalán',       T_BASIC:      'Básico',
    T_EXPERIENCE:       'Experiencia',
    T_SW_DEV:           'Desarrollador de Software',
    T_INTERNSHIP:       'prácticas',
    T_AIXA_DESC:        'Desarrollo full-stack con React y Python. Integración de LLMs.',
    T_GESVISION_DESC:   'Desarrollo con Java, Jakarta EE y Hibernate.',
    T_OPERATOR:         'Operario de producción',
    T_COSENTINO_DESC:   'Responsable de línea de producción. Uso de SAP.',
    T_TAXI:             'Taxista autónomo',
    T_FREELANCE:        'Autónomo',
    T_ENGLISH_TUTOR:    'Profesor particular de inglés',
    T_ENGLISH_TUTOR_DESC: 'Clases de inglés para alumnos de ESO y Bachiller.',
    T_IT_TUTOR:         'Tutor de informática',
    T_IT_TUTOR_DESC:    'Actividad extraescolar «Introducción a la Informática» para alumnos de Primaria.',
    T_EDUCATION:        'Formación',
    T_DAW_TITLE:        'Desarrollo de Aplicaciones Web',
    T_DAM_TITLE:        'Desarrollo de Aplicaciones Multiplataforma',
    T_ASIR_TITLE:       'Administración de Sistemas Informáticos en Red',
    T_SMR_TITLE:        'Explotación de Sistemas Informáticos',
    T_HIGHER_VT:        'Grado Superior',
    T_VT:               'Grado Medio',
  },
  en: {
    lang: 'en',
    filename: 'CV - David Duque Díaz EN.pdf',
    T_INFRA:            'Infrastructure',
    T_OTHER:            'AI / Other',
    T_LANGUAGES:        'Languages',
    T_SPANISH:          'Spanish',       T_NATIVE:     'Native',
    T_ENGLISH:          'English',       T_PROFICIENT: 'Professional',
    T_CATALAN:          'Catalan',       T_BASIC:      'Basic',
    T_EXPERIENCE:       'Experience',
    T_SW_DEV:           'Software Developer',
    T_INTERNSHIP:       'internship',
    T_AIXA_DESC:        'Full-stack development with React and Python. LLM integration.',
    T_GESVISION_DESC:   'Development with Java, Jakarta EE and Hibernate.',
    T_OPERATOR:         'Production Operator',
    T_COSENTINO_DESC:   'Responsible for a production line. SAP use.',
    T_TAXI:             'Self-employed Taxi Driver',
    T_FREELANCE:        'Freelance',
    T_ENGLISH_TUTOR:    'Private English Tutor',
    T_ENGLISH_TUTOR_DESC: 'Private English lessons for secondary and sixth-form students.',
    T_IT_TUTOR:         'IT Instructor',
    T_IT_TUTOR_DESC:    'After-school activity "Introduction to Computing" for primary school pupils.',
    T_EDUCATION:        'Education',
    T_DAW_TITLE:        'Web Application Development',
    T_DAM_TITLE:        'Cross-Platform Application Development',
    T_ASIR_TITLE:       'Networked Computer Systems Administration',
    T_SMR_TITLE:        'Computer Systems Operation',
    T_HIGHER_VT:        'Higher Vocational Training',
    T_VT:               'Vocational Training',
  },
  ca: {
    lang: 'ca',
    filename: 'CV - David Duque Díaz CA.pdf',
    T_INFRA:            'Infraestructura',
    T_OTHER:            'IA / Altres',
    T_LANGUAGES:        'Idiomes',
    T_SPANISH:          'Castellà',      T_NATIVE:     'Nadiu',
    T_ENGLISH:          'Anglès',        T_PROFICIENT: 'Professional',
    T_CATALAN:          'Català',        T_BASIC:      'Bàsic',
    T_EXPERIENCE:       'Experiència',
    T_SW_DEV:           'Desenvolupador de Programari',
    T_INTERNSHIP:       'pràctiques',
    T_AIXA_DESC:        'Desenvolupament full-stack amb React i Python. Integració de LLMs.',
    T_GESVISION_DESC:   'Desenvolupament amb Java, Jakarta EE i Hibernate.',
    T_OPERATOR:         'Operari de producció',
    T_COSENTINO_DESC:   'Responsable de línia de producció. Ús de SAP.',
    T_TAXI:             'Taxista autònom',
    T_FREELANCE:        'Autònom',
    T_ENGLISH_TUTOR:    'Professor particular d\'anglès',
    T_ENGLISH_TUTOR_DESC: 'Classes d\'anglès per a alumnes d\'ESO i Batxillerat.',
    T_IT_TUTOR:         'Tutor d\'informàtica',
    T_IT_TUTOR_DESC:    'Activitat extraescolar «Introducció a la Informàtica» per a alumnes de Primària.',
    T_EDUCATION:        'Formació',
    T_DAW_TITLE:        'Desenvolupament d\'Aplicacions Web',
    T_DAM_TITLE:        'Desenvolupament d\'Aplicacions Multiplataforma',
    T_ASIR_TITLE:       'Administració de Sistemes Informàtics en Xarxa',
    T_SMR_TITLE:        'Explotació de Sistemes Informàtics',
    T_HIGHER_VT:        'Grau Superior',
    T_VT:               'Grau Mitjà',
  },
};

const browser = await chromium.launch();

for (const [locale, t] of Object.entries(LOCALES)) {
  let html = htmlTpl.replace('AVATAR_BASE64', avatarB64);
  for (const [key, val] of Object.entries(t)) {
    html = html.replaceAll(`{{${key}}}`, val);
  }

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  const outPath = `${outDir}/${t.filename}`;
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await page.close();
  console.log(`✓ ${locale.toUpperCase()} → ${t.filename}`);
}

await browser.close();
