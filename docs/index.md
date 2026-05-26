# Project Roadmaps

> Portfolio personal — **David Duque Díaz**
> Stack: React 19 + Vite 7 + Tailwind CSS 4 + React Router DOM 7
> Despliegue: GitHub Pages (sin backend)

---

## Cómo usar este índice

Cada hoja de ruta tiene un estado, criterios de aceptación y enlaces a los assets relevantes.
Para retomar el trabajo, simplemente pide que examine este `index.md`.

**Documentos de apoyo** (leer si la sesión toca esos temas):
- [`docs/loggex-portfolio.md`](loggex-portfolio.md) — Contenido propuesto para la vista de Loggex: descripción, highlights, módulos, stack chips corregido y lista de capturas necesarias. Leer antes de editar `projects.json` o los i18n de Loggex.
- [`docs/dexter-portfolio.md`](dexter-portfolio.md) — Contenido propuesto para la vista de Dexter: corrección de datos erróneos (Firebase, Material UI, features inexistentes), stack chips corregido, descripción, highlights y lista de capturas. Leer antes de editar `projects.json` o los i18n de Dexter.

---

## Estado general de los roadmaps

| #  | Roadmap                          | Estado       |
|----|----------------------------------|--------------|
| 1  | Externalización de datos         | COMPLETADO   |
| 2  | Gestión de contenido (CMS-free)  | PENDIENTE    |
| 3  | Internacionalización (i18n)      | COMPLETADO   |
| 4  | Refactor de componentes          | PENDIENTE    |
| 5  | Mejoras de UI/UX y animaciones   | PENDIENTE    |
| 6  | SEO, metadatos y rendimiento     | PENDIENTE    |
| 7  | Automatización CI/CD             | PENDIENTE    |
| 8  | Limpieza y organización del repo | PENDIENTE    |
| 9  | Vista de Proyectos (TFG + Loggex)| COMPLETADO   |

---

## Roadmap 1: Externalización de datos

**Objetivo:** Extraer todo el CV hardcodeado de `Home.jsx` a archivos JSON/JS externos para separar datos de presentación.

**Archivos afectados:**
- `src/pages/Home.jsx` — migrar a datos importados
- `src/data/` (nuevo directorio)

**Tareas:**
- [ ] Crear `src/data/profile.json` (nombre, email, teléfono, título, avatar)
- [ ] Crear `src/data/education.json` (array de entradas educativas)
- [ ] Crear `src/data/experience.json` (array de experiencias laborales)
- [ ] Crear `src/data/languages.json` (array de idiomas con banderas)
- [ ] Crear `src/data/skills.json` (array de skills técnicas con iconos)
- [ ] Refactorizar `Home.jsx` para iterar sobre los datos importados
- [ ] Los datos del TFG (`Tfg.jsx`) también pueden externalizarse si tiene sentido

**Criterios de aceptación:**
- `Home.jsx` no contiene datos literales (solo imports de data)
- El build sigue funcionando sin cambios visuales
- Cualquier persona puede editar el CV tocando solo los JSON

---

## Roadmap 2: Gestión de contenido (CMS-free)

**Objetivo:** Permitir editar el contenido del portfolio sin tocar código, usando solo archivos de datos estáticos (JSON/YAML). Opcionalmente, añadir edición live desde el navegador para secciones del CV.

**Implementado:**
- [x] Solución ad-hoc: todo el contenido externalizado a `src/data/*.json` e `src/i18n/*.json`
- [x] Formación, experiencia, idiomas, skills y proyectos editables tocando solo JSON
- [x] `@astrojs/react` descartado — overkill para este stack
- [x] JSON elegido sobre YAML — ya en uso y funcionando con Vite

**Pendiente — edición live:**
- [ ] Evaluar Decap CMS con GitHub Pages (OAuth via GitHub API → commit directo desde el navegador)
- [ ] Configurar `public/admin/index.html` y `public/admin/config.yml` para Decap CMS
- [ ] Exponer colecciones editables: formación, experiencia, skills (mapear sobre los JSON actuales)
- [ ] Probar flujo completo: editar en `/admin` → commit automático → deploy via CI/CD

**Criterios de aceptación:**
- El contenido se edita desde ficheros JSON sin tocar código ✅
- El build de Vite funciona con `pnpm run build` ✅
- (Pendiente) Formación, skills y experiencia son editables desde una UI en el navegador sin abrir un editor de código

---

## Roadmap 3: Internacionalización (i18n)

**Objetivo:** Dar soporte multiidioma (ES, EN, CA) al portfolio.

**Archivos afectados:**
- `src/i18n/` (nuevo directorio con archivos de traducción)
- Todos los componentes con texto visible

**Tareas:**
- [x] Decidir solución: Context ligero propio (sin dependencias externas)
- [x] Crear `src/i18n/context.jsx` con `LocaleProvider`, `useLocale()` y función `t()`
- [x] Crear archivos de traducción: `es.json`, `en.json`, `ca.json`
- [x] Crear `src/data/` con JSONs externos (profile, education, experience, languages, skills)
- [x] Implementar selector de idioma en el Header (botones ES/EN/CA)
- [x] Migrar textos hardcodeados de Home.jsx a claves i18n
- [x] Adaptar Header, Footer y componentes para resolver claves con `t()`

**Criterios de aceptación:**
- El portfolio se muestra completo en ES, EN y CA
- El idioma se persiste (localStorage o URL param)
- No se rompe ningún layout por cambios de longitud de texto

---

## Roadmap 4: Refactor de componentes

**Objetivo:** Mejorar la arquitectura de componentes, eliminar duplicación y homogeneizar estilos.

**Archivos afectados:**
- Todos los componentes en `src/components/` e `src/includes/`

**Tareas:**
- [ ] Revisar `Item.jsx` — el `bg-${bgColor}` dinámico no está en safelist
- [ ] Revisar `lib.js` — la generación dinámica de clases necesita que safelist.txt cubra todos los tonos usados
- [ ] Extraer layout común (section → card pattern) a un componente `Section` o `Card`
- [ ] Homogeneizar spacing y estilos entre secciones de Home
- [ ] Eliminar código muerto o no utilizado

**Criterios de aceptación:**
- Los componentes tienen responsabilidades claras y únicas
- No hay clases Tailwind generadas dinámicamente que falten del safelist

---

## Roadmap 5: Mejoras de UI/UX y animaciones

**Objetivo:** Mejorar la experiencia visual del portfolio con transiciones, animaciones y micro-interacciones.

**Tareas:**
- [ ] Añadir animaciones de entrada (scroll reveal o fade-in) a las secciones
- [ ] Mejorar la hero section (parte del perfil)
- [ ] Añadir transiciones suaves entre rutas (Home ↔ Tfg)
- [ ] Revisar responsive (especialmente tablets)
- [ ] Evaluar modo oscuro / toggle

**Criterios de aceptación:**
- Las animaciones son sutiles y no afectan rendimiento
- Funciona correctamente en mobile, tablet y desktop
- Modo oscuro si se implementa, con persistencia

---

## Roadmap 6: SEO, metadatos y rendimiento

**Objetivo:** Optimizar el portfolio para buscadores y velocidad de carga.

**Tareas:**
- [ ] Añadir `react-helmet-async` o similar para meta tags dinámicos
- [ ] Añadir Open Graph tags (og:title, og:description, og:image)
- [ ] Añadir robots.txt y sitemap.xml estáticos
- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] Analizar Lighthouse y mejorar puntuación

**Criterios de aceptación:**
- Lighthouse ≥ 90 en todas las categorías
- Las redes sociales muestran preview correcto al compartir

---

## Roadmap 7: Automatización CI/CD

**Objetivo:** Automatizar el despliegue con GitHub Actions y asegurar calidad.

**Tareas:**
- [ ] Migrar de `gh-pages` CLI a GitHub Actions (deploy on push a main)
- [ ] Añadir lint en CI
- [ ] Añadir build check en PRs
- [ ] (Opcional) Añadir tests básicos con Vitest + React Testing Library

**Criterios de aceptación:**
- Al hacer push a main, se despliega automáticamente a GitHub Pages
- El CI falla si hay errores de lint o build

---

## Roadmap 8: Limpieza y organización del repo

**Objetivo:** Dejar el repositorio ordenado, sin archivos residuales y con documentación clara.

**Tareas:**
- [ ] Revisar `.gitignore` (node_modules, dist, .idea ya cubiertos)
- [ ] Eliminar `ggggggg` (archivo fantasma en la raíz)
- [ ] Eliminar `package-lock.json` si se usa solo pnpm
- [ ] Eliminar `tailwind.config.js` si Tailwind v4 ya no lo necesita (configuración via CSS)
- [ ] Decidir si mantener `postcss.config.js` o migrar a Vite plugin de Tailwind v4
- [ ] Añadir `.nvmrc` o `engines` en `package.json` para fijar versión de Node

**Criterios de aceptación:**
- El repo está limpio (solo archivos necesarios versionados)
- `git status` muestra solo lo esperado

---

## Roadmap 9: Vista de Proyectos (TFG + Loggex)

**Objetivo:** Reemplazar la actual página `Tfg.jsx` (Dexter Pokedex, TFG DAM 2025) por una vista `/projects` que muestre ambos proyectos reales del autor, con presentación visual rica y sin backend.

**Proyectos a incluir:**

| Proyecto  | TFG | Año | Descripción |
|-----------|-----|-----|-------------|
| **Loggex** | DAW | 2026 | Plataforma integral de gestión académica para centros educativos. Symfony 8 + React 19, Docker, MinIO, Mercure SSE, 37 entidades, 5 idiomas. |
| **Dexter** | DAM | 2025 | App Pokémon Pokedex nativa en Kotlin + Jetpack Compose con Firebase. |

**Implementado:**
- [x] Vista con card grid + detalle a pantalla completa
- [x] `ProjectCard` reutilizable con header, descripción, stack, highlights, módulos, video, logo
- [x] Logos de cada proyecto en el header (`public/img/logo-loggex.png`, `public/img/logo-dexter.png`)
- [x] `src/data/projects.json` con datos externalizados
- [x] Claves i18n en `es.json`, `en.json`, `ca.json`
- [x] Ruta `/#/projects` en `App.jsx` + enlace en `Header.jsx`
- [x] `ImageShowcase` con crossfade (transición de opacidad) tipo olearia.io
- [x] Dots interactivos debajo de la imagen

**Pendiente:**
- [ ] Aplicar contenido propuesto para Loggex (ver [`docs/loggex-portfolio.md`](loggex-portfolio.md)): descripción, highlights, módulos y stack chips corregido
- [ ] Aplicar contenido propuesto para Dexter (ver [`docs/dexter-portfolio.md`](dexter-portfolio.md)): corregir datos erróneos (Firebase, Material UI, features inexistentes), stack chips y highlights
- [ ] Capturas reales de Loggex: 3 landscape desktop — ver lista en `loggex-portfolio.md`
- [ ] Capturas reales de Dexter: 3 portrait mobile — ver lista en `dexter-portfolio.md`
- [ ] Añadir `screenshotRatio` a `projects.json` para que Dexter use aspect ratio portrait en el stack
- [ ] Iconos faltantes en `public/img/`: Loggex: `icon-apiplatform.svg`, `icon-docker.svg`, `icon-redis.svg`, `icon-minio.svg` / Dexter: `icon-material3.svg`, `icon-room.svg`, `icon-retrofit.svg`, `icon-gemini.svg`
- [ ] Añadir `repoUrl` a ambos proyectos cuando los repos sean públicos

**Archivos afectados:**
- `src/pages/Tfg.jsx` → reemplazado por `Projects.jsx`
- `src/App.jsx` → ruta `/tfg` → `/projects`
- `src/includes/Header.jsx` → enlace actualizado
- `src/data/projects.json` → datos de proyectos
- `src/i18n/*.json` → textos de proyectos
- `public/img/` → logos de Loggex y Dexter

**Criterios de aceptación:**
- ✅ La vista funciona en GitHub Pages sin backend
- ✅ Cualquier proyecto se puede añadir/editar desde JSON + i18n
- ✅ El Dexter actual se mantiene como segundo proyecto (no se pierde)
- ✅ Imágenes con crossfade (no carrusel deslizante) controladas por dots
