
import { configureStore } from '@reduxjs/toolkit';
import login from './Login';
import movies from './MoviesList';
import tickets from './ticketslice';
export const store = configureStore({
    reducer: {login,movies,tickets},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;