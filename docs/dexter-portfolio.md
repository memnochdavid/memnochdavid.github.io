# Dexter — Contenido para el portfolio

> Referencia para saber qué exponer en la vista dedicada de Dexter en `/#/projects`.
> Fuente explorada: `/home/david/Escritorio/WORKSPACE/Pokedex_API/`

---

## Estado de la tarea

- [x] Aplicar correcciones al stack en `src/data/projects.json` (Firebase eliminado, Material UI → Material 3)
- [x] Añadir stack chips: Room (`icon-room-db.svg`), Retrofit (`icon-retrofit.png`), Gemini AI (`icon-gemini.svg`)
- [ ] Aplicar cambios a `src/i18n/es.json`, `en.json`, `ca.json` (descripción, highlights)
- [ ] Añadir capturas reales (ver lista al final)
- [ ] Añadir `repoUrl` cuando el repo sea público

---

## Qué es Dexter (resumen para contexto)

App Android nativa para entusiastas Pokémon. Pokédex completa con datos de PokéAPI v2 (30+ endpoints) enriquecidos con scraping de WikiDex para descripciones en español. Característica diferenciadora: identificación de Pokémon por cámara usando Google Gemini Flash Vision (AI). ~17.100 líneas de Kotlin, sin backend propio.

---

## Errores en el portfolio actual que hay que corregir

### Stack chips — errores

| Item actual | Estado | Reemplazar por |
|---|---|---|
| `Firebase` | **No está en el proyecto** | `Room` (base de datos local) |
| `Material UI` | **Es la librería web, no Android** | `Material 3` |
| `Jetpack Compose` | Correcto | mantener |
| `Kotlin` | Correcto | mantener |
| `Android` | Correcto | mantener |

### Highlights — datos inventados que hay que eliminar

Los siguientes highlights del portfolio **no existen** en la app actual (probablemente eran features planificadas):
- ~~"Planificador de equipos"~~
- ~~"Mensajería y foros"~~
- ~~"Agregador de noticias Pokémon"~~
- ~~"Roles y permisos"~~
- ~~"Firebase"~~

---

## Cambios propuestos

### `projects.json` — stack chips

**Propuesto:**
```json
{ "name": "Kotlin",          "icon": "img/icon-kotlin.svg" },
{ "name": "Jetpack Compose", "icon": "img/icon-jpcompose.svg" },
{ "name": "Material 3",      "icon": "img/icon-material3.svg" },
{ "name": "Room",            "icon": "img/icon-room.svg" },
{ "name": "Retrofit",        "icon": "img/icon-retrofit.svg" },
{ "name": "Gemini AI",       "icon": "img/icon-gemini.svg" },
{ "name": "Android",         "icon": "img/icon-android.svg" }
```

Iconos a añadir a `public/img/`: `icon-material3.svg`, `icon-room.svg`, `icon-retrofit.svg`, `icon-gemini.svg`

Nota: Room, Retrofit y Gemini AI son Jetpack/Google — sus iconos suelen ser el logo de Android o Google. Valorar si usar el logo de Google para Gemini y el de Android/Jetpack para Room y Retrofit.

---

### i18n — descripción, highlights

#### Descripción

**ES:**
> Pokédex Android nativa con datos de PokéAPI v2 y descripciones en español vía scraping de WikiDex. Permite explorar los ~1.000 Pokémon por generación (I-IX) con filtrado por tipo, forma y rareza, consultar fichas completas con estadísticas, movimientos, evoluciones, localizaciones y efectividad de tipos, y navegar un catálogo de ~900 movimientos y ~1.000 objetos. Incluye identificación de Pokémon por cámara mediante Google Gemini Vision.

**EN:**
> Native Android Pokédex powered by PokéAPI v2 with Spanish descriptions via WikiDex scraping. Browse ~1,000 Pokémon by generation (I-IX) with type, form and rarity filters; view full detail sheets covering stats, moves, evolutions, encounters and type effectiveness; explore ~900 moves and ~1,000 items. Features Pokémon identification via device camera using Google Gemini Vision AI.

**CA:**
> Pokédex Android nativa amb dades de PokéAPI v2 i descripcions en català/espanyol via scraping de WikiDex. Permet explorar els ~1.000 Pokémon per generació (I-IX) amb filtrat per tipus, forma i raresa, consultar fitxes completes amb estadístiques, moviments, evolucions, localitzacions i efectivitat de tipus, i navegar un catàleg de ~900 moviments i ~1.000 objectes. Inclou identificació de Pokémon per càmera mitjançant Google Gemini Vision.

---

#### Highlights

```
Pokédex 9 generaciones (I-IX) · Identificación por cámara (Gemini AI) ·
Ficha de 9 pestañas por Pokémon · Filtrado por tipo, forma y rareza ·
~900 movimientos · ~1.000+ objetos y bayas · 10 regiones ·
WikiDex scraping (descripciones ES) · Fondos animados por tipo ·
Caché 3 niveles (OkHttp + memoria + Room) · Transiciones compartidas
```

*(Adaptar a EN y CA en los respectivos i18n)*

---

## Capturas necesarias

La app es mobile-first (Android nativa), todas las capturas en portrait. El componente `StackedScreenshots` usará `paddingTop` ajustado para portrait — pendiente añadir `screenshotRatio` a `projects.json`.

### Captura 1 — Lista Pokédex con filtros activos
**Por qué:** Primera impresión del producto. Muestra la densidad de información, los colores por tipo, los sprites animados y los chips de filtro activos.
**Qué capturar:** Pantalla de lista con una generación cargada, al menos un filtro activo (p.ej. tipo Fuego o solo Legendarios), varios Pokémon visibles con sus colores dominantes.

### Captura 2 — Ficha de detalle (pestaña de estadísticas o tipos)
**Por qué:** Demuestra la profundidad del producto. La pestaña de stats con las barras de progreso o la matriz de efectividad de tipos son visualmente densas y llamativas.
**Qué capturar:** Ficha de un Pokémon icónico (Charizard, Mewtwo, Eevee…) mostrando la pestaña de Stats con barras de colores, o la pestaña de Tipos con la tabla de resistencias/debilidades. Fondo animado del tipo visible.

### Captura 3 — Cámara / Gemini AI
**Por qué:** Es el diferenciador técnico más llamativo y el menos esperado en una Pokédex. Una sola pantalla comunica "esto va más allá de un CRUD".
**Qué capturar:** La pantalla de identificación con la cámara activa apuntando a un Pokémon (carta, figura, pantalla con arte oficial) y el resultado de Gemini visible (nombre + nivel de confianza).

---

### Notas técnicas para las capturas
- Dispositivo: cualquier Android con minSdk 28+ (Android 9+)
- Resolución recomendada: screenshot nativo del dispositivo (portrait, ~1080×2340 o similar)
- Formato: **WebP** (guardar en `public/img/projects/dexter-1.webp`, `dexter-2.webp`, `dexter-3.webp`)
- Datos: usar Pokémon con sprites cargados y datos completos (evitar "Loading…")
- El componente necesitará `screenshotRatio: "portrait"` en `projects.json` para ajustar el aspect ratio del stack

---

## Referencia técnica del proyecto Dexter

| Aspecto | Detalle |
|---|---|
| Directorio fuente | `/home/david/Escritorio/WORKSPACE/Pokedex_API/` |
| Lenguaje | Kotlin (JVM 11) |
| UI | Jetpack Compose + Material 3 |
| Android SDK | compileSdk 35, minSdk 28, targetSdk 35 |
| Datos externos | PokéAPI v2 (30+ endpoints via Retrofit 2) + WikiDex (scraping con jsoup) |
| Base de datos | Room 2.6.1 (5 tablas: Pokemon, Move, Item, Berry, WikiDexCache) |
| Caché | OkHttp disco (50MB) + StateFlow/ConcurrentHashMap + Room |
| AI | Google Generative AI SDK 0.9.0 (Gemini Flash Vision) |
| Cámara | CameraX 1.4.1 |
| Imágenes | Coil 2.7.0 (GIF + video) |
| Video/sprites | Media3 ExoPlayer 1.7.1 (HLS/RTSP) |
| Animaciones | Lottie 6.4.0 + Compose Animation + Shared Element Transitions |
| Arquitectura | MVVM + Repository Pattern (DI manual) |
| Tamaño | ~17.100 líneas de Kotlin, 0 tests automatizados |
| Pokémon cubiertos | ~1.000 (generaciones I-IX) |
| Movimientos | ~900 |
| Objetos | ~1.000+ (+ 64 bayas) |
| Regiones | 10 |
| Docs internas | `mejoras-pendientes.md`, `fases-pokeapi-v2.md`, `INFORME_RENDIMIENTO.md`, `evaluacion-ux-ui.md` |
