import Header from '../includes/Header';
import Profile from '../components/Profile.jsx';
import Footer from "../includes/Footer.jsx";
import Separator from "../components/Separator.jsx";
import Item from "../components/Item.jsx";

export default function Home() {
    return (
        <div className="min-h-screen bg-stone-100">
            <Header textLogo1="My" textLogo2="Portfolio" color1= "white" color2="indigo" />

            <main className="py-8 min-h-[92vh] flex flex-col justify-start gap-8 items-center w-full">

                <section className="text-center flex flex-col md:flex-row gap-6 md:gap-2 justify-between items-center bg-sky-700/50
                    w-full pt-25 pb-10 px-6 md:px-15 md:justify-start border-b border-slate-950 shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                    <Profile avatarUrl={"img/avatar.jpg"}/>
                    <div className= "flex flex-col justify-center items-center gap-5">

                        <a className="text-xl underline font-bold text-gray-900" href="mailto:davduquediaz@gmail.com">davduquediaz@gmail.com</a>
                        <a className="text-xl underline font-bold text-gray-900" href="tel:+34622715886">(+34) 622 71 58 86</a>

                    </div>

                    <div className="flex flex-col justify-center items-center gap-5">
                        <h2 className="text-3xl font-bold text-slate-950">
                            David Duque Díaz
                        </h2>
                        <h3 className="text-xl font-bold text-gray-900">Full-Stack Developer</h3>
                    </div>



                </section>

                <section className= "flex flex-col px-6 md:px-15 justify-start items-start gap-5
                    w-full">

                    <Separator text = "Education & Training" color = "indigo" />
                    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
                        <p className="text-xl font-bold text-gray-900">Technician in Computer Systems Operation</p>
                        <p>Academia Universo</p>
                        <p>01/09/2008 - 15/07/2010</p>
                        <p>Baza, Spain</p>
                        <h4 className="text-large font-bold text-gray-900">Level in EQF 3</h4>
                    </div>
                    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
                        <p className="text-xl font-bold text-gray-900">Technician in Networked Computer Systems Administration</p>
                        <p>IES Pedro Jiménez Montoya</p>
                        <p>01/09/2008 - 15/09/2010</p>
                        <p>Baza, Spain</p>
                        <h4 className="text-large font-bold text-gray-900">Level in EQF 5</h4>
                    </div>
                    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
                        <p className="text-xl font-bold text-gray-900">Higher National Diploma, Cross-Platform Application Development</p>
                        <p>Escuela Arte Granada</p>
                        <p>01/09/2023 - 15/07/2025</p>
                        <p>Granada, Spain</p>
                        <h4 className="text-large font-bold text-gray-900">Level in EQF 5</h4>
                    </div>
                    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
                        <p className="text-xl font-bold text-gray-900">Higher National Diploma, Web Application Development</p>
                        <p>Escuela Arte Granada</p>
                        <p>01/09/2025 - 15/07/2026</p>
                        <p>Granada, Spain</p>
                        <h4 className="text-large font-bold text-gray-900">Level in EQF 5</h4>
                    </div>

                </section>

                <section className= "flex flex-col px-6 md:px-15 justify-start items-start gap-5
                    w-full">
                    <Separator text = "Work experience" color = "indigo" />
                    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
                        <p className="text-xl font-bold text-gray-900">Tutor</p>
                        <p>Colegio Jabalcón</p>
                        <p>IT Instructor ("Introduction to Computing")</p>
                        <p>01/09/2009 - 05/06/2010</p>
                        <p>Baza, Spain</p>
                    </div>

                    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
                        <p className="text-xl font-bold text-gray-900">Private tutor</p>
                        <p>01/09/2013 - 31/12/2016</p>
                        <p>Provided private English lessons for three years.</p>
                        <p>Baza, Spain</p>
                    </div>

                    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
                        <p className="text-xl font-bold text-gray-900">Taxi driver</p>
                        <p>01/10/2017 - 25/12/2019</p>
                        <p>Owner of my own taxi business.</p>
                        <p>Baza, Spain</p>
                    </div>

                    <div className="flex flex-col items-start gap-3 px-4 md:px-10">
                        <p className="text-xl font-bold text-gray-900">Operator - COSENTINO</p>
                        <p>16/07/2021 - 16/07/2023</p>
                        <p>Responsible for a production line</p>
                        <p>SAP use</p>
                        <p>Almería, Spain</p>
                    </div>
                </section>

                <section className= "flex flex-col px-6 md:px-15 justify-start items-start gap-5
                    w-full">
                    <Separator text = "Language Skills" color = "indigo" />
                    <div className="flex flex-col md:flex-row w-full md:columns-2 align-start md:items-start gap-8 md:gap-15 justify-start px-4 md:px-10">
                        <div>
                            <p className="text-xl font-bold text-gray-900">Mother Languages</p>
                            <div className="flex pt-3 gap-3">
                                <Item
                                    text= "Spanish"
                                    urlImgFlag= "img/flag-spain.svg"
                                    color= "indigo"
                                    principal= "false"
                                />
                                <Item
                                    text= "Catalan"
                                    urlImgFlag= "img/flag-catalonia.svg"
                                    color= "indigo"
                                    principal= "false"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-900">Proficient</p>
                            <div className="flex gap-3 pt-3">
                                <Item
                                    text= "English"
                                    urlImgFlag= "img/flag-uk.png"
                                    color= "indigo"
                                    bgColor ="white"
                                    principal= "true"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className= "flex flex-col px-6 md:px-15 justify-start items-start gap-5
                    w-full">
                    <Separator text = "Skills" color = "indigo" />
                    <div className="flex flex-wrap w-full gap-4 md:gap-5 md:columns-3 items-center justify-start px-4 md:px-10">
                        <Item
                            text= "Android"
                            urlImgFlag= "img/icon-android.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Kotlin"
                            urlImgFlag= "img/icon-kotlin.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Firebase"
                            urlImgFlag= "img/icon-firebase.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Jetpack Compose"
                            urlImgFlag= "img/icon-jpcompose.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Material UI"
                            urlImgFlag= "img/icon-materialui.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "HTML5"
                            urlImgFlag= "img/icon-html.png"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "CSS3"
                            urlImgFlag= "img/icon-css.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "JavaScript"
                            urlImgFlag= "img/icon-js.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "React"
                            urlImgFlag= "img/icon-react.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Tailwind"
                            urlImgFlag= "img/icon-tailwind.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Bootstrap"
                            urlImgFlag= "img/icon-bootstrap.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Node.js"
                            urlImgFlag= "img/icon-nodejs.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "PHP"
                            urlImgFlag= "img/icon-php.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "MariaDB"
                            urlImgFlag= "img/icon-mariadb.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "PostgreSQL"
                            urlImgFlag= "img/icon-postgre.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Symfony"
                            urlImgFlag= "img/icon-symfony.png"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Java & Java8"
                            urlImgFlag= "img/icon-java.svg"
                            color= "indigo"
                            principal= "false"
                        />
                        <Item
                            text= "Jakarta"
                            urlImgFlag= "img/icon-jakarta.svg"
                            color= "indigo"
                            principal= "false"
                        />



                    </div>
                </section>


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
