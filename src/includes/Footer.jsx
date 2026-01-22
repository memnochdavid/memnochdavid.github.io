import { coloresText } from "../assets/lib.js";
import Powered from '../components/Powered.jsx';

function Footer({ text1, text2, text3, color1 = "white", color2 = "indigo", color3 = "gray" }) {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-2 items-center p-4 border-t
        border-slate-950 bg-sky-950 min-h-[5vh] gap-4 shadow-[0_-5px_10px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col items-center md:items-start">
                <p className={coloresText[color1]?.secundario+" font-extrabold text-2xl tracking-wide"}>{text1}</p>
                <p className={coloresText[color2]?.secundario+" font-bold text-2xl tracking-wide"}>{text2}</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
                <Powered />
                <p className={coloresText[color3]?.secundario+" font-bold text-sm mt-3"}>{text3}</p>
            </div>
        </footer>
    );
}
export default Footer;