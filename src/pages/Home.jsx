import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDinamicas } from '../features/dinamicas/dinamicasSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.dinamicas);

    useEffect(() => {
        dispatch(fetchDinamicas());
    }, [dispatch]);

    return (
        <div>
            <h1>Dinâmicas</h1>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}
            <ul>
                {list.map((d) => (
                    <li key={d.id}>
                        <strong>{d.nome}</strong> - {d.descricao}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
