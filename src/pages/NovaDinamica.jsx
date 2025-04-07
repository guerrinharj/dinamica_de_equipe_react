import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const NovaDinamica = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [participantes, setParticipantes] = useState('');
    const navigate = useNavigate();
    const { id } = useParams(); // null para criar, ou id para editar

    useEffect(() => {
        if (id) {
            api.get(`/dinamicas/${id}`).then(res => {
                setNome(res.data.nome);
                setDescricao(res.data.descricao);
                setParticipantes(res.data.participantes.join(', '));
            });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            dinamica: {
                nome,
                descricao,
                participantes: participantes.split(',').map(p => p.trim())
            }
        };

        try {
            if (id) {
                await api.patch(`/dinamicas/${id}`, payload);
                alert('Dinâmica atualizada!');
            } else {
                await api.post('/dinamicas', payload);
                alert('Dinâmica criada!');
            }

            navigate('/');
        } catch (err) {
            console.error(err);
            alert('Erro ao salvar dinâmica.');
        }
    };

    return (
        <div>
            <h1>{id ? 'Editar Dinâmica' : 'Nova Dinâmica'}</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label><br />
                <input value={nome} onChange={(e) => setNome(e.target.value)} required /><br />

                <label>Descrição:</label><br />
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required /><br />

                <label>Participantes (separados por vírgula):</label><br />
                <input value={participantes} onChange={(e) => setParticipantes(e.target.value)} /><br /><br />

                <button type="submit">{id ? 'Atualizar' : 'Salvar'}</button>
            </form>
        </div>
    );
};

export default NovaDinamica;
