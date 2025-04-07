import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchDinamicas = createAsyncThunk('dinamicas/fetchDinamicas', async () => {
    const res = await api.get('/dinamicas');
    return res.data;
});

const dinamicasSlice = createSlice({
    name: 'dinamicas',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDinamicas.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDinamicas.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchDinamicas.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default dinamicasSlice.reducer;
