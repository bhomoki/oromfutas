import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();

export const recfilesListLayoutSlice = createSlice({
    name: 'recfilesListLayoutSlice',
    initialState: { value: localStorage.getItem('listlayout') === 'table' ? 'table' : 'preview' },
    reducers: {
        setRecfilesListLayout: (state, action) => {
            state.value = action.payload;
            localStorage.setItem('listlayout', state.value);
        },
    },
});
export const { setRecfilesListLayout } = recfilesListLayoutSlice.actions;

export const store = configureStore({
    reducer: { recfilesListLayoutSlice: recfilesListLayoutSlice.reducer },
});
