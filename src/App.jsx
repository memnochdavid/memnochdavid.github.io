import Header from './includes/Header';
import Profile from './includes/Profile.jsx';
import Footer from "./includes/Footer.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header textLogo1="Mi Web" textLogo2="Personal" color1= "white" color2="indigo" />

            <main className="py-8 min-h-[92vh] flex flex-col justify-start gap-5 items-center w-full">

                <div className="text-center flex gap-2 justify-between items-center bg-sky-700/50
                    w-full pt-25 pb-10 px-15 border-b border-slate-950 shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    <Profile avatarUrl={"../public/img/avatar.jpg"}/>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h2 className="text-3xl font-bold text-slate-950">
                            David Duque Díaz
                        </h2>
                        <h3 className="text-xl font-bold text-gray-900">Full-Stack Developer</h3>
                    </div>
                </div>

                <p className="text-gray-600">
                    COSAS
                </p>
            </main>

            <Footer text1 = "LET'S BUILD" text2= "SOMETHING NEW" text3 = "© 2026 DAVID DUQUE DÍAZ -- PORTFOLIO" />
        </div>


    )
}
