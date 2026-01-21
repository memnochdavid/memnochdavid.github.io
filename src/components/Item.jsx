import {coloresItem} from "../assets/lib.js";

function Item( {text, urlImgFlag, color = "violet", bgColor = "transparent",principal = false} ){

    const variante = principal ? "primario" : "secundario";
    const estiloColor = coloresItem[color]?.[variante];

    return (
        <div className={estiloColor+" pb-5 pt-2 px-2 w-[100px] h-[130px] flex flex-col justify-between items-center gap-1"}>
            <h1 className="text-center text-sm leading-tight w-full break-words flex-grow flex items-center justify-center">{text}</h1>
            <div className="w-full h-[60px] flex items-center justify-center">
                <img className={`max-w-full max-h-full object-contain bg-${bgColor}`} src={urlImgFlag} alt={text} />
            </div>
        </div>
    );
}

export default Item;