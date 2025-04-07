import { configureStore } from '@reduxjs/toolkit';
import dinamicasReducer from '../features/dinamicas/dinamicasSlice';
import reviewsReducer from '../features/reviews/reviewsSlice';

export const store = configureStore({
    reducer: {
        dinamicas: dinamicasReducer,
        reviews: reviewsReducer,
    },
});
