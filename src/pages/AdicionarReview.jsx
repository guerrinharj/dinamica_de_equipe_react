import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const AdicionarReview = () => {
    const [dinamicas, setDinamicas] = useState([]);
    const [dinamicaId, setDinamicaId] = useState('');
    const [comentario, setComentario] = useState('');
    const [nota, setNota] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/dinamicas').then(res => {
            setDinamicas(res.data);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!dinamicaId) return alert('Selecione uma dinâmica.');

        try {
            await api.post(`/dinamicas/${dinamicaId}/reviews`, {
                review: { comentario, nota: parseInt(nota) }
            });
            alert('Review adicionada!');
            navigate('/');
        } catch (err) {
            console.error(err);
            alert('Erro ao adicionar review.');
        }
    };

    return (
        <div>
            <h1>Adicionar Review</h1>
            <form onSubmit={handleSubmit}>
                <label>Dinâmica:</label><br />
                <select value={dinamicaId} onChange={(e) => setDinamicaId(e.target.value)} required>
                    <option value="">-- Selecione --</option>
                    {dinamicas.map((d) => (
                        <option key={d.id} value={d.id}>{d.nome}</option>
                    ))}
                </select><br />

                <label>Comentário:</label><br />
                <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} /><br />

                <label>Nota (1 a 5):</label><br />
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={nota}
                    onChange={(e) => setNota(e.target.value)}
                /><br /><br />

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default AdicionarReview;
