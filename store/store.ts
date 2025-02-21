
import { configureStore } from '@reduxjs/toolkit';
import login from './Login';
import movies from './MoviesList';
export const store = configureStore({
    reducer: {login,movies},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;