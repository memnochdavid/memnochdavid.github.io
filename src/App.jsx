import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tfg from './pages/Tfg';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/actividades" element={<Tfg />} />
            </Routes>
        </BrowserRouter>
    );
}
