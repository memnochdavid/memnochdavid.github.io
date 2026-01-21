import Header from '../includes/Header';
import Footer from "../includes/Footer.jsx";

export default function Tfg() {
    return (
        <div className="min-h-screen bg-stone-100">
            <Header textLogo1="My" textLogo2="Portfolio" color1= "white" color2="indigo" />

            <main className="flex flex-col md:flex-row justify-between items-center w-full pt-[8vh]">

                <div className="bg-gray-900 w-full md:w-[70vw] h-[80vh]
                scroll-smooth overflow-auto
                [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-red-400

                [&::-webkit-scrollbar-thumb]:rounded-full">
                    <div className="max-w-4xl mx-auto bg-gray-800 text-white rounded-xl shadow-2xl overflow-hidden">

                        <header className="p-6 bg-red-600">
                            <h1 className="text-3xl font-extrabold text-center">Project Dexter: Visión General</h1>
                            <p className="text-center text-red-100 mt-1">Plataforma integral para entrenadores Pokémon</p>
                        </header>

                        <main className="p-8 space-y-10">

                            <section className="bg-gray-700 p-6 rounded-lg shadow-inner">
                                <h2 className="text-2xl font-bold border-b border-red-500 pb-2 mb-4 text-red-400">Funcionalidades Principales</h2>
                                <div className="space-y-4">

                                    <div className="bg-gray-600 p-4 rounded-md">
                                        <h3 className="text-xl font-semibold mb-2 text-white">Pokédex Integral y Búsqueda</h3>
                                        <ul className="list-disc ml-6 text-gray-200">
                                            <li><strong className="text-red-300">Exploración Exhaustiva:</strong> Navegación por generaciones y fichas técnicas detalladas (morfologías, evoluciones especiales, sinergias de tipos).</li>
                                            <li><strong className="text-red-300">Filtrado Avanzado:</strong> Motor de búsqueda multicriterio por nombre, generación y tipología dual.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-600 p-4 rounded-md">
                                        <h3 className="text-xl font-semibold mb-2 text-white">Ecosistema Social y Actualidad</h3>
                                        <ul className="list-disc ml-6 text-gray-200">
                                            <li><strong className="text-red-300">Planificador de Equipos:</strong> Gestión estratégica de alineaciones (hasta 6 integrantes) con análisis de cobertura de tipos.</li>
                                            <li><strong className="text-red-300">Comunidad:</strong> Sistema de mensajería privada en tiempo real y foros de discusión pública.</li>
                                            <li><strong className="text-red-300">Agregador de Noticias:</strong> Feed actualizado en tiempo real integrando fuentes externas especializadas.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-600 p-4 rounded-md">
                                        <h3 className="text-xl font-semibold mb-2 text-white">Gestión y Configuración</h3>
                                        <ul className="list-disc ml-6 text-gray-200">
                                            <li><strong className="text-red-300">Roles y Permisos:</strong> Arquitectura de usuarios diferenciada entre Entrenadores y Maestros Pokémon (Administradores).</li>
                                            <li><strong className="text-red-300">Moderación:</strong> Sistema de reportes y gestión administrativa de sanciones y control de acceso.</li>
                                            <li><strong className="text-red-300">Personalización:</strong> Ajustes de interfaz (Tema Oscuro), notificaciones, efectos audiovisuales y gestión de recursos.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-gray-700 p-6 rounded-lg shadow-inner">
                                <h2 className="text-2xl font-bold border-b border-red-500 pb-2 mb-4 text-red-400">Stack Tecnológico</h2>
                                <div className="space-y-4">

                                    <div className="bg-gray-600 p-4 rounded-md">
                                        <h3 className="text-xl font-semibold mb-2 text-white">Infraestructura y Backend</h3>
                                        <ul className="list-disc ml-6 text-gray-200">
                                            <li><strong className="text-red-300">Persistencia:</strong> Implementación sobre <span className="font-mono bg-red-800 px-1 rounded">Firebase</span> para la gestión integral de datos.</li>
                                            <li><strong className="text-red-300">Integración de Servicios:</strong> Consumo de APIs REST para la sincronización de datos y noticias.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-600 p-4 rounded-md">
                                        <h3 className="text-xl font-semibold mb-2 text-white">Arquitectura Móvil</h3>
                                        <ul className="list-disc ml-6 text-gray-200">
                                            <li><strong className="text-red-300">Desarrollo Nativo Moderno:</strong> Implementación en <span className="font-mono bg-red-800 px-1 rounded">Kotlin</span> y <span className="font-mono bg-red-800 px-1 rounded">Jetpack Compose</span>, garantizando una interfaz de usuario declarativa, reactiva y optimizada.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                        </main>

                        <footer className="p-4 text-center text-sm text-gray-400 bg-gray-900 border-t border-gray-700">
                            Fuente: Documentación Técnica del Proyecto
                        </footer>
                    </div>
                </div>

                <div className="w-full md:w-[30vw] h-[80vh]">
                    <iframe
                        src="https://www.youtube.com/embed/M_38TnAimME"
                        className="w-full h-full rounded-lg border-2 border-slate-300"
                        title="Video Demo TFG - Dexter"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>

                {/*<div className="w-full md:w-[50vw] h-[80vh]">*/}
                {/*    <iframe*/}
                {/*        src="resources/Docu Dexter.pdf#view=FitH&navpanes=0&scrollbar=0&toolbar=0"*/}

                {/*        className="w-full h-full rounded-lg border-2 border-slate-300"*/}
                {/*        title="Documentación TFG - Dexter"*/}
                {/*        frameBorder="0"*/}
                {/*        allowFullScreen*/}
                {/*        allow="fullscreen"*/}
                {/*    />*/}
                {/*</div>*/}
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
