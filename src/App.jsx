import Header from './includes/Header';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Aquí colocamos el Header, que ya trae los botones dentro */}
            <Header />

            <main className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Contenido Principal
                </h2>
                <p className="text-gray-600">
                    Aquí iría el resto de tu página. Fíjate cómo el Header de arriba
                    está separado y limpio.
                </p>
            </main>
        </div>
    )
}