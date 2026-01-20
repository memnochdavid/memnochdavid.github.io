import { coloresButton } from "../assets/lib.js";

function Boton({ texto, url, color = "violet", principal = false }) {
    const variante = principal ? "primario" : "secundario";

    const estiloColor = coloresButton[color]?.[variante] || coloresButton.violet[variante];

    return <a href={url} className={estiloColor}>{texto}</a>;
}

export default Boton;
