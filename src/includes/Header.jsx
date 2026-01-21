import Boton from '../components/Button.jsx';
import { coloresText } from "../assets/lib.js";

function Header({ textLogo1, textLogo2, color1 = "white", color2 = "indigo" }) {
    return (
        <header
            className="flex justify-between items-center p-4 border-b border-slate-950 bg-sky-950 h-[8vh]
            fixed z-10 w-full shadow-[0_10px_10px_rgba(0,0,0,0.5)] select-none">
            {/* logo */}
            <a href="#/" className={`text-xl font-bold ${coloresText[color1]?.secundario || "text-white"}`}>
                {textLogo1}{" "}
                <span className={coloresText[color2]?.secundario}>
          {textLogo2}
        </span>
            </a>

            {/* botones */}
            <nav className="flex gap-2">
                <Boton texto="TFG - DAM" url="#/tfg" color="indigo" />
                <Boton texto="Download CV" url="resources/CV - David Duque Díaz.pdf" color="indigo" principal={true} download="CV - David Duque Díaz.pdf" />
            </nav>
        </header>
    );
}

export default Header;