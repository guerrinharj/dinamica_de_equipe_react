import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import InputField from '../components/InputField';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import FormWrapper from '../components/FormWrapper';

const NovaDinamica = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [participantes, setParticipantes] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

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
        <FormWrapper title={id ? 'Editar Dinâmica' : 'Nova Dinâmica'}>
            <InputField
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <TextArea
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
            />
            <InputField
                label="Participantes (separados por vírgula)"
                value={participantes}
                onChange={(e) => setParticipantes(e.target.value)}
            />
            <Button type="submit" onClick={handleSubmit}>
                {id ? "Atualizar" : "Salvar"}
            </Button>
            <Button onClick={() => navigate('/')}>
                Cancelar
            </Button>
        </FormWrapper>
    );
};

export default NovaDinamica;
