import { coloresText } from "../assets/lib.js";
import Powered from '../components/Powered.jsx';

function Footer({ text1, text2, text3, color1 = "white", color2 = "indigo", color3 = "gray" }) {
    return (
        <footer className="flex flex-col justify-between items-center p-4 border-t
        border-slate-950 bg-sky-950 min-h-[5vh] gap-5 shadow-[0_-5px_10px_rgba(0,0,0,0.5)]">


            <p className={coloresText[color1]?.primario+" font-extrabold text-2xl tracking-wide"}>{text1}</p>
            <p className={coloresText[color2]?.primario+" font-bold text-2xl tracking-wide"}>{text2}</p>
            <Powered />
            <p className={coloresText[color3]?.secundario+" font-bold text-sm mt-3"}>{text3}</p>
        </footer>
    );
}
export default Footer;