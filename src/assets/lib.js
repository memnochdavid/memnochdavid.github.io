//colores
const familias = [
    "slate","gray","zinc","neutral","stone",
    "red","orange","amber","yellow","lime",
    "green","emerald","teal","cyan","sky",
    "blue","indigo","violet","purple","fuchsia","pink","rose"
];

//tonos
const TONO_PRIMARIO_BUTTON = 600;
const TONO_PRIMARIO_BUTTON_HOVER = 700;
const TONO_SECUNDARIO_BUTTON = 600;
const TONO_SECUNDARIO_BUTTON_HOVER = 200;
const TONO_PRIMARIO_TEXT = 700;
const TONO_SECUNDARIO_TEXT = 400;
const TONO_PRIMARIO_BORDER = 700;
const TONO_SECUNDARIO_BORDER = 400;


// Generador automático de strings completos para botones
export const coloresButton = familias.reduce((acc, color) => {
    acc[color] = {
        primario: `bg-${color}-${TONO_PRIMARIO_BUTTON} text-white hover:bg-${color}-${TONO_PRIMARIO_BUTTON_HOVER} 
        px-4 py-2 rounded-lg font-semibold transition-colors duration-200`,
        secundario: `text-${color}-${TONO_SECUNDARIO_BUTTON} hover:bg-${color}-${TONO_SECUNDARIO_BUTTON_HOVER} 
        px-4 py-2 rounded-lg font-semibold transition-colors duration-200`
    };
    return acc;
}, {});

// Generador automático de strings completos para texto
export const coloresText = familias.reduce((acc, color) => {
    acc[color] = {
        primario: `text-${color}-${TONO_PRIMARIO_TEXT}`,
        secundario: `text-${color}-${TONO_SECUNDARIO_TEXT}`
    };
    return acc;
}, {});

//bordes
export const coloresBorder = familias.reduce((acc, color) => {
    acc[color] = {
        primario: `border-${color}-${TONO_PRIMARIO_BORDER}`,
        secundario: `border-${color}-${TONO_SECUNDARIO_BORDER}`
    };
    return acc;
}, {});

/*
  SAFELIST FOR TAILWIND (Do not remove)
  Tailwind needs to see the full class names to generate the CSS.
  
  bg-slate-600 hover:bg-slate-700 text-slate-600 hover:bg-slate-200 text-slate-700 text-slate-400 border-slate-700 border-slate-400
  bg-gray-600 hover:bg-gray-700 text-gray-600 hover:bg-gray-200 text-gray-700 text-gray-400 border-gray-700 border-gray-400
  bg-zinc-600 hover:bg-zinc-700 text-zinc-600 hover:bg-zinc-200 text-zinc-700 text-zinc-400 border-zinc-700 border-zinc-400
  bg-neutral-600 hover:bg-neutral-700 text-neutral-600 hover:bg-neutral-200 text-neutral-700 text-neutral-400 border-neutral-700 border-neutral-400
  bg-stone-600 hover:bg-stone-700 text-stone-600 hover:bg-stone-200 text-stone-700 text-stone-400 border-stone-700 border-stone-400
  bg-red-600 hover:bg-red-700 text-red-600 hover:bg-red-200 text-red-700 text-red-400 border-red-700 border-red-400
  bg-orange-600 hover:bg-orange-700 text-orange-600 hover:bg-orange-200 text-orange-700 text-orange-400 border-orange-700 border-orange-400
  bg-amber-600 hover:bg-amber-700 text-amber-600 hover:bg-amber-200 text-amber-700 text-amber-400 border-amber-700 border-amber-400
  bg-yellow-600 hover:bg-yellow-700 text-yellow-600 hover:bg-yellow-200 text-yellow-700 text-yellow-400 border-yellow-700 border-yellow-400
  bg-lime-600 hover:bg-lime-700 text-lime-600 hover:bg-lime-200 text-lime-700 text-lime-400 border-lime-700 border-lime-400
  bg-green-600 hover:bg-green-700 text-green-600 hover:bg-green-200 text-green-700 text-green-400 border-green-700 border-green-400
  bg-emerald-600 hover:bg-emerald-700 text-emerald-600 hover:bg-emerald-200 text-emerald-700 text-emerald-400 border-emerald-700 border-emerald-400
  bg-teal-600 hover:bg-teal-700 text-teal-600 hover:bg-teal-200 text-teal-700 text-teal-400 border-teal-700 border-teal-400
  bg-cyan-600 hover:bg-cyan-700 text-cyan-600 hover:bg-cyan-200 text-cyan-700 text-cyan-400 border-cyan-700 border-cyan-400
  bg-sky-600 hover:bg-sky-700 text-sky-600 hover:bg-sky-200 text-sky-700 text-sky-400 border-sky-700 border-sky-400
  bg-blue-600 hover:bg-blue-700 text-blue-600 hover:bg-blue-200 text-blue-700 text-blue-400 border-blue-700 border-blue-400
  bg-indigo-600 hover:bg-indigo-700 text-indigo-600 hover:bg-indigo-200 text-indigo-700 text-indigo-400 border-indigo-700 border-indigo-400
  bg-violet-600 hover:bg-violet-700 text-violet-600 hover:bg-violet-200 text-violet-700 text-violet-400 border-violet-700 border-violet-400
  bg-purple-600 hover:bg-purple-700 text-purple-600 hover:bg-purple-200 text-purple-700 text-purple-400 border-purple-700 border-purple-400
  bg-fuchsia-600 hover:bg-fuchsia-700 text-fuchsia-600 hover:bg-fuchsia-200 text-fuchsia-700 text-fuchsia-400 border-fuchsia-700 border-fuchsia-400
  bg-pink-600 hover:bg-pink-700 text-pink-600 hover:bg-pink-200 text-pink-700 text-pink-400 border-pink-700 border-pink-400
  bg-rose-600 hover:bg-rose-700 text-rose-600 hover:bg-rose-200 text-rose-700 text-rose-400 border-rose-700 border-rose-400
*/