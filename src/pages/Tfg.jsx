import Header from '../includes/Header';
import Footer from "../includes/Footer.jsx";

export default function Tfg() {
    return (
        <div className="min-h-screen bg-stone-100">
            <Header textLogo1="Mi Web" textLogo2="Personal" color1= "white" color2="indigo" />

            <main className="py-8 min-h-[92vh] flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl font-bold text-slate-950 mt-20">
                    Trabajo de Fin de Grado (TFG)
                </h1>
                <p className="text-xl text-gray-700 mt-4">
                    Aquí irá el mockup de tu proyecto.
                </p>
            </main>

            <Footer
                text1 = "LET'S BUILD"
                text2= "SOMETHING NEW"
                text3 = "© 2026 DAVID DUQUE DÍAZ -- PORTFOLIO"
                color1 = "gray"
                color2 = "indigo"
                color3 = "gray"
            />
        </div>
    )
}
