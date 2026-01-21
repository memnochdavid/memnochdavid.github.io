import {coloresItem} from "../assets/lib.js";

function Item( {text, urlImgFlag, color = "violet", bgColor = "transparent",principal = false} ){

    const variante = principal ? "primario" : "secundario";
    const estiloColor = coloresItem[color]?.[variante];

    return (
        <div className={estiloColor+"py-5 w-[100px] h-[130px] flex flex-col justify-center items-center gap-2"}>
            <h1>{text}</h1>
            <img className={`w-full bg-${bgColor}`} src={urlImgFlag} alt="banderita del país" />
        </div>
    );
}

export default Item;