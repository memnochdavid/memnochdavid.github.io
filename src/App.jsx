import Header from './includes/Header';
import Profile from './components/Profile.jsx';
import Footer from "./includes/Footer.jsx";
import Separator from "./components/Separator.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header textLogo1="Mi Web" textLogo2="Personal" color1= "white" color2="indigo" />

            <main className="py-8 min-h-[92vh] flex flex-col justify-start gap-8 items-center w-full">

                <section className="text-center flex gap-2 justify-between items-center bg-sky-700/50
                    w-full pt-25 pb-10 px-15 border-b border-slate-950 shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    <Profile avatarUrl={"../public/img/avatar.jpg"}/>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h2 className="text-3xl font-bold text-slate-950">
                            David Duque Díaz
                        </h2>
                        <h3 className="text-xl font-bold text-gray-900">Full-Stack Developer</h3>
                    </div>
                </section>

                <section className= "flex flex-col px-15 justify-start items-start gap-5
                    w-full">

                    <Separator text = "Education & Training" color = "indigo" />
                    <div className="flex flex-col items-start gap-3 px-10">
                        <p className="text-xl font-bold text-gray-900">Technician in Computer Systems Operation</p>
                        <p>Academia Universo</p>
                        <p>01/09/2008 - 15/07/2010</p>
                        <p>Baza, Spain</p>
                        <h4 className="text-large font-bold text-gray-900">Level in EQF 3</h4>
                    </div>
                    <div className="flex flex-col items-start gap-3 px-10">
                        <p className="text-xl font-bold text-gray-900">Technician in Networked Computer Systems Administration</p>
                        <p>IES Pedro Jiménez Montoya</p>
                        <p>01/09/2008 - 15/09/2010</p>
                        <p>Baza, Spain</p>
                        <h4 className="text-large font-bold text-gray-900">Level in EQF 5</h4>
                    </div>
                    <div className="flex flex-col items-start gap-3 px-10">
                        <p className="text-xl font-bold text-gray-900">Higher National Diploma, Cross-Platform Application Development</p>
                        <p>Escuela Arte Granada</p>
                        <p>01/09/2023 - 15/07/2025</p>
                        <p>Granada, Spain</p>
                        <h4 className="text-large font-bold text-gray-900">Level in EQF 5</h4>
                    </div>
                    <div className="flex flex-col items-start gap-3 px-10">
                        <p className="text-xl font-bold text-gray-900">Higher National Diploma, Web Application Development</p>
                        <p>Escuela Arte Granada</p>
                        <p>01/09/2025 - 15/07/2026</p>
                        <p>Granada, Spain</p>
                        <h4 className="text-large font-bold text-gray-900">Level in EQF 5</h4>
                    </div>

                </section>

                <section className= "flex flex-col px-15 justify-start items-start gap-5
                    w-full">
                    <Separator text = "Work experience" color = "indigo" />

                </section>

                <section className= "flex flex-col px-15 justify-start items-start gap-5
                    w-full">
                    <Separator text = "Language Skills" color = "indigo" />

                </section>

                <section className= "flex flex-col px-15 justify-start items-start gap-5
                    w-full">
                    <Separator text = "Skills" color = "indigo" />

                </section>


            </main>

            <Footer text1 = "LET'S BUILD" text2= "SOMETHING NEW" text3 = "© 2026 DAVID DUQUE DÍAZ -- PORTFOLIO" />
        </div>


    )
}
