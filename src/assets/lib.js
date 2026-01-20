// Familias de colores de Tailwind
const familias = [
    "slate","gray","zinc","neutral","stone",
    "red","orange","amber","yellow","lime",
    "green","emerald","teal","cyan","sky",
    "blue","indigo","violet","purple","fuchsia","pink","rose"
];

// Tonos recomendados
const TONO_PRIMARIO_BUTTON = 600;
const TONO_PRIMARIO_BUTTON_HOVER = 700;
const TONO_SECUNDARIO_BUTTON = 600;
const TONO_SECUNDARIO_BUTTON_HOVER = 200;
const TONO_PRIMARIO_TEXT = 700;
const TONO_SECUNDARIO_TEXT = 400;

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
