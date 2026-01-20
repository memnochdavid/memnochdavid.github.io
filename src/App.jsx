import Header from './includes/Header';
import Profile from './includes/Profile.jsx';
import Footer from "./includes/Footer.jsx";

export default function App() {
    return (
        <div className="min-h-screen bg-sky-900">
            <Header textLogo1="Mi Web" textLogo2="Personal" color1= "white" color2="indigo" />

            <main className="p-8 min-h-[92vh] flex flex-col justify-start gap-5 items-center
            pt-[10vh]">
                <Profile avatarUrl={"../public/img/avatar.jpg"}/>

                <div className="text-center flex gap-2 justify-center items-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        David Duque Díaz
                    </h2>
                    <h3 className="text-xl font-bold text-gray-900">Full-Stack Developer</h3>
                </div>

                <p className="text-gray-600">
                    COSAS
                </p>
            </main>

            <Footer text1 = "LET'S BUILD" text2= "SOMETHING NEW" text3 = "© 2026 DAVID DUQUE DÍAZ -- PORTFOLIO" />
        </div>


    )
}
