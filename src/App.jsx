import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NovaDinamica from './pages/NovaDinamica';
import AdicionarReview from './pages/AdicionarReview';
import api from './services/api'; // IMPORTANTE

const App = () => {
    const sortearDinamica = async () => {
        try {
            const res = await api.get('/dinamicas/aleatoria');
            const dinamica = res.data;
            alert(`🎲 Dinâmica sorteada:\n\n${dinamica.nome}\n\n${dinamica.descricao}`);
        } catch (err) {
            console.error(err);
            alert('Erro ao sortear dinâmica.');
        }
    };

    return (
        <Router>
            <nav>
                <Link to="/">🏠 Início</Link> |{" "}
                <Link to="/nova">➕ Nova Dinâmica</Link> |{" "}
                <Link to="/review">✍️ Adicionar Review</Link> |{" "}
                <button onClick={sortearDinamica} style={{ cursor: 'pointer' }}>
                    🎲 Sortear Dinâmica
                </button>
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nova" element={<NovaDinamica />} />
                <Route path="/editar/:id" element={<NovaDinamica />} />
                <Route path="/review" element={<AdicionarReview />} />
            </Routes>
        </Router>
    );
};

export default App;
