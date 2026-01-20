import Boton from '../components/Button.jsx';
import { coloresText } from "../assets/lib.js";

function Header({ textLogo1, textLogo2, color1 = "white", color2 = "indigo" }) {
    return (
        <header
            className="
        flex justify-between items-center p-4 border-b border-slate-950 bg-sky-950 h-[8vh] fixed z-10 w-full
        shadow-[0_10px_10px_rgba(0,0,0,0.5)] select-none
      "
        >
            {/* logo */}
            <a href="/" className={`text-xl font-bold ${coloresText[color1]?.primario || "text-white"}`}>
                {textLogo1}{" "}
                <span className={coloresText[color2]?.primario || "text-indigo-600"}>
          {textLogo2}
        </span>
            </a>

            {/* botones */}
            <nav className="flex gap-2">
                <Boton texto="Actividades" url="/actividades" color="indigo" />
                <Boton texto="Contacto" url="/contacto" color="indigo" />
                <Boton texto="Descarga CV" url="/cv" color="indigo" principal={true} />
            </nav>
        </header>
    );
}

export default Header;