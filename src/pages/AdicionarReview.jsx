import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import InputField from '../components/InputField';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import FormWrapper from '../components/FormWrapper';

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

        if (!dinamicaId || (!comentario && !nota)) {
            alert("Por favor, selecione uma dinâmica e preencha ao menos um campo.");
            return;
        }

        try {
            await api.post(`/dinamicas/${dinamicaId}/reviews`, {
                review: {
                    comentario: comentario.trim(),
                    nota: nota ? parseInt(nota) : null
                }
            });

            alert('Review enviada com sucesso!');
            navigate('/');
        } catch (err) {
            console.error(err);
            alert('Erro ao enviar review.');
        }
    };

    return (
        <FormWrapper title="Adicionar Review">
            <div style={{ marginBottom: '16px' }}>
                <label>Dinâmica:</label><br />
                <select
                    value={dinamicaId}
                    onChange={(e) => setDinamicaId(e.target.value)}
                    required
                    style={{ padding: "10px", width: "100%" }}
                >
                    <option value="">-- Selecione uma dinâmica --</option>
                    {dinamicas.map((d) => (
                        <option key={d.id} value={d.id}>{d.nome}</option>
                    ))}
                </select>
            </div>

            <TextArea
                label="Comentário"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Digite seu comentário..."
            />

            <InputField
                label="Nota (1 a 5)"
                type="number"
                value={nota}
                onChange={(e) => setNota(e.target.value)}
                min={1}
                max={5}
                placeholder="Deixe em branco se não quiser avaliar"
            />

            <Button type="submit" onClick={handleSubmit}>Salvar Review</Button>
            <Button onClick={() => navigate('/')}>Cancelar</Button>
        </FormWrapper>
    );
};

export default AdicionarReview;
