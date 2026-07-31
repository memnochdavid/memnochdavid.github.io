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
    T_ROLE:              'Desarrollador Full-Stack',
    T_PHONE_LABEL:       'Tel.',
    T_TECHSTACK:         'Stack Técnico',
    T_INFRA:             'Infraestructura',
    T_OTHER:             'IA / Otros',
    T_LANGUAGES:         'Idiomas',
    T_SPANISH:           'Español',       T_NATIVE:     'Nativo',
    T_ENGLISH:           'Inglés',        T_PROFICIENT: 'Profesional',
    T_CATALAN:           'Catalán',       T_BASIC:      'Básico',

    T_PROFILE:           'Perfil Profesional',
    T_PROFILE_TEXT:      'Desarrollador Full-Stack con formación en Desarrollo de Aplicaciones Web y Multiplataforma, especializado en Symfony/PHP y React. He diseñado y construido desde cero una plataforma SaaS multi-tenant de gestión académica y una app Android nativa con IA integrada. Experiencia profesional en desarrollo backend con Java/Jakarta EE, integración de modelos LLM y bases de datos relacionales. Inglés C1.',

    T_PROJECTS:          'Proyectos Destacados',
    T_PROJECTS_NOTE:     'Detalle técnico completo, capturas y vídeo demo en memnochdavid.github.io/#/projects',

    T_LOGGEX_TITLE:      'Loggex Machina — Plataforma SaaS de gestión académica',
    T_LOGGEX_BADGE:      'TFG · DAW 2026',
    T_LOGGEX_DESC:       'Sistema SaaS multi-tenant de gestión académica para centros educativos: matriculación, horarios, asistencia, tareas, calificaciones y comunicación en tiempo real.',
    T_LOGGEX_B1:         'Diseñé y desarrollé una plataforma SaaS multi-tenant con 37 entidades de dominio.',
    T_LOGGEX_B2:         'Implementé un motor propio de resolución de horarios académicos.',
    T_LOGGEX_B3:         'Desarrollé comunicación en tiempo real mediante Mercure (SSE) para mensajería y notificaciones.',
    T_LOGGEX_B4:         'Integré el catálogo oficial del BOE: 230 itinerarios formativos y ~2.230 materias.',
    T_LOGGEX_B5:         'Implementé procesamiento asíncrono de tareas mediante colas de trabajo con Redis.',
    T_LOGGEX_B6:         'Desplegué la plataforma con Docker y almacenamiento de documentos compatible S3 (MinIO).',

    T_DEXTER_TITLE:      'Project Dexter — Pokédex Android con IA',
    T_DEXTER_BADGE:      'TFG · DAM 2025',
    T_DEXTER_DESC:       'Pokédex Android nativa con datos de PokéAPI v2 y descripciones en español mediante scraping de WikiDex.',
    T_DEXTER_B1:         'Desarrollé una app Android nativa con Kotlin y Jetpack Compose (Material 3).',
    T_DEXTER_B2:         'Integré PokéAPI v2 para un catálogo de ~1.000 Pokémon en 9 generaciones (I-IX).',
    T_DEXTER_B3:         'Implementé identificación de Pokémon por cámara mediante Google Gemini Vision (IA).',
    T_DEXTER_B4:         'Implementé persistencia local con Room y consumo de APIs REST con Retrofit.',
    T_DEXTER_B5:         'Desarrollé scraping de WikiDex para descripciones localizadas en español.',
    T_DEXTER_B6:         'Amplié el catálogo con ~900 movimientos y ~1.000 objetos, usando caché en 3 niveles.',

    T_EXPERIENCE:        'Experiencia',
    T_SW_DEV:            'Desarrollador de Software',
    T_INTERNSHIP:        'prácticas',
    T_AIXA_B1:           'Desarrollé funcionalidades full-stack con React (frontend) y Python (backend).',
    T_AIXA_B2:           'Integré modelos de lenguaje (LLM) en flujos funcionales de la aplicación.',
    T_AIXA_B3:           'Colaboré en equipo de desarrollo con control de versiones mediante Git.',
    T_GESVISION_B1:      'Desarrollé módulos backend en Java y Jakarta EE para software de gestión empresarial.',
    T_GESVISION_B2:      'Implementé persistencia de datos mediante Hibernate (ORM).',
    T_GESVISION_B3:      'Trabajé con bases de datos relacionales y control de versiones con Git.',
    T_OPERATOR:          'Operario de Producción — Responsable de línea',
    T_COSENTINO_B1:      'Responsable de una línea de producción industrial.',
    T_COSENTINO_B2:      'Gestión y seguimiento de procesos mediante SAP.',
    T_OTHER_EXP:         'Otras experiencias',
    T_TAXI:              'Taxista autónomo',
    T_TAXI_DESC:         'Propietario y gestor de mi propio negocio de taxi.',
    T_FREELANCE:         'Autónomo',
    T_ENGLISH_TUTOR:     'Profesor particular de inglés',
    T_ENGLISH_TUTOR_DESC: 'Clases de inglés para alumnos de ESO y Bachiller.',
    T_IT_TUTOR:          'Tutor de informática',
    T_IT_TUTOR_DESC:     'Actividad extraescolar «Introducción a la Informática» para alumnos de Primaria.',

    T_EDUCATION:         'Formación',
    T_DAW_TITLE:         'Desarrollo de Aplicaciones Web',
    T_DAM_TITLE:         'Desarrollo de Aplicaciones Multiplataforma',
    T_ASIR_TITLE:        'Administración de Sistemas Informáticos en Red',
    T_SMR_TITLE:         'Explotación de Sistemas Informáticos',
    T_HIGHER_VT:         'Grado Superior',
    T_VT:                'Grado Medio',
  },
  en: {
    lang: 'en',
    filename: 'CV - David Duque Díaz EN.pdf',
    T_ROLE:              'Full-Stack Developer',
    T_PHONE_LABEL:       'Phone',
    T_TECHSTACK:         'Tech Stack',
    T_INFRA:             'Infrastructure',
    T_OTHER:             'AI / Other',
    T_LANGUAGES:         'Languages',
    T_SPANISH:           'Spanish',       T_NATIVE:     'Native',
    T_ENGLISH:           'English',       T_PROFICIENT: 'Professional',
    T_CATALAN:           'Catalan',       T_BASIC:      'Basic',

    T_PROFILE:           'Professional Profile',
    T_PROFILE_TEXT:      'Full-Stack Developer with a background in Web and Cross-Platform Application Development, specialised in Symfony/PHP and React. Designed and built a multi-tenant SaaS academic management platform and a native Android app with integrated AI from scratch. Professional experience in backend development with Java/Jakarta EE, LLM integration and relational databases. C1 English.',

    T_PROJECTS:          'Featured Projects',
    T_PROJECTS_NOTE:     'Full technical detail, screenshots and demo video at memnochdavid.github.io/#/projects',

    T_LOGGEX_TITLE:      'Loggex Machina — Academic Management SaaS Platform',
    T_LOGGEX_BADGE:      'Capstone · DAW 2026',
    T_LOGGEX_DESC:       'Multi-tenant SaaS platform for school management: enrolment, timetabling, attendance, assignments, grading and real-time messaging.',
    T_LOGGEX_B1:         'Designed and built a multi-tenant SaaS platform with 37 domain entities.',
    T_LOGGEX_B2:         'Implemented a custom scheduling engine for academic timetable resolution.',
    T_LOGGEX_B3:         'Built real-time messaging and notifications with Mercure (SSE).',
    T_LOGGEX_B4:         'Integrated the official BOE catalogue: 230 programmes and ~2,230 subjects.',
    T_LOGGEX_B5:         'Implemented asynchronous job processing with Redis queues.',
    T_LOGGEX_B6:         'Deployed the platform with Docker and S3-compatible document storage (MinIO).',

    T_DEXTER_TITLE:      'Project Dexter — Android Pokédex with AI',
    T_DEXTER_BADGE:      'Capstone · DAM 2025',
    T_DEXTER_DESC:       'Native Android Pokédex powered by PokéAPI v2 with Spanish descriptions via WikiDex scraping.',
    T_DEXTER_B1:         'Built a native Android app with Kotlin and Jetpack Compose (Material 3).',
    T_DEXTER_B2:         'Integrated PokéAPI v2 for a catalogue of ~1,000 Pokémon across 9 generations (I-IX).',
    T_DEXTER_B3:         'Implemented Pokémon identification via camera using Google Gemini Vision (AI).',
    T_DEXTER_B4:         'Implemented local persistence with Room and REST API consumption with Retrofit.',
    T_DEXTER_B5:         'Built WikiDex scraping for localised Spanish descriptions.',
    T_DEXTER_B6:         'Extended the catalogue with ~900 moves and ~1,000 items, using 3-level caching.',

    T_EXPERIENCE:        'Experience',
    T_SW_DEV:            'Software Developer',
    T_INTERNSHIP:        'internship',
    T_AIXA_B1:           'Developed full-stack features with React (frontend) and Python (backend).',
    T_AIXA_B2:           'Integrated large language models (LLMs) into application workflows.',
    T_AIXA_B3:           'Collaborated within a development team using Git version control.',
    T_GESVISION_B1:      'Developed backend modules in Java and Jakarta EE for business management software.',
    T_GESVISION_B2:      'Implemented data persistence using Hibernate (ORM).',
    T_GESVISION_B3:      'Worked with relational databases and Git version control.',
    T_OPERATOR:          'Production Operator — Line Supervisor',
    T_COSENTINO_B1:      'Responsible for an industrial production line.',
    T_COSENTINO_B2:      'Managed and tracked processes using SAP.',
    T_OTHER_EXP:         'Other Experience',
    T_TAXI:              'Self-employed Taxi Driver',
    T_TAXI_DESC:         'Owner and manager of my own taxi business.',
    T_FREELANCE:         'Freelance',
    T_ENGLISH_TUTOR:     'Private English Tutor',
    T_ENGLISH_TUTOR_DESC: 'Private English lessons for secondary and sixth-form students.',
    T_IT_TUTOR:          'IT Instructor',
    T_IT_TUTOR_DESC:     'After-school activity "Introduction to Computing" for primary school pupils.',

    T_EDUCATION:         'Education',
    T_DAW_TITLE:         'Web Application Development',
    T_DAM_TITLE:         'Cross-Platform Application Development',
    T_ASIR_TITLE:        'Networked Computer Systems Administration',
    T_SMR_TITLE:         'Computer Systems Operation',
    T_HIGHER_VT:         'Higher Vocational Training',
    T_VT:                'Vocational Training',
  },
  ca: {
    lang: 'ca',
    filename: 'CV - David Duque Díaz CA.pdf',
    T_ROLE:              'Desenvolupador Full-Stack',
    T_PHONE_LABEL:       'Tel.',
    T_TECHSTACK:         'Stack Tècnic',
    T_INFRA:             'Infraestructura',
    T_OTHER:             'IA / Altres',
    T_LANGUAGES:         'Idiomes',
    T_SPANISH:           'Castellà',      T_NATIVE:     'Nadiu',
    T_ENGLISH:           'Anglès',        T_PROFICIENT: 'Professional',
    T_CATALAN:           'Català',        T_BASIC:      'Bàsic',

    T_PROFILE:           'Perfil Professional',
    T_PROFILE_TEXT:      'Desenvolupador Full-Stack amb formació en Desenvolupament d\'Aplicacions Web i Multiplataforma, especialitzat en Symfony/PHP i React. He dissenyat i construït des de zero una plataforma SaaS multi-tenant de gestió acadèmica i una app Android nativa amb IA integrada. Experiència professional en desenvolupament backend amb Java/Jakarta EE, integració de models LLM i bases de dades relacionals. Anglès C1.',

    T_PROJECTS:          'Projectes Destacats',
    T_PROJECTS_NOTE:     'Detall tècnic complet, captures i vídeo demo a memnochdavid.github.io/#/projects',

    T_LOGGEX_TITLE:      'Loggex Machina — Plataforma SaaS de gestió acadèmica',
    T_LOGGEX_BADGE:      'TFG · DAW 2026',
    T_LOGGEX_DESC:       'Sistema SaaS multi-tenant de gestió acadèmica per a centres educatius: matriculació, horaris, assistència, tasques, qualificacions i comunicació en temps real.',
    T_LOGGEX_B1:         'Vaig dissenyar i desenvolupar una plataforma SaaS multi-tenant amb 37 entitats de domini.',
    T_LOGGEX_B2:         'Vaig implementar un motor propi de resolució d\'horaris acadèmics.',
    T_LOGGEX_B3:         'Vaig desenvolupar comunicació en temps real mitjançant Mercure (SSE) per a missatgeria i notificacions.',
    T_LOGGEX_B4:         'Vaig integrar el catàleg oficial del BOE: 230 itineraris formatius i ~2.230 matèries.',
    T_LOGGEX_B5:         'Vaig implementar processament asíncron de tasques mitjançant cues de treball amb Redis.',
    T_LOGGEX_B6:         'Vaig desplegar la plataforma amb Docker i emmagatzematge de documents compatible S3 (MinIO).',

    T_DEXTER_TITLE:      'Project Dexter — Pokédex Android amb IA',
    T_DEXTER_BADGE:      'TFG · DAM 2025',
    T_DEXTER_DESC:       'Pokédex Android nativa amb dades de PokéAPI v2 i descripcions en espanyol mitjançant scraping de WikiDex.',
    T_DEXTER_B1:         'Vaig desenvolupar una app Android nativa amb Kotlin i Jetpack Compose (Material 3).',
    T_DEXTER_B2:         'Vaig integrar PokéAPI v2 per a un catàleg de ~1.000 Pokémon en 9 generacions (I-IX).',
    T_DEXTER_B3:         'Vaig implementar identificació de Pokémon per càmera mitjançant Google Gemini Vision (IA).',
    T_DEXTER_B4:         'Vaig implementar persistència local amb Room i consum d\'APIs REST amb Retrofit.',
    T_DEXTER_B5:         'Vaig desenvolupar scraping de WikiDex per a descripcions localitzades en espanyol.',
    T_DEXTER_B6:         'Vaig ampliar el catàleg amb ~900 moviments i ~1.000 objectes, amb caché en 3 nivells.',

    T_EXPERIENCE:        'Experiència',
    T_SW_DEV:            'Desenvolupador de Programari',
    T_INTERNSHIP:        'pràctiques',
    T_AIXA_B1:           'Vaig desenvolupar funcionalitats full-stack amb React (frontend) i Python (backend).',
    T_AIXA_B2:           'Vaig integrar models de llenguatge (LLM) en fluxos funcionals de l\'aplicació.',
    T_AIXA_B3:           'Vaig col·laborar en equip de desenvolupament amb control de versions mitjançant Git.',
    T_GESVISION_B1:      'Vaig desenvolupar mòduls backend en Java i Jakarta EE per a programari de gestió empresarial.',
    T_GESVISION_B2:      'Vaig implementar persistència de dades mitjançant Hibernate (ORM).',
    T_GESVISION_B3:      'Vaig treballar amb bases de dades relacionals i control de versions amb Git.',
    T_OPERATOR:          'Operari de Producció — Responsable de línia',
    T_COSENTINO_B1:      'Responsable d\'una línia de producció industrial.',
    T_COSENTINO_B2:      'Gestió i seguiment de processos mitjançant SAP.',
    T_OTHER_EXP:         'Altres experiències',
    T_TAXI:              'Taxista autònom',
    T_TAXI_DESC:         'Propietari i gestor del meu propi negoci de taxi.',
    T_FREELANCE:         'Autònom',
    T_ENGLISH_TUTOR:     'Professor particular d\'anglès',
    T_ENGLISH_TUTOR_DESC: 'Classes d\'anglès per a alumnes d\'ESO i Batxillerat.',
    T_IT_TUTOR:          'Tutor d\'informàtica',
    T_IT_TUTOR_DESC:     'Activitat extraescolar «Introducció a la Informàtica» per a alumnes de Primària.',

    T_EDUCATION:         'Formació',
    T_DAW_TITLE:         'Desenvolupament d\'Aplicacions Web',
    T_DAM_TITLE:         'Desenvolupament d\'Aplicacions Multiplataforma',
    T_ASIR_TITLE:        'Administració de Sistemes Informàtics en Xarxa',
    T_SMR_TITLE:         'Explotació de Sistemes Informàtics',
    T_HIGHER_VT:         'Grau Superior',
    T_VT:                'Grau Mitjà',
  },
};

const browser = await chromium.launch();

for (const [locale, t] of Object.entries(LOCALES)) {
  let html = htmlTpl.replace('AVATAR_BASE64', avatarB64).replaceAll('{{LANG}}', t.lang);
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
