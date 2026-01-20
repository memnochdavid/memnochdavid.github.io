import {coloresBorder, coloresText} from "../assets/lib.js";


function Separator( {text = "", color = "red"} ){
    return (
        <div className = "w-full flex gap-2 align-bottom justify-center">
            <h2 className={`text-xl font-bold 
            ${coloresText[color]?.primario}`}>
                {text}
            </h2>
            <div className={`flex-1 border-b-2 ${coloresBorder[color]?.primario}`}>

            </div>
        </div>
    );
}
export default Separator;