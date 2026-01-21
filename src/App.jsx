import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tfg from './pages/Tfg';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tfg" element={<Tfg />} />
            </Routes>
        </HashRouter>
    );
}
