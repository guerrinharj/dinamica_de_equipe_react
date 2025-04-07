import { configureStore } from '@reduxjs/toolkit';
import dinamicasReducer from '../features/dinamicas/dinamicasSlice';

export const store = configureStore({
    reducer: {
        dinamicas: dinamicasReducer,
    },
});
