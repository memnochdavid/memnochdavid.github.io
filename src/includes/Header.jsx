import Boton from '../components/Button.jsx';

function Header() {
    const headerClassName = "flex justify-between items-center p-4 border-b border-gray-200 bg-white";


    return (
        <header className={headerClassName}>
            {/*logo */}
            <h1 className="text-xl font-bold text-gray-800">
                Mi Proyecto <span className="text-blue-600">React</span>
            </h1>

            {/* Lado derecho: Menú de navegación usando nuestros botones */}
            <nav className="flex gap-2">
                {/* 2. Reutilizamos el componente pasándole distintos "argumentos" */}
                <Boton texto="Inicio" url="/" />
                <Boton texto="Servicios" url="/servicios" />
                <Boton texto="Contacto" url="/contacto" />

                {/* Este último es especial, le pasamos la prop 'principal' */}
                <Boton texto="Login" url="/login" principal={true} />
            </nav>
        </header>
    );
}

export default Header;