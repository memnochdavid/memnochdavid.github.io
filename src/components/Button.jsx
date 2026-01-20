function Boton({ texto, url, principal = false }) {
    // Truco extra: añadí una prop "principal" para cambiar el color si queremos resaltar uno

    const estiloBase = "px-4 py-2 rounded-lg font-semibold transition-colors duration-200";
    const estiloAzul = "bg-blue-600 text-white hover:bg-blue-700";
    const estiloGris = "text-gray-600 hover:bg-gray-100";

    return (
        <a
            href={url}
            className={`${estiloBase} ${principal ? estiloAzul : estiloGris}`}
        >
            {texto}
        </a>
    );
}

export default Boton;