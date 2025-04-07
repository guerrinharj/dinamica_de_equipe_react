import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NovaDinamica from './pages/NovaDinamica';
import AdicionarReview from './pages/AdicionarReview';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">🏠 Início</Link> |{" "}
                <Link to="/nova">➕ Nova Dinâmica</Link> |{" "}
                <Link to="/review">✍️ Adicionar Review</Link>
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nova" element={<NovaDinamica />} />
                <Route path="/review" element={<AdicionarReview />} />
                <Route path="/editar/:id" element={<NovaDinamica />} />
            </Routes>
        </Router>
    );
};

export default App;
