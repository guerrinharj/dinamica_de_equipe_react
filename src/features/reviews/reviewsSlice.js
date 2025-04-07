// src/features/reviews/reviewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const createReview = createAsyncThunk(
    'reviews/createReview',
    async ({ dinamicaId, comentario, nota }) => {
        const res = await api.post(`/dinamicas/${dinamicaId}/reviews`, {
            review: { comentario, nota }
        });
        return res.data;
    }
);

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createReview.pending, state => {
                state.status = 'loading';
            })
            .addCase(createReview.fulfilled, state => {
                state.status = 'success';
            })
            .addCase(createReview.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            });
    }
});

export default reviewsSlice.reducer;
