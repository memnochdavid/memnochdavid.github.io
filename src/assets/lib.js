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
const TONO_SECUNDARIO_BUTTON = 400;
const TONO_SECUNDARIO_BUTTON_HOVER = 200;

const TONO_PRIMARIO_TEXT = 700;
const TONO_SECUNDARIO_TEXT = 400;

const TONO_PRIMARIO_BORDER = 700;
const TONO_SECUNDARIO_BORDER = 400;

const TONO_PRIMARIO_ITEM = 600;
const TONO_SECUNDARIO_ITEM = 400;
const TONO_PRIMARIO_ITEM_HOVER = 400;
const TONO_SECUNDARIO_ITEM_HOVER = 300;

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

export const coloresItem = familias.reduce((acc, color) => {
    acc[color] = {
        primario: `bg-${color}-${TONO_PRIMARIO_ITEM} text-white hover:bg-${color}-${TONO_PRIMARIO_ITEM_HOVER} 
        px-4 py-2 rounded-lg font-semibold transition-colors duration-200`,
        secundario: `text-${color}-${TONO_SECUNDARIO_ITEM} hover:bg-${color}-${TONO_SECUNDARIO_ITEM_HOVER} 
        px-4 py-2 rounded-lg font-semibold transition-colors duration-200`
    };
    return acc;
}, {});

/*
  DEFINITIVE SAFELIST FOR TAILWIND (v4 JIT COMPILER)
  This block includes all color families with all shades (50-950) for bg, text, border, and their hover variants.
  This ensures that any dynamically generated class name in this project will be correctly processed by Tailwind.
  Do not remove.

  ${familias.map(color => `
  bg-${color}-50 text-${color}-50 border-${color}-50 hover:bg-${color}-50 hover:text-${color}-50 hover:border-${color}-50
  bg-${color}-100 text-${color}-100 border-${color}-100 hover:bg-${color}-100 hover:text-${color}-100 hover:border-${color}-100
  bg-${color}-200 text-${color}-200 border-${color}-200 hover:bg-${color}-200 hover:text-${color}-200 hover:border-${color}-200
  bg-${color}-300 text-${color}-300 border-${color}-300 hover:bg-${color}-300 hover:text-${color}-300 hover:border-${color}-300
  bg-${color}-400 text-${color}-400 border-${color}-400 hover:bg-${color}-400 hover:text-${color}-400 hover:border-${color}-400
  bg-${color}-500 text-${color}-500 border-${color}-500 hover:bg-${color}-500 hover:text-${color}-500 hover:border-${color}-500
  bg-${color}-600 text-${color}-600 border-${color}-600 hover:bg-${color}-600 hover:text-${color}-600 hover:border-${color}-600
  bg-${color}-700 text-${color}-700 border-${color}-700 hover:bg-${color}-700 hover:text-${color}-700 hover:border-${color}-700
  bg-${color}-800 text-${color}-800 border-${color}-800 hover:bg-${color}-800 hover:text-${color}-800 hover:border-${color}-800
  bg-${color}-900 text-${color}-900 border-${color}-900 hover:bg-${color}-900 hover:text-${color}-900 hover:border-${color}-900
  bg-${color}-950 text-${color}-950 border-${color}-950 hover:bg-${color}-950 hover:text-${color}-950 hover:border-${color}-950
  `).join('')}
*/