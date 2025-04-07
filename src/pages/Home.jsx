import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchDinamicas } from '../features/dinamicas/dinamicasSlice';
import api from '../services/api';
import Button from '../components/Button';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { list, loading, error } = useSelector((state) => state.dinamicas);

    useEffect(() => {
        dispatch(fetchDinamicas());
    }, [dispatch]);

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir esta dinâmica?")) {
            try {
                await api.delete(`/dinamicas/${id}`);
                alert("Excluída com sucesso!");
                dispatch(fetchDinamicas());
            } catch (err) {
                console.error(err);
                alert("Erro ao excluir.");
            }
        }
    };

    return (
        <div>
            <h1>Dinâmicas</h1>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}
            <ul style={{ padding: 0 }}>
                {list.map((d) => (
                    <li key={d.id} style={{
                        background: "#fff",
                        marginBottom: "10px",
                        padding: "15px",
                        borderRadius: "8px",
                        boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
                        listStyle: "none"
                    }}>
                        <div style={{ marginBottom: "8px" }}>
                            <strong>{d.nome}</strong><br />
                            <span>{d.descricao}</span><br />
                            {d.avaliacao_media && (
                                <span><em>Avaliação média:</em> {d.avaliacao_media}</span>
                            )}
                        </div>
                        <div>
                            <Button onClick={() => navigate(`/editar/${d.id}`)}>✏️ Editar</Button>
                            <Button onClick={() => handleDelete(d.id)} color="#e53935">🗑️ Excluir</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
