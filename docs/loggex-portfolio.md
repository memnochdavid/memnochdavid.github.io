# Loggex — Contenido para el portfolio

> Referencia para saber qué exponer en la vista dedicada de Loggex en `/#/projects`.
> Fuente explorada: `/home/david/Escritorio/WORKSPACE/loggex-v02/`

---

## Estado de la tarea

- [ ] Aplicar cambios propuestos a `src/data/projects.json`
- [ ] Aplicar cambios a `src/i18n/es.json`, `en.json`, `ca.json`
- [ ] Añadir capturas reales (ver lista al final de este doc)
- [ ] Añadir `repoUrl` cuando el repo sea público

---

## Qué es Loggex (resumen para contexto)

Plataforma SaaS multi-tenant de gestión académica para centros educativos españoles.
Cubre el ciclo completo: estructura del centro → matriculación → horarios → entrega de clases → calificaciones → comunicación.
Escala real: ~300 periodos lectivos/centro, hasta ~7.500 horarios por centro con el nuevo modelo semanal.
Alineado con normativa española (BOE, BOJA, CCAA) y soporte multi-etapa (FP Básica/Medio/Superior/Especialización + ESO).

---

## Cambios propuestos respecto al estado actual del portfolio

### `projects.json` — stack chips

**Actual (incorrecto):**
```json
{ "name": "Symfony",    "icon": "img/icon-symfony.svg" },
{ "name": "React",      "icon": "img/icon-react.svg" },
{ "name": "PHP",        "icon": "img/icon-php.svg" },
{ "name": "MariaDB",    "icon": "img/icon-mariadb.svg" },
{ "name": "Tailwind",   "icon": "img/icon-tailwind.svg" },   ← NO usa Tailwind
{ "name": "Vite",       "icon": "img/icon-vite.svg" },
{ "name": "JavaScript", "icon": "img/icon-js.svg" },
{ "name": "Node.js",    "icon": "img/icon-nodejs.svg" }      ← no es protagonista
```

**Propuesto:**
```json
{ "name": "Symfony 8",      "icon": "img/icon-symfony.svg" },
{ "name": "API Platform",   "icon": "img/icon-apiplatform.svg" },
{ "name": "React 19",       "icon": "img/icon-react.svg" },
{ "name": "PHP 8.4",        "icon": "img/icon-php.svg" },
{ "name": "MariaDB",        "icon": "img/icon-mariadb.svg" },
{ "name": "Docker",         "icon": "img/icon-docker.svg" },
{ "name": "Redis",          "icon": "img/icon-redis.svg" },
{ "name": "MinIO / S3",     "icon": "img/icon-minio.svg" }
```

Iconos a añadir a `public/img/`: `icon-apiplatform.svg`, `icon-docker.svg`, `icon-redis.svg`, `icon-minio.svg`

---

### i18n — descripción, highlights y módulos

#### Descripción (los 3 idiomas)

**ES:**
> Sistema SaaS multi-tenant de gestión académica integral para centros educativos.
> Cubre desde la estructura del centro hasta la entrega de clases: matriculaciones, horarios con motor de resolución propio, asistencia, tareas, calificaciones y comunicación en tiempo real.
> Construido con Symfony 8 + React 19, desplegado en Docker con almacenamiento S3, cola de trabajos asíncrona y catálogo oficial BOE con 230 itinerarios y ~2.230 materias.

**EN:**
> A multi-tenant SaaS platform for comprehensive school management.
> Covers the full academic cycle: enrolment, constraint-based timetabling, attendance, assignments, grading and real-time messaging.
> Built with Symfony 8 + React 19, deployed on Docker with S3 storage, async job queue and an official BOE catalogue of 230 programmes and ~2,230 subjects.

**CA:**
> Sistema SaaS multi-tenant de gestió acadèmica integral per a centres educatius.
> Cobreix des de l'estructura del centre fins a la impartició de classes: matriculacions, horaris amb motor de resolució propi, assistència, tasques, qualificacions i comunicació en temps real.
> Construït amb Symfony 8 + React 19, desplegat en Docker amb emmagatzematge S3, cua de treballs asíncrona i catàleg oficial BOE amb 230 itineraris i ~2.230 matèries.

---

#### Highlights (pill tags)

```
37 entidades · Multi-tenant por centro · Motor de horarios con solvers propios ·
Tiempo real con Mercure SSE · Catálogo oficial BOE (230 itinerarios, ~2.230 materias) ·
Theming dinámico (80+ variables CSS/centro) · 5 idiomas · Jobs asíncronos con Redis ·
Roles: Superadmin, Admin, Profesor, Alumno · Exportación PDF
```

*(Adaptar a EN y CA en los respectivos i18n)*

---

#### Módulos

```
Centro · Itinerarios y materias · Grupos y matrículas ·
Editor de horarios · Periodos lectivos · Asistencia ·
Tareas y entregas · Calificaciones · Temarios ·
Mensajería · Comunicados · Notificaciones ·
Catálogo oficial
```

*(13 módulos — más preciso que los 11 actuales)*

---

## Capturas necesarias

El efecto de portfolio usa exactamente **3 imágenes apiladas** (STACK_CONFIGS tiene 3 slots).
Objetivo: que cada captura cuente algo diferente sobre el producto. No queremos 3 pantallas de tabla.

### Captura 1 — El editor de horarios (drag-and-drop)
**Por qué:** Es el diferenciador técnico más visible e impactante. Una cuadrícula semanal con bloques de colores arrastrables comunica complejidad real en un vistazo.
**Qué capturar:** La vista `HorariosEditor` con el calendario semanal poblado, mostrando varios grupos/materias con colores diferentes. Idealmente con un bloque siendo arrastrado o el panel lateral visible.

### Captura 2 — Dashboard o vista de administrador
**Por qué:** Comunica la escala del sistema (estadísticas, widgets, acceso a todos los módulos). Sirve como "portada" del producto.
**Qué capturar:** El panel de inicio del rol Admin o Superadmin, con tarjetas de resumen (nº alumnos, grupos, etc.) y la barra lateral visible con los módulos listados.

### Captura 3 — Vista de alumno (su horario personal o calificaciones)
**Por qué:** Muestra que el sistema tiene múltiples roles reales y una UX end-to-end, no solo admin. Contrasta visualmente con las otras dos capturas.
**Qué capturar:** El horario semanal del alumno (vista de tiras con la semana actual) o la vista de calificaciones con feedback por materia.

---

### ¿Desktop o mobile?

La aplicación es mobile-friendly en todas las vistas **excepto el editor de horarios** (drag-and-drop no adaptado a táctil/móvil aún). Por tanto:

- **Captura 1 (editor de horarios)** → desktop obligatoriamente
- **Capturas 2 y 3** → se pueden hacer en mobile si la vista queda bien, o desktop; ambas opciones son válidas

Si se mezclan orientaciones (landscape desktop + portrait mobile), habrá que ajustar el `paddingTop` del componente `StackedScreenshots` por proyecto — campo `screenshotRatio` pendiente de añadir a `projects.json`.

### Notas técnicas para las capturas
- Resolución recomendada desktop: **1280×800** mínimo (aspect ratio ~16:10, encaja con `paddingTop: 62%`)
- Resolución recomendada mobile: **390×844** (iPhone 14 o equivalente Android)
- Formato: **WebP** (guardar en `public/img/projects/loggex-1.webp`, `loggex-2.webp`, `loggex-3.webp`)
- Datos: usar datos de demostración verosímiles (no tablas vacías)
- Tema: preferiblemente el tema claro del centro si hay opción, contrasta mejor sobre el fondo del portfolio

---

## Referencia técnica del proyecto Loggex

| Aspecto | Detalle |
|---|---|
| Directorio fuente | `/home/david/Escritorio/WORKSPACE/loggex-v02/` |
| Frontend | React 19 + Vite 7 + React Router 7 + CSS Modules + dnd-kit |
| Backend | Symfony 8 + API Platform 3 + PHP 8.4 + Doctrine 3.6 |
| Base de datos | MariaDB 10.11 — 37 entidades |
| Infra | Docker Compose (7 servicios): Caddy, PHP/Apache, MariaDB, Redis, Mercure, MinIO, Worker |
| Tiempo real | Mercure Hub (WebSocket pub/sub, 39 entidades con LivePublish) |
| Almacenamiento | MinIO S3-compatible (avatares, logos, entregas, materiales, firmas) |
| Jobs asíncronos | Symfony Messenger + Redis (2 workers, cierre automático de tareas) |
| Auth | JWT (LexikJWT 3.1) + RBAC (4 roles) |
| PDF | DomPDF (horarios, boletines de calificaciones) |
| i18n | 5 idiomas: ES, EN, CA, GL, EU |
| Catálogo oficial | 230 itinerarios + ~2.230 materias (BOE, TodoFP, BOJA, DOG) |
| Docs internas | `README.md`, `ABOUT.md`, `CLAUDE.md`, `docs/INDEX.md` |
